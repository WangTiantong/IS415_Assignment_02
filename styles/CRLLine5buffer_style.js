var size = 0;

var styleCache_CRLLine5buffer={}
var style_CRLLine5buffer = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.423529)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(230,8,11,0.423529)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_CRLLine5buffer[key]){
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
        styleCache_CRLLine5buffer[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_CRLLine5buffer[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};