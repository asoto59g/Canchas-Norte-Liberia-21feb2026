var wms_layers = [];


        var lyr_googlesatellitehybrid_0 = new ol.layer.Tile({
            'title': 'google satellite hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_PRodriguez_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'P.Rodriguez<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PRodriguez_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510536.168127, 1190672.058619, -9510424.796988, 1190762.678299]
        })
    });
var lyr_Gli_PRodriguez_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gli_PRodriguez<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gli_PRodriguez_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510536.168127, 1190672.058619, -9510424.796988, 1190762.678299]
        })
    });
var lyr_Vari_PRodriguez_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Vari_PRodriguez<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Vari_PRodriguez_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510536.168127, 1190672.058619, -9510424.796988, 1190762.678299]
        })
    });
var lyr_Estadio_Liberia_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Estadio_Liberia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Estadio_Liberia_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510491.640331, 1190762.702745, -9510291.291714, 1190921.249862]
        })
    });
var lyr_Gli_Estadio_Liberia_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gli_Estadio_Liberia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gli_Estadio_Liberia_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510491.640331, 1190762.702745, -9510291.291714, 1190921.249862]
        })
    });
var lyr_Vari_Estadio_Liberia_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Vari_Estadio_Liberia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Vari_Estadio_Liberia_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510491.640331, 1190762.702745, -9510291.291714, 1190921.249862]
        })
    });
var lyr_PMoracia_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'P.Moracia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PMoracia_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510102.022113, 1191079.886963, -9509912.721035, 1191215.741838]
        })
    });
var lyr_Gli_Moracia_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gli_Moracia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Gli_Moracia_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510102.022113, 1191079.886963, -9509912.721035, 1191215.741838]
        })
    });
var lyr_Vari_Moracia_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Vari_Moracia<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Vari_Moracia_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510102.022113, 1191079.886963, -9509912.721035, 1191215.741838]
        })
    });
var lyr_Plaza_SRoque_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Plaza_S.Roque<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Plaza_SRoque_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510781.071007, 1191555.480088, -9510614.163590, 1191680.138132]
        })
    });
var lyr_GliSRoque_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GliSRoque<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GliSRoque_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510781.071007, 1191555.480088, -9510614.163590, 1191680.138132]
        })
    });
var lyr_VariSRoque_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'VariSRoque<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/VariSRoque_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510781.071007, 1191555.480088, -9510614.163590, 1191680.138132]
        })
    });
var lyr_PBeisbol_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PBeisbol<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PBeisbol_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-9510647.487618, 1191193.153776, -9510458.186540, 1191329.008651]
        })
    });
var group_PlazaBeisbol = new ol.layer.Group({
                                layers: [lyr_PBeisbol_13,],
                                fold: 'close',
                                title: 'Plaza Beisbol'});
var group_PlazaSanRoque = new ol.layer.Group({
                                layers: [lyr_Plaza_SRoque_10,lyr_GliSRoque_11,lyr_VariSRoque_12,],
                                fold: 'close',
                                title: 'Plaza San Roque'});
var group_PlazaMoracia = new ol.layer.Group({
                                layers: [lyr_PMoracia_7,lyr_Gli_Moracia_8,lyr_Vari_Moracia_9,],
                                fold: 'close',
                                title: 'Plaza Moracia'});
var group_EstadioLiberia = new ol.layer.Group({
                                layers: [lyr_Estadio_Liberia_4,lyr_Gli_Estadio_Liberia_5,lyr_Vari_Estadio_Liberia_6,],
                                fold: 'close',
                                title: 'Estadio Liberia'});
var group_PlazaRodriguez = new ol.layer.Group({
                                layers: [lyr_PRodriguez_1,lyr_Gli_PRodriguez_2,lyr_Vari_PRodriguez_3,],
                                fold: 'close',
                                title: 'Plaza Rodriguez'});

lyr_googlesatellitehybrid_0.setVisible(true);lyr_PRodriguez_1.setVisible(true);lyr_Gli_PRodriguez_2.setVisible(true);lyr_Vari_PRodriguez_3.setVisible(true);lyr_Estadio_Liberia_4.setVisible(true);lyr_Gli_Estadio_Liberia_5.setVisible(true);lyr_Vari_Estadio_Liberia_6.setVisible(true);lyr_PMoracia_7.setVisible(true);lyr_Gli_Moracia_8.setVisible(true);lyr_Vari_Moracia_9.setVisible(true);lyr_Plaza_SRoque_10.setVisible(true);lyr_GliSRoque_11.setVisible(true);lyr_VariSRoque_12.setVisible(true);lyr_PBeisbol_13.setVisible(true);
var layersList = [lyr_googlesatellitehybrid_0,group_PlazaRodriguez,group_EstadioLiberia,group_PlazaMoracia,group_PlazaSanRoque,group_PlazaBeisbol];
