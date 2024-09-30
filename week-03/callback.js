function doJob(job,time,cb) {
    setTimeout(() => {
      // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
      let now = new Date();
      cb(`完成工作 ${job} at ${now.toISOString()}`);
    },time);
  }
  
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
  
// 利用 callback 來確保每個 doJob 在前一個工作完成後才開始進行。當前一個工作完成後，會呼叫下一個工作，依此類推。
//按照刷牙 -> 吃早餐 -> 寫功課 -> 吃午餐的順序來設置回調函數。


doJob('刷牙', 1000, function (data) {
    console.log(data); // 完成刷牙後，繼續做吃早餐
    doJob('吃早餐', 3000, function (data) {
      console.log(data); // 完成吃早餐後，繼續寫功課
      doJob('寫功課', 1000, function (data) {
        console.log(data); // 完成寫功課後，繼續吃午餐
        doJob('吃午餐', 2000, function (data) {
          console.log(data); // 完成吃午餐
        });
      });
    });
  });
  
