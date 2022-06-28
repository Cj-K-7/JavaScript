import * as d3 from "https://cdn.skypack.dev/d3@7";

const div = d3.selectAll("div");

// const d3 = await Promise.all([
//     import("d3-format"),
//     import("d3-geo"),
//     import("d3-geo-projection")
//   ]).then(d3 => Object.assign({}, ...d3));

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2").data(dataset).enter().append('h2').text(data=> data + " USD");