
// https://blog.revillweb.com/write-web-components-with-es2015-es6-75585e1f2584
let template = `
<style>
@import url(http://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);
.container {
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 0 5px #dadada;
    position: relative;
    min-height: 100px;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 10px 0;
}
.container .left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 30%;
    color: #FFF;
    border-radius: 5px 0 0 5px;
    text-align: center;
    padding: 18px 0 0 0;
}
.container .left .month {
    line-height: 20px;
    font-weight: 300;
}
.container .left .day { 
    font-size: 40px
}
.container .right {
    margin-left: 30%;
    padding: 10px 10px 10px 15px;
    color: #333;
}
.container .right .day-long {
    font-weight: 300;
    font-size: 18px;
    line-height: 35px;
}
.container .right .time {
    font-weight: bold;
    font-size: 35px;
    line-height: 40px;
}
/* THEME CODE */
.container.green .left {
    background-color: #37bc9b;
}
.container.green .day-long {
    color: #278b70;
}
.container.red .left {
    background-color: #bc2751;
}
.container.red .day-long {
    color: #922146;
}
.container.blue .left {
    background-color: #356dbc;
} 
.container.blue .day-long {
    color: #2d5ea3;
}
.container.gold .left {
    background-color: #bc9600;
}
.container.gold .day-long {
    color: #9a7b00;
}
</style>
<div class="container">
    <div class="left">
          <div class="month"></div>
          <div class="day"></div>
    </div>
    <div class="right">
          <div class="day-long"></div>
          <div class="time"></div>
    </div>
</div>
`;
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
class DateWidget extends HTMLElement {
      // Fires when an instance of the element is created.
      createdCallback() {
            this.createShadowRoot().innerHTML = template;
            //Grab the elements from the shadow root
            this.$container = this.shadowRoot.querySelector('.container');
            this.$month = this.shadowRoot.querySelector('.month');
            this.$day = this.shadowRoot.querySelector('.day');
            this.$dayLong = this.shadowRoot.querySelector('.day-long');
            this.$time = this.shadowRoot.querySelector('.time');
            this.updateTheme(this.getAttribute('theme'));
            //Call the draw function initially this.draw();
            var that = this;
            //Call the draw function every section to update the time
            setInterval(function () {
                  that.draw();
            }, 1000);
      };
      draw() {
            this.date = new Date();
            this.$month.innerHTML = months[this.date.getMonth()];
            this.$day.innerHTML = this.date.getDate();
            this.$dayLong.innerHTML = days[this.date.getDay()].toUpperCase();
            this.$time.innerHTML = this.date.toLocaleTimeString();
      };
      updateTheme(theme) {
            var val = "green";
            if (["green", "red", "blue", "gold"].indexOf(theme) > -1) {
                  val = theme;
            }
            this.$container.className = "container " + val;
      };
      attributeChangedCallback(attrName, oldVal, newVal) {
            switch (attrName) {
                  case "theme":
                        this.updateTheme(newVal);
                        break;
            }
      };
}
document.registerElement('date-widget', DateWidget);

setTimeout(function () {
      document.getElementsByTagName("date-widget")[0].setAttribute("theme", "blue");
}, 7000)