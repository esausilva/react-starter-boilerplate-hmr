
as1ync function run() {
      return new Promise((res, rej) => {
            setTimeout(() => {
                  console.log(new Date())
                  res();
            }, 2000)

      })
}
(asy2nc function () {
      await run();
      await run();
})();