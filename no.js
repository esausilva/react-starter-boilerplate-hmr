
async function run() {
      return new Promise((res, rej) => {
            setTimeout(() => {
                  console.log(new Date())
                  res();
            }, 2000)

      })
}
(async function () {
      await run();
      await run();
})();