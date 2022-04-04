const FtpDeploy = require("ftp-deploy")
const ftp = require("basic-ftp")
const basicFtpClient = new ftp.Client()
const https = require('https');

const LOCAL_BUILD_DIRECTORY = "test_deploy"
const DEPLOY_DIRECTORY_NAME = "/"
const PRODUCTION_DIRECTORY_NAME = "master"
const BROKEN_BUILD = "broken"
const PRODUCTION_URL = "https://name-validation.com/"

// LOCAL_BUILD_DIRECTORY - directory that is sent to the server.
// DEPLOY_DIRECTORY_NAME - name of the uploaded directory on the server.
// PRODUCTION_DIRECTORY_NAME - directory for the live site.
// BROKEN_BUILD - directory name for a build which doesn’t work.
// PRODUCTION_URL - the url for my site.


const [ host, user, password ] = process.argv.slice(2)

function main() {

  return uploadBuildDirectory()
    .catch(error => onError("Upload", error))
    .then(() => renameFtpDirectories())
    .catch(error => onError("Rename", error))
    .then(async backupDirectoryName => {
      const isLive = await isProductionLive()
      if(!isLive) return rollBackProduction(backupDirectoryName)
    })
    .catch(error => onError("Rollback", error))
    .then(() => {
      console.log("Deploy FINISHED")
      basicFtpClient.close()
      process.exit(0)
    })
}

function uploadBuildDirectory(){
  const config = {
    host,
    user,
    password,
    localRoot: `./${LOCAL_BUILD_DIRECTORY}`,
    remoteRoot: `./${DEPLOY_DIRECTORY_NAME}`,
    include: ["*", "**/*"]
  }

  const ftpDeploy = new FtpDeploy()

  ftpDeploy.on("uploading", data => {
    const { totalFilesCount, transferredFileCount, filename } = data
    console.log(`${transferredFileCount} out of ${totalFilesCount} ${filename}`)
  })

  ftpDeploy.on("upload-error", data => {
    console.log(data.err)
    throw new Error("Upload FAILED")
  })

  return ftpDeploy
    .deploy(config)
    .then(() => console.log(`Upload COMPLETED`))
}

async function renameFtpDirectories(){
  await basicFtpClient.access({ host, user, password })

  const directories = await basicFtpClient.list(".")
  const backupDirectoryName = createBackupDirectoryName(directories)
  console.log(`Backup folder name: ${backupDirectoryName}`)

  await basicFtpClient.rename(PRODUCTION_DIRECTORY_NAME, backupDirectoryName)
  await basicFtpClient.rename(DEPLOY_DIRECTORY_NAME, PRODUCTION_DIRECTORY_NAME)
  console.log("Renaming COMPLETED")

  return backupDirectoryName
}

function createBackupDirectoryName(directories) {
  const productionDirectory = directories
    .find(fileInfo => fileInfo.name === PRODUCTION_DIRECTORY_NAME)

  const formattedDate = formatDate(productionDirectory.modifiedAt)

  const numberOfDateOccurrences = directories
    .filter(fileInfo => fileInfo.name.includes(formattedDate))
    .length

  if(numberOfDateOccurrences === 0){
    return formattedDate
  } else {
    return `${formattedDate}_${numberOfDateOccurrences + 1}`
  }
}

function formatDate(date) {
  const month = date.getMonth() + 1
  const paddedMonth = month.toString().padStart(2, "0")
  const paddedDay = date.getDate().toString().padStart(2, "0")

  return `${date.getFullYear()}.${paddedMonth}.${paddedDay}`
}

function isProductionLive() {
  return new Promise((resolve) => {
    https
      .get(PRODUCTION_URL, res => {
        console.log(`Production status code ${res.statusCode}`)
        resolve(res.statusCode === 200)
      })
      .on("error", _ => {
        resolve(false)
      })
  })
}

async function rollBackProduction(backupDirectoryName){
  await basicFtpClient.rename(PRODUCTION_DIRECTORY_NAME, BROKEN_BUILD)
  await basicFtpClient.rename(backupDirectoryName, PRODUCTION_DIRECTORY_NAME)
  console.log(`Rollback COMPLETED`)
  fail()
}

function onError(name, error){
  console.log(`${name} FAILED`)
  console.log(error)
  fail()
}

function fail() {
  basicFtpClient.close()
  process.exit(1)
}

main()