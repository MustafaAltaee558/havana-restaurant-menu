const fs = require("fs");
const file = "C:/Users/TC User/.gemini/antigravity-ide/brain/82ec5a61-2fcc-4928-a1fd-e0c479dafb7e/.system_generated/logs/transcript.jsonl";
const lines = fs.readFileSync(file, "utf8").split("\n");
for (const line of lines) {
  if (line.trim()) {
    const obj = JSON.parse(line);
    if (obj.step_index === 66) {
      fs.writeFileSync("c:/Users/TC User/منيو مطعم هافانا/temp_user_request.txt", obj.content);
      console.log("Success! Extracted to temp_user_request.txt");
      break;
    }
  }
}
