var size = 0;

var styleCache_WDPAFeb216SGPshapefilepolygons={}
var style_WDPAFeb216SGPshapefilepolygons = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.631373)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(160,108,151,0.631373)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_WDPAFeb216SGPshapefilepolygons[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_WDPAFeb216SGPshapefilepolygons[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_WDPAFeb216SGPshapefilepolygons[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};