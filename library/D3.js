import * as d3 from "https://cdn.skypack.dev/d3@7";

const div = d3.selectAll("div");

const d3 = await Promise.all([
    import("d3-format"),
    import("d3-geo"),
    import("d3-geo-projection")
  ]).then(d3 => Object.assign({}, ...d3));