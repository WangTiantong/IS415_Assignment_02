var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [new ol.layer.Tile({title: 'OSM',
                                              source: new ol.source.OSM()
                                            })]});
var lyr_SGslope = new ol.layer.Image({
                            opacity: 1,
                            title: "SG_slope",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SGslope.png",
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                //imageSize: [577, 366],
                                imageExtent: [11533330.151488, 129637.149362, 11586721.376748, 163731.503401]
                            })
                        });var format_DGPSubZone = new ol.format.GeoJSON();
var features_DGPSubZone = format_DGPSubZone.readFeatures(geojson_DGPSubZone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_DGPSubZone = new ol.source.Vector();
jsonSource_DGPSubZone.addFeatures(features_DGPSubZone);var lyr_DGPSubZone = new ol.layer.Vector({
                source:jsonSource_DGPSubZone, 
                style: style_DGPSubZone,
                title: "DGPSubZone"
            });var format_railways = new ol.format.GeoJSON();
var features_railways = format_railways.readFeatures(geojson_railways, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_railways = new ol.source.Vector();
jsonSource_railways.addFeatures(features_railways);var lyr_railways = new ol.layer.Vector({
                source:jsonSource_railways, 
                style: style_railways,
                title: "railways"
            });var format_BusStop = new ol.format.GeoJSON();
var features_BusStop = format_BusStop.readFeatures(geojson_BusStop, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_BusStop = new ol.source.Vector();
jsonSource_BusStop.addFeatures(features_BusStop);var lyr_BusStop = new ol.layer.Vector({
                source:jsonSource_BusStop, 
                style: style_BusStop,
                title: "BusStop"
            });var format_CRLStations = new ol.format.GeoJSON();
var features_CRLStations = format_CRLStations.readFeatures(geojson_CRLStations, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_CRLStations = new ol.source.Vector();
jsonSource_CRLStations.addFeatures(features_CRLStations);var lyr_CRLStations = new ol.layer.Vector({
                source:jsonSource_CRLStations, 
                style: style_CRLStations,
                title: "CRL_Stations"
            });var format_CRLLine = new ol.format.GeoJSON();
var features_CRLLine = format_CRLLine.readFeatures(geojson_CRLLine, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_CRLLine = new ol.source.Vector();
jsonSource_CRLLine.addFeatures(features_CRLLine);var lyr_CRLLine = new ol.layer.Vector({
                source:jsonSource_CRLLine, 
                style: style_CRLLine,
                title: "CRL_Line"
            });var format_CRLLine5buffer = new ol.format.GeoJSON();
var features_CRLLine5buffer = format_CRLLine5buffer.readFeatures(geojson_CRLLine5buffer, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_CRLLine5buffer = new ol.source.Vector();
jsonSource_CRLLine5buffer.addFeatures(features_CRLLine5buffer);var lyr_CRLLine5buffer = new ol.layer.Vector({
                source:jsonSource_CRLLine5buffer, 
                style: style_CRLLine5buffer,
                title: "CRL_Line_500buffer"
            });var format_waterways = new ol.format.GeoJSON();
var features_waterways = format_waterways.readFeatures(geojson_waterways, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_waterways = new ol.source.Vector();
jsonSource_waterways.addFeatures(features_waterways);var lyr_waterways = new ol.layer.Vector({
                source:jsonSource_waterways, 
                style: style_waterways,
                title: "waterways"
            });var format_roads = new ol.format.GeoJSON();
var features_roads = format_roads.readFeatures(geojson_roads, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_roads = new ol.source.Vector();
jsonSource_roads.addFeatures(features_roads);var lyr_roads = new ol.layer.Vector({
                source:jsonSource_roads, 
                style: style_roads,
                title: "roads"
            });var format_Education = new ol.format.GeoJSON();
var features_Education = format_Education.readFeatures(geojson_Education, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Education = new ol.source.Vector();
jsonSource_Education.addFeatures(features_Education);var lyr_Education = new ol.layer.Vector({
                source:jsonSource_Education, 
                style: style_Education,
                title: "Education"
            });var format_Residentials = new ol.format.GeoJSON();
var features_Residentials = format_Residentials.readFeatures(geojson_Residentials, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_Residentials = new ol.source.Vector();
jsonSource_Residentials.addFeatures(features_Residentials);var lyr_Residentials = new ol.layer.Vector({
                source:jsonSource_Residentials, 
                style: style_Residentials,
                title: "Residentials"
            });var format_WDPAFeb216SGPshapefilepolygons = new ol.format.GeoJSON();
var features_WDPAFeb216SGPshapefilepolygons = format_WDPAFeb216SGPshapefilepolygons.readFeatures(geojson_WDPAFeb216SGPshapefilepolygons, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_WDPAFeb216SGPshapefilepolygons = new ol.source.Vector();
jsonSource_WDPAFeb216SGPshapefilepolygons.addFeatures(features_WDPAFeb216SGPshapefilepolygons);var lyr_WDPAFeb216SGPshapefilepolygons = new ol.layer.Vector({
                source:jsonSource_WDPAFeb216SGPshapefilepolygons, 
                style: style_WDPAFeb216SGPshapefilepolygons,
                title: "WDPA_Feb2016_SGP-shapefile-polygons"
            });var format_TrainStationExits = new ol.format.GeoJSON();
var features_TrainStationExits = format_TrainStationExits.readFeatures(geojson_TrainStationExits, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_TrainStationExits = new ol.source.Vector();
jsonSource_TrainStationExits.addFeatures(features_TrainStationExits);var lyr_TrainStationExits = new ol.layer.Vector({
                source:jsonSource_TrainStationExits, 
                style: style_TrainStationExits,
                title: "TrainStationExits"
            });var format_TECLS = new ol.format.GeoJSON();
var features_TECLS = format_TECLS.readFeatures(geojson_TECLS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3414'});
var jsonSource_TECLS = new ol.source.Vector();
jsonSource_TECLS.addFeatures(features_TECLS);var lyr_TECLS = new ol.layer.Vector({
                source:jsonSource_TECLS, 
                style: style_TECLS,
                title: "TECLS"
            });

lyr_SGslope.setVisible(false);lyr_DGPSubZone.setVisible(false);lyr_railways.setVisible(false);lyr_BusStop.setVisible(false);lyr_CRLStations.setVisible(true);lyr_CRLLine.setVisible(true);lyr_CRLLine5buffer.setVisible(true);lyr_waterways.setVisible(false);lyr_roads.setVisible(false);lyr_Education.setVisible(false);lyr_Residentials.setVisible(false);lyr_WDPAFeb216SGPshapefilepolygons.setVisible(false);lyr_TrainStationExits.setVisible(false);lyr_TECLS.setVisible(false);
var layersList = [baseLayer,lyr_SGslope,lyr_DGPSubZone,lyr_railways,lyr_BusStop,lyr_CRLStations,lyr_CRLLine,lyr_CRLLine5buffer,lyr_waterways,lyr_roads,lyr_Education,lyr_Residentials,lyr_WDPAFeb216SGPshapefilepolygons,lyr_TrainStationExits,lyr_TECLS];
