/**
 * 生成登录curl命令 (Mac/Linux)
 * @param {*} username 
 * @param {*} password 
 * @param {*} carrier
 */
export const getCurl = (username, password, carrier) =>
    `curl --location --request GET 'http://10.2.5.251:801/eportal/?c=Portal&a=login&login_method=1&user_account=${username}%40${carrier}&user_password=${password}&wlan_ac_name=NAS&jsVersion=3.0'`

/**
 * 生成每周日-每周四，7:18、7:20、7:22执行一次CronTab（Linux）
 */
export const getCronTab = () =>
    '0 18,20,22 7 1/1 0 1,2,3,4,7 *'

/**
 * 生成Launchctl .plist内容（Mac）
 */
export const getLaunchctl = () =>
    `
    <?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <!-- 唯一标识 -->
        <key>CumtLogin</key>
        <string>com.atcumt.cumtlogin</string>

        <!-- 脚本目录 -->
        <key>ProgramArguments</key>
        <array>
            <string>/usr/local/cumtlogin/login.sh</string>
        </array>

        <!-- 运行时间 -->
        <key>StartCalendarInterval</key>
        <dict>
            <key>Minute</key>
            <integer>18</integer>
            <key>Hour</key>
            <integer>7</integer>
        </dict>

        <!-- 标准输出目录 -->
        <key>StandardOutPath</key>
        <string>/usr/local/cumtlogin/log.txt</string>

        <!-- 错误输出目录 -->
        <key>StandardOutPath</key>
        <string>/usr/local/cumtlogin/error.txt</string>
    </dict>
</plist>
    `