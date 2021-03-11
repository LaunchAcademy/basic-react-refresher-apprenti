import fs from "fs";
import _ from "lodash";

const barsPath = "bars.json";

class Bar {
  constructor({ id, name, address, coverCharge, hoursOfOperation }) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.coverCharge = coverCharge;
    this.hoursOfOperation = hoursOfOperation;
  }

  static findAll() {
    const barData = JSON.parse(fs.readFileSync(barsPath)).bars;
    let bars = [];
    barData.forEach((bar) => {
      const newBar = new Bar(bar);
      bars.push(newBar);
    });
    return bars;
  }

  static findById(id) {
    const barData = JSON.parse(fs.readFileSync(barsPath)).bars;
    const myBar = barData.find((bar) => bar.id == id);
    return new Bar(myBar);
  }

  static getNextBarId() {
    const maxBar = _.maxBy(this.findAll(), (bar) => bar.id);
    return maxBar.id + 1;
  }

  save() {
    this.id = this.constructor.getNextBarId();
    const bars = this.constructor.findAll();
    bars.push(this);
    const data = { bars: bars };
    fs.writeFileSync(barsPath, JSON.stringify(data));
  }
}

export default Bar;
