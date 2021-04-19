(function() {
  let username = "espruino";
  let githubMatch = window.location.href.match(/\/(\w+)\.github\.io/);
  if (githubMatch) username = githubMatch[1];
  Const.APP_SOURCECODE_URL = `https://github.com/${username}/P8Apps/tree/master/apps`;
})();

function onFoundDeviceInfo(deviceId, deviceVersion) {
  if (deviceId != "P8") {
    showToast(`You're using ${deviceId}, not a P8. Did you want <a href="https://espruino.com/apps">espruino.com/apps</a> instead?` ,"warning", 20000);
  } else if (versionLess(deviceVersion, RECOMMENDED_VERSION)) {
    showToast(`You're using an old Bangle.js firmware (${deviceVersion}). You can <a href="https://www.espruino.com/Bangle.js#firmware-updates" target="_blank">update with the instructions here</a>` ,"warning", 20000);
  }
}
