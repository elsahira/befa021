var wms_layers = [];

var format_geometri_0 = new ol.format.GeoJSON();
var features_geometri_0 = format_geometri_0.readFeatures(json_geometri_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geometri_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geometri_0.addFeatures(features_geometri_0);
var lyr_geometri_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geometri_0, 
                style: style_geometri_0,
                interactive: true,
                title: '<img src="styles/legend/geometri_0.png" /> geometri'
            });
var format_PEMUKIMAN_1 = new ol.format.GeoJSON();
var features_PEMUKIMAN_1 = format_PEMUKIMAN_1.readFeatures(json_PEMUKIMAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_1.addFeatures(features_PEMUKIMAN_1);
var lyr_PEMUKIMAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_1, 
                style: style_PEMUKIMAN_1,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_1.png" /> PEMUKIMAN'
            });
var format_PEMUKIMAAN_2 = new ol.format.GeoJSON();
var features_PEMUKIMAAN_2 = format_PEMUKIMAAN_2.readFeatures(json_PEMUKIMAAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAAN_2.addFeatures(features_PEMUKIMAAN_2);
var lyr_PEMUKIMAAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAAN_2, 
                style: style_PEMUKIMAAN_2,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAAN_2.png" /> PEMUKIMAAN'
            });
var format_pemukimanfix_3 = new ol.format.GeoJSON();
var features_pemukimanfix_3 = format_pemukimanfix_3.readFeatures(json_pemukimanfix_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukimanfix_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukimanfix_3.addFeatures(features_pemukimanfix_3);
var lyr_pemukimanfix_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukimanfix_3, 
                style: style_pemukimanfix_3,
                interactive: true,
                title: '<img src="styles/legend/pemukimanfix_3.png" /> pemukiman fix'
            });
var format_KANAL_4 = new ol.format.GeoJSON();
var features_KANAL_4 = format_KANAL_4.readFeatures(json_KANAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANAL_4.addFeatures(features_KANAL_4);
var lyr_KANAL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANAL_4, 
                style: style_KANAL_4,
                interactive: true,
                title: '<img src="styles/legend/KANAL_4.png" /> KANAL'
            });
var format_SUNGAIII_5 = new ol.format.GeoJSON();
var features_SUNGAIII_5 = format_SUNGAIII_5.readFeatures(json_SUNGAIII_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIII_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIII_5.addFeatures(features_SUNGAIII_5);
var lyr_SUNGAIII_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAIII_5, 
                style: style_SUNGAIII_5,
                interactive: true,
                title: '<img src="styles/legend/SUNGAIII_5.png" /> SUNGAIII'
            });
var format_SUNGAI_6 = new ol.format.GeoJSON();
var features_SUNGAI_6 = format_SUNGAI_6.readFeatures(json_SUNGAI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_6.addFeatures(features_SUNGAI_6);
var lyr_SUNGAI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_6, 
                style: style_SUNGAI_6,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_6.png" /> SUNGAI'
            });
var format_JALAN_7 = new ol.format.GeoJSON();
var features_JALAN_7 = format_JALAN_7.readFeatures(json_JALAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_7.addFeatures(features_JALAN_7);
var lyr_JALAN_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_7, 
                style: style_JALAN_7,
                interactive: true,
                title: '<img src="styles/legend/JALAN_7.png" /> JALAN'
            });
var format_clipgeoprocessing_8 = new ol.format.GeoJSON();
var features_clipgeoprocessing_8 = format_clipgeoprocessing_8.readFeatures(json_clipgeoprocessing_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipgeoprocessing_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipgeoprocessing_8.addFeatures(features_clipgeoprocessing_8);
var lyr_clipgeoprocessing_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clipgeoprocessing_8, 
                style: style_clipgeoprocessing_8,
                interactive: true,
                title: '<img src="styles/legend/clipgeoprocessing_8.png" /> clip geoprocessing'
            });

lyr_geometri_0.setVisible(true);lyr_PEMUKIMAN_1.setVisible(true);lyr_PEMUKIMAAN_2.setVisible(true);lyr_pemukimanfix_3.setVisible(true);lyr_KANAL_4.setVisible(true);lyr_SUNGAIII_5.setVisible(true);lyr_SUNGAI_6.setVisible(true);lyr_JALAN_7.setVisible(true);lyr_clipgeoprocessing_8.setVisible(true);
var layersList = [lyr_geometri_0,lyr_PEMUKIMAN_1,lyr_PEMUKIMAAN_2,lyr_pemukimanfix_3,lyr_KANAL_4,lyr_SUNGAIII_5,lyr_SUNGAI_6,lyr_JALAN_7,lyr_clipgeoprocessing_8];
lyr_geometri_0.set('fieldAliases', {'id': 'id', });
lyr_PEMUKIMAN_1.set('fieldAliases', {'id': 'id', });
lyr_PEMUKIMAAN_2.set('fieldAliases', {'id': 'id', });
lyr_pemukimanfix_3.set('fieldAliases', {'id': 'id', });
lyr_KANAL_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAIII_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JALAN_7.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_clipgeoprocessing_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_geometri_0.set('fieldImages', {'id': '', });
lyr_PEMUKIMAN_1.set('fieldImages', {'id': '', });
lyr_PEMUKIMAAN_2.set('fieldImages', {'id': '', });
lyr_pemukimanfix_3.set('fieldImages', {'id': '', });
lyr_KANAL_4.set('fieldImages', {'NAMOBJ': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAIII_5.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_6.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JALAN_7.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_clipgeoprocessing_8.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_geometri_0.set('fieldLabels', {'id': 'no label', });
lyr_PEMUKIMAN_1.set('fieldLabels', {'id': 'no label', });
lyr_PEMUKIMAAN_2.set('fieldLabels', {'id': 'no label', });
lyr_pemukimanfix_3.set('fieldLabels', {'id': 'no label', });
lyr_KANAL_4.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAIII_5.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JALAN_7.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_clipgeoprocessing_8.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_clipgeoprocessing_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});