'use strict';
/* global angular */

/************************************************************************************************
 * Module definition
 ************************************************************************************************/
var airportsModule = angular.module('airports',['compiledTemplates']);

// ***********************************************************************************************
//  * Controllers
//  ***********************************************************************************************
airportsModule.service('airports', ['$filter','airportList', function ( $filter, airportList) {
    var service = {
        find: function( query ) {
            var comparator;
            if( !angular.isDefined(query) || query.length < 3) {
                return [];
            }
            if( query.length === 3 ) {
                return $filter('filter')(airportList, {code:query}, comparator);
            }
            return $filter('filter')(airportList, {name:query}, comparator);
        }
    };
    return service;
}]);

airportsModule.directive('airportSearch', [ 'airports', function (airports) {
    return {
        restrict: 'EA',
        templateUrl:  'components/airports/airportSearch.html',
        replace: true,
        scope: {},
        link: function (scope, iElement, iAttrs) {
            scope.label = iAttrs.label;
            scope.airports = {
                size:0,
                open:false
            };
            scope.selectedAirport = {
                code : 'CGH'
            };
            scope.toggleAirports = function() {
                scope.airports.open = !scope.airports.open;
            };
            scope.findAirport = function() {
                scope.airports.list = airports.find( scope.airports.query);
                scope.airports.size = scope.airports.list.length;
            };
            scope.selectAirport = function(airport) {
                scope.selectedAirport.code = airport.code;
                scope.selectedAirport.name = airport.name;
                scope.selectedAirport.city = airport.city;
                scope.airports.open = false;
            };
        }
    };
}]);

airportsModule.constant('airportList', [
    {
        'code': 'AAA',
        'name': 'Anaa Airport',
        'city': 'Anaa',
    },
    {
        'code': 'AAE',
        'name': 'El Mellah Airport',
        'city': 'El Tarf',
    },
    {
        'code': 'AAL',
        'name': 'Aalborg Airport',
        'city': 'Norresundby',
    },
    {
        'code': 'AAM',
        'name': 'Mala Mala',
        'city': 'Mala Mala',
    },
    {
        'code': 'AAN',
        'name': 'Al Ain Airport',
        'city': 'Ayn al Faydah',
    },
    {
        'code': 'AAQ',
        'name': 'Olkhovka Airport',
        'city': 'Novorossiysk',
    },
    {
        'code': 'AAR',
        'name': 'Tirstrup Airport',
        'city': 'Kolind',
    },
    {
        'code': 'AAT',
        'name': 'Altay Airport',
        'city': 'Altay',
    },
    {
        'code': 'AAX',
        'name': 'Romeu Zuma Airport',
        'city': 'Arax\u00e1',
    },
    {
        'code': 'AAY',
        'name': 'Al Gaidah Airport',
        'city': 'Al Ghaydah',
    },
    {
        'code': 'ABA',
        'name': 'Abakan',
        'city': 'Abakan',
    },
    {
        'code': 'ABC',
        'name': 'Los Llanos',
        'city': 'Albacete',
    },
    {
        'code': 'ABD',
        'name': 'Abadan',
        'city': 'Abadan',
    },
    {
        'code': 'ABE',
        'name': 'Lehigh Valley International Airport',
        'city': 'Allentown',
    },
    {
        'code': 'ABI',
        'name': 'Abilene Regional Airport',
        'city': 'Abilene',
    },
    {
        'code': 'ABJ',
        'name': 'Abidjan Port Bouet Airport',
        'city': 'Abidjan',
    },
    {
        'code': 'ABK',
        'name': 'Kabri Dar',
        'city': 'Kabri Dar',
    },
    {
        'code': 'ABL',
        'name': 'Ambler Airport',
        'city': 'Kiana',
    },
    {
        'code': 'ABM',
        'name': 'Bamaga Airport',
        'city': 'Seisia',
    },
    {
        'code': 'ABQ',
        'name': 'Albuquerque International Airport',
        'city': 'Albuquerque',
    },
    {
        'code': 'ABR',
        'name': 'Aberdeen Regional Airport',
        'city': 'Aberdeen',
    },
    {
        'code': 'ABS',
        'name': 'Abu Simbel Airport',
        'city': 'Abu Simbel',
    },
    {
        'code': 'ABT',
        'name': 'Al Baha Airport',
        'city': 'Al Aqiq',
    },
    {
        'code': 'ABV',
        'name': 'Abuja International Airport',
        'city': 'Gwagwa',
    },
    {
        'code': 'ABX',
        'name': 'Albury Airport',
        'city': 'Albury',
    },
    {
        'code': 'ABY',
        'name': 'Southwest Georgia Regional Airport',
        'city': 'Albany',
    },
    {
        'code': 'ABZ',
        'name': 'Aberdeen Dyce International Airport',
        'city': 'Aberdeen',
    },
    {
        'code': 'ACA',
        'name': 'General Juan N Alvarez International Airport',
        'city': 'Acapulco',
    },
    {
        'code': 'ACC',
        'name': 'Kotoka International Airport',
        'city': 'Accra',
    },
    {
        'code': 'ACE',
        'name': 'Arrecife Airport',
        'city': 'San Bartolom\u00e9',
    },
    {
        'code': 'ACH',
        'name': 'Altenrhein Airport',
        'city': 'Altenrhein',
    },
    {
        'code': 'ACI',
        'name': 'The Blaye Airport',
        'city': 'St. Peter Port',
    },
    {
        'code': 'ACK',
        'name': 'Nantucket Memorial Airport',
        'city': 'Nantucket',
    },
    {
        'code': 'ACP',
        'name': 'Sahand Airport',
        'city': 'Sahand',
    },
    {
        'code': 'ACS',
        'name': 'Achinsk',
        'city': 'Achinsk',
    },
    {
        'code': 'ACT',
        'name': 'Waco Regional Airport',
        'city': 'Waco',
    },
    {
        'code': 'ACV',
        'name': 'Arcata Airport',
        'city': 'Mckinleyville',
    },
    {
        'code': 'ACX',
        'name': 'Xingyi',
        'city': 'Xingyi',
    },
    {
        'code': 'ACY',
        'name': 'Atlantic City International Airport',
        'city': 'Egg Harbor City',
    },
    {
        'code': 'ACZ',
        'name': 'Zabol A\/P',
        'city': 'Zabol',
    },
    {
        'code': 'ADA',
        'name': 'Sakirpasa Airport',
        'city': 'Adana',
    },
    {
        'code': 'ADB',
        'name': 'Gaziemir Airport',
        'city': 'Azmir',
    },
    {
        'code': 'ADD',
        'name': 'Bole International Airport',
        'city': 'Addis Ababa',
    },
    {
        'code': 'ADE',
        'name': 'Aden International Airport',
        'city': 'Ash Shaykh Uthman',
    },
    {
        'code': 'ADF',
        'name': 'Adiyaman Airport',
        'city': 'Adiyaman',
    },
    {
        'code': 'ADJ',
        'name': 'Al Matar Airport',
        'city': 'Amman',
    },
    {
        'code': 'ADK',
        'name': 'Adak Airport',
        'city': 'Adak',
    },
    {
        'code': 'ADL',
        'name': 'Adelaide International Airport',
        'city': 'Adelaide',
    },
    {
        'code': 'ADQ',
        'name': 'Kodiak Airport',
        'city': 'Kodiak',
    },
    {
        'code': 'ADU',
        'name': 'Ardabil Airport',
        'city': 'Ardabil',
    },
    {
        'code': 'ADX',
        'name': 'Leuchars Airport',
        'city': 'St. Andrews',
    },
    {
        'code': 'ADZ',
        'name': 'Sesquicentenario Airport',
        'city': 'San Andr\u00e9s',
    },
    {
        'code': 'AEH',
        'name': 'Abeche Airport',
        'city': 'Ab\u00e9ch\u00e9',
    },
    {
        'code': 'AEP',
        'name': 'Aeroparque Jorge Newbery',
        'city': 'Buenos Aires',
    },
    {
        'code': 'AER',
        'name': 'Adler Airport',
        'city': 'Sochi',
    },
    {
        'code': 'AES',
        'name': 'Vigra Airport',
        'city': 'Vigra',
    },
    {
        'code': 'AET',
        'name': 'Allakaket Airport',
        'city': 'Allakaket',
    },
    {
        'code': 'AEX',
        'name': 'Alexandria International Airport',
        'city': 'Alexandria',
    },
    {
        'code': 'AEY',
        'name': 'Akureyri Airport',
        'city': 'Akureyri',
    },
    {
        'code': 'AFA',
        'name': 'San Rafael Airport',
        'city': 'San Rafael',
    },
    {
        'code': 'AFL',
        'name': 'Alta Floresta Airport',
        'city': 'Alta Floresta',
    },
    {
        'code': 'AFS',
        'name': 'Zarafshan Airport',
        'city': 'Zarafshan',
    },
    {
        'code': 'AFT',
        'name': 'Afutara Aerodrome',
        'city': 'Afutara',
    },
    {
        'code': 'AFZ',
        'name': 'Sabzevar Airport',
        'city': 'Sabzevar',
    },
    {
        'code': 'AGA',
        'name': 'Almassira Airport',
        'city': 'Agadir',
    },
    {
        'code': 'AGF',
        'name': 'La Garenne Airport',
        'city': 'Laplume',
    },
    {
        'code': 'AGH',
        'name': 'Angelholm Airport',
        'city': 'Angelholm',
    },
    {
        'code': 'AGL',
        'name': 'Wanigela',
        'city': 'Wanigela',
    },
    {
        'code': 'AGM',
        'name': 'Angmagssalik Airport',
        'city': 'Angmassalik',
    },
    {
        'code': 'AGN',
        'name': 'Angoon Airport',
        'city': 'Angoon',
    },
    {
        'code': 'AGP',
        'name': 'Malaga Airport',
        'city': 'Malaga',
    },
    {
        'code': 'AGR',
        'name': 'Agra Airport',
        'city': 'Agra',
    },
    {
        'code': 'AGS',
        'name': 'Bush Field Airport',
        'city': 'Augusta',
    },
    {
        'code': 'AGT',
        'name': 'Alejo Garcia Airport',
        'city': 'Presidente Franco',
    },
    {
        'code': 'AGU',
        'name': 'Aguascalientes Airport',
        'city': 'Aguascalientes',
    },
    {
        'code': 'AGV',
        'name': 'Acarigua',
        'city': 'Acarigua',
    },
    {
        'code': 'AGX',
        'name': 'Agatti Island Airport',
        'city': 'Agatti Island',
    },
    {
        'code': 'AHB',
        'name': 'Abha Airport',
        'city': 'Hajlah',
    },
    {
        'code': 'AHC',
        'name': 'Amedee Army Air Field',
        'city': 'Herlong',
    },
    {
        'code': 'AHE',
        'name': 'Ahe Airport',
        'city': 'Ahe',
    },
    {
        'code': 'AHO',
        'name': 'Alghero Airport',
        'city': 'Alghero',
    },
    {
        'code': 'AHS',
        'name': 'Ahuas Airport',
        'city': 'Auas',
    },
    {
        'code': 'AHU',
        'name': 'Cote du Rif Airport',
        'city': 'Al Hoceima',
    },
    {
        'code': 'AIA',
        'name': 'Alliance Municipal Airport',
        'city': 'Alliance',
    },
    {
        'code': 'AIN',
        'name': 'Wainwright Airport',
        'city': 'Wainwright',
    },
    {
        'code': 'AIT',
        'name': 'Aitutaki Airport',
        'city': 'Aitutaki',
    },
    {
        'code': 'AIU',
        'name': 'Atiu Island',
        'city': 'Atiu Island',
    },
    {
        'code': 'AJA',
        'name': 'Campo Dell Oro Airport',
        'city': 'Ajaccio',
    },
    {
        'code': 'AJF',
        'name': 'Al Jouf Airport',
        'city': 'Sakakah',
    },
    {
        'code': 'AJI',
        'name': 'Agri Airport',
        'city': 'Agr\u0131',
    },
    {
        'code': 'AJL',
        'name': 'Aizwal Airport',
        'city': 'Aizawl',
    },
    {
        'code': 'AJN',
        'name': 'Comoros',
        'city': 'Anjouan',
    },
    {
        'code': 'AJR',
        'name': 'Arvidsjaur Airport',
        'city': 'Arvidsjaur',
    },
    {
        'code': 'AJU',
        'name': 'Santa Maria Airport',
        'city': 'Aracaju',
    },
    {
        'code': 'AKA',
        'name': 'Ankang Airport',
        'city': 'Ankang',
    },
    {
        'code': 'AKB',
        'name': 'Atka Airport',
        'city': 'Atka',
    },
    {
        'code': 'AKF',
        'name': 'Kufra Airport',
        'city': 'Kufrah',
    },
    {
        'code': 'AKI',
        'name': 'Akiak Airport',
        'city': 'Bethel',
    },
    {
        'code': 'AKJ',
        'name': 'Asahikawa Airport',
        'city': 'Asahikawa-shi',
    },
    {
        'code': 'AKK',
        'name': 'Akhiok Airport',
        'city': 'Kodiak',
    },
    {
        'code': 'AKL',
        'name': 'Auckland International Airport',
        'city': 'Manukau City',
    },
    {
        'code': 'AKN',
        'name': 'King Salmon Airport',
        'city': 'King Salmon',
    },
    {
        'code': 'AKP',
        'name': 'Anaktuvuk Pass Airport',
        'city': 'Anaktuvuk Pass',
    },
    {
        'code': 'AKS',
        'name': 'Kroonstad Airport',
        'city': 'Kroonstad',
    },
    {
        'code': 'AKU',
        'name': 'Aksu Airport',
        'city': 'Aksu',
    },
    {
        'code': 'AKV',
        'name': 'Akulivik Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'AKX',
        'name': 'Aktyubinsk Airport',
        'city': 'Aqtobe',
    },
    {
        'code': 'AKY',
        'name': 'Sittwe Airport',
        'city': 'Sittwe',
    },
    {
        'code': 'ALA',
        'name': 'Alma Ata Airport',
        'city': 'Almaty',
    },
    {
        'code': 'ALB',
        'name': 'Albany International Airport',
        'city': 'Latham',
    },
    {
        'code': 'ALC',
        'name': 'Alicante Airport',
        'city': 'Elx',
    },
    {
        'code': 'ALF',
        'name': 'Alta Airport',
        'city': 'Alta',
    },
    {
        'code': 'ALG',
        'name': 'Houari Boumediene Airport',
        'city': 'Algiers',
    },
    {
        'code': 'ALH',
        'name': 'Albany Airport',
        'city': 'Albany',
    },
    {
        'code': 'ALM',
        'name': 'Alamogordo White Sands Regional Airport',
        'city': 'Alamogordo',
    },
    {
        'code': 'ALO',
        'name': 'Waterloo Municipal Airport',
        'city': 'Waterloo',
    },
    {
        'code': 'ALP',
        'name': 'Aleppo International Airport',
        'city': 'Djibrine',
    },
    {
        'code': 'ALS',
        'name': 'San Luis Valley Regional Airport',
        'city': 'Alamosa',
    },
    {
        'code': 'ALW',
        'name': 'Walla Walla Regional Airport',
        'city': 'Walla Walla',
    },
    {
        'code': 'ALY',
        'name': 'An-Nuzhah Airport',
        'city': 'Alexandria',
    },
    {
        'code': 'ALZ',
        'name': 'Alitak Seaplane Base',
        'city': 'Alitak',
    },
    {
        'code': 'AMA',
        'name': 'Amarillo International Airport',
        'city': 'Amarillo',
    },
    {
        'code': 'AMD',
        'name': 'Sardar Vallabhbhai Patel International Airport',
        'city': 'Ahmedabad',
    },
    {
        'code': 'AMH',
        'name': 'Ethiopia',
        'city': 'Arba Mintch',
    },
    {
        'code': 'AMI',
        'name': 'Selaparang',
        'city': 'Mataram',
    },
    {
        'code': 'AMM',
        'name': 'Queen Alia International Airport',
        'city': 'Amman',
    },
    {
        'code': 'AMQ',
        'name': 'Pattimura Airport',
        'city': 'Ambon',
    },
    {
        'code': 'AMS',
        'name': 'Schiphol Airport',
        'city': 'Schiphol Zuid',
    },
    {
        'code': 'AMV',
        'name': 'Amderma Airport',
        'city': 'Nar\'yan-Mar',
    },
    {
        'code': 'AMY',
        'name': 'Ambatomainty',
        'city': 'Ambatomainty',
    },
    {
        'code': 'ANC',
        'name': 'Anchorage International Airport',
        'city': 'Anchorage',
    },
    {
        'code': 'ANE',
        'name': 'A\u00e9roport d\'Angers-Marc\u00e9',
        'city': 'Seiches-sur-le-Loir',
    },
    {
        'code': 'ANF',
        'name': 'Cerro Moreno International Airport',
        'city': 'Antofagasta',
    },
    {
        'code': 'ANG',
        'name': 'Brie Champniers Airport',
        'city': 'Champniers',
    },
    {
        'code': 'ANI',
        'name': 'Aniak Airport',
        'city': 'Bethel',
    },
    {
        'code': 'ANM',
        'name': 'Madagascar',
        'city': 'Antalaha',
    },
    {
        'code': 'ANR',
        'name': 'Deurne Airport',
        'city': 'Antwerp',
    },
    {
        'code': 'ANU',
        'name': 'V C Bird International Airport',
        'city': 'Carlisle',
    },
    {
        'code': 'ANV',
        'name': 'Anvik Airport',
        'city': 'Anvik',
    },
    {
        'code': 'ANX',
        'name': 'Andoya Airport',
        'city': 'Andenes',
    },
    {
        'code': 'AOC',
        'name': 'Altenburg Nobitz',
        'city': 'Altenburg',
    },
    {
        'code': 'AOE',
        'name': 'Anadolu University Airport',
        'city': 'Eski\u015fehir',
    },
    {
        'code': 'AOI',
        'name': 'Falconara Airport',
        'city': 'Falconara Marittima',
    },
    {
        'code': 'AOJ',
        'name': 'Aomori Airport',
        'city': 'Aomori-shi',
    },
    {
        'code': 'AOK',
        'name': 'Karpathos Airport',
        'city': 'Karpathos',
    },
    {
        'code': 'AOO',
        'name': 'Altoona-Blair County Airport',
        'city': 'Martinsburg',
    },
    {
        'code': 'AOR',
        'name': 'Sultan Abdul Halim Airport',
        'city': 'Kepala Batas',
    },
    {
        'code': 'AOS',
        'name': 'Amook Bay Seaplane Base',
        'city': 'Amook',
    },
    {
        'code': 'APA',
        'name': 'Centennial Airport',
        'city': 'Englewood',
    },
    {
        'code': 'APF',
        'name': 'Naples Municipal Airport',
        'city': 'Naples',
    },
    {
        'code': 'APK',
        'name': 'French Polynesia',
        'city': 'Apataki',
    },
    {
        'code': 'APL',
        'name': 'Nampula Airport',
        'city': 'Nampula',
    },
    {
        'code': 'APN',
        'name': 'Alpena County Regional Airport',
        'city': 'Alpena',
    },
    {
        'code': 'APO',
        'name': 'Apartado Airport',
        'city': 'Apartad\u00f3',
    },
    {
        'code': 'APW',
        'name': 'Faleolo Airport',
        'city': 'Apia',
    },
    {
        'code': 'AQG',
        'name': 'Anqing Airport',
        'city': 'Anqing',
    },
    {
        'code': 'AQI',
        'name': 'Hafr Al Batin Airport',
        'city': 'Qaisumah',
    },
    {
        'code': 'AQJ',
        'name': 'Aqaba International Airport',
        'city': 'Aqaba',
    },
    {
        'code': 'AQP',
        'name': 'Rodriguez Ballon Airport',
        'city': 'Arequipa',
    },
    {
        'code': 'ARC',
        'name': 'Arctic Village Airport',
        'city': 'Arctic Village',
    },
    {
        'code': 'ARD',
        'name': 'Alor Island',
        'city': 'Alor Island',
    },
    {
        'code': 'ARH',
        'name': 'Arkhangelsk Airport',
        'city': 'Arkhangel\'sk',
    },
    {
        'code': 'ARI',
        'name': 'Chacalluta Airport',
        'city': 'Arica',
    },
    {
        'code': 'ARK',
        'name': 'Arusha Airport',
        'city': 'Arusha',
    },
    {
        'code': 'ARM',
        'name': 'Armidale Airport',
        'city': 'Armidale',
    },
    {
        'code': 'ARN',
        'name': 'Arlanda Airport',
        'city': 'M\u00e4rst',
    },
    {
        'code': 'ART',
        'name': 'Watertown International Airport',
        'city': 'Dexter',
    },
    {
        'code': 'ARU',
        'name': 'Aracatuba Airport',
        'city': 'Ara\u00e7atuba',
    },
    {
        'code': 'ARV',
        'name': 'Lakelan-Noble F. Lee Memerial Field Airport',
        'city': 'Woodruff',
    },
    {
        'code': 'ARW',
        'name': 'Ceala Airport',
        'city': 'Arad',
    },
    {
        'code': 'ASA',
        'name': 'Assab',
        'city': 'Assab',
    },
    {
        'code': 'ASB',
        'name': 'Ashkhabad Northwest Airport',
        'city': 'Ashgabat',
    },
    {
        'code': 'ASD',
        'name': 'Andros Town Airport',
        'city': 'Fresh Creek',
    },
    {
        'code': 'ASE',
        'name': 'Aspen Pitkin County Airport-Sardy Field',
        'city': 'Aspen',
    },
    {
        'code': 'ASF',
        'name': 'Astrakhan Southeast Airport',
        'city': 'Astrakhan\'',
    },
    {
        'code': 'ASI',
        'name': 'Wideawake Fld',
        'city': 'Georgetown, Ascension Island',
    },
    {
        'code': 'ASJ',
        'name': 'Amami Airport',
        'city': 'Amami O Shima',
    },
    {
        'code': 'ASM',
        'name': 'Yohannes Iv International Airport',
        'city': 'Asmara',
    },
    {
        'code': 'ASO',
        'name': 'Ethiopia',
        'city': 'Asosa',
    },
    {
        'code': 'ASP',
        'name': 'Alice Springs Airport',
        'city': 'Alice Springs',
    },
    {
        'code': 'ASR',
        'name': 'Erkilet Airport',
        'city': 'Kayseri',
    },
    {
        'code': 'ASU',
        'name': 'Silvio Pettirossi International Airport',
        'city': 'Colonia Mariano Roque Alonso',
    },
    {
        'code': 'ASV',
        'name': 'Amboseli',
        'city': 'Amboseli',
    },
    {
        'code': 'ASW',
        'name': 'Aswan Airport',
        'city': 'Aswan',
    },
    {
        'code': 'ATB',
        'name': 'Atbara',
        'city': 'Atbara',
    },
    {
        'code': 'ATC',
        'name': 'Arthur\'s Town Airport',
        'city': 'Arthur Town',
    },
    {
        'code': 'ATD',
        'name': 'Atoifi',
        'city': 'Atoifi',
    },
    {
        'code': 'ATH',
        'name': 'Eleftherios Venizelos International Airport',
        'city': 'Athens',
    },
    {
        'code': 'ATK',
        'name': 'Atqasuk Airport',
        'city': 'Atqasuk',
    },
    {
        'code': 'ATL',
        'name': 'Hartsfield-Jackson Atlanta International Airport',
        'city': 'Atlanta',
    },
    {
        'code': 'ATM',
        'name': 'Altamira Airport',
        'city': 'Altamira',
    },
    {
        'code': 'ATQ',
        'name': 'Raja Sansi Airport',
        'city': 'Raja Sansi',
    },
    {
        'code': 'ATR',
        'name': 'Atar Airport',
        'city': 'Atar',
    },
    {
        'code': 'ATT',
        'name': 'Atmautluak Airport',
        'city': 'Atmautluak',
    },
    {
        'code': 'ATW',
        'name': 'Outagamie County Airport',
        'city': 'Appleton',
    },
    {
        'code': 'ATY',
        'name': 'Watertown Municipal Airport',
        'city': 'Watertown',
    },
    {
        'code': 'ATZ',
        'name': 'Asyut Airport',
        'city': 'Asyut',
    },
    {
        'code': 'AUA',
        'name': 'Reina Beatrix International Airport',
        'city': 'Aruba',
    },
    {
        'code': 'AUC',
        'name': 'Santiago Perez Airport',
        'city': 'Arauca',
    },
    {
        'code': 'AUG',
        'name': 'Augusta State Airport',
        'city': 'Augusta',
    },
    {
        'code': 'AUH',
        'name': 'Abu Dhabi International Airport',
        'city': 'Abu Dhabi',
    },
    {
        'code': 'AUK',
        'name': 'Alakanuk Airport',
        'city': 'Alakanuk',
    },
    {
        'code': 'AUQ',
        'name': 'Atuona Airport',
        'city': 'Atuona',
    },
    {
        'code': 'AUR',
        'name': 'Aurillac Airport',
        'city': 'Aurillac',
    },
    {
        'code': 'AUS',
        'name': 'Austin-Bergstrom International Airport',
        'city': 'Austin',
    },
    {
        'code': 'AUX',
        'name': 'Araguaina Airport',
        'city': 'Araguaina',
    },
    {
        'code': 'AUY',
        'name': 'Vanuatu',
        'city': 'Aneityum',
    },
    {
        'code': 'AVL',
        'name': 'Asheville Regional Airport',
        'city': 'Fletcher',
    },
    {
        'code': 'AVN',
        'name': 'Avignon-Caumont Airport',
        'city': 'Avignon',
    },
    {
        'code': 'AVP',
        'name': 'Wilkes Barre Scranton International Airport',
        'city': 'Pittston',
    },
    {
        'code': 'AVU',
        'name': 'Avu Avu',
        'city': 'Avu Avu',
    },
    {
        'code': 'AVV',
        'name': 'Avalon Airport',
        'city': 'Lara',
    },
    {
        'code': 'AWB',
        'name': 'Awaba',
        'city': 'Awaba',
    },
    {
        'code': 'AWD',
        'name': 'Aniwa Airport',
        'city': 'Aniwa',
    },
    {
        'code': 'AWZ',
        'name': 'Ahvaz Airport',
        'city': 'Ahvaz',
    },
    {
        'code': 'AXA',
        'name': 'Wallblake Airport',
        'city': 'Anguilla',
    },
    {
        'code': 'AXD',
        'name': 'Alexandroupolis Airport',
        'city': 'Alexandroupolis',
    },
    {
        'code': 'AXM',
        'name': 'El Eden Airport',
        'city': 'La Tebaida',
    },
    {
        'code': 'AXP',
        'name': 'Spring Point Airport',
        'city': 'Spring Point',
    },
    {
        'code': 'AXR',
        'name': 'French Polynesia',
        'city': 'Arutua',
    },
    {
        'code': 'AXT',
        'name': 'Akita Airport',
        'city': 'Akita-shi',
    },
    {
        'code': 'AXU',
        'name': 'Axum',
        'city': 'Axum',
    },
    {
        'code': 'AYQ',
        'name': 'Ayers Rock Airport',
        'city': 'Ayers Rock',
    },
    {
        'code': 'AYT',
        'name': 'Antalya Airport',
        'city': 'Antalya',
    },
    {
        'code': 'AZA',
        'name': 'Phoenix-Mesa Gateway Airport',
        'city': 'Phoenix',
    },
    {
        'code': 'AZD',
        'name': 'Yazd Airport',
        'city': 'Yezd',
    },
    {
        'code': 'AZN',
        'name': 'Andizhan Airport',
        'city': 'Andijon',
    },
    {
        'code': 'AZO',
        'name': 'Kalamazoo-Battle Creek International Airport',
        'city': 'Kalamazoo',
    },
    {
        'code': 'AZR',
        'name': 'Touat Airport',
        'city': 'Adrar',
    },
    {
        'code': 'AZS',
        'name': 'Samana El Catey International Airport',
        'city': 'Samana',
    },
    {
        'code': 'BAG',
        'name': 'Baguio Airport',
        'city': 'Baguio City',
    },
    {
        'code': 'BAH',
        'name': 'Bahrain International Airport',
        'city': 'Al Muharraq',
    },
    {
        'code': 'BAL',
        'name': 'Batman Airport',
        'city': 'Batman',
    },
    {
        'code': 'BAQ',
        'name': 'Ernesto Cortissoz Airport',
        'city': 'Soledad',
    },
    {
        'code': 'BAS',
        'name': 'Balalae',
        'city': 'Balalae',
    },
    {
        'code': 'BAU',
        'name': 'Bauru Airport',
        'city': 'Bauru',
    },
    {
        'code': 'BAV',
        'name': 'Baotou Airport',
        'city': 'Baotou',
    },
    {
        'code': 'BAX',
        'name': 'Barnaui West Airport',
        'city': 'Barnaul',
    },
    {
        'code': 'BAY',
        'name': 'Baia Mare',
        'city': 'Baia Mare',
    },
    {
        'code': 'BBA',
        'name': 'Balmaceda Airport',
        'city': 'Balmaceda',
    },
    {
        'code': 'BBI',
        'name': 'Bhubaneswar Airport',
        'city': 'Bhubaneswar',
    },
    {
        'code': 'BBK',
        'name': 'Kasane Airport',
        'city': 'Kasane',
    },
    {
        'code': 'BBN',
        'name': 'Bario Airport',
        'city': 'Nanga Medamit',
    },
    {
        'code': 'BBO',
        'name': 'Berbera Airport',
        'city': 'Berbera',
    },
    {
        'code': 'BBS',
        'name': 'Blackbushe Airport',
        'city': 'Camberley',
    },
    {
        'code': 'BBU',
        'name': 'Aeroportul National Bucuresti-Baneasa',
        'city': 'Bucharest',
    },
    {
        'code': 'BCA',
        'name': 'Baracoa Airport',
        'city': 'Baracoa',
    },
    {
        'code': 'BCD',
        'name': 'Bacolod Airport',
        'city': 'Bacolod City',
    },
    {
        'code': 'BCI',
        'name': 'Barcaldine Aerodrome',
        'city': 'Barcaldine',
    },
    {
        'code': 'BCL',
        'name': 'Barra Colorado Airport',
        'city': 'Colorado',
    },
    {
        'code': 'BCM',
        'name': 'Luizi Calugara Airport',
        'city': 'Bac\u00e6u',
    },
    {
        'code': 'BCN',
        'name': 'Barcelona International Airport',
        'city': 'El Prat de Llobregat',
    },
    {
        'code': 'BDA',
        'name': 'Bermuda International Airport',
        'city': 'St. George',
    },
    {
        'code': 'BDB',
        'name': 'Bundaberg Airport',
        'city': 'Bundaberg',
    },
    {
        'code': 'BDD',
        'name': 'Badu Island Airport',
        'city': 'Badu Island',
    },
    {
        'code': 'BDH',
        'name': 'Bandar Lengeh Airport',
        'city': 'Bandar Abbas',
    },
    {
        'code': 'BDJ',
        'name': 'Syamsuddin Noor Airport',
        'city': 'Banjarmasin',
    },
    {
        'code': 'BDL',
        'name': 'Bradley International Airport',
        'city': 'Windsor Locks',
    },
    {
        'code': 'BDO',
        'name': 'Husein Sastranegara Airport',
        'city': 'Bandung',
    },
    {
        'code': 'BDP',
        'name': 'Bhadrapur',
        'city': 'Bhadrapur',
    },
    {
        'code': 'BDQ',
        'name': 'Vadodara Airport',
        'city': 'Vadodara',
    },
    {
        'code': 'BDR',
        'name': 'Igor I Sikorsky Memorial Airport',
        'city': 'Stratford',
    },
    {
        'code': 'BDS',
        'name': 'Casale Airport',
        'city': 'Brindisi',
    },
    {
        'code': 'BDU',
        'name': 'Bardufoss Airport',
        'city': 'Bardufoss',
    },
    {
        'code': 'BEB',
        'name': 'Benbecula Airport',
        'city': 'Balivanich',
    },
    {
        'code': 'BEG',
        'name': 'Surcin Airport',
        'city': 'Sur\u010din',
    },
    {
        'code': 'BEL',
        'name': 'Val de Caes International Airport',
        'city': 'Belem',
    },
    {
        'code': 'BEN',
        'name': 'Benina Intl',
        'city': 'Benghazi',
    },
    {
        'code': 'BES',
        'name': 'Guipavas Airport',
        'city': 'Guipavas',
    },
    {
        'code': 'BET',
        'name': 'Bethel Airport',
        'city': 'Bethel',
    },
    {
        'code': 'BEU',
        'name': 'Bedourie Aerodrome',
        'city': 'Bedourie',
    },
    {
        'code': 'BEW',
        'name': 'Beira Airport',
        'city': 'Beira',
    },
    {
        'code': 'BEY',
        'name': 'Beirut International Airport',
        'city': 'Beirut',
    },
    {
        'code': 'BFD',
        'name': 'Bradford Regional Airport',
        'city': 'Lewis Run',
    },
    {
        'code': 'BFE',
        'name': 'Bielefeld',
        'city': 'Bielefeld',
    },
    {
        'code': 'BFF',
        'name': 'William B Heilig Field Airport',
        'city': 'Scottsbluff',
    },
    {
        'code': 'BFI',
        'name': 'King County International Airport-Boeing Field',
        'city': 'Seattle',
    },
    {
        'code': 'BFL',
        'name': 'Kern County-Meadows Field Airport',
        'city': 'Bakersfield',
    },
    {
        'code': 'BFN',
        'name': 'J B M Hertzog Airport',
        'city': 'Bloemfontein',
    },
    {
        'code': 'BFS',
        'name': 'Aldergrove Airport',
        'city': 'Crumlin',
    },
    {
        'code': 'BFV',
        'name': 'Buri Ram',
        'city': 'Buri Ram',
    },
    {
        'code': 'BGA',
        'name': 'Palonegro Airport',
        'city': 'Bucaramanga',
    },
    {
        'code': 'BGF',
        'name': 'Bangui M Poko Airport',
        'city': 'Bangui',
    },
    {
        'code': 'BGI',
        'name': 'Grantley Adams International Airport',
        'city': 'Bridgetown',
    },
    {
        'code': 'BGM',
        'name': 'Greater Binghamton Edwin A Link Field Airport',
        'city': 'Johnson City',
    },
    {
        'code': 'BGO',
        'name': 'Bergen Flesland Airport',
        'city': 'Blomsterdalen',
    },
    {
        'code': 'BGR',
        'name': 'Bangor International Airport',
        'city': 'Bangor',
    },
    {
        'code': 'BGW',
        'name': 'Al Muthana Airport',
        'city': 'Baghdad',
    },
    {
        'code': 'BGY',
        'name': 'Orio Al Serio Airport',
        'city': 'Grassobbio',
    },
    {
        'code': 'BHB',
        'name': 'Hancock County-Bar Harbor Airport',
        'city': 'Ellsworth',
    },
    {
        'code': 'BHD',
        'name': 'George Best Belfast City Airport',
        'city': 'Belfast',
    },
    {
        'code': 'BHE',
        'name': 'Woodbourne Airport',
        'city': 'Blenheim',
    },
    {
        'code': 'BHG',
        'name': 'Brus Laguna Airport',
        'city': 'Brus Laguna',
    },
    {
        'code': 'BHH',
        'name': 'Bisha Airport',
        'city': 'Bisha',
    },
    {
        'code': 'BHI',
        'name': 'Bahia Blanca Cte Espora Naval Air Base',
        'city': 'Punta Alta',
    },
    {
        'code': 'BHJ',
        'name': 'Bhuj Airport',
        'city': 'Bhuj',
    },
    {
        'code': 'BHK',
        'name': 'Bukhara Airport',
        'city': 'Bukhara',
    },
    {
        'code': 'BHM',
        'name': 'Birmingham International Airport',
        'city': 'Birmingham',
    },
    {
        'code': 'BHO',
        'name': 'Bairagarh Airport',
        'city': 'Bhopal',
    },
    {
        'code': 'BHQ',
        'name': 'Broken Hill Airport',
        'city': 'Broken Hill',
    },
    {
        'code': 'BHR',
        'name': 'Bharatpur',
        'city': 'Bharatpur',
    },
    {
        'code': 'BHS',
        'name': 'Bathurst Airport',
        'city': 'Bathurst',
    },
    {
        'code': 'BHU',
        'name': 'Bhavnagar Airport',
        'city': 'Bhavnagar',
    },
    {
        'code': 'BHV',
        'name': 'Bahawalpur Airport',
        'city': 'Bahawalpur',
    },
    {
        'code': 'BHX',
        'name': 'Birmingham International Airport',
        'city': 'Birmingham',
    },
    {
        'code': 'BHY',
        'name': 'Beihai',
        'city': 'Beihai',
    },
    {
        'code': 'BIA',
        'name': 'Poretta Airport',
        'city': 'Borgo',
    },
    {
        'code': 'BID',
        'name': 'Block Island State Airport',
        'city': 'Block Island',
    },
    {
        'code': 'BII',
        'name': 'Enyu Airfield',
        'city': 'Bikini Atoll',
    },
    {
        'code': 'BIK',
        'name': 'Frans Kaisiepo Airport',
        'city': 'Biak',
    },
    {
        'code': 'BIL',
        'name': 'Logan International Airport',
        'city': 'Billings',
    },
    {
        'code': 'BIM',
        'name': 'South Bimini Airport',
        'city': 'Bailey\'s Town',
    },
    {
        'code': 'BIO',
        'name': 'Bilbao Airport',
        'city': 'Loiu',
    },
    {
        'code': 'BIQ',
        'name': 'Anglet Airport',
        'city': 'Anglet',
    },
    {
        'code': 'BIR',
        'name': 'Biratnagar Airport',
        'city': 'Biratnagur',
    },
    {
        'code': 'BIS',
        'name': 'Bismarck Municipal Airport',
        'city': 'Bismarck',
    },
    {
        'code': 'BJA',
        'name': 'Soummam Airport',
        'city': 'Bejaia',
    },
    {
        'code': 'BJB',
        'name': 'Bojnord',
        'city': 'Bojnord',
    },
    {
        'code': 'BJF',
        'name': 'Batsfjord Airport',
        'city': 'Baasfjord',
    },
    {
        'code': 'BJI',
        'name': 'Bemidji-Beltrami County Airport',
        'city': 'Bemidji',
    },
    {
        'code': 'BJL',
        'name': 'Yundum International Airport',
        'city': 'Yundum',
    },
    {
        'code': 'BJM',
        'name': 'Bujumbura Airport',
        'city': 'Bujumbura',
    },
    {
        'code': 'BJR',
        'name': 'Ethiopia',
        'city': 'Bahar Dar',
    },
    {
        'code': 'BJV',
        'name': 'Milas Airport',
        'city': 'Bodrum',
    },
    {
        'code': 'BJW',
        'name': 'Bajawa Airport',
        'city': 'Ende',
    },
    {
        'code': 'BJX',
        'name': 'Silao Airport',
        'city': 'Silao',
    },
    {
        'code': 'BJZ',
        'name': 'Talavera la Real Airport',
        'city': 'Badajoz',
    },
    {
        'code': 'BKA',
        'name': 'Bykovo Airport',
        'city': 'Lyubertsy',
    },
    {
        'code': 'BKC',
        'name': 'Buckland Airport',
        'city': 'Buckland',
    },
    {
        'code': 'BKI',
        'name': 'Kota Kinabalu Airport',
        'city': 'Kota Kinabalu',
    },
    {
        'code': 'BKK',
        'name': 'Bangkok International Airport',
        'city': 'Lak Si',
    },
    {
        'code': 'BKL',
        'name': 'Burke Lakefront Airport',
        'city': 'Cleveland',
    },
    {
        'code': 'BKM',
        'name': 'Malaysia',
        'city': 'Bakalalan',
    },
    {
        'code': 'BKO',
        'name': 'Bamako Senou Airport',
        'city': 'Kalaban',
    },
    {
        'code': 'BKQ',
        'name': 'Blackall Aerodrome',
        'city': 'Mount Enniskillen',
    },
    {
        'code': 'BKS',
        'name': 'Padangkemiling Airport',
        'city': 'Bengkulu',
    },
    {
        'code': 'BKW',
        'name': 'Raleigh County Memorial Airport',
        'city': 'Beaver',
    },
    {
        'code': 'BKY',
        'name': 'Bukavu Kavumu Airport',
        'city': 'Bukavu',
    },
    {
        'code': 'BLA',
        'name': 'Jose Antonio Anzoategui Airport',
        'city': 'Pariagu\u00e1n',
    },
    {
        'code': 'BLE',
        'name': 'Dala Airport',
        'city': 'Borlange',
    },
    {
        'code': 'BLI',
        'name': 'Bellingham International Airport',
        'city': 'Bellingham',
    },
    {
        'code': 'BLJ',
        'name': 'Algeria',
        'city': 'Batna',
    },
    {
        'code': 'BLK',
        'name': 'Blackpool Airport',
        'city': 'Blackpool',
    },
    {
        'code': 'BLL',
        'name': 'Billund Airport',
        'city': 'Billund',
    },
    {
        'code': 'BLQ',
        'name': 'Bologna Airport',
        'city': 'Bologna',
    },
    {
        'code': 'BLR',
        'name': 'HAL Bangalore International Airport',
        'city': 'Bangalore',
    },
    {
        'code': 'BLT',
        'name': 'Blackwater Aerodrome',
        'city': 'Baralaba',
    },
    {
        'code': 'BLV',
        'name': 'Belleville',
        'city': 'Belleville',
    },
    {
        'code': 'BLZ',
        'name': 'Chileka International Airport',
        'city': 'Lunzu',
    },
    {
        'code': 'BMA',
        'name': 'Bromma Airport',
        'city': 'Bromma',
    },
    {
        'code': 'BME',
        'name': 'Broome International Airport',
        'city': 'Broome',
    },
    {
        'code': 'BMI',
        'name': 'Bloomington Normal Airport',
        'city': 'Bloomington',
    },
    {
        'code': 'BMK',
        'name': 'Borkum Airport',
        'city': 'Borkum',
    },
    {
        'code': 'BMO',
        'name': 'Bhamo Airport',
        'city': 'Bhamo',
    },
    {
        'code': 'BMU',
        'name': 'Mohammad Salahuddin Airport',
        'city': 'Raba',
    },
    {
        'code': 'BMV',
        'name': 'Ban Me Thaut',
        'city': 'Banmethuot',
    },
    {
        'code': 'BMW',
        'name': 'Algeria',
        'city': 'Bordj Badji Mokhtar',
    },
    {
        'code': 'BMY',
        'name': 'Belep Island',
        'city': 'Belep Island',
    },
    {
        'code': 'BNA',
        'name': 'Nashville International Airport',
        'city': 'Nashville',
    },
    {
        'code': 'BND',
        'name': 'Bandar Abbass International Airport',
        'city': 'Bandar Abbas',
    },
    {
        'code': 'BNE',
        'name': 'Brisbane International Airport',
        'city': 'Brisbane',
    },
    {
        'code': 'BNI',
        'name': 'Benin Airport',
        'city': 'Benin City',
    },
    {
        'code': 'BNJ',
        'name': 'Hangelar',
        'city': 'Bonn',
    },
    {
        'code': 'BNK',
        'name': 'Ballina Airport',
        'city': 'Ballina',
    },
    {
        'code': 'BNN',
        'name': 'Bronnoy Airport',
        'city': 'Bronnoysund',
    },
    {
        'code': 'BNS',
        'name': 'Barinas Airport',
        'city': 'Barinas',
    },
    {
        'code': 'BNX',
        'name': 'Banja Luka Airport',
        'city': 'Banja Luka',
    },
    {
        'code': 'BNY',
        'name': 'Bellona Airport',
        'city': 'Bellona',
    },
    {
        'code': 'BOB',
        'name': 'Motu-Mute Airport',
        'city': 'Papeete',
    },
    {
        'code': 'BOC',
        'name': 'Bocas del Toro Airport',
        'city': 'Bocas del Toro',
    },
    {
        'code': 'BOD',
        'name': 'Bordeaux Airport',
        'city': 'Merignac',
    },
    {
        'code': 'BOG',
        'name': 'Eldorado International Airport',
        'city': 'Fontib\u00f3n',
    },
    {
        'code': 'BOH',
        'name': 'Bournemouth International Airport',
        'city': 'Christchurch',
    },
    {
        'code': 'BOI',
        'name': 'Boise Air Terminal',
        'city': 'Boise',
    },
    {
        'code': 'BOJ',
        'name': 'Bourgas Airport',
        'city': 'Burgas',
    },
    {
        'code': 'BOM',
        'name': 'Chhatrapati Shivaji International Airport',
        'city': 'Mumbai',
    },
    {
        'code': 'BON',
        'name': 'Flamingo Airport',
        'city': 'Kralendijk',
    },
    {
        'code': 'BOO',
        'name': 'Bodo Airport',
        'city': 'Bodo',
    },
    {
        'code': 'BOS',
        'name': 'Gen E L Logan International Airport',
        'city': 'Boston',
    },
    {
        'code': 'BOW',
        'name': 'Bartow Municipal Airport',
        'city': 'Bartow',
    },
    {
        'code': 'BOY',
        'name': 'Bobo Dioulasso Airport',
        'city': 'Bobo-Dioulasso',
    },
    {
        'code': 'BPN',
        'name': 'Sepinggan Airport',
        'city': 'Balikpapan',
    },
    {
        'code': 'BPS',
        'name': 'Porto Seguro Airport',
        'city': 'Porto Seguro',
    },
    {
        'code': 'BPT',
        'name': 'Jefferson County Airport',
        'city': 'Beaumont',
    },
    {
        'code': 'BPX',
        'name': 'Bangda Airport',
        'city': 'Qamdo',
    },
    {
        'code': 'BPY',
        'name': 'Besalampy Airport',
        'city': 'Besalampy',
    },
    {
        'code': 'BQK',
        'name': 'Glynco Jetport Airport',
        'city': 'Brunswick',
    },
    {
        'code': 'BQL',
        'name': 'Boulia Aerodrome',
        'city': 'Boulia',
    },
    {
        'code': 'BQN',
        'name': 'Rafael Hernandez Airport',
        'city': 'Aguadilla',
    },
    {
        'code': 'BQS',
        'name': 'Blagoveshchensk Northwest Airport',
        'city': 'Blagoveshchensk',
    },
    {
        'code': 'BRA',
        'name': 'Barreiras Airport',
        'city': 'Barreiras',
    },
    {
        'code': 'BRC',
        'name': 'San Carlos de Bariloche Airport',
        'city': 'San Carlos DeBariloche',
    },
    {
        'code': 'BRD',
        'name': 'Brainerd-Crow Wing County Regional Airport',
        'city': 'Brainerd',
    },
    {
        'code': 'BRE',
        'name': 'Bremen Airport',
        'city': 'Bremen',
    },
    {
        'code': 'BRF',
        'name': 'United Kingdom',
        'city': 'Bradford',
    },
    {
        'code': 'BRI',
        'name': 'Palese Macchie Airport',
        'city': 'Bari',
    },
    {
        'code': 'BRK',
        'name': 'Bourke Airport',
        'city': 'Bourke',
    },
    {
        'code': 'BRL',
        'name': 'Burlington Municipal Airport',
        'city': 'Burlington',
    },
    {
        'code': 'BRM',
        'name': 'Barquisimeto Airport',
        'city': 'Barquisimeto',
    },
    {
        'code': 'BRN',
        'name': 'Bern Belp Airport',
        'city': 'Belp',
    },
    {
        'code': 'BRO',
        'name': 'Brownsville-South Padre Island International Air',
        'city': 'Brownsville',
    },
    {
        'code': 'BRQ',
        'name': 'Turany Airport',
        'city': 'Brno',
    },
    {
        'code': 'BRR',
        'name': 'North Bay Airport',
        'city': 'Barra',
    },
    {
        'code': 'BRS',
        'name': 'Bristol International Airport',
        'city': 'Bristol',
    },
    {
        'code': 'BRU',
        'name': 'Brussels Airport',
        'city': 'Bruxelles',
    },
    {
        'code': 'BRV',
        'name': 'Bremerhaven Airport',
        'city': 'Bad Bederkesa',
    },
    {
        'code': 'BRW',
        'name': 'Wiley Post Will Rogers Memorial Airport',
        'city': 'Barrow',
    },
    {
        'code': 'BSA',
        'name': 'Somalia',
        'city': 'Bossaso',
    },
    {
        'code': 'BSB',
        'name': 'Juscelino Kubitschek International Airport',
        'city': 'Lago Sul',
    },
    {
        'code': 'BSC',
        'name': 'Jose Celestino Mutis Airport',
        'city': 'Bah\u00eda Solano',
    },
    {
        'code': 'BSD',
        'name': 'Baoshan Airport',
        'city': 'Baoshan',
    },
    {
        'code': 'BSG',
        'name': 'Bata Airport',
        'city': 'Bata',
    },
    {
        'code': 'BSH',
        'name': 'Brighton Airport',
        'city': 'Brighton',
    },
    {
        'code': 'BSK',
        'name': 'Biskra Airport',
        'city': 'Biskra',
    },
    {
        'code': 'BSL',
        'name': 'Euroairport Basel-Mulhouse-Freiburg',
        'city': 'St-Ludwig',
    },
    {
        'code': 'BSO',
        'name': 'Basco Airport',
        'city': 'Basco',
    },
    {
        'code': 'BSR',
        'name': 'Basrah International Airport',
        'city': 'Gawad',
    },
    {
        'code': 'BSX',
        'name': 'Bassein',
        'city': 'Bassein',
    },
    {
        'code': 'BTH',
        'name': 'Hang Nadim Airport',
        'city': 'Batam',
    },
    {
        'code': 'BTI',
        'name': 'Barter Island Airport',
        'city': 'Kaktovik',
    },
    {
        'code': 'BTJ',
        'name': 'Blangbintang Airport',
        'city': 'Banda Aceh',
    },
    {
        'code': 'BTK',
        'name': 'Bratsk',
        'city': 'Bratsk',
    },
    {
        'code': 'BTL',
        'name': 'W K Kellogg Airport',
        'city': 'Battle Creek',
    },
    {
        'code': 'BTM',
        'name': 'Bert Mooney Airport',
        'city': 'Butte',
    },
    {
        'code': 'BTR',
        'name': 'Baton Rouge Metropolitan Airport',
        'city': 'Baton Rouge',
    },
    {
        'code': 'BTS',
        'name': 'Bratislava Airport',
        'city': 'Bratislava',
    },
    {
        'code': 'BTT',
        'name': 'Bettles Airport',
        'city': 'Bettles',
    },
    {
        'code': 'BTU',
        'name': 'Bintulu Airport',
        'city': 'Bintulu',
    },
    {
        'code': 'BTV',
        'name': 'Burlington International Airport',
        'city': 'South Burlington',
    },
    {
        'code': 'BTZ',
        'name': 'Bursa Airport',
        'city': 'Bursa',
    },
    {
        'code': 'BUA',
        'name': 'Buka',
        'city': 'Buka',
    },
    {
        'code': 'BUC',
        'name': 'Burketown Aerodrome',
        'city': 'Burketown',
    },
    {
        'code': 'BUD',
        'name': 'Ferihegy Airport',
        'city': 'Budapest',
    },
    {
        'code': 'BUF',
        'name': 'Greater Buffalo International Airport',
        'city': 'Buffalo',
    },
    {
        'code': 'BUL',
        'name': 'Bulolo',
        'city': 'Bulolo',
    },
    {
        'code': 'BUN',
        'name': 'Buenaventura Airport',
        'city': 'Buenaventura',
    },
    {
        'code': 'BUO',
        'name': 'Burao',
        'city': 'Burao',
    },
    {
        'code': 'BUQ',
        'name': 'Bulawayo Airport',
        'city': 'Bulawayo',
    },
    {
        'code': 'BUR',
        'name': 'Burbank Glendale Pasadena Airport',
        'city': 'Burbank',
    },
    {
        'code': 'BUS',
        'name': 'Batumi',
        'city': 'Batumi',
    },
    {
        'code': 'BUX',
        'name': 'Bunia Airport',
        'city': 'Bunia',
    },
    {
        'code': 'BUZ',
        'name': 'Bushehr Airport',
        'city': 'Bandar-e Bushehr',
    },
    {
        'code': 'BVA',
        'name': 'Beauvais-Tille Airport',
        'city': 'Beauvais',
    },
    {
        'code': 'BVB',
        'name': 'Boa Vista International Airport',
        'city': 'Boa Vista',
    },
    {
        'code': 'BVC',
        'name': 'Boa Vista Airport',
        'city': 'Boa Vista',
    },
    {
        'code': 'BVE',
        'name': 'La Roche Airport',
        'city': 'Brive-la-Gaillarde',
    },
    {
        'code': 'BVG',
        'name': 'Berlevag Airport',
        'city': 'Berlevaag',
    },
    {
        'code': 'BVH',
        'name': 'Brigadeiro Camarao Airport',
        'city': 'Vilhena',
    },
    {
        'code': 'BVI',
        'name': 'Birdsville Airport',
        'city': 'Birdsville',
    },
    {
        'code': 'BWA',
        'name': 'Bhairawa Airport',
        'city': 'Bhairawa',
    },
    {
        'code': 'BWE',
        'name': 'Braunschweig Airport',
        'city': 'Braunschweig',
    },
    {
        'code': 'BWF',
        'name': 'Walney Island Airport',
        'city': 'Barrow in Furness',
    },
    {
        'code': 'BWI',
        'name': 'Baltimore-Washington International Thurgood Mars',
        'city': 'Baltimore',
    },
    {
        'code': 'BWK',
        'name': 'Bol',
        'city': 'Bol',
    },
    {
        'code': 'BWN',
        'name': 'Brunei International Airport',
        'city': 'Bandar Seri Begawan',
    },
    {
        'code': 'BWT',
        'name': 'Burnie Wynyard Airport',
        'city': 'Doctors Rocks',
    },
    {
        'code': 'BWW',
        'name': 'Santa Clara Airport',
        'city': 'Santa Clara',
    },
    {
        'code': 'BXR',
        'name': 'Bam',
        'city': 'Bam',
    },
    {
        'code': 'BXU',
        'name': 'Butuan Airport',
        'city': 'Buenavista',
    },
    {
        'code': 'BYM',
        'name': 'Bayamo Airport',
        'city': 'Bayamo',
    },
    {
        'code': 'BYN',
        'name': 'Bayankhongor',
        'city': 'Bayankhongor',
    },
    {
        'code': 'BZE',
        'name': 'Philip S W Goldson International Airport',
        'city': 'Hattieville',
    },
    {
        'code': 'BZG',
        'name': 'Szwederowo Airport',
        'city': 'Bia\u0142e B\u0142ota',
    },
    {
        'code': 'BZK',
        'name': 'Briansk',
        'city': 'Briansk',
    },
    {
        'code': 'BZL',
        'name': 'Barisal',
        'city': 'Barisal',
    },
    {
        'code': 'BZN',
        'name': 'Gallatin Field Airport',
        'city': 'Bozeman',
    },
    {
        'code': 'BZO',
        'name': 'Bolzano Airport',
        'city': 'Botzen',
    },
    {
        'code': 'BZR',
        'name': 'Vias Airport',
        'city': 'Villeneuve',
    },
    {
        'code': 'BZV',
        'name': 'Brazzaville Maya Maya Airport',
        'city': 'Brazzaville',
    },
    {
        'code': 'BZZ',
        'name': 'Brize Norton Airport',
        'city': 'Carterton',
    },
    {
        'code': 'CAB',
        'name': 'Cabinda Airport',
        'city': 'Cabinda',
    },
    {
        'code': 'CAC',
        'name': 'Cascavel Airport',
        'city': 'Cascavel',
    },
    {
        'code': 'CAE',
        'name': 'Columbia Metropolitan Airport',
        'city': 'West Columbia',
    },
    {
        'code': 'CAG',
        'name': 'Elmas Airport',
        'city': 'Sardara',
    },
    {
        'code': 'CAH',
        'name': 'Camo',
        'city': 'Ca Mau',
    },
    {
        'code': 'CAI',
        'name': 'Cairo International Airport',
        'city': 'Cairo',
    },
    {
        'code': 'CAK',
        'name': 'Akron Canton Regional Airport',
        'city': 'Canton',
    },
    {
        'code': 'CAL',
        'name': 'Campbeltown Airport',
        'city': 'Campbeltown',
    },
    {
        'code': 'CAN',
        'name': 'Baiyun Airport',
        'city': 'Guangzhou',
    },
    {
        'code': 'CAP',
        'name': 'Cap Haitien Airport',
        'city': 'Cap-Ha\u00eftien',
    },
    {
        'code': 'CAX',
        'name': 'Carlisle Airport',
        'city': 'Carlisle',
    },
    {
        'code': 'CAY',
        'name': 'Rochambeau',
        'city': 'Cayenne',
    },
    {
        'code': 'CAZ',
        'name': 'Cobar Airport',
        'city': 'Canbelego',
    },
    {
        'code': 'CBB',
        'name': 'Jorge Wilsterman Airport',
        'city': 'Cochabamba',
    },
    {
        'code': 'CBG',
        'name': 'Cambridge Airport',
        'city': 'Cambridge',
    },
    {
        'code': 'CBH',
        'name': 'Bechar Airport',
        'city': 'Bechar',
    },
    {
        'code': 'CBO',
        'name': 'Cotabato Airport',
        'city': 'Sultan Kudarat',
    },
    {
        'code': 'CBQ',
        'name': 'Calabar Airport',
        'city': 'Duke Town',
    },
    {
        'code': 'CBR',
        'name': 'Canberra International Airport',
        'city': 'Canberra',
    },
    {
        'code': 'CBT',
        'name': 'Angola',
        'city': 'Catumbela',
    },
    {
        'code': 'CCC',
        'name': 'Cuba',
        'city': 'Cayo Coco',
    },
    {
        'code': 'CCF',
        'name': 'Salvaza Airport',
        'city': 'Carcassonne',
    },
    {
        'code': 'CCJ',
        'name': 'Kozhikode Airport',
        'city': 'Pallikkal',
    },
    {
        'code': 'CCK',
        'name': 'Cocos Airport',
        'city': 'West Island',
    },
    {
        'code': 'CCM',
        'name': 'Criciuma Airport',
        'city': 'Forquilhinha',
    },
    {
        'code': 'CCP',
        'name': 'Carriel Sur International Airport',
        'city': 'Hualpencillo',
    },
    {
        'code': 'CCS',
        'name': 'Simon Bolivar International Airport',
        'city': 'Catia la Mar',
    },
    {
        'code': 'CCU',
        'name': 'Netaji Subhash Chandra Bose International Airpor',
        'city': 'Kolkata',
    },
    {
        'code': 'CCV',
        'name': 'Vanuatu',
        'city': 'Craig Cove',
    },
    {
        'code': 'CCZ',
        'name': 'Chub Cay Airport',
        'city': 'Chub Cay',
    },
    {
        'code': 'CDB',
        'name': 'Cold Bay Airport',
        'city': 'Cold Bay',
    },
    {
        'code': 'CDC',
        'name': 'Cedar City Municipal Airport',
        'city': 'Cedar City',
    },
    {
        'code': 'CDG',
        'name': 'Charles de Gaulle International Airport',
        'city': 'Le Mesnil-Amelot',
    },
    {
        'code': 'CDR',
        'name': 'Chadron Municipal Airport',
        'city': 'Chadron',
    },
    {
        'code': 'CDV',
        'name': 'Merle K Mudhole Smith Airport',
        'city': 'Cordova',
    },
    {
        'code': 'CDW',
        'name': 'Essex County Airport',
        'city': 'Fairfield',
    },
    {
        'code': 'CEB',
        'name': 'Lahug Airport',
        'city': 'Cebu',
    },
    {
        'code': 'CEC',
        'name': 'Jack Mcnamara Field Airport',
        'city': 'Crescent City',
    },
    {
        'code': 'CED',
        'name': 'Ceduna Airport',
        'city': 'Ceduna',
    },
    {
        'code': 'CEE',
        'name': 'Cherepovets Airport',
        'city': 'Cherepovets',
    },
    {
        'code': 'CEG',
        'name': 'Hawarden Airport',
        'city': 'Chester',
    },
    {
        'code': 'CEI',
        'name': 'Chiang Rai Airport',
        'city': 'Chiang Rai',
    },
    {
        'code': 'CEK',
        'name': 'Chelyabinsk Balandino Airport',
        'city': 'Zlatoust',
    },
    {
        'code': 'CEM',
        'name': 'Central Airport',
        'city': 'Circle',
    },
    {
        'code': 'CEN',
        'name': 'Ciudad Obregon Airport',
        'city': 'Ciudad Obreg\u00f3n',
    },
    {
        'code': 'CEZ',
        'name': 'Cortez-Montezuma County Airport',
        'city': 'Cortez',
    },
    {
        'code': 'CFC',
        'name': 'Cacador Airport',
        'city': 'Ca\u00e7ador',
    },
    {
        'code': 'CFE',
        'name': 'Aulnat Airport',
        'city': 'Aulnat',
    },
    {
        'code': 'CFK',
        'name': 'Abou Bakr Belkaid',
        'city': 'Chlef',
    },
    {
        'code': 'CFN',
        'name': 'Carrickfin Airport',
        'city': 'Mullaghduff',
    },
    {
        'code': 'CFR',
        'name': 'Carpiquet Airport',
        'city': 'Carpiquet',
    },
    {
        'code': 'CFS',
        'name': 'Coffs Harbour Airport',
        'city': 'Coffs Harbour',
    },
    {
        'code': 'CFU',
        'name': 'Kerkira Airport',
        'city': 'Corcyra',
    },
    {
        'code': 'CGA',
        'name': 'Craig Seaplane Base',
        'city': 'Craig',
    },
    {
        'code': 'CGB',
        'name': 'Marechal Rondon International Airport',
        'city': 'Cuiaba',
    },
    {
        'code': 'CGD',
        'name': 'Changde Airport',
        'city': 'Changde',
    },
    {
        'code': 'CGH',
        'name': 'Congonhas International Airport',
        'city': 'Sao Paulo',
    },
    {
        'code': 'CGI',
        'name': 'Cape Girardeau Municipal Airport',
        'city': 'Scott City',
    },
    {
        'code': 'CGK',
        'name': 'Jakarta International Airport',
        'city': 'Tangerang',
    },
    {
        'code': 'CGM',
        'name': 'Philippines',
        'city': 'Camiguin',
    },
    {
        'code': 'CGN',
        'name': 'Cologne Bonn Airport',
        'city': 'Cologne',
    },
    {
        'code': 'CGO',
        'name': 'Zhengzhou Airport',
        'city': 'Zhengzhou',
    },
    {
        'code': 'CGP',
        'name': 'Chittagong Airport',
        'city': 'Chittagong',
    },
    {
        'code': 'CGQ',
        'name': 'Dafang Shen Airport',
        'city': 'Changchun',
    },
    {
        'code': 'CGR',
        'name': 'Campo Grande International Airport',
        'city': 'Campo Grande',
    },
    {
        'code': 'CGY',
        'name': 'Cagayan de Oro Airport',
        'city': 'Cagayan de Oro',
    },
    {
        'code': 'CHA',
        'name': 'Chattanooga Metropolitan Airport',
        'city': 'Chattanooga',
    },
    {
        'code': 'CHC',
        'name': 'Christchurch International Airport',
        'city': 'Christchurch',
    },
    {
        'code': 'CHO',
        'name': 'Charlottesville Albemarle Airport',
        'city': 'Earlysville',
    },
    {
        'code': 'CHQ',
        'name': 'Souda Airport',
        'city': 'Canea',
    },
    {
        'code': 'CHS',
        'name': 'Charleston International Airport',
        'city': 'North Charleston',
    },
    {
        'code': 'CHT',
        'name': 'Karewa',
        'city': 'Chatham Island',
    },
    {
        'code': 'CHU',
        'name': 'Chuathbaluk',
        'city': 'Chuathbaluk',
    },
    {
        'code': 'CHY',
        'name': 'Choiseul Bay',
        'city': 'Choiseul Bay',
    },
    {
        'code': 'CIA',
        'name': 'Ciampino Airport',
        'city': 'Rome',
    },
    {
        'code': 'CIC',
        'name': 'Chico Municipal Airport',
        'city': 'Chico',
    },
    {
        'code': 'CID',
        'name': 'Cedar Rapids Municipal Airport',
        'city': 'Cedar Rapids',
    },
    {
        'code': 'CIF',
        'name': 'Chifeng',
        'city': 'Chifeng',
    },
    {
        'code': 'CIH',
        'name': 'Changzhi',
        'city': 'Changzhi',
    },
    {
        'code': 'CIJ',
        'name': 'E. Beltram Airport',
        'city': 'Cobija',
    },
    {
        'code': 'CIK',
        'name': 'Chalkyitsik Airport',
        'city': 'Chalkyitsik',
    },
    {
        'code': 'CIP',
        'name': 'Chipata',
        'city': 'Chipata',
    },
    {
        'code': 'CIT',
        'name': 'Shimkent',
        'city': 'Shimkent',
    },
    {
        'code': 'CIU',
        'name': 'Chippewa County International Airport',
        'city': 'Kincheloe',
    },
    {
        'code': 'CIW',
        'name': 'Canouan Airport',
        'city': 'Canouan Island',
    },
    {
        'code': 'CIX',
        'name': 'Cap J A Quinones Gonzales Airport',
        'city': 'Chiclayo',
    },
    {
        'code': 'CJA',
        'name': 'Maj Gen Fap A R Iglesias Airport',
        'city': 'Cajamarca',
    },
    {
        'code': 'CJB',
        'name': 'Peelamedu Airport',
        'city': 'Coimbatore',
    },
    {
        'code': 'CJC',
        'name': 'El Loa Airport',
        'city': 'Calama',
    },
    {
        'code': 'CJJ',
        'name': 'Cheongju International Airport',
        'city': 'Naesu-Eup',
    },
    {
        'code': 'CJL',
        'name': 'Chitral Airport',
        'city': 'Chitral',
    },
    {
        'code': 'CJS',
        'name': 'Ciudad Juarez International Airport',
        'city': 'Ciudad Juarez',
    },
    {
        'code': 'CJU',
        'name': 'Cheju International Airport',
        'city': 'Jeju-Si',
    },
    {
        'code': 'CKB',
        'name': 'Benedum Airport',
        'city': 'Clarksburg',
    },
    {
        'code': 'CKD',
        'name': 'Crooked Creek Airport',
        'city': 'Aniak',
    },
    {
        'code': 'CKG',
        'name': 'Chongqing Jiangbei International',
        'city': 'Chongqing',
    },
    {
        'code': 'CKH',
        'name': 'Russia',
        'city': 'Chokurdah',
    },
    {
        'code': 'CKS',
        'name': 'Carajas Airport',
        'city': 'Carajas',
    },
    {
        'code': 'CKX',
        'name': 'Chicken Airport',
        'city': 'Tok',
    },
    {
        'code': 'CKY',
        'name': 'Conakry Airport',
        'city': 'Conakry',
    },
    {
        'code': 'CKZ',
        'name': 'Abydus',
        'city': 'Canakkale',
    },
    {
        'code': 'CLD',
        'name': 'Mcclellan Palomar Airport',
        'city': 'Carlsbad',
    },
    {
        'code': 'CLE',
        'name': 'Hopkins International Airport',
        'city': 'Cleveland',
    },
    {
        'code': 'CLJ',
        'name': 'Someseni Airport',
        'city': 'Clausemburgo',
    },
    {
        'code': 'CLL',
        'name': 'Easterwood Field Airport',
        'city': 'College Station',
    },
    {
        'code': 'CLM',
        'name': 'William R Fairchild International Airport',
        'city': 'Port Angeles',
    },
    {
        'code': 'CLO',
        'name': 'Alfonso Bonilla Aragon International Airport',
        'city': 'Obando',
    },
    {
        'code': 'CLP',
        'name': 'Clarks Point Airport',
        'city': 'Clarks Point',
    },
    {
        'code': 'CLQ',
        'name': 'Colima Airport',
        'city': 'Cuauht\u00e9moc',
    },
    {
        'code': 'CLT',
        'name': 'Douglas International Airport',
        'city': 'Charlotte',
    },
    {
        'code': 'CLY',
        'name': 'Ste Catherine Airport',
        'city': 'Calenzana',
    },
    {
        'code': 'CMA',
        'name': 'Cunnamulla',
        'city': 'Cunnamulla',
    },
    {
        'code': 'CMB',
        'name': 'Katunayake International Airport',
        'city': 'Gampaha',
    },
    {
        'code': 'CME',
        'name': 'Ciudad del Carmen Airport',
        'city': 'Carmen Olor\u00f3n',
    },
    {
        'code': 'CMF',
        'name': 'Aix les Bains Airport',
        'city': 'La Motte',
    },
    {
        'code': 'CMG',
        'name': 'Corumba International Airport',
        'city': 'Corumba',
    },
    {
        'code': 'CMH',
        'name': 'Port Columbus International Airport',
        'city': 'Columbus',
    },
    {
        'code': 'CMI',
        'name': 'University of Illinois-Willard Airport',
        'city': 'Savoy',
    },
    {
        'code': 'CMN',
        'name': 'Mohamed V Airport',
        'city': 'Casablanca',
    },
    {
        'code': 'CMU',
        'name': 'Chimbu Airport',
        'city': 'Kundiawa',
    },
    {
        'code': 'CMW',
        'name': 'Ignacio Agramonte Airport',
        'city': 'Camag\u00fcey',
    },
    {
        'code': 'CMX',
        'name': 'Houghton County Memorial Airport',
        'city': 'Hancock',
    },
    {
        'code': 'CNB',
        'name': 'Coonamble Airport',
        'city': 'Coonamble',
    },
    {
        'code': 'CNC',
        'name': 'Australia',
        'city': 'Coconut Island',
    },
    {
        'code': 'CND',
        'name': 'Constanta Mihail Kogalniceanu Airport',
        'city': 'Kustenje',
    },
    {
        'code': 'CNF',
        'name': 'Tancredo Neves International Airport',
        'city': 'Confins',
    },
    {
        'code': 'CNJ',
        'name': 'Cloncurry Aerodrome',
        'city': 'Cloncurry',
    },
    {
        'code': 'CNM',
        'name': 'Cavern City Air Terminal Airport',
        'city': 'Carlsbad',
    },
    {
        'code': 'CNP',
        'name': 'Neerlerit Inaat',
        'city': 'Neerlerit Inaat',
    },
    {
        'code': 'CNQ',
        'name': 'Corrientes Airport',
        'city': 'Corrientes',
    },
    {
        'code': 'CNS',
        'name': 'Cairns International Airport',
        'city': 'Cairns',
    },
    {
        'code': 'CNX',
        'name': 'Chiang Mai International Airport',
        'city': 'Chiang Mai',
    },
    {
        'code': 'CNY',
        'name': 'Canyonlands Field Airport',
        'city': 'Thompson',
    },
    {
        'code': 'COD',
        'name': 'Yellowstone Regional Airport',
        'city': 'Cody\/Yellowstone',
    },
    {
        'code': 'COK',
        'name': 'Kochi Airport',
        'city': 'Kochi',
    },
    {
        'code': 'COL',
        'name': 'Coll Island Airport',
        'city': 'Isle of coll',
    },
    {
        'code': 'COO',
        'name': 'Cotonou Cadjehon Airport',
        'city': 'Cotonou',
    },
    {
        'code': 'COQ',
        'name': 'Choybalsan Northeast Airport',
        'city': 'Choibalsan',
    },
    {
        'code': 'COR',
        'name': 'Ingeniero Ambrosio L.V. Taravella International ',
        'city': 'Cordoba',
    },
    {
        'code': 'COS',
        'name': 'City of Colorado Springs Municipal Airport',
        'city': 'Colorado Springs',
    },
    {
        'code': 'COU',
        'name': 'Columbia Regional Airport',
        'city': 'Columbia',
    },
    {
        'code': 'CPC',
        'name': 'Chapelco Airport',
        'city': 'San Martin DeLos Andes',
    },
    {
        'code': 'CPD',
        'name': 'Coober Pedy Aerodrome',
        'city': 'Coober Pedy',
    },
    {
        'code': 'CPE',
        'name': 'Ignacio Alberto Acuna Ongay Airport',
        'city': 'Campeche',
    },
    {
        'code': 'CPH',
        'name': 'Copenhagen Airport',
        'city': 'Kastrup',
    },
    {
        'code': 'CPO',
        'name': 'Chamonate Airport',
        'city': 'Copiap\u00f3',
    },
    {
        'code': 'CPQ',
        'name': 'Campinas International Airport',
        'city': 'Campinas',
    },
    {
        'code': 'CPR',
        'name': 'Natrona County International Airport',
        'city': 'Casper',
    },
    {
        'code': 'CPT',
        'name': 'D F Malan Airport',
        'city': 'Cape Town',
    },
    {
        'code': 'CPV',
        'name': 'Presidente Joao Suassuna Airport',
        'city': 'Campina Grande',
    },
    {
        'code': 'CPX',
        'name': 'Culebra Airport',
        'city': 'Culebra',
    },
    {
        'code': 'CQD',
        'name': 'Shahre-Kord',
        'city': 'Shahre-Kord',
    },
    {
        'code': 'CRA',
        'name': 'Craiova Airport',
        'city': 'Croiova',
    },
    {
        'code': 'CRD',
        'name': 'General Enrique Mosconi Airport',
        'city': 'Comodoro Rivadavia',
    },
    {
        'code': 'CRI',
        'name': 'Colonel Hill Airport',
        'city': 'Colonel Hill',
    },
    {
        'code': 'CRK',
        'name': 'Clark Field Airport',
        'city': 'Mabalacat',
    },
    {
        'code': 'CRL',
        'name': 'Gosselies Airport',
        'city': 'Charleroi',
    },
    {
        'code': 'CRM',
        'name': 'Catarman Airport',
        'city': 'Catarman',
    },
    {
        'code': 'CRP',
        'name': 'Corpus Christi International Airport',
        'city': 'Corpus Christi',
    },
    {
        'code': 'CRW',
        'name': 'Yeager Airport',
        'city': 'Charleston',
    },
    {
        'code': 'CSA',
        'name': 'Isle Of Colonsay',
        'city': 'Isle Of Colonsay',
    },
    {
        'code': 'CSG',
        'name': 'Columbus Metropolitan Airport',
        'city': 'Columbus',
    },
    {
        'code': 'CSH',
        'name': 'Solovky',
        'city': 'Solovetsky',
    },
    {
        'code': 'CSK',
        'name': 'Cap Skiring Airport',
        'city': 'Cap Skirring',
    },
    {
        'code': 'CSX',
        'name': 'Huanghua Airport',
        'city': 'Changsha',
    },
    {
        'code': 'CSY',
        'name': 'Russia',
        'city': 'Cheboksary',
    },
    {
        'code': 'CTA',
        'name': 'Catania Fontanarossa Airport',
        'city': 'Catania',
    },
    {
        'code': 'CTC',
        'name': 'Catamarca Airport',
        'city': 'San Isidro',
    },
    {
        'code': 'CTG',
        'name': 'Rafael Nunez Airport',
        'city': 'La Boquilla',
    },
    {
        'code': 'CTL',
        'name': 'Charleville Aerodrome',
        'city': 'Charleville',
    },
    {
        'code': 'CTM',
        'name': 'Chetumal International Airport',
        'city': 'Chetumal',
    },
    {
        'code': 'CTS',
        'name': 'New Chitose Airport',
        'city': 'Chitose-shi',
    },
    {
        'code': 'CTU',
        'name': 'Chengdushuang Liu Airport',
        'city': 'Chengdu',
    },
    {
        'code': 'CUC',
        'name': 'Camilo Daza Airport',
        'city': 'C\u00facuta',
    },
    {
        'code': 'CUE',
        'name': 'Mariscal Lamar Airport',
        'city': 'Cuenca',
    },
    {
        'code': 'CUF',
        'name': 'Levaldigi Airport',
        'city': 'Fossano',
    },
    {
        'code': 'CUK',
        'name': 'Belize',
        'city': 'Caye Caulker',
    },
    {
        'code': 'CUL',
        'name': 'Culiacan Airport',
        'city': 'Culiacan',
    },
    {
        'code': 'CUM',
        'name': 'Antonio Jose de Sucre Airport',
        'city': 'Cuman\u00e1',
    },
    {
        'code': 'CUN',
        'name': 'Cancun Airport',
        'city': 'Cancun',
    },
    {
        'code': 'CUP',
        'name': 'Gen Jose Francisco Bermudez Airport',
        'city': 'El Pilar',
    },
    {
        'code': 'CUR',
        'name': 'Hato Airport',
        'city': 'Curacao',
    },
    {
        'code': 'CUU',
        'name': 'General R F Villalobos International Airport',
        'city': 'Chihuahua',
    },
    {
        'code': 'CUZ',
        'name': 'Velazco Astete Airport',
        'city': 'San Sebasti\u00e1n',
    },
    {
        'code': 'CVG',
        'name': 'Greater Cincinnati International Airport',
        'city': 'Hebron',
    },
    {
        'code': 'CVM',
        'name': 'Ciudad Victoria Airport',
        'city': 'G\u00fc\u00e9mez',
    },
    {
        'code': 'CVN',
        'name': 'Clovis Municipal Airport',
        'city': 'Texico',
    },
    {
        'code': 'CVQ',
        'name': 'Carnarvon Airport',
        'city': 'Carnarvon',
    },
    {
        'code': 'CVT',
        'name': 'Coventry Airport',
        'city': 'Coventry',
    },
    {
        'code': 'CVU',
        'name': 'Corvo Island Airport',
        'city': 'Corvo',
    },
    {
        'code': 'CWA',
        'name': 'Central Wisconsin Airport',
        'city': 'Mosinee',
    },
    {
        'code': 'CWB',
        'name': 'Afonso Pena International Airport',
        'city': 'Sao Jose dos Pinhais',
    },
    {
        'code': 'CWC',
        'name': 'Chernovtsy Airport',
        'city': 'Chernivtsi',
    },
    {
        'code': 'CWL',
        'name': 'Cardiff International Airport',
        'city': 'Barry',
    },
    {
        'code': 'CXB',
        'name': 'Coxs Bazar Airport',
        'city': 'Cox\'s Bazar',
    },
    {
        'code': 'CXH',
        'name': 'Coal Harbour Airport',
        'city': 'Vancouver',
    },
    {
        'code': 'CXI',
        'name': 'Christmas Island Airport',
        'city': 'Christmas Island',
    },
    {
        'code': 'CXJ',
        'name': 'Campo dos Bugres Airport',
        'city': 'Caxias do Sul',
    },
    {
        'code': 'CXR',
        'name': 'Nha-Trang Airport',
        'city': 'Nha Trang',
    },
    {
        'code': 'CYB',
        'name': 'Gerrard Smith Airport',
        'city': 'Cayman Brac Is',
    },
    {
        'code': 'CYF',
        'name': 'Chefornak Airport',
        'city': 'Chefornak',
    },
    {
        'code': 'CYI',
        'name': 'Chaiyi Airport',
        'city': 'Chiayi City',
    },
    {
        'code': 'CYO',
        'name': 'Cayo Largo del sur Airport',
        'city': 'Cayo Largo Del Sur',
    },
    {
        'code': 'CYP',
        'name': 'Calbayog Airport',
        'city': 'Calbayog',
    },
    {
        'code': 'CYS',
        'name': 'Cheyenne Airport',
        'city': 'Cheyenne',
    },
    {
        'code': 'CYU',
        'name': 'Cuyo',
        'city': 'Cuyo',
    },
    {
        'code': 'CYX',
        'name': 'Cherskiy',
        'city': 'Cherskiy',
    },
    {
        'code': 'CYZ',
        'name': 'Cauayan Airport',
        'city': 'Cauayan',
    },
    {
        'code': 'CZE',
        'name': 'Jose Leonardo Chirinos Airport',
        'city': 'La Vela de Coro',
    },
    {
        'code': 'CZH',
        'name': 'Corozal Airport',
        'city': 'Corozal',
    },
    {
        'code': 'CZL',
        'name': 'Ain El Bey Airport',
        'city': 'Constantine',
    },
    {
        'code': 'CZM',
        'name': 'Cozumel International Airport',
        'city': 'San Miguel de Cozumel',
    },
    {
        'code': 'CZN',
        'name': 'Chisana Airport',
        'city': 'Gakona',
    },
    {
        'code': 'CZS',
        'name': 'Cruzeiro do Sul International Airport',
        'city': 'Cruzeiro Do Sul',
    },
    {
        'code': 'CZU',
        'name': 'Las Brujas Airport',
        'city': 'Morroa',
    },
    {
        'code': 'CZX',
        'name': 'Changzhou Airport',
        'city': 'Changzhou',
    },
    {
        'code': 'DAB',
        'name': 'Daytona Beach International Airport',
        'city': 'Daytona Beach',
    },
    {
        'code': 'DAC',
        'name': 'Zia International Airport Dhaka',
        'city': 'Dhaka',
    },
    {
        'code': 'DAD',
        'name': 'Da Nang Airport',
        'city': 'Tourane',
    },
    {
        'code': 'DAL',
        'name': 'Dallas Love Field Airport',
        'city': 'Dallas',
    },
    {
        'code': 'DAM',
        'name': 'Damascus International Airport',
        'city': 'Damascus',
    },
    {
        'code': 'DAR',
        'name': 'Dar Es Salaam Airport',
        'city': 'Dar es Salaam',
    },
    {
        'code': 'DAT',
        'name': 'Datong',
        'city': 'Datong',
    },
    {
        'code': 'DAU',
        'name': 'Daru Airport',
        'city': 'Daru',
    },
    {
        'code': 'DAX',
        'name': 'Daxian Airport',
        'city': 'Daxian',
    },
    {
        'code': 'DAY',
        'name': 'James M Cox Dayton International Airport',
        'city': 'Dayton',
    },
    {
        'code': 'DBA',
        'name': 'Pakistan',
        'city': 'Dalbandin',
    },
    {
        'code': 'DBO',
        'name': 'Dubbo Airport',
        'city': 'Dubbo',
    },
    {
        'code': 'DBQ',
        'name': 'Dubuque Regional Airport',
        'city': 'Dubuque',
    },
    {
        'code': 'DBV',
        'name': 'Dubrovnik Airport',
        'city': 'Dubrovnik',
    },
    {
        'code': 'DCA',
        'name': 'Washington National Airport',
        'city': 'Arlington',
    },
    {
        'code': 'DCF',
        'name': 'Cane Field Airport',
        'city': 'Portsmouth',
    },
    {
        'code': 'DCM',
        'name': 'Mazamet Airport',
        'city': 'Labrugui\u00e8re',
    },
    {
        'code': 'DDC',
        'name': 'Dodge City Regional Airport',
        'city': 'Dodge City',
    },
    {
        'code': 'DDG',
        'name': 'Dandong Airport',
        'city': 'Dandong',
    },
    {
        'code': 'DEA',
        'name': 'Dera Ghazi Khan',
        'city': 'Dera Ghazi Khan',
    },
    {
        'code': 'DEC',
        'name': 'Decatur Airport',
        'city': 'Decatur',
    },
    {
        'code': 'DED',
        'name': 'Dehra Dun',
        'city': 'Dehra Dun',
    },
    {
        'code': 'DEF',
        'name': 'Dezful Airport',
        'city': 'Dezful',
    },
    {
        'code': 'DEL',
        'name': 'Indira Gandhi International Airport',
        'city': 'New Delhi',
    },
    {
        'code': 'DEN',
        'name': 'Denver International Airport',
        'city': 'Denver',
    },
    {
        'code': 'DEZ',
        'name': 'Deir Zzor Airport',
        'city': 'Dayr az Zawr',
    },
    {
        'code': 'DFW',
        'name': 'Fort Worth International Airport',
        'city': 'Dallas',
    },
    {
        'code': 'DGA',
        'name': 'Dangriga Airport',
        'city': 'Dangriga',
    },
    {
        'code': 'DGE',
        'name': 'Mudgee Aerodrome',
        'city': 'Apple Tree Flat',
    },
    {
        'code': 'DGM',
        'name': 'Dongguan',
        'city': 'Dongguan',
    },
    {
        'code': 'DGO',
        'name': 'Durango Airport',
        'city': 'Durango',
    },
    {
        'code': 'DGT',
        'name': 'Dumaguete Airport',
        'city': 'Sibulan',
    },
    {
        'code': 'DHM',
        'name': 'Gaggal Airport',
        'city': 'Dharamsala',
    },
    {
        'code': 'DHN',
        'name': 'Dothan Airport',
        'city': 'Dothan',
    },
    {
        'code': 'DIB',
        'name': 'Mohanbari Airport',
        'city': 'Dikhari',
    },
    {
        'code': 'DIE',
        'name': 'Antsiranana Arrachart Airport',
        'city': 'Antseranana',
    },
    {
        'code': 'DIG',
        'name': 'Diqing',
        'city': 'Diqing',
    },
    {
        'code': 'DIK',
        'name': 'Dickinson Municipal Airport',
        'city': 'Dickinson',
    },
    {
        'code': 'DIL',
        'name': 'Comoro',
        'city': 'Dili',
    },
    {
        'code': 'DIN',
        'name': 'Dien Bien',
        'city': 'Dien Bien Phu',
    },
    {
        'code': 'DIR',
        'name': 'Aba Tenna Dejazmatch Yilma Airport',
        'city': 'Dire Dawa',
    },
    {
        'code': 'DIS',
        'name': 'Loubomo',
        'city': 'Loubomo',
    },
    {
        'code': 'DIU',
        'name': 'Diu Airport',
        'city': 'Diu',
    },
    {
        'code': 'DIY',
        'name': 'Diyarbakir Airport',
        'city': 'Diyaribakir',
    },
    {
        'code': 'DJB',
        'name': 'Sultan Taha Airport',
        'city': 'Jambi',
    },
    {
        'code': 'DJE',
        'name': 'Zarzis Airport',
        'city': 'Hawmat as Suq',
    },
    {
        'code': 'DJG',
        'name': 'Tiska Airport',
        'city': 'Illizi',
    },
    {
        'code': 'DJJ',
        'name': 'Sentani Airport',
        'city': 'Jayapura',
    },
    {
        'code': 'DKR',
        'name': 'Dakar Yoff Airport',
        'city': 'Ngor',
    },
    {
        'code': 'DLA',
        'name': 'Douala Airport',
        'city': 'Douala',
    },
    {
        'code': 'DLC',
        'name': 'Chou Shui Tzu Airport',
        'city': 'Dalian',
    },
    {
        'code': 'DLG',
        'name': 'Dillingham Municipal Airport',
        'city': 'Dillingham',
    },
    {
        'code': 'DLH',
        'name': 'Duluth International Airport',
        'city': 'Duluth',
    },
    {
        'code': 'DLI',
        'name': 'Lien Khuong Airport',
        'city': 'Lam Dong',
    },
    {
        'code': 'DLM',
        'name': 'Dalaman Airport',
        'city': 'Ortaca',
    },
    {
        'code': 'DLU',
        'name': 'Dali',
        'city': 'Dali City',
    },
    {
        'code': 'DLY',
        'name': 'Vanuatu',
        'city': 'Dillons Bay',
    },
    {
        'code': 'DLZ',
        'name': 'Dalanzadgad',
        'city': 'Dalanzadgad',
    },
    {
        'code': 'DMD',
        'name': 'Doomadgee',
        'city': 'Doomadgee',
    },
    {
        'code': 'DME',
        'name': 'Domodedovo Airport',
        'city': 'Podol\'sk',
    },
    {
        'code': 'DMK',
        'name': 'Don Mueang',
        'city': 'Don Muang',
    },
    {
        'code': 'DMM',
        'name': 'King Fahd International Airport',
        'city': 'Khuwaylidiyah',
    },
    {
        'code': 'DMU',
        'name': 'Dimapur Airport',
        'city': 'Dimapur',
    },
    {
        'code': 'DND',
        'name': 'Dundee Airport',
        'city': 'Dundee',
    },
    {
        'code': 'DNH',
        'name': 'Dunhuang',
        'city': 'Dunhuang',
    },
    {
        'code': 'DNK',
        'name': 'Voloskoye Airport',
        'city': 'Dnipropetrovs\'k',
    },
    {
        'code': 'DNR',
        'name': 'Pleurtuit Airport',
        'city': 'Pleurtuit',
    },
    {
        'code': 'DNZ',
        'name': 'Cardak Airport',
        'city': 'Denizli',
    },
    {
        'code': 'DOG',
        'name': 'Dongola Airport',
        'city': 'Dongola',
    },
    {
        'code': 'DOH',
        'name': 'Doha International Airport',
        'city': 'Doha',
    },
    {
        'code': 'DOK',
        'name': 'Donetsk Airport',
        'city': 'Donets\'k',
    },
    {
        'code': 'DOM',
        'name': 'Melville Hall Airport',
        'city': 'Marigot',
    },
    {
        'code': 'DOP',
        'name': 'Nepal',
        'city': 'Dolpa',
    },
    {
        'code': 'DOU',
        'name': 'Dourados Airport',
        'city': 'Dourados',
    },
    {
        'code': 'DOY',
        'name': 'Dongying',
        'city': 'Dongying',
    },
    {
        'code': 'DPL',
        'name': 'Dipolog Airport',
        'city': 'Polanco',
    },
    {
        'code': 'DPO',
        'name': 'Devonport Airport',
        'city': 'Devonport',
    },
    {
        'code': 'DPS',
        'name': 'Bali International Airport',
        'city': 'Denpasar',
    },
    {
        'code': 'DRG',
        'name': 'Deering Airport',
        'city': 'Deering',
    },
    {
        'code': 'DRO',
        'name': 'Durango la Plata County Airport',
        'city': 'Durango',
    },
    {
        'code': 'DRS',
        'name': 'Ottendorf Okrilla Highway Strip Airport',
        'city': 'Ottendorf-Okrilla',
    },
    {
        'code': 'DRT',
        'name': 'Del Rio International Airport',
        'city': 'Del Rio',
    },
    {
        'code': 'DRW',
        'name': 'Darwin International Airport',
        'city': 'Darwin',
    },
    {
        'code': 'DSA',
        'name': 'Sheffield Airport',
        'city': 'Doncaster Sheffield',
    },
    {
        'code': 'DSM',
        'name': 'Des Moines International Airport',
        'city': 'Des Moines',
    },
    {
        'code': 'DSN',
        'name': 'Dongsheng Airport',
        'city': 'Dongsheng',
    },
    {
        'code': 'DTM',
        'name': 'Dortmund Airport',
        'city': 'Dortmund',
    },
    {
        'code': 'DTW',
        'name': 'Detroit Metropolitan Wayne County Airport',
        'city': 'Detroit',
    },
    {
        'code': 'DUB',
        'name': 'Dublin Airport',
        'city': 'Cloghran',
    },
    {
        'code': 'DUD',
        'name': 'Dunedin Airport',
        'city': 'Outram',
    },
    {
        'code': 'DUE',
        'name': 'Dundo Airport',
        'city': 'Dundo',
    },
    {
        'code': 'DUJ',
        'name': 'Du Bois Jefferson County Airport',
        'city': 'Reynoldsville',
    },
    {
        'code': 'DUQ',
        'name': 'Duncan-Quamichan Lake Airport',
        'city': 'Duncan',
    },
    {
        'code': 'DUR',
        'name': 'Louis Botha Airport',
        'city': 'Durban',
    },
    {
        'code': 'DUS',
        'name': 'Dusseldorf International Airport',
        'city': 'Dusseldorf',
    },
    {
        'code': 'DUT',
        'name': 'Unalaska Airport',
        'city': 'Unalaska',
    },
    {
        'code': 'DVL',
        'name': 'Devils Lake Municipal Airport',
        'city': 'Devils Lake',
    },
    {
        'code': 'DVO',
        'name': 'Francisco Bangoy International Airport',
        'city': 'Davao City',
    },
    {
        'code': 'DWB',
        'name': 'Soalala',
        'city': 'Soalala',
    },
    {
        'code': 'DWD',
        'name': 'Saudi Arabia',
        'city': 'Dawadmi',
    },
    {
        'code': 'DXB',
        'name': 'Dubai International Airport',
        'city': 'Dubai',
    },
    {
        'code': 'DYG',
        'name': 'Dayong',
        'city': 'Dayong',
    },
    {
        'code': 'DYR',
        'name': 'Anadyr-Ugolnyye Kopi Airport',
        'city': 'Anadyr\'',
    },
    {
        'code': 'DYU',
        'name': 'Tajikistan',
        'city': 'Dushanbe',
    },
    {
        'code': 'DZA',
        'name': 'Dzaoudzi Pamanzi Airport',
        'city': 'Mamoudzou',
    },
    {
        'code': 'DZN',
        'name': 'Dzhezkazgan South Airport',
        'city': 'Zhezqazghan',
    },
    {
        'code': 'EAA',
        'name': 'Eagle Airport',
        'city': 'Tok',
    },
    {
        'code': 'EAE',
        'name': 'Vanuatu',
        'city': 'Emae',
    },
    {
        'code': 'EAL',
        'name': 'Elenak',
        'city': 'Kwajalein Atoll',
    },
    {
        'code': 'EAM',
        'name': 'Nejran Airport',
        'city': 'Najran',
    },
    {
        'code': 'EAR',
        'name': 'Kearney Municipal Airport',
        'city': 'Kearney',
    },
    {
        'code': 'EAS',
        'name': 'San Sebastian Airport',
        'city': 'Hondarribia',
    },
    {
        'code': 'EAT',
        'name': 'Pangborn Memorial Airport',
        'city': 'East Wenatchee',
    },
    {
        'code': 'EAU',
        'name': 'Eau Claire County Airport',
        'city': 'Eau Claire',
    },
    {
        'code': 'EBA',
        'name': 'Marina de Campo Airport',
        'city': 'Pianosa',
    },
    {
        'code': 'EBB',
        'name': 'Entebbe International Airport',
        'city': 'Entebbe',
    },
    {
        'code': 'EBD',
        'name': 'El Obeid Airport',
        'city': 'Al Ubayyid',
    },
    {
        'code': 'EBJ',
        'name': 'Esbjerg Airport',
        'city': 'Esbjerg',
    },
    {
        'code': 'EBL',
        'name': 'Erbil',
        'city': 'Erbil',
    },
    {
        'code': 'ECN',
        'name': 'Ercan Airport',
        'city': 'Nicosia',
    },
    {
        'code': 'EDA',
        'name': 'Edna Bay Seaplane Base',
        'city': 'Ketchikan',
    },
    {
        'code': 'EDI',
        'name': 'Edinburgh International Airport',
        'city': 'Edinburgh',
    },
    {
        'code': 'EDL',
        'name': 'Eldoret Airport',
        'city': 'Nakuru',
    },
    {
        'code': 'EDO',
        'name': 'Edremit-Korfez Airport',
        'city': 'Edremit',
    },
    {
        'code': 'EDR',
        'name': 'Edward River',
        'city': 'Edward River',
    },
    {
        'code': 'EEK',
        'name': 'Eek Airport',
        'city': 'Eek',
    },
    {
        'code': 'EFL',
        'name': 'Kefallinia Airport',
        'city': 'Dhilianata',
    },
    {
        'code': 'EGC',
        'name': 'Bergerac-Roumaniere Airport',
        'city': 'Bergerac',
    },
    {
        'code': 'EGE',
        'name': 'Eagle County Regional Airport',
        'city': 'Gypsum',
    },
    {
        'code': 'EGN',
        'name': 'Geneina',
        'city': 'Geneina',
    },
    {
        'code': 'EGO',
        'name': 'Belgorod North Airport',
        'city': 'Belgorod',
    },
    {
        'code': 'EGS',
        'name': 'Egilsstadir Airport',
        'city': 'Egilsstadir',
    },
    {
        'code': 'EGV',
        'name': 'Eagle River Union Airport',
        'city': 'Eagle River',
    },
    {
        'code': 'EGX',
        'name': 'Egegik Airport',
        'city': 'Egegik',
    },
    {
        'code': 'EIB',
        'name': 'Haina Airport',
        'city': 'Eisenach',
    },
    {
        'code': 'EIE',
        'name': 'Russia',
        'city': 'Eniseysk',
    },
    {
        'code': 'EIK',
        'name': 'Tonsberg',
        'city': 'Tonsberg',
    },
    {
        'code': 'EIN',
        'name': 'Eindhoven Airport',
        'city': 'Eindhoven',
    },
    {
        'code': 'EIS',
        'name': 'Beef Island-Roadtown Airport',
        'city': 'Beef Island',
    },
    {
        'code': 'EJA',
        'name': 'Yariguies Airport',
        'city': 'Barrancabermeja',
    },
    {
        'code': 'EJH',
        'name': 'Wejh Airport',
        'city': 'Wedjh',
    },
    {
        'code': 'EKO',
        'name': 'Elko Municipal Airport-J C Harris Field',
        'city': 'Elko',
    },
    {
        'code': 'EKS',
        'name': 'Ennis Big Sky Airport',
        'city': 'Ennis',
    },
    {
        'code': 'ELC',
        'name': 'Elcho Island Airport',
        'city': 'Darwin',
    },
    {
        'code': 'ELF',
        'name': 'El Fasher',
        'city': 'El Fasher',
    },
    {
        'code': 'ELG',
        'name': 'El Golea Airport',
        'city': 'El Golea',
    },
    {
        'code': 'ELH',
        'name': 'North Eleuthera Airport',
        'city': 'The Bluff',
    },
    {
        'code': 'ELI',
        'name': 'Elim Airport',
        'city': 'Elim',
    },
    {
        'code': 'ELM',
        'name': 'Elmira Corning Regional Airport',
        'city': 'Horseheads',
    },
    {
        'code': 'ELP',
        'name': 'El Paso International Airport',
        'city': 'El Paso',
    },
    {
        'code': 'ELQ',
        'name': 'Gassim Airport',
        'city': 'Al Qara\'',
    },
    {
        'code': 'ELS',
        'name': 'Ben Schoeman Airport',
        'city': 'East London',
    },
    {
        'code': 'ELU',
        'name': 'Guemar Airport',
        'city': 'El Oued',
    },
    {
        'code': 'ELV',
        'name': 'Elfin Cove Airport',
        'city': 'Elfin Cove',
    },
    {
        'code': 'ELY',
        'name': 'Yelland Field Airport',
        'city': 'Ely',
    },
    {
        'code': 'EMA',
        'name': 'East Midlands International Airport',
        'city': 'Derby',
    },
    {
        'code': 'EMD',
        'name': 'Emerald Aerodrome',
        'city': 'Emerald',
    },
    {
        'code': 'EME',
        'name': 'Emden Airport',
        'city': 'Emden',
    },
    {
        'code': 'EMK',
        'name': 'Emmonak Airport',
        'city': 'Alakanuk',
    },
    {
        'code': 'ENA',
        'name': 'Kenai Municipal Airport',
        'city': 'Kenai',
    },
    {
        'code': 'ENE',
        'name': 'Ende Airport',
        'city': 'Ende',
    },
    {
        'code': 'ENF',
        'name': 'Enontekio Airport',
        'city': 'Lepp\u00e4j\u00e4rvi',
    },
    {
        'code': 'ENH',
        'name': 'Enshi Airport',
        'city': 'Enshi',
    },
    {
        'code': 'ENI',
        'name': 'El Nido',
        'city': 'El Nido',
    },
    {
        'code': 'ENS',
        'name': 'Enschede Twente',
        'city': 'Enschede',
    },
    {
        'code': 'ENU',
        'name': 'Enugu Airport',
        'city': 'Enugu',
    },
    {
        'code': 'ENW',
        'name': 'Kenosha Regional Airport',
        'city': 'Kenosha',
    },
    {
        'code': 'ENY',
        'name': 'Yan\'an',
        'city': 'Yan\'an',
    },
    {
        'code': 'EOH',
        'name': 'Olaya Herrera Airport',
        'city': 'Medellin',
    },
    {
        'code': 'EOZ',
        'name': 'Elorza Airport',
        'city': 'Elorza',
    },
    {
        'code': 'EPR',
        'name': 'Esperance Aerodrome',
        'city': 'Gibson',
    },
    {
        'code': 'EQS',
        'name': 'Esquel Airport',
        'city': 'Esquel',
    },
    {
        'code': 'ERC',
        'name': 'Erzincan Airport',
        'city': 'Erzincan',
    },
    {
        'code': 'ERF',
        'name': 'Erfurt Airport',
        'city': 'Erfurt',
    },
    {
        'code': 'ERH',
        'name': 'Er Rachidia Airport',
        'city': 'Errachidia',
    },
    {
        'code': 'ERI',
        'name': 'Erie International Airport',
        'city': 'Erie',
    },
    {
        'code': 'ERM',
        'name': 'Comandante Kraemer Airport',
        'city': 'Erechim',
    },
    {
        'code': 'ERS',
        'name': 'Eros Airport',
        'city': 'Windhoek',
    },
    {
        'code': 'ERZ',
        'name': 'Erzurum Airport',
        'city': 'Erzurum',
    },
    {
        'code': 'ESB',
        'name': 'Esenboga Airport',
        'city': '\u00c7ubuk',
    },
    {
        'code': 'ESC',
        'name': 'Delta County Airport',
        'city': 'Escanaba',
    },
    {
        'code': 'ESD',
        'name': 'Orcas Island Airport',
        'city': 'Eastsound',
    },
    {
        'code': 'ESM',
        'name': 'General Rivadeneira Airport',
        'city': 'Tachina',
    },
    {
        'code': 'ESR',
        'name': 'El Salvador Bajo Airport',
        'city': 'Diego de Almagro',
    },
    {
        'code': 'ESS',
        'name': 'Essen-Mulheim Airport',
        'city': 'Mulheim-on-Ruhr',
    },
    {
        'code': 'ESU',
        'name': 'Morocco',
        'city': 'Essaouira',
    },
    {
        'code': 'ETH',
        'name': 'J Hozman Airport',
        'city': 'Elat',
    },
    {
        'code': 'ETZ',
        'name': 'Lorraine Airport',
        'city': 'Verny',
    },
    {
        'code': 'EUA',
        'name': 'Eua Island',
        'city': 'Eua',
    },
    {
        'code': 'EUG',
        'name': 'Mahlon Sweet Field Airport',
        'city': 'Eugene',
    },
    {
        'code': 'EUM',
        'name': 'Wasbek Airport',
        'city': 'Bordesholm',
    },
    {
        'code': 'EUN',
        'name': 'Hassan I',
        'city': 'Laayoune',
    },
    {
        'code': 'EUX',
        'name': 'St. Eustatius Airport',
        'city': 'Oranjestad',
    },
    {
        'code': 'EVE',
        'name': 'Evenes Airport',
        'city': 'Tarnstad',
    },
    {
        'code': 'EVG',
        'name': 'Sveg Airport',
        'city': 'Sveg',
    },
    {
        'code': 'EVN',
        'name': 'Yerevan-Parakar Airport',
        'city': 'Yerevan',
    },
    {
        'code': 'EVV',
        'name': 'Evansville Regional Airport',
        'city': 'Evansville',
    },
    {
        'code': 'EWB',
        'name': 'New Bedford Municipal Airport',
        'city': 'New Bedford',
    },
    {
        'code': 'EWD',
        'name': 'Wildman Lake',
        'city': 'Wildman Lake',
    },
    {
        'code': 'EWN',
        'name': 'Craven County Regional Airport',
        'city': 'New Bern',
    },
    {
        'code': 'EWR',
        'name': 'Newark International Airport',
        'city': 'Newark',
    },
    {
        'code': 'EXT',
        'name': 'Exeter Airport',
        'city': 'Exeter',
    },
    {
        'code': 'EYP',
        'name': 'El Yopal Airport',
        'city': 'Yopal',
    },
    {
        'code': 'EYW',
        'name': 'Key West International Airport',
        'city': 'Key West',
    },
    {
        'code': 'EZE',
        'name': 'Ministro Pistarini International Airport',
        'city': 'Ezeiza',
    },
    {
        'code': 'EZS',
        'name': 'Elazig Airport',
        'city': 'Elaz\u0131\u011f',
    },
    {
        'code': 'FAB',
        'name': 'Farnborough Airport',
        'city': 'Farnborough',
    },
    {
        'code': 'FAE',
        'name': 'Vagar Airport',
        'city': 'Faroe Islands',
    },
    {
        'code': 'FAI',
        'name': 'Fairbanks International Airport',
        'city': 'Fairbanks',
    },
    {
        'code': 'FAO',
        'name': 'Faro Airport',
        'city': 'Faro',
    },
    {
        'code': 'FAR',
        'name': 'Hector International Airport',
        'city': 'Fargo',
    },
    {
        'code': 'FAT',
        'name': 'Fresno Yosemite International Airport',
        'city': 'Fresno',
    },
    {
        'code': 'FAV',
        'name': 'French Polynesia',
        'city': 'Fakarava',
    },
    {
        'code': 'FAY',
        'name': 'Fayetteville Regional Airport',
        'city': 'Fayetteville',
    },
    {
        'code': 'FBM',
        'name': 'Lubumbashi Luano International Airport',
        'city': 'Lubumbashi',
    },
    {
        'code': 'FCA',
        'name': 'Glacier Park International Airport',
        'city': 'Kalispell',
    },
    {
        'code': 'FCN',
        'name': 'Nordholz',
        'city': 'Cuxhaven',
    },
    {
        'code': 'FCO',
        'name': 'Leonardo da Vinci International Airport',
        'city': 'Rome',
    },
    {
        'code': 'FDE',
        'name': 'Bringeland Airport',
        'city': 'Bygstad',
    },
    {
        'code': 'FDF',
        'name': 'Le Lamentin Airport',
        'city': 'Ducos',
    },
    {
        'code': 'FDH',
        'name': 'Friedrichshafen Airport',
        'city': 'Meckenbeuren',
    },
    {
        'code': 'FEG',
        'name': 'Fergana',
        'city': 'Fergana',
    },
    {
        'code': 'FEN',
        'name': 'Fernando de Noronha Airport',
        'city': 'Vila dos Rem\u00e9dios',
    },
    {
        'code': 'FEZ',
        'name': 'Saiss Airport',
        'city': 'Fez',
    },
    {
        'code': 'FGU',
        'name': 'French Polynesia',
        'city': 'Fangatau',
    },
    {
        'code': 'FHZ',
        'name': 'French Polynesia',
        'city': 'Fakahina',
    },
    {
        'code': 'FIH',
        'name': 'Kinshasa N Djili International Airport',
        'city': 'Kinshasa',
    },
    {
        'code': 'FJR',
        'name': 'Fujairah Airport',
        'city': 'Al Fujayrah',
    },
    {
        'code': 'FKB',
        'name': 'Baden-Airpark',
        'city': 'Rheinm\u00fcnster',
    },
    {
        'code': 'FKI',
        'name': 'Kisangani Bangoka International Airport',
        'city': 'Kisangani',
    },
    {
        'code': 'FKL',
        'name': 'Chess Lamberton Airport',
        'city': 'Franklin',
    },
    {
        'code': 'FKQ',
        'name': 'Indonesia',
        'city': 'Fak Fak',
    },
    {
        'code': 'FKS',
        'name': 'Fukushima Airport',
        'city': 'Sukagawa-shi',
    },
    {
        'code': 'FLA',
        'name': 'Gustavo Artunduaga Paredes Airport',
        'city': 'Florencia',
    },
    {
        'code': 'FLG',
        'name': 'Flagstaff Pulliam Airport',
        'city': 'Flagstaff',
    },
    {
        'code': 'FLL',
        'name': 'Fort Lauderdale Hollywood International Airport',
        'city': 'Dania Beach',
    },
    {
        'code': 'FLN',
        'name': 'Hercilio Luz International Airport',
        'city': 'Florianopolis',
    },
    {
        'code': 'FLO',
        'name': 'Florence Regional Airport',
        'city': 'Florence',
    },
    {
        'code': 'FLR',
        'name': 'Florence Airport',
        'city': 'Florence',
    },
    {
        'code': 'FLW',
        'name': 'Flores Airport',
        'city': 'Flores Island',
    },
    {
        'code': 'FMA',
        'name': 'Formosa Airport',
        'city': 'Formosa',
    },
    {
        'code': 'FMM',
        'name': 'Memmingen-Allg\u00e4u Airport',
        'city': 'Memmingen',
    },
    {
        'code': 'FMN',
        'name': 'Four Corners Regional Airport',
        'city': 'Farmington',
    },
    {
        'code': 'FMO',
        'name': 'Munster-Osnabruck International Airport',
        'city': 'Greven',
    },
    {
        'code': 'FMY',
        'name': 'Page Field Airport',
        'city': 'Fort Myers',
    },
    {
        'code': 'FNA',
        'name': 'Freetown Lungi Airport',
        'city': 'Freetown',
    },
    {
        'code': 'FNC',
        'name': 'Funchal Airport',
        'city': 'Madeira',
    },
    {
        'code': 'FNI',
        'name': 'Garons Airport',
        'city': 'St-Gilles-du-Gard',
    },
    {
        'code': 'FNJ',
        'name': 'Sunan Airport',
        'city': 'Sunan',
    },
    {
        'code': 'FNL',
        'name': 'Fort Collins Loveland Municipal Airport',
        'city': 'Loveland',
    },
    {
        'code': 'FNT',
        'name': 'Bishop International Airport',
        'city': 'Flint',
    },
    {
        'code': 'FOC',
        'name': 'Fuzhou Airport',
        'city': 'Fuzhou',
    },
    {
        'code': 'FOD',
        'name': 'Fort Dodge Regional Airport',
        'city': 'Fort Dodge',
    },
    {
        'code': 'FOG',
        'name': 'Gino Lisa Airport',
        'city': 'Foggia',
    },
    {
        'code': 'FOR',
        'name': 'Pinto Martins International Airport',
        'city': 'Fortaleza',
    },
    {
        'code': 'FPO',
        'name': 'Freeport International Airport',
        'city': 'Freeport City',
    },
    {
        'code': 'FRA',
        'name': 'Frankfurt International Airport',
        'city': 'Frankfurt',
    },
    {
        'code': 'FRC',
        'name': 'Franca Airport',
        'city': 'Franca',
    },
    {
        'code': 'FRD',
        'name': 'Friday Harbor Airport',
        'city': 'Friday Harbor',
    },
    {
        'code': 'FRE',
        'name': 'Fera Island',
        'city': 'Fera Island',
    },
    {
        'code': 'FRL',
        'name': 'Forli Airport',
        'city': 'Forli',
    },
    {
        'code': 'FRO',
        'name': 'Flora Airport',
        'city': 'Floro',
    },
    {
        'code': 'FRS',
        'name': 'Santa Elena Airport',
        'city': 'Flores',
    },
    {
        'code': 'FRU',
        'name': 'Vasilyevka Airport',
        'city': 'Bishkek',
    },
    {
        'code': 'FRW',
        'name': 'Francistown Airport',
        'city': 'Francistown',
    },
    {
        'code': 'FSC',
        'name': 'Sud Corse Airport',
        'city': 'Figari',
    },
    {
        'code': 'FSD',
        'name': 'Sioux Falls Regional Airport',
        'city': 'Sioux Falls',
    },
    {
        'code': 'FSM',
        'name': 'Smith Field Airport',
        'city': 'Fort Smith',
    },
    {
        'code': 'FSP',
        'name': 'St Pierre Airport',
        'city': 'St Pierre',
    },
    {
        'code': 'FTA',
        'name': 'Futuna',
        'city': 'Futuna Island',
    },
    {
        'code': 'FTE',
        'name': 'El Calafate International Airport',
        'city': 'El Calafate',
    },
    {
        'code': 'FTU',
        'name': 'Tolagnaro Airport',
        'city': 'Faradofay',
    },
    {
        'code': 'FUE',
        'name': 'Puerto del Rosario Airport',
        'city': 'Antigua',
    },
    {
        'code': 'FUG',
        'name': 'Fuyang',
        'city': 'Fuyang',
    },
    {
        'code': 'FUJ',
        'name': 'Fukue Airport',
        'city': 'Goto-shi',
    },
    {
        'code': 'FUK',
        'name': 'Fukuoka Airport',
        'city': 'Fukuoka-shi',
    },
    {
        'code': 'FUN',
        'name': 'Funafuti International Airport',
        'city': 'Funafuti',
    },
    {
        'code': 'FUT',
        'name': 'Futuna Island',
        'city': 'Futuna Island',
    },
    {
        'code': 'FWA',
        'name': 'Fort Wayne Municipal Airport-Baer Field',
        'city': 'Fort Wayne',
    },
    {
        'code': 'FWM',
        'name': 'Fort William Heliport',
        'city': 'Fort William',
    },
    {
        'code': 'FYU',
        'name': 'Fort Yukon Airport',
        'city': 'Fort Yukon',
    },
    {
        'code': 'FZO',
        'name': 'Filton Airport',
        'city': 'Bristol',
    },
    {
        'code': 'GAE',
        'name': 'Gabes Airport',
        'city': 'Gabes',
    },
    {
        'code': 'GAF',
        'name': 'Gafsa',
        'city': 'Gafsa',
    },
    {
        'code': 'GAJ',
        'name': 'Yamagata Airport',
        'city': 'Higashine-shi',
    },
    {
        'code': 'GAL',
        'name': 'Galena Airport',
        'city': 'Galena',
    },
    {
        'code': 'GAM',
        'name': 'Gambell Airport',
        'city': 'Gambell',
    },
    {
        'code': 'GAN',
        'name': 'Gan Island Airport',
        'city': 'Hithadhoo',
    },
    {
        'code': 'GAO',
        'name': 'Cuba',
        'city': 'Guantanamo',
    },
    {
        'code': 'GAU',
        'name': 'Borjhar',
        'city': 'Gawahati',
    },
    {
        'code': 'GAX',
        'name': 'Gamba',
        'city': 'Gamba',
    },
    {
        'code': 'GAY',
        'name': 'Gaya Airport',
        'city': 'Gaya',
    },
    {
        'code': 'GBD',
        'name': 'Great Bend Municipal Airport',
        'city': 'Great Bend',
    },
    {
        'code': 'GBE',
        'name': 'Sir Seretse Khama International Airport',
        'city': 'Tlokweng',
    },
    {
        'code': 'GBJ',
        'name': 'Marie Galante Airport',
        'city': 'Grand-Bourg',
    },
    {
        'code': 'GBT',
        'name': 'Iran',
        'city': 'Gorgan',
    },
    {
        'code': 'GCC',
        'name': 'Gillette Campbell County Airport',
        'city': 'Gillette',
    },
    {
        'code': 'GCI',
        'name': 'Guernsey Airport',
        'city': 'St. Peter Port',
    },
    {
        'code': 'GCK',
        'name': 'Garden City Regional Airport',
        'city': 'Pierceville',
    },
    {
        'code': 'GCM',
        'name': 'Owen Roberts International Airport',
        'city': 'Georgetown',
    },
    {
        'code': 'GDE',
        'name': 'Ididole',
        'city': 'Gode\/Iddidole',
    },
    {
        'code': 'GDL',
        'name': 'Don Miguel Hidalgo International Airport',
        'city': 'Tlajomulco de Z\u00fa\u00f1iga',
    },
    {
        'code': 'GDN',
        'name': 'Rebiechowo Airport',
        'city': 'Gdansk',
    },
    {
        'code': 'GDO',
        'name': 'Vare Maria Airport',
        'city': 'Barinas',
    },
    {
        'code': 'GDQ',
        'name': 'Gondar Airport',
        'city': 'Azezo',
    },
    {
        'code': 'GDT',
        'name': 'Grand Turk International Airport',
        'city': 'Grand Turk',
    },
    {
        'code': 'GDX',
        'name': 'Magadan Northwest Airport',
        'city': 'Magadan',
    },
    {
        'code': 'GEA',
        'name': 'Magenta Airport',
        'city': 'Noumea',
    },
    {
        'code': 'GEG',
        'name': 'Spokane International Airport',
        'city': 'Spokane',
    },
    {
        'code': 'GEL',
        'name': 'Santo Angelo Airport',
        'city': 'Santo Angelo',
    },
    {
        'code': 'GEO',
        'name': 'Timehri International Airport',
        'city': 'Hyde Park',
    },
    {
        'code': 'GER',
        'name': 'Nueva Gerona Airport',
        'city': 'Nueva Gerona',
    },
    {
        'code': 'GES',
        'name': 'General Santos Airport',
        'city': 'General Santos City',
    },
    {
        'code': 'GET',
        'name': 'Geraldton Airport',
        'city': 'Geraldton',
    },
    {
        'code': 'GEV',
        'name': 'Lappland Airport',
        'city': 'Koskullskulle',
    },
    {
        'code': 'GFF',
        'name': 'Griffith Airport',
        'city': 'Griffith',
    },
    {
        'code': 'GFK',
        'name': 'Grand Forks Mark Andrews International Airport',
        'city': 'Grand Forks',
    },
    {
        'code': 'GFN',
        'name': 'Grafton Airport',
        'city': 'Grafton',
    },
    {
        'code': 'GGG',
        'name': 'Gregg County Airport',
        'city': 'Longview',
    },
    {
        'code': 'GGT',
        'name': 'Exuma International Airport',
        'city': 'George Town',
    },
    {
        'code': 'GHA',
        'name': 'Noumerate Airport',
        'city': 'Ghardaia',
    },
    {
        'code': 'GHB',
        'name': 'Governors Harbour Airport',
        'city': 'Governor Harbour',
    },
    {
        'code': 'GHT',
        'name': 'Ghat Airport',
        'city': 'Ghat',
    },
    {
        'code': 'GIB',
        'name': 'Gibraltar Airport',
        'city': 'Gibraltar',
    },
    {
        'code': 'GIC',
        'name': 'Boigu Island Airport',
        'city': 'Kubin Village',
    },
    {
        'code': 'GIG',
        'name': 'Rio de Janeiro-Antonio Carlos Jobim Internationa',
        'city': 'Rio de Janeiro',
    },
    {
        'code': 'GIL',
        'name': 'Gilgit Airport',
        'city': 'Gilgit',
    },
    {
        'code': 'GIS',
        'name': 'Gisborne Airport',
        'city': 'Gisborne',
    },
    {
        'code': 'GIZ',
        'name': 'Gizan Airport',
        'city': 'Jizan',
    },
    {
        'code': 'GJA',
        'name': 'Guanaja Airport',
        'city': 'Guanaja',
    },
    {
        'code': 'GJL',
        'name': 'Taher Airport',
        'city': 'Jijel',
    },
    {
        'code': 'GJT',
        'name': 'Walker Field Airport',
        'city': 'Grand Junction',
    },
    {
        'code': 'GKA',
        'name': 'Goroka Airport',
        'city': 'Goroka',
    },
    {
        'code': 'GLA',
        'name': 'Glasgow International Airport',
        'city': 'Paisley',
    },
    {
        'code': 'GLF',
        'name': 'Golfito Airport',
        'city': 'Palmar Sur',
    },
    {
        'code': 'GLH',
        'name': 'Mid Delta Regional Airport',
        'city': 'Greenville',
    },
    {
        'code': 'GLK',
        'name': 'Galcaio Airport',
        'city': 'Gaalkacyo',
    },
    {
        'code': 'GLN',
        'name': 'Guelmim',
        'city': 'Goulimime',
    },
    {
        'code': 'GLO',
        'name': 'Gloucestershire Airport',
        'city': 'Cheltenham',
    },
    {
        'code': 'GLT',
        'name': 'Gladstone Airport',
        'city': 'Gladstone',
    },
    {
        'code': 'GLV',
        'name': 'Golovin',
        'city': 'Golovin',
    },
    {
        'code': 'GMA',
        'name': 'Gemena Airport',
        'city': 'Gemena',
    },
    {
        'code': 'GMB',
        'name': 'Gambela',
        'city': 'Gambela',
    },
    {
        'code': 'GMP',
        'name': 'Gimpo International Airport',
        'city': 'Seoul',
    },
    {
        'code': 'GMR',
        'name': 'Gambier Is',
        'city': 'Gambier Is',
    },
    {
        'code': 'GMZ',
        'name': 'La Gomera Airport',
        'city': 'Alajer\u00f3',
    },
    {
        'code': 'GNB',
        'name': 'St Geoirs Airport',
        'city': 'Sillans',
    },
    {
        'code': 'GND',
        'name': 'Point Salines International Airport',
        'city': 'Grenada',
    },
    {
        'code': 'GNU',
        'name': 'Alaska',
        'city': 'Goodnews Bay',
    },
    {
        'code': 'GNV',
        'name': 'Gainesville Regional Airport',
        'city': 'Gainesville',
    },
    {
        'code': 'GOA',
        'name': 'Genoa Cristoforo Colombo Airport',
        'city': 'Genoa',
    },
    {
        'code': 'GOH',
        'name': 'Godthaab Airport',
        'city': 'Nuuk',
    },
    {
        'code': 'GOI',
        'name': 'Dabolim Airport',
        'city': 'Vasco Da Gama',
    },
    {
        'code': 'GOJ',
        'name': 'Strigino Airport',
        'city': 'Dzerzinsk',
    },
    {
        'code': 'GOM',
        'name': 'Goma International Airport',
        'city': 'Goma',
    },
    {
        'code': 'GOP',
        'name': 'Gorakhpur',
        'city': 'Gorakhpur',
    },
    {
        'code': 'GOQ',
        'name': 'Golmud Airport',
        'city': 'Golmud',
    },
    {
        'code': 'GOT',
        'name': 'Gothenburg Airport',
        'city': 'H\u00e4rryda',
    },
    {
        'code': 'GOU',
        'name': 'Garoua Airport',
        'city': 'Garoua',
    },
    {
        'code': 'GOV',
        'name': 'Gove Aerodrome',
        'city': 'Gove',
    },
    {
        'code': 'GPA',
        'name': 'Araxos Airport',
        'city': 'Lakkopetra',
    },
    {
        'code': 'GPI',
        'name': 'Guapi Airport',
        'city': 'Guap\u00ed',
    },
    {
        'code': 'GPS',
        'name': 'Seymour Airport',
        'city': 'Puerto Ayora',
    },
    {
        'code': 'GPT',
        'name': 'Gulfport Biloxi Regional Airport',
        'city': 'Gulfport',
    },
    {
        'code': 'GRB',
        'name': 'Austin Straubel International Airport',
        'city': 'Green Bay',
    },
    {
        'code': 'GRJ',
        'name': 'P W Botha Airport',
        'city': 'George',
    },
    {
        'code': 'GRK',
        'name': 'Killeen-Fort Hood Regional Airport',
        'city': 'Killeen',
    },
    {
        'code': 'GRO',
        'name': 'Gerona Airport',
        'city': 'Vilob\u00ed d\'Onyar',
    },
    {
        'code': 'GRQ',
        'name': 'Groningen Eelde',
        'city': 'Eelde',
    },
    {
        'code': 'GRR',
        'name': 'Gerald R. Ford International Airport',
        'city': 'Grand Rapids',
    },
    {
        'code': 'GRU',
        'name': 'Governador Andre Franco Montoro International Ai',
        'city': 'Guarulhos',
    },
    {
        'code': 'GRV',
        'name': 'Groznyy Airport',
        'city': 'Groznyy',
    },
    {
        'code': 'GRW',
        'name': 'Graciosa Airport',
        'city': 'Graciosa Island',
    },
    {
        'code': 'GRX',
        'name': 'Granada Airport',
        'city': 'Chauchina',
    },
    {
        'code': 'GRY',
        'name': 'Grimsey Airport',
        'city': 'Akureyri',
    },
    {
        'code': 'GRZ',
        'name': 'Graz Airport',
        'city': 'Feldkirchen',
    },
    {
        'code': 'GSE',
        'name': 'Save Airport',
        'city': 'Kyrkobyn',
    },
    {
        'code': 'GSM',
        'name': 'Gheshm',
        'city': 'Gheshm',
    },
    {
        'code': 'GSO',
        'name': 'Triad International Airport',
        'city': 'Greensboro',
    },
    {
        'code': 'GSP',
        'name': 'Greenville Spartanburg International Airport',
        'city': 'Greer',
    },
    {
        'code': 'GST',
        'name': 'Gustavus Airport',
        'city': 'Gustavus',
    },
    {
        'code': 'GSY',
        'name': 'Binbrook Airport',
        'city': 'Market Rasen',
    },
    {
        'code': 'GTA',
        'name': 'Solomon Islands',
        'city': 'Gatokae',
    },
    {
        'code': 'GTE',
        'name': 'Groote Eylandt Airport',
        'city': 'Darwin',
    },
    {
        'code': 'GTF',
        'name': 'Great Falls International Airport',
        'city': 'Great Falls',
    },
    {
        'code': 'GTO',
        'name': 'Jalaluddin Airport',
        'city': 'Gorontalo',
    },
    {
        'code': 'GTR',
        'name': 'Golden Triangle Regional Airport',
        'city': 'Columbus',
    },
    {
        'code': 'GTS',
        'name': 'Australia',
        'city': 'Granites',
    },
    {
        'code': 'GUA',
        'name': 'La Aurora Airport',
        'city': 'Guatemala City',
    },
    {
        'code': 'GUC',
        'name': 'Gunnison County Airport',
        'city': 'Gunnison',
    },
    {
        'code': 'GUM',
        'name': 'Antonio B Won Pat International Airport',
        'city': 'Hag\u00e5t\u00f1a',
    },
    {
        'code': 'GUR',
        'name': 'Gurney Airport',
        'city': 'Alotau',
    },
    {
        'code': 'GUW',
        'name': 'Guryev Airport',
        'city': 'Atyrau',
    },
    {
        'code': 'GVA',
        'name': 'Geneva Airport',
        'city': 'Geneva',
    },
    {
        'code': 'GVR',
        'name': 'Governador Valadares Airport',
        'city': 'Governador Valadares',
    },
    {
        'code': 'GWD',
        'name': 'Gwadar Airport',
        'city': 'Gawadar',
    },
    {
        'code': 'GWL',
        'name': 'Gwalior Airport',
        'city': 'Gwalior',
    },
    {
        'code': 'GWT',
        'name': 'Westerland Airport',
        'city': 'Westerland',
    },
    {
        'code': 'GWY',
        'name': 'Carnmore Airport',
        'city': 'Carnmore',
    },
    {
        'code': 'GXF',
        'name': 'Sayun Airport',
        'city': 'Seiyun',
    },
    {
        'code': 'GXG',
        'name': 'Negage Airport',
        'city': 'Negage',
    },
    {
        'code': 'GYA',
        'name': 'Guayaramerin Airport',
        'city': 'Guayaramer\u00edn',
    },
    {
        'code': 'GYD',
        'name': 'Azerbaijan',
        'city': 'Baku',
    },
    {
        'code': 'GYE',
        'name': 'Simon Bolivar International Airport',
        'city': 'Guayaquil',
    },
    {
        'code': 'GYL',
        'name': 'Argyle Airport',
        'city': 'Argyle',
    },
    {
        'code': 'GYM',
        'name': 'General Jose Maria Yanez in Airport',
        'city': 'Guaymas',
    },
    {
        'code': 'GYN',
        'name': 'Santa Genoveva Airport',
        'city': 'Goiania',
    },
    {
        'code': 'GZO',
        'name': 'Nusatupe Airport',
        'city': 'Gizo',
    },
    {
        'code': 'GZT',
        'name': 'Gaziantep Airport',
        'city': 'O\u011fuzeli',
    },
    {
        'code': 'HAA',
        'name': 'Hasvik Airport',
        'city': 'Hasvik',
    },
    {
        'code': 'HAC',
        'name': 'Hachijojima Airport',
        'city': 'Hachijo-machi',
    },
    {
        'code': 'HAD',
        'name': 'Halmstad Airport',
        'city': 'Hamstad',
    },
    {
        'code': 'HAE',
        'name': 'Havasupai',
        'city': 'Havasupai',
    },
    {
        'code': 'HAH',
        'name': 'Moroni Hahaia Airport',
        'city': 'Hahaia',
    },
    {
        'code': 'HAJ',
        'name': 'Hannover International Airport',
        'city': 'Langenhagen',
    },
    {
        'code': 'HAK',
        'name': 'Haikou Airport',
        'city': 'Haikou',
    },
    {
        'code': 'HAM',
        'name': 'Hamburg Airport',
        'city': 'Hamburg',
    },
    {
        'code': 'HAN',
        'name': 'Noi Bai Airport',
        'city': 'Hanoi',
    },
    {
        'code': 'HAQ',
        'name': 'Hanimadu',
        'city': 'Hanimaadhoo',
    },
    {
        'code': 'HAS',
        'name': 'Hail Airport',
        'city': 'Ha\'il',
    },
    {
        'code': 'HAU',
        'name': 'Haugesund Karmoy Airport',
        'city': 'Avaldsnes',
    },
    {
        'code': 'HAV',
        'name': 'Jose Marti International Airport',
        'city': 'Wajay',
    },
    {
        'code': 'HBA',
        'name': 'Hobart International Airport',
        'city': 'Hobart',
    },
    {
        'code': 'HBE',
        'name': 'Borg El Arab International Airport',
        'city': 'Alexandria',
    },
    {
        'code': 'HBT',
        'name': 'Saudi Arabia',
        'city': 'Hafr Albatin',
    },
    {
        'code': 'HBX',
        'name': 'India',
        'city': 'Hubli',
    },
    {
        'code': 'HCN',
        'name': 'Hengchun Airport',
        'city': 'Hengchun',
    },
    {
        'code': 'HCR',
        'name': 'Alaska',
        'city': 'Holy Cross',
    },
    {
        'code': 'HDB',
        'name': 'Heidelberg Airport',
        'city': 'Heidelberg',
    },
    {
        'code': 'HDD',
        'name': 'Hyderabad Airport',
        'city': 'Hyderabad',
    },
    {
        'code': 'HDF',
        'name': 'Heringsdorf',
        'city': 'Heringsdorf',
    },
    {
        'code': 'HDM',
        'name': 'Hamadan Airport',
        'city': 'Hamadan',
    },
    {
        'code': 'HDN',
        'name': 'Yampa Valley Airport',
        'city': 'Hayden',
    },
    {
        'code': 'HDS',
        'name': 'Hoedspruit Afs Airport',
        'city': 'Phalaborwa',
    },
    {
        'code': 'HDY',
        'name': 'Hat Yai International Airport',
        'city': 'Hat Yai',
    },
    {
        'code': 'HEA',
        'name': 'Herat Airport',
        'city': 'Herat',
    },
    {
        'code': 'HEH',
        'name': 'Heho Airport',
        'city': 'Heho',
    },
    {
        'code': 'HEI',
        'name': 'Heide-Busum Airport',
        'city': 'Heide-Buesum',
    },
    {
        'code': 'HEK',
        'name': 'Heihe Airport',
        'city': 'Heihe',
    },
    {
        'code': 'HEL',
        'name': 'Helsinki Vantaa Airport',
        'city': 'Vantaa',
    },
    {
        'code': 'HER',
        'name': 'Iraklion Airport',
        'city': 'Iraklio',
    },
    {
        'code': 'HET',
        'name': 'Huhehaote Airport',
        'city': 'Hohhot',
    },
    {
        'code': 'HFA',
        'name': 'U Michaeli Airport',
        'city': 'Hefa',
    },
    {
        'code': 'HFE',
        'name': 'Hefei-Luogang Airport',
        'city': 'Hefei',
    },
    {
        'code': 'HFS',
        'name': 'Hagfors Airport',
        'city': 'Hagfors',
    },
    {
        'code': 'HFT',
        'name': 'Hammerfest Airport',
        'city': 'Hammerfest',
    },
    {
        'code': 'HGA',
        'name': 'Hargeisa Airport',
        'city': 'Hargeysa',
    },
    {
        'code': 'HGD',
        'name': 'Hughenden Aerodrome',
        'city': 'Hughenden',
    },
    {
        'code': 'HGH',
        'name': 'Jianoiao Airport',
        'city': 'Hangzhou',
    },
    {
        'code': 'HGL',
        'name': 'Germany',
        'city': 'Helgoland',
    },
    {
        'code': 'HGN',
        'name': 'Mae Hongson Airport',
        'city': 'Mae Hong Son',
    },
    {
        'code': 'HGU',
        'name': 'Mount Hagen Airport',
        'city': 'Mount Hagen',
    },
    {
        'code': 'HHH',
        'name': 'Hilton Head Airport',
        'city': 'Hilton Head Island',
    },
    {
        'code': 'HHN',
        'name': 'Frankfurt-Hahn Airport',
        'city': 'Dickenschied',
    },
    {
        'code': 'HHQ',
        'name': 'Hua Hin Airport',
        'city': 'Hua Hin',
    },
    {
        'code': 'HHZ',
        'name': 'French Polynesia',
        'city': 'Hikueru',
    },
    {
        'code': 'HIB',
        'name': 'Chisholm Hibbing Airport',
        'city': 'Hibbing',
    },
    {
        'code': 'HID',
        'name': 'Horn Island',
        'city': 'Horn Island',
    },
    {
        'code': 'HIJ',
        'name': 'Hiroshima Airport',
        'city': 'Mihara-shi',
    },
    {
        'code': 'HIL',
        'name': 'Shillavo',
        'city': 'Shillavo',
    },
    {
        'code': 'HIN',
        'name': 'Sacheon Airport',
        'city': 'Sacheon-Si',
    },
    {
        'code': 'HIR',
        'name': 'Henderson Airport',
        'city': 'Honiara',
    },
    {
        'code': 'HIS',
        'name': 'Hayman Island Airport',
        'city': 'Hayman Island',
    },
    {
        'code': 'HJJ',
        'name': 'Zhi Jiang',
        'city': 'Zhi Jiang',
    },
    {
        'code': 'HJR',
        'name': 'Khajuraho Airport',
        'city': 'Khajuraho',
    },
    {
        'code': 'HKB',
        'name': 'Healy Lake Airport',
        'city': 'Healy Lake',
    },
    {
        'code': 'HKD',
        'name': 'Hakodate Airport',
        'city': 'Hakodate-shi',
    },
    {
        'code': 'HKG',
        'name': 'Hong Kong International Airport',
        'city': 'Hong Kong',
    },
    {
        'code': 'HKK',
        'name': 'Hokitika Airport',
        'city': 'Hokitika',
    },
    {
        'code': 'HKN',
        'name': 'Hoskins Airport',
        'city': 'Kimbe',
    },
    {
        'code': 'HKT',
        'name': 'Phuket International Airport',
        'city': 'Thalang',
    },
    {
        'code': 'HLA',
        'name': 'Lanseria Airport',
        'city': 'Johannesburg',
    },
    {
        'code': 'HLD',
        'name': 'Hailar',
        'city': 'Hailar',
    },
    {
        'code': 'HLH',
        'name': 'Ulanhot Airport',
        'city': 'Ulan Hot',
    },
    {
        'code': 'HLN',
        'name': 'Helena Regional Airport',
        'city': 'Helena',
    },
    {
        'code': 'HLY',
        'name': 'Holyhead Airport',
        'city': 'Holyhead',
    },
    {
        'code': 'HLZ',
        'name': 'Hamilton Airport',
        'city': 'Hamilton',
    },
    {
        'code': 'HMA',
        'name': 'Khanty-Nansiysk',
        'city': 'Khanty-Mansiysk',
    },
    {
        'code': 'HME',
        'name': 'Oued Irara Airport',
        'city': 'Ouargla',
    },
    {
        'code': 'HMO',
        'name': 'Gen Ignacio P Garcia International Airport',
        'city': 'Hermosillo',
    },
    {
        'code': 'HMV',
        'name': 'Sweden',
        'city': 'Hemavan',
    },
    {
        'code': 'HNA',
        'name': 'Hanamaki Airport',
        'city': 'Hanamaki-shi',
    },
    {
        'code': 'HND',
        'name': 'Tokyo International Airport',
        'city': 'Tokyo',
    },
    {
        'code': 'HNH',
        'name': 'Hoonah Airport',
        'city': 'Hoonah',
    },
    {
        'code': 'HNL',
        'name': 'Honolulu International Airport',
        'city': 'Honolulu',
    },
    {
        'code': 'HNM',
        'name': 'Hana Airport',
        'city': 'Hana',
    },
    {
        'code': 'HNS',
        'name': 'Haines Airport',
        'city': 'Haines',
    },
    {
        'code': 'HOB',
        'name': 'Lea County Regional Airport',
        'city': 'Hobbs',
    },
    {
        'code': 'HOD',
        'name': 'Hodeidah Airport',
        'city': 'Al Hudaydah',
    },
    {
        'code': 'HOE',
        'name': 'Houeisay',
        'city': 'Houeisay',
    },
    {
        'code': 'HOF',
        'name': 'Saudi Arabia',
        'city': 'Alahsa',
    },
    {
        'code': 'HOG',
        'name': 'Holguin Airport',
        'city': 'San Pedro de Cacocum',
    },
    {
        'code': 'HOH',
        'name': 'Hohenems Airport',
        'city': 'Hohenems',
    },
    {
        'code': 'HOI',
        'name': 'Hao Airport',
        'city': 'Papeete',
    },
    {
        'code': 'HOM',
        'name': 'Homer Airport',
        'city': 'Homer',
    },
    {
        'code': 'HON',
        'name': 'Howes',
        'city': 'Huron',
    },
    {
        'code': 'HOQ',
        'name': 'Hof-Plauen Airport',
        'city': 'Hof',
    },
    {
        'code': 'HOR',
        'name': 'Horta Airport',
        'city': 'Horta',
    },
    {
        'code': 'HOU',
        'name': 'William P Hobby Airport',
        'city': 'Houston',
    },
    {
        'code': 'HOV',
        'name': 'Hovden Airport',
        'city': 'Hovdebygda',
    },
    {
        'code': 'HPA',
        'name': 'Salote Pilolevu Airport',
        'city': 'Pangai',
    },
    {
        'code': 'HPB',
        'name': 'Hooper Bay Airport',
        'city': 'Hooper Bay',
    },
    {
        'code': 'HPH',
        'name': 'Hai Phong Cat Bi Airport',
        'city': 'H\u00e4i Ph\u00f2ng',
    },
    {
        'code': 'HPN',
        'name': 'Westchester County Airport',
        'city': 'Purchase',
    },
    {
        'code': 'HRB',
        'name': 'Harbin Yangjiagang Airport',
        'city': 'Harbin',
    },
    {
        'code': 'HRE',
        'name': 'Harare International Airport',
        'city': 'Harare',
    },
    {
        'code': 'HRG',
        'name': 'Hurghada Airport',
        'city': 'Bor Safajah',
    },
    {
        'code': 'HRK',
        'name': 'Kharkov Airport',
        'city': 'Kharkiv',
    },
    {
        'code': 'HRL',
        'name': 'Grande Valley International Airport',
        'city': 'Harlingen',
    },
    {
        'code': 'HRT',
        'name': 'Linton-On-Ouse',
        'city': 'Harrogate',
    },
    {
        'code': 'HSG',
        'name': 'Saga Airport',
        'city': 'Saga',
    },
    {
        'code': 'HSL',
        'name': 'Alaska',
        'city': 'Huslia',
    },
    {
        'code': 'HSN',
        'name': 'Zhoushan Airport',
        'city': 'Shenjiamen Town',
    },
    {
        'code': 'HSV',
        'name': 'Huntsville International Airport',
        'city': 'Huntsville',
    },
    {
        'code': 'HTA',
        'name': 'Chita Airport',
        'city': 'Chita',
    },
    {
        'code': 'HTG',
        'name': 'Hatanga Airport',
        'city': 'Dudinka',
    },
    {
        'code': 'HTI',
        'name': 'Hamilton Island Airport',
        'city': 'Hamilton Island',
    },
    {
        'code': 'HTN',
        'name': 'Hotan',
        'city': 'Hotan',
    },
    {
        'code': 'HTS',
        'name': 'Tri State Walker Long Field Airport',
        'city': 'Huntington',
    },
    {
        'code': 'HUH',
        'name': 'Huahine Airport',
        'city': 'Papeete',
    },
    {
        'code': 'HUI',
        'name': 'Hue-Phu Bai Airport',
        'city': 'Hue',
    },
    {
        'code': 'HUN',
        'name': 'Hwmlien Airport',
        'city': 'Hualien City',
    },
    {
        'code': 'HUQ',
        'name': 'Hon Airport',
        'city': 'Houn',
    },
    {
        'code': 'HUS',
        'name': 'Hughes',
        'city': 'Hughes',
    },
    {
        'code': 'HUV',
        'name': 'Hudiksvall Airport',
        'city': 'Hudiksvall',
    },
    {
        'code': 'HUX',
        'name': 'Bahias de Huatulco International Airport',
        'city': 'Santo Domingo de Morelos',
    },
    {
        'code': 'HUY',
        'name': 'Humberside International Airport',
        'city': 'Ulceby',
    },
    {
        'code': 'HUZ',
        'name': 'Huizhou',
        'city': 'Huizhou',
    },
    {
        'code': 'HVA',
        'name': 'Analalava Airport',
        'city': 'Analalava',
    },
    {
        'code': 'HVB',
        'name': 'Hervey Bay Airport',
        'city': 'Hervey Bay',
    },
    {
        'code': 'HVD',
        'name': 'Mongolia',
        'city': 'Khovd',
    },
    {
        'code': 'HVG',
        'name': 'Valan Airport',
        'city': 'Honningsv\u00e5g',
    },
    {
        'code': 'HVN',
        'name': 'Tweed New Haven Airport',
        'city': 'East Haven',
    },
    {
        'code': 'HVR',
        'name': 'Havre City-County Airport',
        'city': 'Havre',
    },
    {
        'code': 'HYA',
        'name': 'Barnstable Boardman Polando Airport',
        'city': 'Hyannis',
    },
    {
        'code': 'HYD',
        'name': 'Begumpet Airport',
        'city': 'Hyderabad',
    },
    {
        'code': 'HYG',
        'name': 'Alaska',
        'city': 'Hydaburg',
    },
    {
        'code': 'HYL',
        'name': 'SPB',
        'city': 'Hollis',
    },
    {
        'code': 'HYN',
        'name': 'Huangyan',
        'city': 'Huangyan',
    },
    {
        'code': 'HYS',
        'name': 'Hays Municipal Airport',
        'city': 'Hays',
    },
    {
        'code': 'HZG',
        'name': 'Hanzhong Airport',
        'city': 'Hanzhong',
    },
    {
        'code': 'HZH',
        'name': 'Liping',
        'city': 'Liping City',
    },
    {
        'code': 'IAA',
        'name': 'Russia',
        'city': 'Igarka',
    },
    {
        'code': 'IAD',
        'name': 'Dulles International Airport',
        'city': 'Washington',
    },
    {
        'code': 'IAG',
        'name': 'Niagara Falls International Airport',
        'city': 'Niagara Falls',
    },
    {
        'code': 'IAH',
        'name': 'George Bush Intercontinental Airport',
        'city': 'Houston',
    },
    {
        'code': 'IAM',
        'name': 'In Amenas Airport',
        'city': 'Illizi',
    },
    {
        'code': 'IAN',
        'name': 'Kiana',
        'city': 'Kiana',
    },
    {
        'code': 'IAS',
        'name': 'Iasi North Airport',
        'city': 'Ilasi',
    },
    {
        'code': 'IBA',
        'name': 'Ibadan Airport',
        'city': 'Ibadan',
    },
    {
        'code': 'IBE',
        'name': 'Perales Airport',
        'city': 'Ibague',
    },
    {
        'code': 'IBZ',
        'name': 'Ibiza Airport',
        'city': 'San Jos\u00e9',
    },
    {
        'code': 'ICI',
        'name': 'Cicia Airport',
        'city': 'Cicia',
    },
    {
        'code': 'ICN',
        'name': 'New Incheon International Airport',
        'city': 'Incheon',
    },
    {
        'code': 'ICT',
        'name': 'Wichita Mid-Continent Airport',
        'city': 'Wichita',
    },
    {
        'code': 'IDA',
        'name': 'Fanning Field Airport',
        'city': 'Idaho Falls',
    },
    {
        'code': 'IDR',
        'name': 'Devi Ahilyabai Holkar International Airport',
        'city': 'Indore',
    },
    {
        'code': 'IEG',
        'name': 'Babimost Airport',
        'city': 'Babimost',
    },
    {
        'code': 'IEV',
        'name': 'Zhulyany Airport',
        'city': 'Kiev',
    },
    {
        'code': 'IFJ',
        'name': 'Isafjordur Airport',
        'city': 'Isafjordur',
    },
    {
        'code': 'IFN',
        'name': 'Esfahan International Airport',
        'city': 'Esfahan',
    },
    {
        'code': 'IFO',
        'name': 'Ivano-Frankovsk Airport',
        'city': 'Ivano-Frankivs\'k',
    },
    {
        'code': 'IFP',
        'name': 'Laughlin-Bullhead International Airport',
        'city': 'Bullhead City',
    },
    {
        'code': 'IGA',
        'name': 'Great Inagua Airport',
        'city': 'Matthew Town',
    },
    {
        'code': 'IGG',
        'name': 'Igiugig',
        'city': 'Igiugig',
    },
    {
        'code': 'IGM',
        'name': 'Kingman Airport',
        'city': 'Kingman',
    },
    {
        'code': 'IGR',
        'name': 'Cataratas del Iguazu Airport',
        'city': 'Puerto Esperanza',
    },
    {
        'code': 'IGS',
        'name': 'Ingolstadt-Manching',
        'city': 'Ingolstadt-Manching',
    },
    {
        'code': 'IGU',
        'name': 'Cataratas International Airport',
        'city': 'Foz do Iguacu',
    },
    {
        'code': 'IHR',
        'name': 'Iran',
        'city': 'Iran Shahr',
    },
    {
        'code': 'IIL',
        'name': 'Iran',
        'city': 'Ilaam',
    },
    {
        'code': 'IJK',
        'name': 'Russia',
        'city': 'Izhevsk',
    },
    {
        'code': 'IKA',
        'name': 'Imam Khomeini International Airport',
        'city': 'Tehran',
    },
    {
        'code': 'IKO',
        'name': 'Nikolski',
        'city': 'Nikolski',
    },
    {
        'code': 'IKS',
        'name': 'Tiksi Airport',
        'city': 'Tiksi',
    },
    {
        'code': 'IKT',
        'name': 'Irkutsk Southeast Airport',
        'city': 'Irkutsk',
    },
    {
        'code': 'ILF',
        'name': 'Ilford Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'ILI',
        'name': 'Iliamna Airport',
        'city': 'Iliamna',
    },
    {
        'code': 'ILM',
        'name': 'Wilmington International Airport',
        'city': 'Wilmington',
    },
    {
        'code': 'ILN',
        'name': 'Airborne Airpark',
        'city': 'Wilmington',
    },
    {
        'code': 'ILO',
        'name': 'Iloilo Airport',
        'city': 'Iloilo',
    },
    {
        'code': 'ILP',
        'name': 'Moue Airport',
        'city': 'Vao',
    },
    {
        'code': 'ILR',
        'name': 'Ilorin Airport',
        'city': 'Ilorin',
    },
    {
        'code': 'ILY',
        'name': 'Islay Airport',
        'city': 'Glenegedale',
    },
    {
        'code': 'ILZ',
        'name': 'Kotesovo Airport',
        'city': 'Byt\u010da',
    },
    {
        'code': 'IMF',
        'name': 'Imphal Airport',
        'city': 'Lilong (Imphal West)',
    },
    {
        'code': 'IMK',
        'name': 'Nepal',
        'city': 'Simikot',
    },
    {
        'code': 'IMP',
        'name': 'Prefeito Renato Moreira Airport',
        'city': 'Imperatriz',
    },
    {
        'code': 'IMT',
        'name': 'Ford Airport',
        'city': 'Kingsford',
    },
    {
        'code': 'INC',
        'name': 'Yinchuan Airport',
        'city': 'Yinchuan',
    },
    {
        'code': 'IND',
        'name': 'Indianapolis International Airport',
        'city': 'Indianapolis',
    },
    {
        'code': 'INH',
        'name': 'Inhambane Airport',
        'city': 'Inhambane',
    },
    {
        'code': 'INI',
        'name': 'Nis Airport',
        'city': 'Nis',
    },
    {
        'code': 'INL',
        'name': 'Falls International Airport',
        'city': 'International Falls',
    },
    {
        'code': 'INN',
        'name': 'Innsbruck Airport',
        'city': 'Innsbruck',
    },
    {
        'code': 'INT',
        'name': 'Smith Reynolds Airport',
        'city': 'Winston-Salem',
    },
    {
        'code': 'INU',
        'name': 'Nauru International Airport',
        'city': 'Yaren',
    },
    {
        'code': 'INV',
        'name': 'Inverness Airport',
        'city': 'Inverness',
    },
    {
        'code': 'INZ',
        'name': 'In Salah Airport',
        'city': 'In Salah',
    },
    {
        'code': 'IOA',
        'name': 'Ioannina Airport',
        'city': 'Ioannina',
    },
    {
        'code': 'IOM',
        'name': 'Ronaldsway Airport',
        'city': 'Castletown',
    },
    {
        'code': 'ION',
        'name': 'Impfondo Airport',
        'city': 'Impfondo',
    },
    {
        'code': 'IOS',
        'name': 'Jorge Amado Airport',
        'city': 'Ilh\u00e9us',
    },
    {
        'code': 'IPA',
        'name': 'Ipota',
        'city': 'Ipota',
    },
    {
        'code': 'IPC',
        'name': 'Mataveri International Airport',
        'city': 'Easter Island',
    },
    {
        'code': 'IPH',
        'name': 'Ipoh Airport',
        'city': 'Ipoh',
    },
    {
        'code': 'IPI',
        'name': 'San Luis Airport',
        'city': 'Ipiales',
    },
    {
        'code': 'IPL',
        'name': 'Imperial County Airport',
        'city': 'Imperial',
    },
    {
        'code': 'IPN',
        'name': 'Usiminas Airport',
        'city': 'Santana do Para\u00edso',
    },
    {
        'code': 'IPT',
        'name': 'Williamsport-Lycoming County Airport',
        'city': 'Montoursville',
    },
    {
        'code': 'IPW',
        'name': 'Ipswich Airport',
        'city': 'Ipswich',
    },
    {
        'code': 'IQM',
        'name': 'Qiemo',
        'city': 'Qiemo',
    },
    {
        'code': 'IQN',
        'name': 'Qingyang',
        'city': 'Qingyang',
    },
    {
        'code': 'IQQ',
        'name': 'Diego Aracena International Airport',
        'city': 'Alto Hospicio',
    },
    {
        'code': 'IQT',
        'name': 'Cnl Fap Fran Seca Vignetta Airport',
        'city': 'Iquitos',
    },
    {
        'code': 'IRA',
        'name': 'Kirakira',
        'city': 'Kirakira',
    },
    {
        'code': 'IRC',
        'name': 'Circle',
        'city': 'Circle',
    },
    {
        'code': 'IRJ',
        'name': 'Capitan Vicente A Almonacid Airport',
        'city': 'Chamical',
    },
    {
        'code': 'IRM',
        'name': 'Irma',
        'city': 'Irma',
    },
    {
        'code': 'ISA',
        'name': 'Mount Isa Airport',
        'city': 'Mount Isa',
    },
    {
        'code': 'ISB',
        'name': 'Islamabad International Airport',
        'city': 'R\u00e5walpindi',
    },
    {
        'code': 'ISC',
        'name': 'Saint Mary\'s Airport',
        'city': 'Rams Valley',
    },
    {
        'code': 'ISG',
        'name': 'Ishigaki Airport',
        'city': 'Ishigaki-shi',
    },
    {
        'code': 'ISN',
        'name': 'Sloulin Field International Airport',
        'city': 'Williston',
    },
    {
        'code': 'ISO',
        'name': 'Kinston Jetport Stallings Airport',
        'city': 'Kinston',
    },
    {
        'code': 'ISP',
        'name': 'Long Island Macarthur Airport',
        'city': 'Ronkonkoma',
    },
    {
        'code': 'IST',
        'name': 'Ataturk Hava Limani Airport',
        'city': 'Bak\u0131rk\u00f6y',
    },
    {
        'code': 'ITH',
        'name': 'Tompkins County Airport',
        'city': 'Ithaca',
    },
    {
        'code': 'ITM',
        'name': 'Osaka International Airport',
        'city': 'Itami-shi',
    },
    {
        'code': 'ITO',
        'name': 'Hilo International Airport',
        'city': 'Hilo',
    },
    {
        'code': 'IUE',
        'name': 'Niue',
        'city': 'Niue Island',
    },
    {
        'code': 'IVC',
        'name': 'Invercargill Airport',
        'city': 'Invercargill',
    },
    {
        'code': 'IVL',
        'name': 'Ivalo Airport',
        'city': 'Ivalo',
    },
    {
        'code': 'IVR',
        'name': 'Inverell Airport',
        'city': 'Inverell',
    },
    {
        'code': 'IWD',
        'name': 'Gogebic-Iron County Airport',
        'city': 'Ironwood',
    },
    {
        'code': 'IWJ',
        'name': 'Iwami Airport',
        'city': 'Iwami',
    },
    {
        'code': 'IXA',
        'name': 'Agartala Airport',
        'city': 'Gandhigram',
    },
    {
        'code': 'IXB',
        'name': 'Bagdogra Airport',
        'city': 'Bagdogra',
    },
    {
        'code': 'IXC',
        'name': 'Chandigarh Airport',
        'city': 'Bhabat',
    },
    {
        'code': 'IXD',
        'name': 'Bamrauli Airport',
        'city': 'Allahabad',
    },
    {
        'code': 'IXE',
        'name': 'Mangalore Airport',
        'city': 'Mulur',
    },
    {
        'code': 'IXG',
        'name': 'Belgaum Airport',
        'city': 'Kangrali',
    },
    {
        'code': 'IXI',
        'name': 'India',
        'city': 'Lilabari',
    },
    {
        'code': 'IXJ',
        'name': 'Jammu Airport',
        'city': 'Jammu Cantt',
    },
    {
        'code': 'IXL',
        'name': 'Leh Airport',
        'city': 'Leh',
    },
    {
        'code': 'IXM',
        'name': 'Madurai Airport',
        'city': 'Harveypatti',
    },
    {
        'code': 'IXR',
        'name': 'Birsa Munda Airport',
        'city': 'Ranchi',
    },
    {
        'code': 'IXS',
        'name': 'Kumbhirgram Airport',
        'city': 'Tarapur',
    },
    {
        'code': 'IXU',
        'name': 'Aurangabad Airport',
        'city': 'Aurangabad',
    },
    {
        'code': 'IXW',
        'name': 'Sonari Airport',
        'city': 'Jamshedpur',
    },
    {
        'code': 'IXY',
        'name': 'Kandla Airport',
        'city': 'Gandhidham',
    },
    {
        'code': 'IXZ',
        'name': 'Vir Savarkar Airport',
        'city': 'Port Blair',
    },
    {
        'code': 'IYK',
        'name': 'Inyokern Airport',
        'city': 'Inyokern',
    },
    {
        'code': 'IZO',
        'name': 'Izumo Airport',
        'city': 'Hikawa-cho',
    },
    {
        'code': 'JAC',
        'name': 'Jackson Hole Airport',
        'city': 'Jackson',
    },
    {
        'code': 'JAI',
        'name': 'Sanganer Airport',
        'city': 'Jaipur',
    },
    {
        'code': 'JAL',
        'name': 'Jalapa Airport',
        'city': 'Jalapa',
    },
    {
        'code': 'JAN',
        'name': 'Jackson International Airport',
        'city': 'Pearl',
    },
    {
        'code': 'JAV',
        'name': 'Ilulissat Airport',
        'city': 'Ilulissat',
    },
    {
        'code': 'JAX',
        'name': 'Jacksonville International Airport',
        'city': 'Jacksonville',
    },
    {
        'code': 'JCB',
        'name': 'Joacaba Airport',
        'city': 'Joa\u00e7aba',
    },
    {
        'code': 'JCH',
        'name': 'Christianshab Airport',
        'city': 'Qasigiannguit',
    },
    {
        'code': 'JCK',
        'name': 'Julia Creek Aerodrome',
        'city': 'Julia Creek',
    },
    {
        'code': 'JCU',
        'name': 'Ceuta Heliport',
        'city': 'Ceuta',
    },
    {
        'code': 'JDF',
        'name': 'Francisco de Assis Airport',
        'city': 'Juiz de Fora',
    },
    {
        'code': 'JDH',
        'name': 'Jodhpur Airport',
        'city': 'Jodhpur',
    },
    {
        'code': 'JDO',
        'name': 'Cariri Regional Airport',
        'city': 'Juazeiro do Norte',
    },
    {
        'code': 'JDZ',
        'name': 'Jingde Town',
        'city': 'Jingdezhen',
    },
    {
        'code': 'JED',
        'name': 'King Abdul Aziz International Airport',
        'city': 'Jeddah',
    },
    {
        'code': 'JEF',
        'name': 'Jefferson City Memorial Airport',
        'city': 'Holts Summit',
    },
    {
        'code': 'JEG',
        'name': 'Auisiait Airport',
        'city': 'Aasiaat',
    },
    {
        'code': 'JEJ',
        'name': 'Jeh',
        'city': 'Jeh',
    },
    {
        'code': 'JER',
        'name': 'Jersey Airport',
        'city': 'St. Peter',
    },
    {
        'code': 'JFK',
        'name': 'John F Kennedy International Airport',
        'city': 'Jamaica',
    },
    {
        'code': 'JFR',
        'name': 'Paamiut',
        'city': 'Paamiut',
    },
    {
        'code': 'JGA',
        'name': 'Jamnagar Airport',
        'city': 'Jamnagar',
    },
    {
        'code': 'JGC',
        'name': 'Grand Canyon Heliport',
        'city': 'Williams',
    },
    {
        'code': 'JGN',
        'name': 'Jiayuguan Airport',
        'city': 'Jiayuguan',
    },
    {
        'code': 'JGO',
        'name': 'Godhavn Airport',
        'city': 'Qeqertarsuaq',
    },
    {
        'code': 'JGS',
        'name': 'Ji An\/Jing Gang Shan',
        'city': 'Ji An',
    },
    {
        'code': 'JHB',
        'name': 'Sultan Ismail Airport',
        'city': 'Senai',
    },
    {
        'code': 'JHG',
        'name': 'Gasa',
        'city': 'Jinghong',
    },
    {
        'code': 'JHM',
        'name': 'Kapalua West Maui Airport',
        'city': 'Lahaina',
    },
    {
        'code': 'JHS',
        'name': 'Holsteinsborg Airport',
        'city': 'Sisimiut',
    },
    {
        'code': 'JHW',
        'name': 'Chautauqua County-Jamestown Airport',
        'city': 'Jamestown',
    },
    {
        'code': 'JIB',
        'name': 'Djibouti Ambouli Airport',
        'city': 'Djibouti City',
    },
    {
        'code': 'JIJ',
        'name': 'Jijiga',
        'city': 'Jijiga',
    },
    {
        'code': 'JIK',
        'name': 'Ikaria Island Airport',
        'city': 'Evdilos',
    },
    {
        'code': 'JIM',
        'name': 'Jimma',
        'city': 'Jimma',
    },
    {
        'code': 'JIU',
        'name': 'Jiujiang',
        'city': 'Jiujiang',
    },
    {
        'code': 'JJN',
        'name': 'Jinjiang',
        'city': 'Jinjiang',
    },
    {
        'code': 'JJU',
        'name': 'Julianehab Heliport',
        'city': 'Qaqortoq',
    },
    {
        'code': 'JKG',
        'name': 'Jonkoping Airport',
        'city': 'Jonkoping',
    },
    {
        'code': 'JKH',
        'name': 'Chios Airport',
        'city': 'Khios',
    },
    {
        'code': 'JKL',
        'name': 'Julian Carroll Airport',
        'city': 'Jackson',
    },
    {
        'code': 'JLD',
        'name': 'Landskrona Heliport',
        'city': 'Landskrona',
    },
    {
        'code': 'JLN',
        'name': 'Joplin Regional Airport',
        'city': 'Webb City',
    },
    {
        'code': 'JLR',
        'name': 'Jabalpur Airport',
        'city': 'Bilpura',
    },
    {
        'code': 'JMK',
        'name': 'Mikonos Airport',
        'city': 'Mikonos',
    },
    {
        'code': 'JMS',
        'name': 'Jamestown Municipal Airport',
        'city': 'Jamestown',
    },
    {
        'code': 'JMU',
        'name': 'Jiamusi',
        'city': 'Jiamusi',
    },
    {
        'code': 'JNB',
        'name': 'OR Tambo International Airport',
        'city': 'Johannesburg',
    },
    {
        'code': 'JNN',
        'name': 'Nanortalik Airport',
        'city': 'Nanortalik',
    },
    {
        'code': 'JNS',
        'name': 'Narsaq Heliport',
        'city': 'Narsaq',
    },
    {
        'code': 'JNU',
        'name': 'Juneau International Airport',
        'city': 'Juneau',
    },
    {
        'code': 'JNX',
        'name': 'Naxos Airport',
        'city': 'Naxos',
    },
    {
        'code': 'JNZ',
        'name': 'Jinzhou',
        'city': 'Jinzhou',
    },
    {
        'code': 'JOE',
        'name': 'Joensuu Airport',
        'city': 'Yl\u00e4mylly',
    },
    {
        'code': 'JOG',
        'name': 'Adisucipto Airport',
        'city': 'Yogyakarta',
    },
    {
        'code': 'JOI',
        'name': 'Lauro Carneiro de Loyola Airport',
        'city': 'Joinville',
    },
    {
        'code': 'JOL',
        'name': 'Jolo Airport',
        'city': 'Jolo',
    },
    {
        'code': 'JPA',
        'name': 'Presidente Castro Pinto International Airport',
        'city': 'Santa Rita',
    },
    {
        'code': 'JPR',
        'name': 'Ji Parana Airport',
        'city': 'Ji-Paran\u00e1',
    },
    {
        'code': 'JQA',
        'name': 'Greenland',
        'city': 'Qaarsut',
    },
    {
        'code': 'JRB',
        'name': 'Downtown Manhattan Heliport',
        'city': 'New York',
    },
    {
        'code': 'JRH',
        'name': 'Jorhat Airport',
        'city': 'Senchoa Gaon',
    },
    {
        'code': 'JRO',
        'name': 'Kilimanjaro International Airport',
        'city': 'Sanya',
    },
    {
        'code': 'JSA',
        'name': 'Jaisalmer Airport',
        'city': 'Jaisalmer',
    },
    {
        'code': 'JSH',
        'name': 'Sitia Airport',
        'city': 'Seteia',
    },
    {
        'code': 'JSI',
        'name': 'Skiathos Airport',
        'city': 'Skiathos',
    },
    {
        'code': 'JSR',
        'name': 'Jessore Airport',
        'city': 'Jessore',
    },
    {
        'code': 'JST',
        'name': 'Johnstown Cambria County Airport',
        'city': 'Johnstown',
    },
    {
        'code': 'JSU',
        'name': 'Maniitsoq Heliport',
        'city': 'Maitsoq',
    },
    {
        'code': 'JSY',
        'name': 'Syros Island Airport',
        'city': 'Ano Siros',
    },
    {
        'code': 'JTR',
        'name': 'Santorini Airport',
        'city': 'Emborion',
    },
    {
        'code': 'JTY',
        'name': 'Astypalaia Island Airport',
        'city': 'Astypalaea',
    },
    {
        'code': 'JUB',
        'name': 'Juba Airport',
        'city': 'Juba',
    },
    {
        'code': 'JUJ',
        'name': 'Jujuy Airport',
        'city': 'Santa Catalina',
    },
    {
        'code': 'JUL',
        'name': 'Juliaca Airport',
        'city': 'Juliaca',
    },
    {
        'code': 'JUM',
        'name': 'Jumla',
        'city': 'Jumla',
    },
    {
        'code': 'JUV',
        'name': 'Upernavik Heliport',
        'city': 'Upernavik',
    },
    {
        'code': 'JUZ',
        'name': 'Juzhou',
        'city': 'Juzhou',
    },
    {
        'code': 'JVA',
        'name': 'Toliara',
        'city': 'Ankavandra',
    },
    {
        'code': 'JYR',
        'name': 'Jiroft',
        'city': 'Jiroft',
    },
    {
        'code': 'JYV',
        'name': 'Jyvaskyla Airport',
        'city': 'Tikkakoski',
    },
    {
        'code': 'JZH',
        'name': 'Jiu Zhai Huang Long',
        'city': 'Song Pan',
    },
    {
        'code': 'KAB',
        'name': 'Kariba Airport',
        'city': 'Kariba',
    },
    {
        'code': 'KAC',
        'name': 'Kamishly Airport',
        'city': 'Al Qamishli',
    },
    {
        'code': 'KAD',
        'name': 'Kaduna Airport',
        'city': 'Afaka',
    },
    {
        'code': 'KAJ',
        'name': 'Kajaani Airport',
        'city': 'Paltaniemi',
    },
    {
        'code': 'KAL',
        'name': 'Kaltag',
        'city': 'Kaltag',
    },
    {
        'code': 'KAN',
        'name': 'Kano Mallam Aminu International Airport',
        'city': 'Kano',
    },
    {
        'code': 'KAO',
        'name': 'Kuusamo Airport',
        'city': 'Kuusamo',
    },
    {
        'code': 'KAT',
        'name': 'Kaitaia Aerodrome',
        'city': 'Kaitaia',
    },
    {
        'code': 'KAW',
        'name': 'Kawthaung Airport',
        'city': 'Kawthaung',
    },
    {
        'code': 'KAX',
        'name': 'Kalbarri',
        'city': 'Kalbarri',
    },
    {
        'code': 'KBC',
        'name': 'Birch Creek Airport',
        'city': 'Birch Creek',
    },
    {
        'code': 'KBL',
        'name': 'Kabul International Airport',
        'city': 'Kabul',
    },
    {
        'code': 'KBP',
        'name': 'Borispol Airport',
        'city': 'Kiev',
    },
    {
        'code': 'KBR',
        'name': 'Sultan Ismail Petra Airport',
        'city': 'Kota Baharu',
    },
    {
        'code': 'KBV',
        'name': 'Thailand',
        'city': 'Krabi',
    },
    {
        'code': 'KCA',
        'name': 'Kuqa',
        'city': 'Kuqa',
    },
    {
        'code': 'KCC',
        'name': 'Alaska',
        'city': 'Coffman Cove',
    },
    {
        'code': 'KCF',
        'name': 'Pakistan',
        'city': 'Kadanwari',
    },
    {
        'code': 'KCG',
        'name': 'Chignik Fisheries Airport',
        'city': 'Chignik Lagoon',
    },
    {
        'code': 'KCH',
        'name': 'Kuching Airport',
        'city': 'Kuching',
    },
    {
        'code': 'KCL',
        'name': 'Chignik Lagoon Airport',
        'city': 'Chignik Lagoon',
    },
    {
        'code': 'KCM',
        'name': 'Kahramanmaras Airport',
        'city': 'Kahramanmara\u015f',
    },
    {
        'code': 'KCQ',
        'name': 'Chignik Lake Airport',
        'city': 'Chignik',
    },
    {
        'code': 'KCZ',
        'name': 'Kochi Airport',
        'city': 'Nankoku-shi',
    },
    {
        'code': 'KDH',
        'name': 'Kandahar International Airport',
        'city': 'Alaqadari Daman',
    },
    {
        'code': 'KDI',
        'name': 'Wolter Monginsidi Airport',
        'city': 'Kendari',
    },
    {
        'code': 'KDL',
        'name': 'Kardla East Airport',
        'city': 'Kerdlya',
    },
    {
        'code': 'KDM',
        'name': 'Kaadedhdhoo',
        'city': 'Kaadedhdhoo',
    },
    {
        'code': 'KDO',
        'name': 'Kudadu',
        'city': 'Kadhdhoo',
    },
    {
        'code': 'KDU',
        'name': 'Skardu Airport',
        'city': 'Skardu',
    },
    {
        'code': 'KDV',
        'name': 'Kandavu Airport',
        'city': 'Kandavu',
    },
    {
        'code': 'KEB',
        'name': 'Nanwalek',
        'city': 'Nanwalek',
    },
    {
        'code': 'KEF',
        'name': 'Keflavik International',
        'city': 'Reykjavik',
    },
    {
        'code': 'KEJ',
        'name': 'Kemerovo Airport',
        'city': 'Kemerovo',
    },
    {
        'code': 'KEK',
        'name': 'Ekwok',
        'city': 'Ekwok',
    },
    {
        'code': 'KEM',
        'name': 'Kemi Airport',
        'city': 'Kemi',
    },
    {
        'code': 'KEP',
        'name': 'Nepalganj',
        'city': 'Nepalganj',
    },
    {
        'code': 'KER',
        'name': 'Kerman Airport',
        'city': 'Kerman',
    },
    {
        'code': 'KET',
        'name': 'Kengtung Airport',
        'city': 'Keng Tung',
    },
    {
        'code': 'KEW',
        'name': 'Keewaywin',
        'city': 'Keewaywin',
    },
    {
        'code': 'KFA',
        'name': 'Kiffa Airport',
        'city': 'Kiffa',
    },
    {
        'code': 'KFP',
        'name': 'False Pass',
        'city': 'False Pass',
    },
    {
        'code': 'KGA',
        'name': 'Kananga Airport',
        'city': 'Kananga',
    },
    {
        'code': 'KGC',
        'name': 'Kingscote Airport',
        'city': 'Kingscote',
    },
    {
        'code': 'KGD',
        'name': 'Kaliningradskaya Oblast',
        'city': 'Kaliningrad',
    },
    {
        'code': 'KGE',
        'name': 'Kagau',
        'city': 'Kagau',
    },
    {
        'code': 'KGF',
        'name': 'Karaganda Airport',
        'city': 'Qaraghandy',
    },
    {
        'code': 'KGI',
        'name': 'Kalgoorlie Bolder Airport',
        'city': 'Kalgoorlie',
    },
    {
        'code': 'KGK',
        'name': 'Koliganek Airport',
        'city': 'New Koliganek',
    },
    {
        'code': 'KGL',
        'name': 'Kigali Airport',
        'city': 'Kigali',
    },
    {
        'code': 'KGP',
        'name': 'Kogalym International',
        'city': 'Kogalym',
    },
    {
        'code': 'KGS',
        'name': 'Kos Airport',
        'city': 'Antimacheia',
    },
    {
        'code': 'KGX',
        'name': 'Alaska',
        'city': 'Grayling',
    },
    {
        'code': 'KHG',
        'name': 'Kashi Airport',
        'city': 'Kashi',
    },
    {
        'code': 'KHH',
        'name': 'Kaohsiung International Airport',
        'city': 'Kaohsiung City',
    },
    {
        'code': 'KHI',
        'name': 'Karachi Civil Airport',
        'city': 'Karachi',
    },
    {
        'code': 'KHM',
        'name': 'Khamti',
        'city': 'Khamti',
    },
    {
        'code': 'KHN',
        'name': 'Nanchang New Airport',
        'city': 'Nanchang',
    },
    {
        'code': 'KHS',
        'name': 'Khasab Airport',
        'city': 'Khasab',
    },
    {
        'code': 'KHV',
        'name': 'Khabarovsk Northeast Airport',
        'city': 'Khabarovsk',
    },
    {
        'code': 'KHY',
        'name': 'Iran',
        'city': 'Khoy',
    },
    {
        'code': 'KHZ',
        'name': 'French Polynesia',
        'city': 'Kauehi',
    },
    {
        'code': 'KID',
        'name': 'Kristianstad Airport',
        'city': 'Tollarp',
    },
    {
        'code': 'KIF',
        'name': 'Kingfisher Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'KIH',
        'name': 'Kish Island Airport',
        'city': 'Bandar Abbas',
    },
    {
        'code': 'KIJ',
        'name': 'Niigata Airport',
        'city': 'Niigata-shi',
    },
    {
        'code': 'KIK',
        'name': 'Kirkuk Airport',
        'city': 'Kirkuk',
    },
    {
        'code': 'KIM',
        'name': 'B J Vorster Airport',
        'city': 'Kimberley',
    },
    {
        'code': 'KIN',
        'name': 'Norman Manley',
        'city': 'Kingston',
    },
    {
        'code': 'KIR',
        'name': 'Kerry County Airport',
        'city': 'Farranfore',
    },
    {
        'code': 'KIS',
        'name': 'Kisumu Airport',
        'city': 'Kisumu',
    },
    {
        'code': 'KIT',
        'name': 'Kithira Airport',
        'city': 'Potamos Kythiron',
    },
    {
        'code': 'KIV',
        'name': 'Kishinev Southeast Airport',
        'city': 'Chisinau',
    },
    {
        'code': 'KIX',
        'name': 'Kansai International Airport',
        'city': 'Tajiri-cho',
    },
    {
        'code': 'KJA',
        'name': 'Yelovaya Airport',
        'city': 'Kansk',
    },
    {
        'code': 'KKA',
        'name': 'Koyuk',
        'city': 'Koyuk',
    },
    {
        'code': 'KKB',
        'name': 'Kitoi Seaplane Base',
        'city': 'Kitoi Bay',
    },
    {
        'code': 'KKC',
        'name': 'Khon Kaen Airport',
        'city': 'Khon Kaen',
    },
    {
        'code': 'KKD',
        'name': 'Northern',
        'city': 'Kokoda',
    },
    {
        'code': 'KKE',
        'name': 'Bay of Islands Airport',
        'city': 'Kerikeri',
    },
    {
        'code': 'KKH',
        'name': 'Alaska',
        'city': 'Kongiganak',
    },
    {
        'code': 'KKI',
        'name': 'Akiachak',
        'city': 'Akiachak',
    },
    {
        'code': 'KKJ',
        'name': 'New Kitakyushu Airport',
        'city': 'Kita Kyushu',
    },
    {
        'code': 'KKN',
        'name': 'Kirkenes Hoybuktmoen Airport',
        'city': 'Hesseng',
    },
    {
        'code': 'KKR',
        'name': 'French Polynesia',
        'city': 'Kaukura Atoll',
    },
    {
        'code': 'KKU',
        'name': 'Ekuk Airport',
        'city': 'Clarks Point',
    },
    {
        'code': 'KLG',
        'name': 'Kalskag',
        'city': 'Kalskag',
    },
    {
        'code': 'KLH',
        'name': 'Kolhapur Airport',
        'city': 'Kolhapur',
    },
    {
        'code': 'KLL',
        'name': 'Levelock',
        'city': 'Levelock',
    },
    {
        'code': 'KLN',
        'name': 'Larsen Bay',
        'city': 'Larsen Bay',
    },
    {
        'code': 'KLO',
        'name': 'Kalib0 Airport',
        'city': 'Kalibo',
    },
    {
        'code': 'KLR',
        'name': 'Kalmar Airport',
        'city': 'Kalmar',
    },
    {
        'code': 'KLU',
        'name': 'Klagenfurt Airport',
        'city': 'Celovec',
    },
    {
        'code': 'KLV',
        'name': 'Karlovy Vary Airport',
        'city': 'Carlsbad',
    },
    {
        'code': 'KLW',
        'name': 'Klawock Seaplane Base',
        'city': 'Klawock',
    },
    {
        'code': 'KLX',
        'name': 'Kalamata Airport',
        'city': 'Kalamae',
    },
    {
        'code': 'KMA',
        'name': 'Kerema Airport',
        'city': 'Kerema',
    },
    {
        'code': 'KMC',
        'name': 'King Khalid Military',
        'city': 'King Khalid Mil. City',
    },
    {
        'code': 'KME',
        'name': 'Kamembe Airport',
        'city': 'Kamembe',
    },
    {
        'code': 'KMG',
        'name': 'Wuchia Pa Airport',
        'city': 'Kunming',
    },
    {
        'code': 'KMI',
        'name': 'Miyazaki Airport',
        'city': 'Miyazaki-shi',
    },
    {
        'code': 'KMJ',
        'name': 'Kumamoto Airport',
        'city': 'Kikuyo-machi',
    },
    {
        'code': 'KMO',
        'name': 'Manokotak',
        'city': 'Manokotak',
    },
    {
        'code': 'KMQ',
        'name': 'Komatsu Airport',
        'city': 'Komatsu-shi',
    },
    {
        'code': 'KMS',
        'name': 'Kumasi Airport',
        'city': 'New Tafo',
    },
    {
        'code': 'KMV',
        'name': 'Kalemyo Airport',
        'city': 'Kalemyo',
    },
    {
        'code': 'KMY',
        'name': 'Moser Bay',
        'city': 'Moser Bay',
    },
    {
        'code': 'KND',
        'name': 'Kindu Airport',
        'city': 'Kindu',
    },
    {
        'code': 'KNF',
        'name': 'Kings Lynn',
        'city': 'Kings Lynn',
    },
    {
        'code': 'KNG',
        'name': 'West Irian Jaya',
        'city': 'Kaimana',
    },
    {
        'code': 'KNH',
        'name': 'Kinmen County',
        'city': 'Kinmen',
    },
    {
        'code': 'KNK',
        'name': 'Kakhonak',
        'city': 'Kakhonak',
    },
    {
        'code': 'KNQ',
        'name': 'Kone',
        'city': 'Kone',
    },
    {
        'code': 'KNS',
        'name': 'King Island Airport',
        'city': 'King Island',
    },
    {
        'code': 'KNU',
        'name': 'Kanpur Airport',
        'city': 'Kanpur',
    },
    {
        'code': 'KNW',
        'name': 'New Stuyahok',
        'city': 'New Stuyahok',
    },
    {
        'code': 'KNX',
        'name': 'Kununurra Airport',
        'city': 'Durack',
    },
    {
        'code': 'KOA',
        'name': 'Kailua-Kona International Airport',
        'city': 'Kailua Kona',
    },
    {
        'code': 'KOC',
        'name': 'Koumac',
        'city': 'Koumac',
    },
    {
        'code': 'KOE',
        'name': 'El Tari Airport',
        'city': 'Kupang',
    },
    {
        'code': 'KOI',
        'name': 'Kirkwall Airport',
        'city': 'Kirkwall',
    },
    {
        'code': 'KOJ',
        'name': 'Kagoshima Airport',
        'city': 'Kirishima-shi',
    },
    {
        'code': 'KOK',
        'name': 'Kruunupyy Airport',
        'city': 'Kruunupyy',
    },
    {
        'code': 'KOP',
        'name': 'Nakhon Phanom Airport',
        'city': 'Nakhon Phanom',
    },
    {
        'code': 'KOT',
        'name': 'Kotlik',
        'city': 'Kotlik',
    },
    {
        'code': 'KOU',
        'name': 'Koulamoutou',
        'city': 'Koulamoutou',
    },
    {
        'code': 'KOW',
        'name': 'Ganzhou Airport',
        'city': 'Ganzhou',
    },
    {
        'code': 'KOY',
        'name': 'Olga Bay',
        'city': 'Olga Bay',
    },
    {
        'code': 'KOZ',
        'name': 'Alaska',
        'city': 'Ouzinkie',
    },
    {
        'code': 'KPB',
        'name': 'Point Baker Seaplane Base',
        'city': 'Point Baker',
    },
    {
        'code': 'KPC',
        'name': 'Port Clarence Coast Guard Station',
        'city': 'Brevig Mission',
    },
    {
        'code': 'KPN',
        'name': 'Kipnuk',
        'city': 'Kipnuk',
    },
    {
        'code': 'KPO',
        'name': 'Pohang Airport',
        'city': 'Pohang-Si',
    },
    {
        'code': 'KPR',
        'name': 'Port Williams',
        'city': 'Port Williams',
    },
    {
        'code': 'KPV',
        'name': 'Alaska',
        'city': 'Perryville',
    },
    {
        'code': 'KPY',
        'name': 'Alaska',
        'city': 'Port Bailey',
    },
    {
        'code': 'KQA',
        'name': 'Akutan Airport',
        'city': 'Akutan',
    },
    {
        'code': 'KRF',
        'name': 'Kramfors Airport',
        'city': 'Nyland',
    },
    {
        'code': 'KRI',
        'name': 'Papua New Guinea',
        'city': 'Kikori',
    },
    {
        'code': 'KRK',
        'name': 'Balice Airport',
        'city': 'Zabierz\u00f3w',
    },
    {
        'code': 'KRL',
        'name': 'Korla',
        'city': 'Korla',
    },
    {
        'code': 'KRN',
        'name': 'Kiruna Airport',
        'city': 'Kiruna',
    },
    {
        'code': 'KRP',
        'name': 'Karup Airport',
        'city': 'K\u00e5rup',
    },
    {
        'code': 'KRR',
        'name': 'Krasnodar-Pashovskiy Airport',
        'city': 'Krasnodar',
    },
    {
        'code': 'KRS',
        'name': 'Kristiansand Airport',
        'city': 'Kjevic',
    },
    {
        'code': 'KRT',
        'name': 'Khartoum Airport',
        'city': 'Khartoum',
    },
    {
        'code': 'KRY',
        'name': 'Karamay Airport',
        'city': 'Karamay',
    },
    {
        'code': 'KSA',
        'name': 'Kosrae Island Airport',
        'city': 'Tofol',
    },
    {
        'code': 'KSC',
        'name': 'Barca Airport',
        'city': 'Kosice',
    },
    {
        'code': 'KSD',
        'name': 'Karlstad Airport',
        'city': 'Karlstad',
    },
    {
        'code': 'KSF',
        'name': 'Kassel Calden Airport',
        'city': 'Kalden',
    },
    {
        'code': 'KSH',
        'name': 'Bakhtaran Airport',
        'city': 'Kermanshah',
    },
    {
        'code': 'KSJ',
        'name': 'Kasos Airport',
        'city': 'St. Marina',
    },
    {
        'code': 'KSL',
        'name': 'Kassala Airport',
        'city': 'Kassala',
    },
    {
        'code': 'KSM',
        'name': 'Alaska',
        'city': 'Saint Marys',
    },
    {
        'code': 'KSN',
        'name': 'Kustanay Airport',
        'city': 'Qostanay',
    },
    {
        'code': 'KSO',
        'name': 'Kastoria Airport',
        'city': 'Argos Orestiko',
    },
    {
        'code': 'KSQ',
        'name': 'Karshi South Airport',
        'city': 'Qarshi',
    },
    {
        'code': 'KSU',
        'name': 'Kristiansund Kvernberget Airport',
        'city': 'Kristiansund Nord',
    },
    {
        'code': 'KSY',
        'name': 'Kars (abandoned) Airport',
        'city': 'Kars',
    },
    {
        'code': 'KSZ',
        'name': 'Kotlas Southeast Airport',
        'city': 'Vel\'sk',
    },
    {
        'code': 'KTA',
        'name': 'Karratha Airport',
        'city': 'Karratha',
    },
    {
        'code': 'KTB',
        'name': 'Alaska',
        'city': 'Thorne Bay',
    },
    {
        'code': 'KTE',
        'name': 'Kerteh Airport',
        'city': 'Kerteh',
    },
    {
        'code': 'KTM',
        'name': 'Tribhuvan International Airport',
        'city': 'Kathmandu',
    },
    {
        'code': 'KTN',
        'name': 'Ketchikan International Airport',
        'city': 'Ketchikan',
    },
    {
        'code': 'KTS',
        'name': 'Teller Mission',
        'city': 'Teller Mission',
    },
    {
        'code': 'KTT',
        'name': 'Kittila Airport',
        'city': 'Kittila',
    },
    {
        'code': 'KTW',
        'name': 'Zendek Airport',
        'city': 'O\u017carowice',
    },
    {
        'code': 'KUA',
        'name': 'Kuantan Airport',
        'city': 'Gambang',
    },
    {
        'code': 'KUD',
        'name': 'Kudat',
        'city': 'Kudat',
    },
    {
        'code': 'KUF',
        'name': 'Kurumoch Airport',
        'city': 'Syzran\'',
    },
    {
        'code': 'KUG',
        'name': 'Australia',
        'city': 'Kubin Island',
    },
    {
        'code': 'KUH',
        'name': 'Kushiro Airport',
        'city': 'Kushiro',
    },
    {
        'code': 'KUK',
        'name': 'Kasigluk',
        'city': 'Kasigluk',
    },
    {
        'code': 'KUL',
        'name': 'Kuala Lumpur International Airport',
        'city': 'Sepang',
    },
    {
        'code': 'KUN',
        'name': 'Karmilava Airport',
        'city': 'Kovno',
    },
    {
        'code': 'KUO',
        'name': 'Kuopio Airport',
        'city': 'Toivala',
    },
    {
        'code': 'KUS',
        'name': 'Kulusuk Airport',
        'city': 'Kulusuk',
    },
    {
        'code': 'KUT',
        'name': 'Kopitnari',
        'city': 'Kutaisi',
    },
    {
        'code': 'KUU',
        'name': 'Bhuntar Airport',
        'city': 'Bhuntar',
    },
    {
        'code': 'KUV',
        'name': 'Gunsan Airport',
        'city': 'Gunsan-Si',
    },
    {
        'code': 'KVA',
        'name': 'Chrisoupolis Airport',
        'city': 'Khrysoupolis',
    },
    {
        'code': 'KVB',
        'name': 'Skovde Airport',
        'city': 'V\u00e4ring',
    },
    {
        'code': 'KVC',
        'name': 'King Cove',
        'city': 'King Cove',
    },
    {
        'code': 'KVD',
        'name': 'Elisavetpol',
        'city': 'Gyandzha',
    },
    {
        'code': 'KVG',
        'name': 'Kavieng Airport',
        'city': 'Kavieng',
    },
    {
        'code': 'KVK',
        'name': 'Kirovsk Airport',
        'city': 'Kirovsk',
    },
    {
        'code': 'KVL',
        'name': 'Kivalina',
        'city': 'Kivalina',
    },
    {
        'code': 'KVR',
        'name': 'Carpiquet Airport',
        'city': 'Carpiquet',
    },
    {
        'code': 'KWA',
        'name': 'Bucholz Army Air Field',
        'city': 'Kwajalein',
    },
    {
        'code': 'KWE',
        'name': 'Guizhou',
        'city': 'Guiyang',
    },
    {
        'code': 'KWI',
        'name': 'Kuwait International Airport',
        'city': 'Kuwait City',
    },
    {
        'code': 'KWJ',
        'name': 'Gwangju Airport',
        'city': 'Gwangju',
    },
    {
        'code': 'KWK',
        'name': 'Kwigillingok',
        'city': 'Kwigillingok',
    },
    {
        'code': 'KWL',
        'name': 'Li Chia Tsun Airport',
        'city': 'Guilin',
    },
    {
        'code': 'KWM',
        'name': 'Kowanyama',
        'city': 'Kowanyama',
    },
    {
        'code': 'KWN',
        'name': 'Quinhagak',
        'city': 'Quinhagak',
    },
    {
        'code': 'KWP',
        'name': 'Village Seaplane Base-West Point',
        'city': 'West Point',
    },
    {
        'code': 'KWT',
        'name': 'Kwethluk Airport',
        'city': 'Kwethluk',
    },
    {
        'code': 'KWZ',
        'name': 'Kolwezi Airport',
        'city': 'Kolwezi',
    },
    {
        'code': 'KXA',
        'name': 'Kasaan SPB',
        'city': 'Kasaan',
    },
    {
        'code': 'KXF',
        'name': 'Koro Island',
        'city': 'Koro Island',
    },
    {
        'code': 'KXK',
        'name': 'Komsomolsk South Airport',
        'city': 'Komsomol\'sk-na-Amure',
    },
    {
        'code': 'KXU',
        'name': 'Katiu',
        'city': 'Katiu',
    },
    {
        'code': 'KYA',
        'name': 'Konya Airport',
        'city': 'Konya',
    },
    {
        'code': 'KYK',
        'name': 'Karluk Airport',
        'city': 'Kodiak',
    },
    {
        'code': 'KYN',
        'name': 'England',
        'city': 'Milton Keynes',
    },
    {
        'code': 'KYP',
        'name': 'Kyaukpyu Airport',
        'city': 'Kyaukpyu',
    },
    {
        'code': 'KYS',
        'name': 'Kayes Airport',
        'city': 'Kayes',
    },
    {
        'code': 'KYU',
        'name': 'Koyukuk',
        'city': 'Koyukuk',
    },
    {
        'code': 'KYZ',
        'name': 'Tyva',
        'city': 'Kyzyl',
    },
    {
        'code': 'KZB',
        'name': 'Zachar Bay',
        'city': 'Zachar Bay',
    },
    {
        'code': 'KZI',
        'name': 'Kozani Airport',
        'city': 'Kozani',
    },
    {
        'code': 'KZN',
        'name': 'Kirbi Airport',
        'city': 'Zelenodol\'sk',
    },
    {
        'code': 'KZO',
        'name': 'Kzyl Orda Airport',
        'city': 'Kzyl-Orda',
    },
    {
        'code': 'KZS',
        'name': 'Kastelorizo Airport',
        'city': 'Kastelorizo',
    },
    {
        'code': 'LAD',
        'name': 'Luanda 4 de Fevereiro Airport',
        'city': 'Luanda',
    },
    {
        'code': 'LAE',
        'name': 'Nadzab Airport',
        'city': 'Lae',
    },
    {
        'code': 'LAI',
        'name': 'Servel Airport',
        'city': 'Lannion',
    },
    {
        'code': 'LAJ',
        'name': 'Lajes Airport',
        'city': 'Lages',
    },
    {
        'code': 'LAK',
        'name': 'Aklavik Airport',
        'city': 'Hay River',
    },
    {
        'code': 'LAN',
        'name': 'Lansing Capital City Airport',
        'city': 'Lansing',
    },
    {
        'code': 'LAO',
        'name': 'Laoag International Airport',
        'city': 'San Nicolas',
    },
    {
        'code': 'LAP',
        'name': 'General Manuel Marquez de Leon International Air',
        'city': 'La Paz',
    },
    {
        'code': 'LAQ',
        'name': 'Al Bayda\'',
        'city': 'Beida',
    },
    {
        'code': 'LAR',
        'name': 'General Brees Field',
        'city': 'Laramie',
    },
    {
        'code': 'LAS',
        'name': 'Mccarran International Airport',
        'city': 'Las Vegas',
    },
    {
        'code': 'LAU',
        'name': 'Lamu Airport',
        'city': 'Lamu',
    },
    {
        'code': 'LAW',
        'name': 'Lawton Municipal Airport',
        'city': 'Lawton',
    },
    {
        'code': 'LAX',
        'name': 'Los Angeles International Airport',
        'city': 'Los Angeles',
    },
    {
        'code': 'LBA',
        'name': 'Leeds Bradford Airport',
        'city': 'Leeds',
    },
    {
        'code': 'LBB',
        'name': 'Lubbock International Airport',
        'city': 'Lubbock',
    },
    {
        'code': 'LBC',
        'name': 'Lubeck Airport',
        'city': 'Lubeque',
    },
    {
        'code': 'LBD',
        'name': 'Khujand',
        'city': 'Khudzhand',
    },
    {
        'code': 'LBE',
        'name': 'Westmoreland County Airport',
        'city': 'Latrobe',
    },
    {
        'code': 'LBF',
        'name': 'Lee Bird Field Airport',
        'city': 'North Platte',
    },
    {
        'code': 'LBJ',
        'name': 'Mutiara Airport',
        'city': 'Ende',
    },
    {
        'code': 'LBL',
        'name': 'Liberal Municipal Airport',
        'city': 'Liberal',
    },
    {
        'code': 'LBP',
        'name': 'Long Banga',
        'city': 'Long Banga',
    },
    {
        'code': 'LBS',
        'name': 'Northern',
        'city': 'Labasa',
    },
    {
        'code': 'LBU',
        'name': 'Labuan Airport',
        'city': 'Victoria',
    },
    {
        'code': 'LBV',
        'name': 'Libreville Leon M Ba Airport',
        'city': 'Libreville',
    },
    {
        'code': 'LCA',
        'name': 'Larnaca Airport',
        'city': 'Larnaca',
    },
    {
        'code': 'LCE',
        'name': 'Goloson International Airport',
        'city': 'La Ceiba',
    },
    {
        'code': 'LCG',
        'name': 'La Coruna Airport',
        'city': 'S Esteban',
    },
    {
        'code': 'LCH',
        'name': 'Lake Charles Regional Airport',
        'city': 'Lake Charles',
    },
    {
        'code': 'LCJ',
        'name': 'Lodz Lublinek',
        'city': 'Lodz',
    },
    {
        'code': 'LCK',
        'name': 'Rickenbacker International Airport',
        'city': 'Columbus',
    },
    {
        'code': 'LCR',
        'name': 'La Chorrera Airport',
        'city': 'La Chorrera',
    },
    {
        'code': 'LCX',
        'name': 'Longyan',
        'city': 'Longyan',
    },
    {
        'code': 'LCY',
        'name': 'London City Airport',
        'city': 'London',
    },
    {
        'code': 'LDB',
        'name': 'Londrina Airport',
        'city': 'Londrina',
    },
    {
        'code': 'LDE',
        'name': 'Ossun Airport',
        'city': 'Juillan',
    },
    {
        'code': 'LDG',
        'name': 'Leshukonskoye Airport',
        'city': 'Leshukonskoye',
    },
    {
        'code': 'LDH',
        'name': 'Lord Howe Island Airport',
        'city': 'Lord Howe Island',
    },
    {
        'code': 'LDN',
        'name': 'Lamidanda Airport',
        'city': 'Lamidanda',
    },
    {
        'code': 'LDU',
        'name': 'Lahad Datu Airport',
        'city': 'Lahad Datu',
    },
    {
        'code': 'LDV',
        'name': 'Landivisiau Airport',
        'city': 'Landivisiau',
    },
    {
        'code': 'LDY',
        'name': 'City of Derry Airport',
        'city': 'Londonderry',
    },
    {
        'code': 'LEA',
        'name': 'Learmonth Airport',
        'city': 'Learmonth',
    },
    {
        'code': 'LEB',
        'name': 'Lebanon Municipal Airport',
        'city': 'West Lebanon',
    },
    {
        'code': 'LED',
        'name': 'Pulkuvo 2 Airport',
        'city': 'St. Petersburg',
    },
    {
        'code': 'LEH',
        'name': 'Le Havre',
        'city': 'Le Havre',
    },
    {
        'code': 'LEI',
        'name': 'Almeria Airport',
        'city': 'Almeria',
    },
    {
        'code': 'LEJ',
        'name': 'Leipzig-Halle Airport',
        'city': 'Schkeuditz',
    },
    {
        'code': 'LEN',
        'name': 'Aeropuero de Bajio',
        'city': 'Leon',
    },
    {
        'code': 'LER',
        'name': 'Leinster Airport',
        'city': 'Sir Samuel',
    },
    {
        'code': 'LET',
        'name': 'Gen. A.V. Cobo',
        'city': 'Leticia',
    },
    {
        'code': 'LEV',
        'name': 'Bureta',
        'city': 'Bureta',
    },
    {
        'code': 'LEX',
        'name': 'Blue Grass Field',
        'city': 'Lexington',
    },
    {
        'code': 'LFM',
        'name': 'Lamerd',
        'city': 'Lamerd',
    },
    {
        'code': 'LFT',
        'name': 'Lafayette Regional Airport',
        'city': 'Lafayette',
    },
    {
        'code': 'LFW',
        'name': 'Lome Tokoin Airport',
        'city': 'Lome',
    },
    {
        'code': 'LGA',
        'name': 'LaGuardia Airport',
        'city': 'Flushing',
    },
    {
        'code': 'LGB',
        'name': 'Long Beach Daugherty Field Airport',
        'city': 'Long Beach',
    },
    {
        'code': 'LGG',
        'name': 'Bierset Airport',
        'city': 'Velroux',
    },
    {
        'code': 'LGI',
        'name': 'Deadmans Cay Airport',
        'city': 'Deadmans Cay',
    },
    {
        'code': 'LGK',
        'name': 'Langkawi International Airport',
        'city': 'Kuah',
    },
    {
        'code': 'LGL',
        'name': 'Long Lellang',
        'city': 'Long Lellang',
    },
    {
        'code': 'LGP',
        'name': 'Legazpi Airport',
        'city': 'Daraga',
    },
    {
        'code': 'LGQ',
        'name': 'Lago Agrio Airport',
        'city': 'Lago Agrio',
    },
    {
        'code': 'LGW',
        'name': 'London Gatwick Airport',
        'city': 'Horley',
    },
    {
        'code': 'LHE',
        'name': 'Lahore Airport',
        'city': 'Lahore',
    },
    {
        'code': 'LHG',
        'name': 'New South Wales',
        'city': 'Lightning Ridge',
    },
    {
        'code': 'LHR',
        'name': 'London Heathrow Airport',
        'city': 'Hounslow',
    },
    {
        'code': 'LHW',
        'name': 'Lanzhou Airport',
        'city': 'Lanzhou',
    },
    {
        'code': 'LIF',
        'name': 'Loyalty Islands Airport',
        'city': 'W\u00e9',
    },
    {
        'code': 'LIG',
        'name': 'Bellegarde Airport',
        'city': 'Limoges',
    },
    {
        'code': 'LIH',
        'name': 'Lihue Airport',
        'city': 'Lihue',
    },
    {
        'code': 'LIL',
        'name': 'Lesquin Airport',
        'city': 'Fretin',
    },
    {
        'code': 'LIM',
        'name': 'Jorge Chavez Airport',
        'city': 'Ventanilla',
    },
    {
        'code': 'LIN',
        'name': 'Linate Airport',
        'city': 'Peschiera Borromeo',
    },
    {
        'code': 'LIO',
        'name': 'Limon International Airport',
        'city': 'Pto. Limon',
    },
    {
        'code': 'LIR',
        'name': 'Tomas Guardia International Airport',
        'city': 'Liberia',
    },
    {
        'code': 'LIS',
        'name': 'Lisbon Airport',
        'city': 'Lisbon',
    },
    {
        'code': 'LIT',
        'name': 'Adams Field Airport',
        'city': 'Little Rock',
    },
    {
        'code': 'LIW',
        'name': 'Loikaw Airport',
        'city': 'Loi-kaw',
    },
    {
        'code': 'LJG',
        'name': 'Lijiang',
        'city': 'Lijiang City',
    },
    {
        'code': 'LJU',
        'name': 'Ljubljana Airport',
        'city': 'Ljubljana',
    },
    {
        'code': 'LKA',
        'name': 'Larantuka',
        'city': 'Larantuka',
    },
    {
        'code': 'LKB',
        'name': 'Lakemba Island',
        'city': 'Lakeba',
    },
    {
        'code': 'LKE',
        'name': 'Lake Union Seaplane Base',
        'city': 'Seattle',
    },
    {
        'code': 'LKG',
        'name': 'Lokichoggio Airport',
        'city': 'Lokichoggio',
    },
    {
        'code': 'LKH',
        'name': 'Long Akah',
        'city': 'Long Akah',
    },
    {
        'code': 'LKL',
        'name': 'Banak Airport',
        'city': 'Lakeselv',
    },
    {
        'code': 'LKN',
        'name': 'Leknes Airport',
        'city': 'Leknes',
    },
    {
        'code': 'LKO',
        'name': 'Amausi International Airport',
        'city': 'Lucknow',
    },
    {
        'code': 'LLA',
        'name': 'Kallax Airport',
        'city': 'Lulea',
    },
    {
        'code': 'LLF',
        'name': 'Lingling Airport',
        'city': 'LingLing',
    },
    {
        'code': 'LLI',
        'name': 'Ethiopia',
        'city': 'Lalibela',
    },
    {
        'code': 'LLU',
        'name': 'Alluitsup Paa Airport',
        'city': 'Alluitsup Paa',
    },
    {
        'code': 'LLW',
        'name': 'Kamuzu International Airport',
        'city': 'Lumbadzi',
    },
    {
        'code': 'LMA',
        'name': 'Lake Minchumina',
        'city': 'Lake Minchumina',
    },
    {
        'code': 'LMC',
        'name': 'Lamacarena Airport',
        'city': 'San Juan de Arama',
    },
    {
        'code': 'LMM',
        'name': 'Los Mochis Airport',
        'city': 'Ahome',
    },
    {
        'code': 'LMN',
        'name': 'Sarawak',
        'city': 'Limbang',
    },
    {
        'code': 'LMP',
        'name': 'Lampedusa Airport',
        'city': 'Caltabellotta',
    },
    {
        'code': 'LMT',
        'name': 'Klamath Falls International Airport',
        'city': 'Klamath Falls',
    },
    {
        'code': 'LMY',
        'name': 'Western',
        'city': 'Lake Murray',
    },
    {
        'code': 'LNB',
        'name': 'Lamen Bay Airport',
        'city': 'Lamen Bay',
    },
    {
        'code': 'LNE',
        'name': 'Lonorore Airport',
        'city': 'Panngi',
    },
    {
        'code': 'LNJ',
        'name': 'Yunnan',
        'city': 'Lincang',
    },
    {
        'code': 'LNK',
        'name': 'Lincoln Municipal Airport',
        'city': 'Lincoln',
    },
    {
        'code': 'LNO',
        'name': 'Leonora Aerodrome',
        'city': 'Leonora',
    },
    {
        'code': 'LNV',
        'name': 'Gerrit Denys Island',
        'city': 'Lihir Island',
    },
    {
        'code': 'LNY',
        'name': 'Lanai Airport',
        'city': 'Lanai City',
    },
    {
        'code': 'LNZ',
        'name': 'Linz Airport',
        'city': 'Hoersching',
    },
    {
        'code': 'LOD',
        'name': 'Longana',
        'city': 'Longana',
    },
    {
        'code': 'LOH',
        'name': 'Loja Airport',
        'city': 'Loja',
    },
    {
        'code': 'LOS',
        'name': 'Lagos Murtala Muhammed Airport',
        'city': 'Ikeja',
    },
    {
        'code': 'LOU',
        'name': 'Bowman Field Airport',
        'city': 'Louisville',
    },
    {
        'code': 'LOV',
        'name': 'Monclova Airport',
        'city': 'Frontera',
    },
    {
        'code': 'LPA',
        'name': 'Las Palmas Airport',
        'city': 'Telde',
    },
    {
        'code': 'LPB',
        'name': 'El Alto International Airport',
        'city': 'La Paz',
    },
    {
        'code': 'LPD',
        'name': 'La Pedrera Airport',
        'city': 'La Pedrera',
    },
    {
        'code': 'LPI',
        'name': 'Saab Airport',
        'city': 'Linkoping',
    },
    {
        'code': 'LPK',
        'name': 'Russia',
        'city': 'Lipetsk',
    },
    {
        'code': 'LPL',
        'name': 'Liverpool John Lennon Airport',
        'city': 'Liverpool',
    },
    {
        'code': 'LPM',
        'name': 'Lamap Airport',
        'city': 'Lamap',
    },
    {
        'code': 'LPP',
        'name': 'Lappeenranta Airport',
        'city': 'Lappeenranta',
    },
    {
        'code': 'LPQ',
        'name': 'Louangphrabang Airport',
        'city': 'Louangphrabang',
    },
    {
        'code': 'LPS',
        'name': 'Lopez Island Airport',
        'city': 'Lopez Island',
    },
    {
        'code': 'LPT',
        'name': 'Lampang Airport',
        'city': 'Lampang',
    },
    {
        'code': 'LPX',
        'name': 'Liepaja East Airport',
        'city': 'Liepaya',
    },
    {
        'code': 'LPY',
        'name': 'Loudes Airport',
        'city': 'Le Puy',
    },
    {
        'code': 'LQM',
        'name': 'Puerto Leguizamo Airport',
        'city': 'Puerto Legu\u00edzamo',
    },
    {
        'code': 'LRD',
        'name': 'Laredo International Airport',
        'city': 'Laredo',
    },
    {
        'code': 'LRE',
        'name': 'Longreach Aerodrome',
        'city': 'Longreach',
    },
    {
        'code': 'LRH',
        'name': 'Laleu Airport',
        'city': 'La Rochelle',
    },
    {
        'code': 'LRM',
        'name': 'La Romana Airport',
        'city': 'La Romana',
    },
    {
        'code': 'LRR',
        'name': 'Lar',
        'city': 'Lar',
    },
    {
        'code': 'LRS',
        'name': 'Leros Airport',
        'city': 'Lero',
    },
    {
        'code': 'LRT',
        'name': 'Lann Bihoue Airport',
        'city': 'Ploemeur',
    },
    {
        'code': 'LSA',
        'name': 'Papua New Guinea',
        'city': 'Losuia',
    },
    {
        'code': 'LSC',
        'name': 'La Florida Airport',
        'city': 'Compa\u00f1\u00eda Alta',
    },
    {
        'code': 'LSE',
        'name': 'La Crosse Municipal Airport',
        'city': 'La Crosse',
    },
    {
        'code': 'LSH',
        'name': 'Lashio Airport',
        'city': 'Lashio',
    },
    {
        'code': 'LSI',
        'name': 'Sumburgh Airport',
        'city': 'Shetland',
    },
    {
        'code': 'LSP',
        'name': 'Josefa Camejo Airport',
        'city': 'Las Piedras',
    },
    {
        'code': 'LSS',
        'name': 'Terre-De-Haut Airport',
        'city': 'Trois-Rivi\u00e8res',
    },
    {
        'code': 'LST',
        'name': 'Launceston Airport',
        'city': 'Blessington',
    },
    {
        'code': 'LSY',
        'name': 'Lismore Airport',
        'city': 'Lismore',
    },
    {
        'code': 'LTD',
        'name': 'Ghadames',
        'city': 'Ghadames',
    },
    {
        'code': 'LTI',
        'name': 'Altay',
        'city': 'Altai',
    },
    {
        'code': 'LTK',
        'name': 'Latakia Airport',
        'city': 'Djeble',
    },
    {
        'code': 'LTN',
        'name': 'London Luton Airport',
        'city': 'Luton',
    },
    {
        'code': 'LTO',
        'name': 'Loreto Airport',
        'city': 'Comond\u00fa',
    },
    {
        'code': 'LTT',
        'name': 'La Mole Airport',
        'city': 'Grimaud',
    },
    {
        'code': 'LTX',
        'name': 'Latacunga',
        'city': 'Latacunga',
    },
    {
        'code': 'LUA',
        'name': 'Lukla Airport',
        'city': 'Solukhumbu',
    },
    {
        'code': 'LUD',
        'name': 'Luderitz Airport',
        'city': 'Luderitz',
    },
    {
        'code': 'LUF',
        'name': 'Luke Air Force Base',
        'city': 'Webb',
    },
    {
        'code': 'LUG',
        'name': 'Lugano Airport',
        'city': 'Agno',
    },
    {
        'code': 'LUM',
        'name': 'Mangshi',
        'city': 'Luxi',
    },
    {
        'code': 'LUN',
        'name': 'Lusaka International Airport',
        'city': 'Lusaka',
    },
    {
        'code': 'LUO',
        'name': 'Luena',
        'city': 'Luena',
    },
    {
        'code': 'LUP',
        'name': 'Kalaupapa Airport',
        'city': 'Kalaupapa',
    },
    {
        'code': 'LUQ',
        'name': 'San Luis Airport',
        'city': 'Villa General Roca',
    },
    {
        'code': 'LUR',
        'name': 'Cape Lisburne Long-Range Radar Station',
        'city': 'Point Hope',
    },
    {
        'code': 'LUV',
        'name': 'Indonesia',
        'city': 'Langgur',
    },
    {
        'code': 'LUX',
        'name': 'Luxembourg Airport',
        'city': 'Sandweiler',
    },
    {
        'code': 'LVI',
        'name': 'Livingstone Airport',
        'city': 'Livingstone',
    },
    {
        'code': 'LVO',
        'name': 'Laverton Aerodrome',
        'city': 'Laverton',
    },
    {
        'code': 'LWB',
        'name': 'Greenbrier Valley Airport',
        'city': 'Lewisburg',
    },
    {
        'code': 'LWE',
        'name': 'Indonesia',
        'city': 'Lewoleba',
    },
    {
        'code': 'LWN',
        'name': 'Gyumri Airport',
        'city': 'Gyumri',
    },
    {
        'code': 'LWO',
        'name': 'Sknilov Airport',
        'city': 'L\'viv',
    },
    {
        'code': 'LWS',
        'name': 'Lewiston Nez Perce County Airport',
        'city': 'Lewiston',
    },
    {
        'code': 'LWT',
        'name': 'Lewistown Municipal Airport',
        'city': 'Lewistown',
    },
    {
        'code': 'LWY',
        'name': 'Lawas',
        'city': 'Lawas',
    },
    {
        'code': 'LXA',
        'name': 'Lhasa',
        'city': 'Lhasa',
    },
    {
        'code': 'LXG',
        'name': 'Luang Namtha',
        'city': 'Luang Namtha',
    },
    {
        'code': 'LXR',
        'name': 'Luxor Airport',
        'city': 'Luxor',
    },
    {
        'code': 'LXS',
        'name': 'Limnos Airport',
        'city': 'Moudhros',
    },
    {
        'code': 'LYA',
        'name': 'Luoyang Airport',
        'city': 'Luoyang',
    },
    {
        'code': 'LYB',
        'name': 'Boddenfield Airport',
        'city': 'Little Cayman',
    },
    {
        'code': 'LYC',
        'name': 'Lycksele Airport',
        'city': 'Lyoksele',
    },
    {
        'code': 'LYG',
        'name': 'Lianyungang',
        'city': 'Lianyungang',
    },
    {
        'code': 'LYH',
        'name': 'Lynchburg Regional Airport',
        'city': 'Lynchburg',
    },
    {
        'code': 'LYI',
        'name': 'Linyi',
        'city': 'Linyi',
    },
    {
        'code': 'LYP',
        'name': 'Faisalabad Airport',
        'city': 'Shah Faisalabad',
    },
    {
        'code': 'LYR',
        'name': 'Svalbard Longyear Airport',
        'city': 'Longyearbyen',
    },
    {
        'code': 'LYS',
        'name': 'Lyon Airport',
        'city': 'Colombier',
    },
    {
        'code': 'LZC',
        'name': 'Lazaro Cardenas Airport',
        'city': 'Arteaga',
    },
    {
        'code': 'LZH',
        'name': 'Liuzhou Airport',
        'city': 'Linzhou',
    },
    {
        'code': 'LZN',
        'name': 'Nankan',
        'city': 'Nangan',
    },
    {
        'code': 'LZO',
        'name': 'Luzhou Airport',
        'city': 'Luzhou',
    },
    {
        'code': 'MAA',
        'name': 'Chennai International Airport',
        'city': 'Kanchipuram',
    },
    {
        'code': 'MAB',
        'name': 'Maraba Airport',
        'city': 'Marab\u00e1',
    },
    {
        'code': 'MAD',
        'name': 'Barajas Airport',
        'city': 'Madrid',
    },
    {
        'code': 'MAF',
        'name': 'Midland International Airport',
        'city': 'Midland',
    },
    {
        'code': 'MAG',
        'name': 'Madang Airport',
        'city': 'Madang',
    },
    {
        'code': 'MAH',
        'name': 'Menorca Airport',
        'city': 'Mao',
    },
    {
        'code': 'MAJ',
        'name': 'Marshall Islands International Airport',
        'city': 'Majuro',
    },
    {
        'code': 'MAK',
        'name': 'Malakal Airport',
        'city': 'Malakal',
    },
    {
        'code': 'MAM',
        'name': 'General Sevando Canales Airport',
        'city': 'Matamoros',
    },
    {
        'code': 'MAN',
        'name': 'Manchester International Airport',
        'city': 'Manchester',
    },
    {
        'code': 'MAO',
        'name': 'Eduardo Gomes International Airport',
        'city': 'Manaus',
    },
    {
        'code': 'MAR',
        'name': 'La Chinita International Airport',
        'city': 'Maracaibo',
    },
    {
        'code': 'MAS',
        'name': 'Manus Island Airport',
        'city': 'Lorengau',
    },
    {
        'code': 'MAU',
        'name': 'Society Islands Airport',
        'city': 'Papeete',
    },
    {
        'code': 'MAZ',
        'name': 'Eugenio Maria de Hostos Airport',
        'city': 'Mayaguez',
    },
    {
        'code': 'MBA',
        'name': 'Moi International Airport',
        'city': 'Mombasa',
    },
    {
        'code': 'MBD',
        'name': 'Mmabatho International Airport',
        'city': 'Mmabatho',
    },
    {
        'code': 'MBE',
        'name': 'Okhotsk-Monbetsu Airport',
        'city': 'Monbetsu-shi',
    },
    {
        'code': 'MBH',
        'name': 'Maryborough Airport',
        'city': 'Maryborough',
    },
    {
        'code': 'MBJ',
        'name': 'Sangster International Airport',
        'city': 'Montego Bay',
    },
    {
        'code': 'MBL',
        'name': 'Manistee County-Blacker Airport',
        'city': 'Manistee',
    },
    {
        'code': 'MBS',
        'name': 'MBS International Airport',
        'city': 'Freeland',
    },
    {
        'code': 'MBT',
        'name': 'Masbate Airport',
        'city': 'Masbate',
    },
    {
        'code': 'MBU',
        'name': 'Mbambanakira',
        'city': 'Mbambanakira',
    },
    {
        'code': 'MCE',
        'name': 'Merced Municipal Airport-Macready Field',
        'city': 'Merced',
    },
    {
        'code': 'MCG',
        'name': 'Mcgrath Airport',
        'city': 'Mcgrath',
    },
    {
        'code': 'MCI',
        'name': 'Kansas City International Airport',
        'city': 'Kansas City',
    },
    {
        'code': 'MCK',
        'name': 'Mccook Municipal Airport',
        'city': 'Mccook',
    },
    {
        'code': 'MCM',
        'name': 'Monte Carlo Heliport',
        'city': 'Monaco-Ville',
    },
    {
        'code': 'MCN',
        'name': 'Middle Georgia Regional Airport',
        'city': 'Macon',
    },
    {
        'code': 'MCO',
        'name': 'Orlando International Airport',
        'city': 'Orlando',
    },
    {
        'code': 'MCP',
        'name': 'Macapa International Airport',
        'city': 'Macap\u00e1',
    },
    {
        'code': 'MCT',
        'name': 'Seeb International Airport',
        'city': 'Muscat',
    },
    {
        'code': 'MCV',
        'name': 'Mcarthur River',
        'city': 'Mcarthur River',
    },
    {
        'code': 'MCW',
        'name': 'Mason City Municipal Airport',
        'city': 'Clear Lake',
    },
    {
        'code': 'MCX',
        'name': 'Makhachkala-Uytash Airport',
        'city': 'Khasavyurt',
    },
    {
        'code': 'MCY',
        'name': 'Maroochydore Aerodrome',
        'city': 'Mudjimba',
    },
    {
        'code': 'MCZ',
        'name': 'Zumbi dos Palmares International Airport',
        'city': 'Maceio',
    },
    {
        'code': 'MDC',
        'name': 'Sam Ratulangi Airport',
        'city': 'Manado',
    },
    {
        'code': 'MDE',
        'name': 'Jose Maria Cordova Airport',
        'city': 'R\u00edonegro',
    },
    {
        'code': 'MDG',
        'name': 'Mudanjiang',
        'city': 'Mudanjiang',
    },
    {
        'code': 'MDK',
        'name': 'Mbandaka Airport',
        'city': 'Mbandaka',
    },
    {
        'code': 'MDL',
        'name': 'Mandalay Airport',
        'city': 'Mandalay',
    },
    {
        'code': 'MDQ',
        'name': 'Mar del Plata Airport',
        'city': 'Mar del Plata',
    },
    {
        'code': 'MDS',
        'name': 'Middle Caicos Airport',
        'city': 'Lorimers',
    },
    {
        'code': 'MDT',
        'name': 'Harrisburg International Airport',
        'city': 'Middletown',
    },
    {
        'code': 'MDU',
        'name': 'Papua New Guinea',
        'city': 'Mendi',
    },
    {
        'code': 'MDW',
        'name': 'Chicago Midway International Airport',
        'city': 'Chicago',
    },
    {
        'code': 'MDZ',
        'name': 'El Plumerillo Airport',
        'city': 'Mendoza',
    },
    {
        'code': 'MEA',
        'name': 'Macae Airport',
        'city': 'Macae',
    },
    {
        'code': 'MEC',
        'name': 'Eloy Alfaro Airport',
        'city': 'Manta',
    },
    {
        'code': 'MED',
        'name': 'Madinah International Airport',
        'city': 'Al Madinah',
    },
    {
        'code': 'MEE',
        'name': 'Loyalty Islands Airport',
        'city': 'Tadine',
    },
    {
        'code': 'MEG',
        'name': 'Malanje Airport',
        'city': 'Malanje',
    },
    {
        'code': 'MEH',
        'name': 'Mehamn Airport',
        'city': 'Mehavn',
    },
    {
        'code': 'MEI',
        'name': 'Key Field Airport',
        'city': 'Meridian',
    },
    {
        'code': 'MEL',
        'name': 'Melbourne International Airport',
        'city': 'Melbourne',
    },
    {
        'code': 'MEM',
        'name': 'Memphis International Airport',
        'city': 'Memphis',
    },
    {
        'code': 'MES',
        'name': 'Polonia Airport',
        'city': 'Medan',
    },
    {
        'code': 'MEX',
        'name': 'Lic Benito Juarez International Airport',
        'city': 'Mexico City',
    },
    {
        'code': 'MEY',
        'name': 'Meghauli',
        'city': 'Meghauli',
    },
    {
        'code': 'MFE',
        'name': 'Miller International Airport',
        'city': 'Mcallen',
    },
    {
        'code': 'MFJ',
        'name': 'Moala Airport',
        'city': 'Moala',
    },
    {
        'code': 'MFK',
        'name': 'Taiwan',
        'city': 'Matsu',
    },
    {
        'code': 'MFM',
        'name': 'Macau Airport',
        'city': 'Macau',
    },
    {
        'code': 'MFR',
        'name': 'Rogue Valley International-Medford Airport',
        'city': 'Central Point',
    },
    {
        'code': 'MFU',
        'name': 'Mfuwe Airport',
        'city': 'Mfuwe',
    },
    {
        'code': 'MGA',
        'name': 'Augusto Cesar Sandino International Airport',
        'city': 'Tipitapa',
    },
    {
        'code': 'MGB',
        'name': 'Mount Gambier Airport',
        'city': 'Mount Gambier',
    },
    {
        'code': 'MGF',
        'name': 'Maringa Domestic Airport',
        'city': 'Maringa',
    },
    {
        'code': 'MGH',
        'name': 'Margate Airport',
        'city': 'Port Shepstone',
    },
    {
        'code': 'MGM',
        'name': 'Montgomery Regional Airport',
        'city': 'Montgomery',
    },
    {
        'code': 'MGQ',
        'name': 'Mogadishu Airport',
        'city': 'Mogadishu',
    },
    {
        'code': 'MGS',
        'name': 'Mangaia',
        'city': 'Mangaia Island',
    },
    {
        'code': 'MGT',
        'name': 'Northern Territory',
        'city': 'Milingimbi',
    },
    {
        'code': 'MGW',
        'name': 'Morgantown Municipal Airport-Hart Field',
        'city': 'Morgantown',
    },
    {
        'code': 'MGZ',
        'name': 'Mergui Airport',
        'city': 'Mergui',
    },
    {
        'code': 'MHD',
        'name': 'Mashhad Airport',
        'city': 'Mashhad',
    },
    {
        'code': 'MHG',
        'name': 'Mannheim City Airport',
        'city': 'Mannheim',
    },
    {
        'code': 'MHH',
        'name': 'Marsh Harbour Airport',
        'city': 'Marsh Harbour',
    },
    {
        'code': 'MHK',
        'name': 'Manhattan Municipal Airport',
        'city': 'Manhattan',
    },
    {
        'code': 'MHP',
        'name': 'Minsk International 1',
        'city': 'Minsk',
    },
    {
        'code': 'MHQ',
        'name': 'Mariehamn Airport',
        'city': 'Maarianhamina',
    },
    {
        'code': 'MHR',
        'name': 'Mather Airport',
        'city': 'Mather',
    },
    {
        'code': 'MHT',
        'name': 'Manchester-Boston Regional Airport',
        'city': 'Manchester',
    },
    {
        'code': 'MIA',
        'name': 'Miami International Airport',
        'city': 'Miami',
    },
    {
        'code': 'MID',
        'name': 'Lic M Crecencio Rejon International Airport',
        'city': 'M\u00e9rida',
    },
    {
        'code': 'MIG',
        'name': 'Mian Yang',
        'city': 'Mian Yang',
    },
    {
        'code': 'MII',
        'name': 'Dr Gastao Vidigal Airport',
        'city': 'Marilia',
    },
    {
        'code': 'MIM',
        'name': 'Merimbula Aerodrome',
        'city': 'Merimbula',
    },
    {
        'code': 'MIR',
        'name': 'Habib Bourguiba International Airport',
        'city': 'Sidi al Ghudamisi',
    },
    {
        'code': 'MIS',
        'name': 'Saint Aignan Island',
        'city': 'Misima Island',
    },
    {
        'code': 'MJA',
        'name': 'Toliara',
        'city': 'Manja',
    },
    {
        'code': 'MJD',
        'name': 'Moenjodaro Airport',
        'city': 'Mohenjodaro',
    },
    {
        'code': 'MJF',
        'name': 'Kjaerstad Airport',
        'city': 'Mosjoen',
    },
    {
        'code': 'MJI',
        'name': 'Libya',
        'city': 'Mitiga',
    },
    {
        'code': 'MJK',
        'name': 'Shark Bay Airport',
        'city': 'Monkey Mia',
    },
    {
        'code': 'MJL',
        'name': 'Ngounie',
        'city': 'Mouila',
    },
    {
        'code': 'MJM',
        'name': 'Mbuji Mayi Airport',
        'city': 'Mbuji Mayi',
    },
    {
        'code': 'MJN',
        'name': 'Mahajanga Amborovy Airport',
        'city': 'Mahajanga',
    },
    {
        'code': 'MJT',
        'name': 'Mitilini Airport',
        'city': 'Mitilini',
    },
    {
        'code': 'MJV',
        'name': 'Murcia San Javier Airport',
        'city': 'San Javier',
    },
    {
        'code': 'MJZ',
        'name': 'Mirnyy',
        'city': 'Mirnyj',
    },
    {
        'code': 'MKC',
        'name': 'Kansas City Downtown Airport',
        'city': 'Kansas City',
    },
    {
        'code': 'MKE',
        'name': 'General Mitchell International Airport',
        'city': 'Milwaukee',
    },
    {
        'code': 'MKG',
        'name': 'Muskegon County Airport',
        'city': 'Muskegon',
    },
    {
        'code': 'MKK',
        'name': 'Molokai Airport',
        'city': 'Hoolehua',
    },
    {
        'code': 'MKM',
        'name': 'Sarawak',
        'city': 'Mukah',
    },
    {
        'code': 'MKP',
        'name': 'Makemo Airport',
        'city': 'Makemo',
    },
    {
        'code': 'MKQ',
        'name': 'Mopah Airport',
        'city': 'Merauke',
    },
    {
        'code': 'MKR',
        'name': 'Meekatharra Airport',
        'city': 'Kumarina',
    },
    {
        'code': 'MKU',
        'name': 'Makokou Airport',
        'city': 'Makokou',
    },
    {
        'code': 'MKW',
        'name': 'Rendani Airport',
        'city': 'Manokwari',
    },
    {
        'code': 'MKY',
        'name': 'Mackay Airport',
        'city': 'Mackay',
    },
    {
        'code': 'MLA',
        'name': 'Luqa Airport',
        'city': 'Curmi',
    },
    {
        'code': 'MLB',
        'name': 'Melbourne International Airport',
        'city': 'Melbourne',
    },
    {
        'code': 'MLE',
        'name': 'Male International Airport',
        'city': 'Male',
    },
    {
        'code': 'MLG',
        'name': 'Malang',
        'city': 'Malang',
    },
    {
        'code': 'MLH',
        'name': 'Bale Mulhouse Airport',
        'city': 'Basel Mulhouse Freiburg',
    },
    {
        'code': 'MLI',
        'name': 'Quad City Airport',
        'city': 'Coal Valley',
    },
    {
        'code': 'MLL',
        'name': 'Marshall',
        'city': 'Marshall',
    },
    {
        'code': 'MLM',
        'name': 'General Francisco J Mujica Airport',
        'city': '\u00c1lvaro Obreg\u00f3n',
    },
    {
        'code': 'MLN',
        'name': 'Melilla Airport',
        'city': 'Melilla',
    },
    {
        'code': 'MLO',
        'name': 'Milos Island Airport',
        'city': 'Apollonia',
    },
    {
        'code': 'MLU',
        'name': 'Monroe Regional Airport',
        'city': 'Monroe',
    },
    {
        'code': 'MLW',
        'name': 'Monrovia Spriggs Payne Airport',
        'city': 'Monrovia',
    },
    {
        'code': 'MLX',
        'name': 'Erhac Airport',
        'city': 'Arga',
    },
    {
        'code': 'MLY',
        'name': 'Manley Hot Springs',
        'city': 'Manley Hot Springs',
    },
    {
        'code': 'MMB',
        'name': 'Memanbetsu Airport',
        'city': 'Ozora-cho',
    },
    {
        'code': 'MME',
        'name': 'Durham Tees Valley Airport',
        'city': 'Darlington',
    },
    {
        'code': 'MMG',
        'name': 'Western Australia',
        'city': 'Mount Magnet',
    },
    {
        'code': 'MMH',
        'name': 'Mammoth June Lakes Airport',
        'city': 'Mammoth Lakes',
    },
    {
        'code': 'MMK',
        'name': 'Murmashi Airport',
        'city': 'Apatity',
    },
    {
        'code': 'MMO',
        'name': 'Maio Airport',
        'city': 'Vila do Maio',
    },
    {
        'code': 'MMX',
        'name': 'Sturup Airport',
        'city': 'Svedala',
    },
    {
        'code': 'MMY',
        'name': 'Miyako Airport',
        'city': 'Miyako Jima',
    },
    {
        'code': 'MNF',
        'name': 'Mana Island Airstrip',
        'city': 'Mana Island',
    },
    {
        'code': 'MNG',
        'name': 'Maningrida Airport',
        'city': 'Maningrida',
    },
    {
        'code': 'MNJ',
        'name': 'Mananjary Airport',
        'city': 'Mananjary',
    },
    {
        'code': 'MNL',
        'name': 'Ninoy Aquino International Airport',
        'city': 'Para\u00f1aque',
    },
    {
        'code': 'MNT',
        'name': 'Minto',
        'city': 'Minto',
    },
    {
        'code': 'MNU',
        'name': 'Moulmein Airport',
        'city': 'Moulmein',
    },
    {
        'code': 'MOA',
        'name': 'Moa',
        'city': 'Moa',
    },
    {
        'code': 'MOB',
        'name': 'Mobile Regional Airport',
        'city': 'Mobile',
    },
    {
        'code': 'MOC',
        'name': 'Montes Claros Airport',
        'city': 'Montes Claros',
    },
    {
        'code': 'MOD',
        'name': 'Modesto City County Airport-Harry Sham Field',
        'city': 'Modesto',
    },
    {
        'code': 'MOF',
        'name': 'Wai Oti Airport',
        'city': 'Maumere',
    },
    {
        'code': 'MOG',
        'name': 'Mong Hsat',
        'city': 'Mong Hsat',
    },
    {
        'code': 'MOI',
        'name': 'Mitiaro Island',
        'city': 'Mitiaro Island',
    },
    {
        'code': 'MOL',
        'name': 'Aro Airport',
        'city': 'Bols\u00f8ya',
    },
    {
        'code': 'MOQ',
        'name': 'Morondava Airport',
        'city': 'Morondava',
    },
    {
        'code': 'MOT',
        'name': 'Minot International Airport',
        'city': 'Minot',
    },
    {
        'code': 'MOU',
        'name': 'Mountain Village',
        'city': 'Mountain Village',
    },
    {
        'code': 'MOV',
        'name': 'Moranbah Airport',
        'city': 'Moranbah',
    },
    {
        'code': 'MOZ',
        'name': 'Society Islands Airport',
        'city': 'Papeete',
    },
    {
        'code': 'MPA',
        'name': 'Mpacha Airport',
        'city': 'Mpacha',
    },
    {
        'code': 'MPH',
        'name': 'Malay',
        'city': 'Caticlan',
    },
    {
        'code': 'MPL',
        'name': 'Frejorgues Airport',
        'city': 'Mauguio',
    },
    {
        'code': 'MPM',
        'name': 'Maputo Airport',
        'city': 'Maputo',
    },
    {
        'code': 'MPN',
        'name': 'Mount Pleasant Airport',
        'city': 'Mount Pleasant',
    },
    {
        'code': 'MQF',
        'name': 'Magnitogorsk',
        'city': 'Chelyabinsk',
    },
    {
        'code': 'MQL',
        'name': 'Mildura Airport',
        'city': 'Mildura',
    },
    {
        'code': 'MQM',
        'name': 'Mardin',
        'city': 'Mardin',
    },
    {
        'code': 'MQN',
        'name': 'Rossvoll Airport',
        'city': 'Skonseng',
    },
    {
        'code': 'MQP',
        'name': 'Nelspruit Airport',
        'city': 'Nelspruit',
    },
    {
        'code': 'MQT',
        'name': 'Sawyer International Airport',
        'city': 'Marquette',
    },
    {
        'code': 'MQX',
        'name': 'Makale',
        'city': 'Makale',
    },
    {
        'code': 'MRA',
        'name': 'Misurata Airport',
        'city': 'Misratah',
    },
    {
        'code': 'MRD',
        'name': 'Alberto Carnevalli Airport',
        'city': 'Ejido',
    },
    {
        'code': 'MRE',
        'name': 'Mara Serena Airport',
        'city': 'Mara Lodges',
    },
    {
        'code': 'MRS',
        'name': 'Marignane Airport',
        'city': 'Marignane',
    },
    {
        'code': 'MRU',
        'name': 'Plaisance International Airport',
        'city': 'Mahebourg',
    },
    {
        'code': 'MRV',
        'name': 'Mineral\'nyye Vody',
        'city': 'Mineralnye Vody',
    },
    {
        'code': 'MRY',
        'name': 'Monterey Peninsula Airport',
        'city': 'Monterey',
    },
    {
        'code': 'MRZ',
        'name': 'Moree Airport',
        'city': 'Moree',
    },
    {
        'code': 'MSA',
        'name': 'Muskrat Dam',
        'city': 'Muskrat Dam',
    },
    {
        'code': 'MSE',
        'name': 'Kent International Airport',
        'city': 'Manston',
    },
    {
        'code': 'MSJ',
        'name': 'Misawa Airport',
        'city': 'Misawa-shi',
    },
    {
        'code': 'MSL',
        'name': 'Muscle Shoals Regional Airport',
        'city': 'Muscle Shoals',
    },
    {
        'code': 'MSN',
        'name': 'Dane County Regional Airport-Truax Field',
        'city': 'Madison',
    },
    {
        'code': 'MSO',
        'name': 'Missoula International Airport',
        'city': 'Missoula',
    },
    {
        'code': 'MSP',
        'name': 'Minneapolis St Paul International Airport',
        'city': 'St. Paul',
    },
    {
        'code': 'MSQ',
        'name': 'Velikiydvor Airport',
        'city': 'Minsk',
    },
    {
        'code': 'MSR',
        'name': 'Mus Airport',
        'city': 'Mush',
    },
    {
        'code': 'MSS',
        'name': 'Massena International Airport',
        'city': 'Massena',
    },
    {
        'code': 'MST',
        'name': 'Maastricht Airport',
        'city': 'Maastricht-Airport',
    },
    {
        'code': 'MSU',
        'name': 'Maseru Moshoeshoe Airport',
        'city': 'Maseru',
    },
    {
        'code': 'MSW',
        'name': 'Massawa',
        'city': 'Massawa',
    },
    {
        'code': 'MSY',
        'name': 'New Orleans International Airport',
        'city': 'Kenner',
    },
    {
        'code': 'MSZ',
        'name': 'Namibe',
        'city': 'Namibe',
    },
    {
        'code': 'MTJ',
        'name': 'Montrose Regional Airport',
        'city': 'Montrose',
    },
    {
        'code': 'MTM',
        'name': 'Metlakatla Sea Plane Base',
        'city': 'Metlakatla',
    },
    {
        'code': 'MTR',
        'name': 'Los Garzones Airport',
        'city': 'Los Garzones',
    },
    {
        'code': 'MTS',
        'name': 'Matsapa International Airport',
        'city': 'Manzini',
    },
    {
        'code': 'MTT',
        'name': 'Minatitlan Airport',
        'city': 'Minatitlan',
    },
    {
        'code': 'MTV',
        'name': 'Mota Lava',
        'city': 'Mota Lava',
    },
    {
        'code': 'MTY',
        'name': 'Gen Mariano Escobedo International Airport',
        'city': 'Pesquer\u00eda',
    },
    {
        'code': 'MUA',
        'name': 'Munda Airport',
        'city': 'Munda',
    },
    {
        'code': 'MUB',
        'name': 'Maun Airport',
        'city': 'Maun',
    },
    {
        'code': 'MUC',
        'name': 'Franz-Josef-Strauss Airport',
        'city': 'Oberding',
    },
    {
        'code': 'MUE',
        'name': 'Waimea Kohala Airport',
        'city': 'Kamuela',
    },
    {
        'code': 'MUH',
        'name': 'Mersa Matruh Airport',
        'city': 'Marsa Matruh',
    },
    {
        'code': 'MUK',
        'name': 'Mauke Island',
        'city': 'Mauke Island',
    },
    {
        'code': 'MUN',
        'name': 'Maturin Airport',
        'city': 'Aguasay',
    },
    {
        'code': 'MUR',
        'name': 'Marudi Airport',
        'city': 'Miri',
    },
    {
        'code': 'MUX',
        'name': 'Multan Airport',
        'city': 'Multan',
    },
    {
        'code': 'MUZ',
        'name': 'Mara',
        'city': 'Musoma',
    },
    {
        'code': 'MVB',
        'name': 'Franceville Mvengue Airport',
        'city': 'Franceville',
    },
    {
        'code': 'MVD',
        'name': 'Carrasco International Airport',
        'city': 'Montevideo',
    },
    {
        'code': 'MVP',
        'name': 'Mitu Airport',
        'city': 'Mitu',
    },
    {
        'code': 'MVR',
        'name': 'Maroua Salak Airport',
        'city': 'Maroua',
    },
    {
        'code': 'MVS',
        'name': 'Aeroporto Max Feffer',
        'city': 'Mucuri',
    },
    {
        'code': 'MVT',
        'name': 'French Polynesia',
        'city': 'Mataiva',
    },
    {
        'code': 'MVY',
        'name': 'Marthas Vineyard Airport',
        'city': 'Vineyard Haven',
    },
    {
        'code': 'MWA',
        'name': 'Williamson County Regional Airport',
        'city': 'Marion',
    },
    {
        'code': 'MWF',
        'name': 'Vanuatu',
        'city': 'Maewo',
    },
    {
        'code': 'MWN',
        'name': 'Mwadui',
        'city': 'Mwadui',
    },
    {
        'code': 'MWQ',
        'name': 'Magwe',
        'city': 'Magwe',
    },
    {
        'code': 'MWZ',
        'name': 'Mwanza Airport',
        'city': 'Ilemera',
    },
    {
        'code': 'MXH',
        'name': 'Papua New Guinea',
        'city': 'Moro',
    },
    {
        'code': 'MXL',
        'name': 'Gen Rodolfo Sanchez T International Airport',
        'city': 'Mexicali',
    },
    {
        'code': 'MXM',
        'name': 'Morombe Airport',
        'city': 'Morombe',
    },
    {
        'code': 'MXN',
        'name': 'Ploujean Airport',
        'city': 'Morlaix',
    },
    {
        'code': 'MXP',
        'name': 'Malpensa International Airport',
        'city': 'Cardano al Campo',
    },
    {
        'code': 'MXT',
        'name': 'Maintirano',
        'city': 'Maintirano',
    },
    {
        'code': 'MXV',
        'name': 'Moron Airport',
        'city': 'M\u00f6r\u00f6n',
    },
    {
        'code': 'MXX',
        'name': 'Siljan Airport',
        'city': 'Mora',
    },
    {
        'code': 'MXZ',
        'name': 'Meixian',
        'city': 'Meixian',
    },
    {
        'code': 'MYA',
        'name': 'Moruya Aerodrome',
        'city': 'Bingie',
    },
    {
        'code': 'MYD',
        'name': 'Malindi Airport',
        'city': 'Mombasa',
    },
    {
        'code': 'MYE',
        'name': 'Miyakejima Airport',
        'city': 'Miyake-mura',
    },
    {
        'code': 'MYG',
        'name': 'Miltary & Civil Airport',
        'city': 'Abraham Bay',
    },
    {
        'code': 'MYI',
        'name': 'Murray Island',
        'city': 'Murray Island',
    },
    {
        'code': 'MYJ',
        'name': 'Matsuyama Airport',
        'city': 'Matsuyama-shi',
    },
    {
        'code': 'MYL',
        'name': 'Mccall Airport',
        'city': 'Mccall',
    },
    {
        'code': 'MYR',
        'name': 'Myrtle Beach International Airport',
        'city': 'Myrtle Beach',
    },
    {
        'code': 'MYT',
        'name': 'Myitkyina Airport',
        'city': 'Myitkyina',
    },
    {
        'code': 'MYU',
        'name': 'Mekoryuk',
        'city': 'Mekoryuk',
    },
    {
        'code': 'MYW',
        'name': 'Mtwara Airport',
        'city': 'Ziwani',
    },
    {
        'code': 'MYY',
        'name': 'Miri Airport',
        'city': 'Miri',
    },
    {
        'code': 'MZG',
        'name': 'Magong Airport',
        'city': 'Makung City',
    },
    {
        'code': 'MZH',
        'name': 'Merzifon',
        'city': 'Merzifon',
    },
    {
        'code': 'MZI',
        'name': 'Mopti Barbe Airport',
        'city': 'Mopti',
    },
    {
        'code': 'MZL',
        'name': 'La Nubia Airport',
        'city': 'Villamar\u00eda',
    },
    {
        'code': 'MZO',
        'name': 'Manzanillo Airport',
        'city': 'Manzanillo',
    },
    {
        'code': 'MZR',
        'name': 'Mazar I Sharif Airport',
        'city': 'Mazar-i-Sharif',
    },
    {
        'code': 'MZT',
        'name': 'General Rafael Buelna International Airport',
        'city': 'Mazatl\u00e1n',
    },
    {
        'code': 'MZV',
        'name': 'Mulu Airport',
        'city': 'Mulu',
    },
    {
        'code': 'NAA',
        'name': 'Narrabri Airport',
        'city': 'Bohena Creek',
    },
    {
        'code': 'NAC',
        'name': 'Naracoorte Airport',
        'city': 'Naracoorte',
    },
    {
        'code': 'NAG',
        'name': 'Sonegaon Airport',
        'city': 'Nagpur',
    },
    {
        'code': 'NAJ',
        'name': 'Nakhichevan',
        'city': 'Nakhichevan',
    },
    {
        'code': 'NAN',
        'name': 'Nadi International Airport',
        'city': 'Nadi',
    },
    {
        'code': 'NAO',
        'name': 'Nanchong Airport',
        'city': 'Nanchong',
    },
    {
        'code': 'NAP',
        'name': 'Naples International Airport',
        'city': 'Naples',
    },
    {
        'code': 'NAQ',
        'name': 'Qaanaaq',
        'city': 'Qaanaaq',
    },
    {
        'code': 'NAS',
        'name': 'Nassau International Airport',
        'city': 'Nassau',
    },
    {
        'code': 'NAT',
        'name': 'Augusto Severo International Airport',
        'city': 'Natal',
    },
    {
        'code': 'NAU',
        'name': 'Napuka Island',
        'city': 'Napuka Island',
    },
    {
        'code': 'NAV',
        'name': 'Nevsehir',
        'city': 'Nevsehir',
    },
    {
        'code': 'NAW',
        'name': 'Narathiwat Airport',
        'city': 'Narathiwat',
    },
    {
        'code': 'NBC',
        'name': 'Russia',
        'city': 'Naberevnye Chelny',
    },
    {
        'code': 'NBO',
        'name': 'Jomo Kenyatta International Airport',
        'city': 'Nairobi',
    },
    {
        'code': 'NBW',
        'name': 'Guantanamo Bay Naval Air Station',
        'city': 'Caimanera',
    },
    {
        'code': 'NBX',
        'name': 'Nabire Airport',
        'city': 'Nabire',
    },
    {
        'code': 'NCA',
        'name': 'North Caicos Airport',
        'city': 'Bottle Creek Settlements',
    },
    {
        'code': 'NCE',
        'name': 'Nice-Cote d\'Azur Airport',
        'city': 'Nice',
    },
    {
        'code': 'NCL',
        'name': 'Newcastle International Airport',
        'city': 'Newcastle',
    },
    {
        'code': 'NCN',
        'name': 'Chenega',
        'city': 'New Chenega',
    },
    {
        'code': 'NCU',
        'name': 'Nukus',
        'city': 'Nukus',
    },
    {
        'code': 'NCY',
        'name': 'Meythet Airport',
        'city': 'Pringy',
    },
    {
        'code': 'NDB',
        'name': 'Nouadhibou Airport',
        'city': 'Port-Etienne',
    },
    {
        'code': 'NDG',
        'name': 'Qiqihar',
        'city': 'Qiqihar',
    },
    {
        'code': 'NDJ',
        'name': 'Ndjamena Airport',
        'city': 'N\'Djamena',
    },
    {
        'code': 'NDR',
        'name': 'Nador Airport',
        'city': 'Nador',
    },
    {
        'code': 'NER',
        'name': 'Neryungri',
        'city': 'Neryungri',
    },
    {
        'code': 'NEV',
        'name': 'Newcastle Airport',
        'city': 'Nevis',
    },
    {
        'code': 'NFO',
        'name': 'Niuafo\'ou Airport',
        'city': 'Niuafo',
    },
    {
        'code': 'NGB',
        'name': 'Ningbo Airport',
        'city': 'Jiangshan',
    },
    {
        'code': 'NGE',
        'name': 'Ngaoundere Airport',
        'city': 'Ngaound\u00e9r\u00e9',
    },
    {
        'code': 'NGI',
        'name': 'Ngau Island',
        'city': 'Ngau Island',
    },
    {
        'code': 'NGO',
        'name': 'Chubu International Airport',
        'city': 'Tokoname-shi',
    },
    {
        'code': 'NGS',
        'name': 'Nagasaki Airport',
        'city': 'Omura-shi',
    },
    {
        'code': 'NHA',
        'name': 'Nha-Trang Airport',
        'city': 'Nha Trang',
    },
    {
        'code': 'NHV',
        'name': 'Marquesas Islands Airport',
        'city': 'Nuku Hiva',
    },
    {
        'code': 'NIB',
        'name': 'Nikolai',
        'city': 'Nikolai',
    },
    {
        'code': 'NIM',
        'name': 'Niamey Airport',
        'city': 'Niamey',
    },
    {
        'code': 'NIP',
        'name': 'Jacksonville Naval Air Station',
        'city': 'Jacksonville',
    },
    {
        'code': 'NIU',
        'name': 'Honolulu International Airport',
        'city': 'Honolulu',
    },
    {
        'code': 'NJC',
        'name': 'Nizhnevartovsk Northwest Airport',
        'city': 'Nizhnevartovsk',
    },
    {
        'code': 'NKC',
        'name': 'Nouakchott Airport',
        'city': 'Nouakchott',
    },
    {
        'code': 'NKG',
        'name': 'Nanjing Lukou International Airport',
        'city': 'Nanjing',
    },
    {
        'code': 'NKI',
        'name': 'Naukiti Airport',
        'city': 'Naukiti',
    },
    {
        'code': 'NKM',
        'name': 'Nagoya Airport',
        'city': 'Toyoyama-cho',
    },
    {
        'code': 'NLA',
        'name': 'Ndola Airport',
        'city': 'Ndola',
    },
    {
        'code': 'NLD',
        'name': 'Quetzalcoatl International Airport',
        'city': 'Nuevo Laredo',
    },
    {
        'code': 'NLF',
        'name': 'Darnley Island Airport',
        'city': 'Kubin Village',
    },
    {
        'code': 'NLG',
        'name': 'Nelson Lagoon',
        'city': 'Nelson Lagoon',
    },
    {
        'code': 'NLK',
        'name': 'Norfolk Island Airport',
        'city': 'Kingston',
    },
    {
        'code': 'NLV',
        'name': 'Nikolaev Airport',
        'city': 'Mykolayiv',
    },
    {
        'code': 'NMA',
        'name': 'Namangan Airport',
        'city': 'Namangan',
    },
    {
        'code': 'NME',
        'name': 'Nightmute Airport',
        'city': 'Nightmute',
    },
    {
        'code': 'NNB',
        'name': 'Makira',
        'city': 'Santa Ana',
    },
    {
        'code': 'NNG',
        'name': 'Nanning-Wuyu Airport',
        'city': 'Wuxu',
    },
    {
        'code': 'NNL',
        'name': 'Nondalton',
        'city': 'Nondalton',
    },
    {
        'code': 'NNM',
        'name': 'Naryan-Mar',
        'city': 'Naryan-Mar',
    },
    {
        'code': 'NNT',
        'name': 'Nan Airport',
        'city': 'Nan',
    },
    {
        'code': 'NNY',
        'name': 'Nanyang',
        'city': 'Nanyang',
    },
    {
        'code': 'NOB',
        'name': 'Nosara Beach Airport',
        'city': 'Nosara',
    },
    {
        'code': 'NOC',
        'name': 'Connaught Airport',
        'city': 'Knock',
    },
    {
        'code': 'NOJ',
        'name': 'Nojabrxsk',
        'city': 'Nojabrxsk',
    },
    {
        'code': 'NOS',
        'name': 'Nosy Be Fascene Airport',
        'city': 'Hell-Ville',
    },
    {
        'code': 'NOU',
        'name': 'La Tontouta Airport',
        'city': 'La Tontouta',
    },
    {
        'code': 'NOV',
        'name': 'Huambo Airport',
        'city': 'Huambo',
    },
    {
        'code': 'NOZ',
        'name': 'Kemerovskaya Oblast',
        'city': 'Novokuznetsk',
    },
    {
        'code': 'NPE',
        'name': 'Hawkes Bay Airport',
        'city': 'Napier',
    },
    {
        'code': 'NPL',
        'name': 'New Plymouth Airport',
        'city': 'New Plymouth',
    },
    {
        'code': 'NQN',
        'name': 'Neuquen Airport',
        'city': 'Neuquen',
    },
    {
        'code': 'NQU',
        'name': 'Nuqui Airport',
        'city': 'Nuqu\u00ed',
    },
    {
        'code': 'NQY',
        'name': 'St Mawgan Airport',
        'city': 'Newquay',
    },
    {
        'code': 'NRA',
        'name': 'Narrandera Leeton Aerodrome',
        'city': 'Narrandera',
    },
    {
        'code': 'NRK',
        'name': 'Kungsangen Airport',
        'city': 'Norrkoping',
    },
    {
        'code': 'NRN',
        'name': 'Airport Weeze',
        'city': 'Weeze',
    },
    {
        'code': 'NRT',
        'name': 'Narita International Airport',
        'city': 'Narita-shi',
    },
    {
        'code': 'NSH',
        'name': 'Now Shahr',
        'city': 'Now Shahr',
    },
    {
        'code': 'NSI',
        'name': 'Nsimalen Airport',
        'city': 'Yaounde',
    },
    {
        'code': 'NSK',
        'name': 'Norilsk Alykel Airport',
        'city': 'Kansk',
    },
    {
        'code': 'NSN',
        'name': 'Nelson Airport',
        'city': 'Nelson',
    },
    {
        'code': 'NST',
        'name': 'Nakhon Si Thammarat Airport',
        'city': 'Phra Phrom',
    },
    {
        'code': 'NTE',
        'name': 'Chateau Bougon Airport',
        'city': 'Bouguenais',
    },
    {
        'code': 'NTG',
        'name': 'Nantong Airport',
        'city': 'Nantong',
    },
    {
        'code': 'NTL',
        'name': 'Williamtown Airport',
        'city': 'Ferodale',
    },
    {
        'code': 'NTN',
        'name': 'Normanton',
        'city': 'Normanton',
    },
    {
        'code': 'NTQ',
        'name': 'Noto Airport',
        'city': 'Anamizu-machi',
    },
    {
        'code': 'NTT',
        'name': 'Niuatoputapu Airport',
        'city': 'Niuatoputapu',
    },
    {
        'code': 'NUE',
        'name': 'Nurnberg Airport',
        'city': 'Nuremberg',
    },
    {
        'code': 'NUI',
        'name': 'Nuiqsut',
        'city': 'Nuiqsut',
    },
    {
        'code': 'NUK',
        'name': 'Nukutavake',
        'city': 'Nukutavake',
    },
    {
        'code': 'NUL',
        'name': 'Nulato Airport',
        'city': 'Nulato',
    },
    {
        'code': 'NUP',
        'name': 'Alaska',
        'city': 'Nunapitchuk',
    },
    {
        'code': 'NUS',
        'name': 'Norsup',
        'city': 'Norsup',
    },
    {
        'code': 'NUX',
        'name': 'Urengoy Airport',
        'city': 'Novy Urengoy',
    },
    {
        'code': 'NVA',
        'name': 'Neiva Lamarguita Airport',
        'city': 'Neiva',
    },
    {
        'code': 'NVI',
        'name': 'Navoi Airport',
        'city': 'Navoi',
    },
    {
        'code': 'NVK',
        'name': 'Framnes Airport',
        'city': 'Narvik',
    },
    {
        'code': 'NVR',
        'name': 'Novgorod',
        'city': 'Novgorod',
    },
    {
        'code': 'NVT',
        'name': 'Ministro Victor Konder International Airport',
        'city': 'Navegantes',
    },
    {
        'code': 'NWA',
        'name': 'Moheli',
        'city': 'Moheli',
    },
    {
        'code': 'NWI',
        'name': 'Norwich Airport',
        'city': 'Norwich',
    },
    {
        'code': 'NYA',
        'name': 'Norwood Young America',
        'city': 'Norwood Young America',
    },
    {
        'code': 'NYK',
        'name': 'Nanyuki Airport',
        'city': 'Nyeri',
    },
    {
        'code': 'NYM',
        'name': 'Nadym Airport',
        'city': 'Nadym',
    },
    {
        'code': 'NYO',
        'name': 'Skavsta Airport',
        'city': 'Nykoping',
    },
    {
        'code': 'NYU',
        'name': 'Nyaung U Airport',
        'city': 'Nyaung-u',
    },
    {
        'code': 'NZH',
        'name': 'Manzhouli',
        'city': 'Manzhouli',
    },
    {
        'code': 'OAG',
        'name': 'Springhill Airport',
        'city': 'Arthurville',
    },
    {
        'code': 'OAJ',
        'name': 'Albert J Ellis Airport',
        'city': 'Richlands',
    },
    {
        'code': 'OAK',
        'name': 'Oakland International Airport',
        'city': 'Oakland',
    },
    {
        'code': 'OAM',
        'name': 'Oamaru Airport',
        'city': 'Oamaru',
    },
    {
        'code': 'OAX',
        'name': 'Xoxocotlan Airport',
        'city': 'San Bernardo Mixtepec',
    },
    {
        'code': 'OBN',
        'name': 'Oban Connel Airport',
        'city': 'Oban',
    },
    {
        'code': 'OBO',
        'name': 'Obihiro Airport',
        'city': 'Obihiro-shi',
    },
    {
        'code': 'OBU',
        'name': 'Kobuk Airport',
        'city': 'Kobuk',
    },
    {
        'code': 'OBX',
        'name': 'Obo',
        'city': 'Obo',
    },
    {
        'code': 'OCC',
        'name': 'Coca Airport',
        'city': 'Chontapunta',
    },
    {
        'code': 'ODN',
        'name': 'Sarawak',
        'city': 'Long Seridan',
    },
    {
        'code': 'ODS',
        'name': 'Odessa Central Airport',
        'city': 'Odesa',
    },
    {
        'code': 'ODW',
        'name': 'Oak Harbor Airpark',
        'city': 'Oak Harbor',
    },
    {
        'code': 'ODY',
        'name': 'Oudomxay',
        'city': 'Oudomxay',
    },
    {
        'code': 'OER',
        'name': 'Ornskoldsvik Airport',
        'city': 'Husum',
    },
    {
        'code': 'OFI',
        'name': 'Ouango Fitini',
        'city': 'Ouango Fitini',
    },
    {
        'code': 'OGG',
        'name': 'Kahului Airport',
        'city': 'Kahului',
    },
    {
        'code': 'OGN',
        'name': 'Yonaguni Airport',
        'city': 'Yonaguni-cho',
    },
    {
        'code': 'OGS',
        'name': 'Ogdensburg International Airport',
        'city': 'Ogdensburg',
    },
    {
        'code': 'OGX',
        'name': 'Ain Beida',
        'city': 'Ouargla',
    },
    {
        'code': 'OGZ',
        'name': 'Ordzhonikidze North Airport',
        'city': 'Mozdok',
    },
    {
        'code': 'OHD',
        'name': 'Ohrid Airport',
        'city': 'Ohrid',
    },
    {
        'code': 'OHE',
        'name': 'Hamburg Airport',
        'city': 'Hamburg',
    },
    {
        'code': 'OHO',
        'name': 'Okhotsk Airport',
        'city': 'Okhotsk',
    },
    {
        'code': 'OIM',
        'name': 'Oshima Airport',
        'city': 'Oshima-machi',
    },
    {
        'code': 'OIT',
        'name': 'Oita Airport',
        'city': 'Kunisaki-shi',
    },
    {
        'code': 'OKA',
        'name': 'Shimojishima Airport',
        'city': 'Naha-shi',
    },
    {
        'code': 'OKC',
        'name': 'Will Rogers World Airport',
        'city': 'Oklahoma City',
    },
    {
        'code': 'OKD',
        'name': 'Okadama Airport',
        'city': 'Sapporo-shi',
    },
    {
        'code': 'OKJ',
        'name': 'Okayama Airport',
        'city': 'Okayama-shi',
    },
    {
        'code': 'OKR',
        'name': 'Yorke Island',
        'city': 'Yorke Island',
    },
    {
        'code': 'OKY',
        'name': 'Oakey Aerodrome',
        'city': 'Oakey',
    },
    {
        'code': 'OLA',
        'name': 'Orland Airport',
        'city': 'Orland',
    },
    {
        'code': 'OLB',
        'name': 'Olbia Costa Smeralda Airport',
        'city': 'Terranova',
    },
    {
        'code': 'OLF',
        'name': 'L. M. Clayton Airport',
        'city': 'Wolf Point',
    },
    {
        'code': 'OLH',
        'name': 'Alaska',
        'city': 'Old Harbor',
    },
    {
        'code': 'OLJ',
        'name': 'Malampa',
        'city': 'Olpoi',
    },
    {
        'code': 'OLP',
        'name': 'Olympic Dam Aerodrome',
        'city': 'Roxby Downs',
    },
    {
        'code': 'OMA',
        'name': 'Eppley Airfield',
        'city': 'Omaha',
    },
    {
        'code': 'OMB',
        'name': 'Ombou\u00e9',
        'city': 'Omboue',
    },
    {
        'code': 'OMC',
        'name': 'Ormoc Airport',
        'city': 'Ormoc',
    },
    {
        'code': 'OMD',
        'name': 'Oranjemund Airport',
        'city': 'Oranjemund',
    },
    {
        'code': 'OME',
        'name': 'Nome Airport',
        'city': 'Nome',
    },
    {
        'code': 'OMH',
        'name': 'Uromiyeh Airport',
        'city': 'Urmieh',
    },
    {
        'code': 'OMO',
        'name': 'Mostar Airport',
        'city': 'Mostar',
    },
    {
        'code': 'OMR',
        'name': 'Oradea Airport',
        'city': 'Oradea-Mare',
    },
    {
        'code': 'OMS',
        'name': 'Omsk Southwest Airport',
        'city': 'Omsk',
    },
    {
        'code': 'OND',
        'name': 'Ondangwa Airport',
        'city': 'Ondangwa',
    },
    {
        'code': 'ONG',
        'name': 'Mornington Island Airport',
        'city': 'Mornington',
    },
    {
        'code': 'ONJ',
        'name': 'Odate-Noshiro Airport',
        'city': 'Kitakita-shi',
    },
    {
        'code': 'ONL',
        'name': 'The Oneill Municipal Airport',
        'city': 'O\'neill',
    },
    {
        'code': 'ONT',
        'name': 'Ontario International Airport',
        'city': 'Ontario',
    },
    {
        'code': 'OOK',
        'name': 'Toksook Bay',
        'city': 'Toksook Bay',
    },
    {
        'code': 'OOL',
        'name': 'Gold Coast (Coolangatta)',
        'city': 'Gold Coast',
    },
    {
        'code': 'OPF',
        'name': 'Opa Locka Airport',
        'city': 'Opa-Locka',
    },
    {
        'code': 'OPO',
        'name': 'Porto Airport',
        'city': 'Maia',
    },
    {
        'code': 'OPS',
        'name': 'Sinop Airport',
        'city': 'Sinop',
    },
    {
        'code': 'OPU',
        'name': 'Balimo',
        'city': 'Balimo',
    },
    {
        'code': 'ORB',
        'name': 'Orebro Airport',
        'city': 'Orebro',
    },
    {
        'code': 'ORD',
        'name': 'Chicago O\'Hare International Airport',
        'city': 'Chicago',
    },
    {
        'code': 'ORF',
        'name': 'Norfolk International Airport',
        'city': 'Norfolk',
    },
    {
        'code': 'ORH',
        'name': 'Worcester Municipal Airport',
        'city': 'Worcester',
    },
    {
        'code': 'ORI',
        'name': 'Port Lions',
        'city': 'Port Lions',
    },
    {
        'code': 'ORJ',
        'name': 'Orinduik Airport',
        'city': 'Rera',
    },
    {
        'code': 'ORK',
        'name': 'Cork Airport',
        'city': 'Fivemilebridge',
    },
    {
        'code': 'ORM',
        'name': 'Sywell Airport',
        'city': 'Northampton',
    },
    {
        'code': 'ORN',
        'name': 'Es Senia Airport',
        'city': 'Oran Rp',
    },
    {
        'code': 'ORV',
        'name': 'Curtis Memorial',
        'city': 'Noorvik',
    },
    {
        'code': 'ORY',
        'name': 'Paris Orly Airport',
        'city': 'Paris',
    },
    {
        'code': 'OSD',
        'name': 'Ostersunds Airport',
        'city': 'Fr\u00f6s\u00f6',
    },
    {
        'code': 'OSI',
        'name': 'Osijek Airport',
        'city': 'Osijek',
    },
    {
        'code': 'OSK',
        'name': 'Oskarshamn Airport',
        'city': 'F\u00e5rbo',
    },
    {
        'code': 'OSL',
        'name': 'Oslo Gardermoen Airport',
        'city': 'Gardermoen',
    },
    {
        'code': 'OSM',
        'name': 'Mosul Airport',
        'city': 'Mosul',
    },
    {
        'code': 'OSR',
        'name': 'Mosnov Airport',
        'city': 'Mo\u0161nov',
    },
    {
        'code': 'OSS',
        'name': 'Osh Airport',
        'city': 'Osh',
    },
    {
        'code': 'OST',
        'name': 'Oostende Airport',
        'city': 'Oostende',
    },
    {
        'code': 'OSW',
        'name': 'Orsk',
        'city': 'Orsk',
    },
    {
        'code': 'OSY',
        'name': 'Namsos Airport',
        'city': 'Namsos',
    },
    {
        'code': 'OSZ',
        'name': 'Koszalin Airport',
        'city': 'Sian\u00f3w',
    },
    {
        'code': 'OTH',
        'name': 'North Bend Municipal Airport',
        'city': 'North Bend',
    },
    {
        'code': 'OTP',
        'name': 'Otopeni Airport',
        'city': 'Bucharest',
    },
    {
        'code': 'OTR',
        'name': 'Coto 47 Airport',
        'city': 'Coto 47',
    },
    {
        'code': 'OTZ',
        'name': 'Ralph Wien Memorial Airport',
        'city': 'Kotzebue',
    },
    {
        'code': 'OUA',
        'name': 'Ouagadougou Airport',
        'city': 'Ouagadougou',
    },
    {
        'code': 'OUD',
        'name': 'Angads Airport',
        'city': 'Oujda',
    },
    {
        'code': 'OUE',
        'name': 'Ouesso Airport',
        'city': 'Ouesso',
    },
    {
        'code': 'OUL',
        'name': 'Oulu Airport',
        'city': 'Oulunsalo',
    },
    {
        'code': 'OUZ',
        'name': 'Mauritania',
        'city': 'Zouerate',
    },
    {
        'code': 'OVB',
        'name': 'Tolmachevo Airport',
        'city': 'Novosibirsk',
    },
    {
        'code': 'OVD',
        'name': 'Asturias Airport',
        'city': 'Castrill\u00f3n',
    },
    {
        'code': 'OVS',
        'name': 'Boscobel Airport',
        'city': 'Boscobel',
    },
    {
        'code': 'OXB',
        'name': 'Bissau Oswaldo Vieira Airport',
        'city': 'Bissau',
    },
    {
        'code': 'OXF',
        'name': 'Oxford Airport',
        'city': 'Kidlington',
    },
    {
        'code': 'OXR',
        'name': 'Oxnard Airport',
        'city': 'Oxnard',
    },
    {
        'code': 'OYE',
        'name': 'Oyem Airport',
        'city': 'Oyem',
    },
    {
        'code': 'OYG',
        'name': 'Moyo',
        'city': 'Moyo',
    },
    {
        'code': 'OZC',
        'name': 'Ozamis-Mindanao Island Airport',
        'city': 'Ozamis City',
    },
    {
        'code': 'OZH',
        'name': 'Zaporozhye East Airport',
        'city': 'Zaporizhzhya',
    },
    {
        'code': 'OZZ',
        'name': 'Ouarzazate Airport',
        'city': 'Ouarzazate',
    },
    {
        'code': 'PAD',
        'name': 'Paderborn-Lippstadt Airport',
        'city': 'B\u00fcren',
    },
    {
        'code': 'PAH',
        'name': 'Barkley Regional Airport',
        'city': 'West Paducah',
    },
    {
        'code': 'PAI',
        'name': 'Pailin Airport',
        'city': 'Pailin',
    },
    {
        'code': 'PAP',
        'name': 'Port Au Prince',
        'city': 'Port Au Prince',
    },
    {
        'code': 'PAS',
        'name': 'Paros Island Airport',
        'city': 'Levkai',
    },
    {
        'code': 'PAT',
        'name': 'Lok Nayak Jaiprakash Airport',
        'city': 'Patna',
    },
    {
        'code': 'PAZ',
        'name': 'Tajin Airport',
        'city': 'Castillo de Teayo',
    },
    {
        'code': 'PBC',
        'name': 'Puebla Airport',
        'city': 'Tlaltenango',
    },
    {
        'code': 'PBD',
        'name': 'Porbandar Airport',
        'city': 'Porbandar',
    },
    {
        'code': 'PBG',
        'name': 'Plattsburgh Air Force Base',
        'city': 'Plattsburgh',
    },
    {
        'code': 'PBH',
        'name': 'Paro Airport',
        'city': 'Paro',
    },
    {
        'code': 'PBI',
        'name': 'Palm Beach International Airport',
        'city': 'West Palm Beach',
    },
    {
        'code': 'PBJ',
        'name': 'Malampa',
        'city': 'Paama',
    },
    {
        'code': 'PBM',
        'name': 'Zandery Airport',
        'city': 'Sabakoe',
    },
    {
        'code': 'PBO',
        'name': 'Paraburdoo Airport',
        'city': 'Paraburdoo',
    },
    {
        'code': 'PBP',
        'name': 'Punta Islita Airport',
        'city': 'Punta Islita',
    },
    {
        'code': 'PBU',
        'name': 'Putao Airport',
        'city': 'Putao',
    },
    {
        'code': 'PCE',
        'name': 'Painter Creek',
        'city': 'Painter Creek',
    },
    {
        'code': 'PCL',
        'name': 'Pucallpa Airport',
        'city': 'Callaria',
    },
    {
        'code': 'PCR',
        'name': 'Puerto Carreno Airport',
        'city': 'Puerto Carre\u00f1o',
    },
    {
        'code': 'PDA',
        'name': 'Puerto Inirida Airport',
        'city': 'Guaviare',
    },
    {
        'code': 'PDB',
        'name': 'Pedro Bay',
        'city': 'Pedro Bay',
    },
    {
        'code': 'PDG',
        'name': 'Tabing Airport',
        'city': 'Padang',
    },
    {
        'code': 'PDL',
        'name': 'Ponta Delgada Airport',
        'city': 'Ponta Delgada',
    },
    {
        'code': 'PDP',
        'name': 'Maldonado Airport',
        'city': 'Punta del Este',
    },
    {
        'code': 'PDS',
        'name': 'Piedras Negras International Airport',
        'city': 'Piedras Negras',
    },
    {
        'code': 'PDT',
        'name': 'Eastern Oregon Regional Airport',
        'city': 'Pendleton',
    },
    {
        'code': 'PDX',
        'name': 'Portland International Airport',
        'city': 'Portland',
    },
    {
        'code': 'PEC',
        'name': 'Pelican Sea Plane Base',
        'city': 'Pelican',
    },
    {
        'code': 'PED',
        'name': 'Pardubice',
        'city': 'Pardubice',
    },
    {
        'code': 'PEE',
        'name': 'Bolshesavino Airport',
        'city': 'Perm\'',
    },
    {
        'code': 'PEG',
        'name': 'Perugia Airport',
        'city': 'Assisi',
    },
    {
        'code': 'PEI',
        'name': 'Matecana Airport',
        'city': 'Pereira',
    },
    {
        'code': 'PEK',
        'name': 'Beijing Capital Airport',
        'city': 'Shunyi',
    },
    {
        'code': 'PEM',
        'name': 'Padre Aldamiz Airport',
        'city': 'Puerto Maldonado',
    },
    {
        'code': 'PEN',
        'name': 'Penang International Airport',
        'city': 'Batu Maung',
    },
    {
        'code': 'PER',
        'name': 'Perth International Airport',
        'city': 'Perth',
    },
    {
        'code': 'PES',
        'name': 'Petrozavodsk Northwest Airport',
        'city': 'Petrozavodsk',
    },
    {
        'code': 'PET',
        'name': 'Pelotas Airport',
        'city': 'Pelotas',
    },
    {
        'code': 'PEU',
        'name': 'Puerto Lempira Airport',
        'city': 'Puerto Lempira',
    },
    {
        'code': 'PEW',
        'name': 'Peshawar Airport',
        'city': 'Peshawar',
    },
    {
        'code': 'PEX',
        'name': 'Pechora Southwest Airport',
        'city': 'Ukhta',
    },
    {
        'code': 'PEZ',
        'name': 'Penza',
        'city': 'Penza',
    },
    {
        'code': 'PFB',
        'name': 'Lauro Kurtz Airport',
        'city': 'Passo Fundo',
    },
    {
        'code': 'PFN',
        'name': 'Panama City Bay County Airport',
        'city': 'Panama City',
    },
    {
        'code': 'PFO',
        'name': 'Paphos International Airport',
        'city': 'Paphos',
    },
    {
        'code': 'PFQ',
        'name': 'Parsabad',
        'city': 'Parsabad',
    },
    {
        'code': 'PGA',
        'name': 'Page Municipal Airport',
        'city': 'Page',
    },
    {
        'code': 'PGF',
        'name': 'Rivesaltes Airport',
        'city': 'Perpignan',
    },
    {
        'code': 'PGK',
        'name': 'Pangkalpinang Airport',
        'city': 'Pangkalpinang',
    },
    {
        'code': 'PGM',
        'name': 'Port Graham',
        'city': 'Port Graham',
    },
    {
        'code': 'PGU',
        'name': 'Page Municipal Airport',
        'city': 'Asalouyeh',
    },
    {
        'code': 'PGV',
        'name': 'Pitt Greenville Airport',
        'city': 'Greenville',
    },
    {
        'code': 'PGX',
        'name': 'Bassillac Airport',
        'city': 'St-Pierre',
    },
    {
        'code': 'PHC',
        'name': 'Port Harcourt International Airport',
        'city': 'Port Harcourt',
    },
    {
        'code': 'PHE',
        'name': 'Port Hedland Airport',
        'city': 'Port Hedland',
    },
    {
        'code': 'PHF',
        'name': 'Newport News-Williamsburg International Airport',
        'city': 'Newport News',
    },
    {
        'code': 'PHG',
        'name': 'Port Harcourt City',
        'city': 'Port Harcourt',
    },
    {
        'code': 'PHL',
        'name': 'Philadelphia International Airport',
        'city': 'Philadelphia',
    },
    {
        'code': 'PHO',
        'name': 'Point Hope Airport',
        'city': 'Point Hope',
    },
    {
        'code': 'PHS',
        'name': 'Phitsanulok Airport',
        'city': 'Phitsanulok',
    },
    {
        'code': 'PHW',
        'name': 'Hendrik Van Eck Airport',
        'city': 'Phalaborwa',
    },
    {
        'code': 'PHX',
        'name': 'Sky Harbor International Airport',
        'city': 'Phoenix',
    },
    {
        'code': 'PIA',
        'name': 'Greater Peoria Regional Airport',
        'city': 'Peoria',
    },
    {
        'code': 'PIB',
        'name': 'Pine Belt Regional Airport',
        'city': 'Moselle',
    },
    {
        'code': 'PIE',
        'name': 'St. Petersburg-Clearwater International Airport',
        'city': 'Clearwater',
    },
    {
        'code': 'PIF',
        'name': 'Pingdong Airport',
        'city': 'Pingtung',
    },
    {
        'code': 'PIH',
        'name': 'Pocatello Municipal Airport',
        'city': 'Pocatello',
    },
    {
        'code': 'PIK',
        'name': 'Glasgow Prestwick International Airport',
        'city': 'Prestwick',
    },
    {
        'code': 'PIN',
        'name': 'Parintins Airport',
        'city': 'Parintins',
    },
    {
        'code': 'PIP',
        'name': 'Pilot Point Airport',
        'city': 'Pilot Point',
    },
    {
        'code': 'PIR',
        'name': 'Pierre Municipal Airport',
        'city': 'Pierre',
    },
    {
        'code': 'PIS',
        'name': 'Biard Airport',
        'city': 'Vouneuil-sous-Biard',
    },
    {
        'code': 'PIT',
        'name': 'Pittsburgh International Airport',
        'city': 'Coraopolis',
    },
    {
        'code': 'PIU',
        'name': 'Capitan Concha Airport',
        'city': 'Piura',
    },
    {
        'code': 'PIW',
        'name': 'Pikwitonei Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'PIX',
        'name': 'Pico Airport',
        'city': 'Madalena',
    },
    {
        'code': 'PIZ',
        'name': 'Dew Station',
        'city': 'Point Lay',
    },
    {
        'code': 'PJA',
        'name': 'Sweden',
        'city': 'Pajala',
    },
    {
        'code': 'PJG',
        'name': 'Panjgur Airport',
        'city': 'Panjgur',
    },
    {
        'code': 'PJM',
        'name': 'Puerto Jimenez Airport',
        'city': 'Puerto Jim\u00e9nez',
    },
    {
        'code': 'PKA',
        'name': 'Alaska',
        'city': 'Napaskiak',
    },
    {
        'code': 'PKB',
        'name': 'Wood County Airport-Gill Robb Wilson Field',
        'city': 'Williamstown',
    },
    {
        'code': 'PKC',
        'name': 'Petropavlovsk Yelizovo Airport',
        'city': 'Elizovo',
    },
    {
        'code': 'PKE',
        'name': 'Parkes Airport',
        'city': 'Parkes',
    },
    {
        'code': 'PKG',
        'name': 'Pangkor Airport',
        'city': 'Pangkor',
    },
    {
        'code': 'PKK',
        'name': 'Pakokku',
        'city': 'Pakokku',
    },
    {
        'code': 'PKP',
        'name': 'French Polynesia',
        'city': 'Puka Puka',
    },
    {
        'code': 'PKR',
        'name': 'Pokhara Airport',
        'city': 'Pokhara',
    },
    {
        'code': 'PKU',
        'name': 'Simpang Tiga Airport',
        'city': 'Pekanbaru',
    },
    {
        'code': 'PKY',
        'name': 'Tjilik Riwut Airport',
        'city': 'Buntok',
    },
    {
        'code': 'PKZ',
        'name': 'Pakse Airport',
        'city': 'Pakxe',
    },
    {
        'code': 'PLD',
        'name': 'Playa Samara Airport',
        'city': 'Nicoya',
    },
    {
        'code': 'PLH',
        'name': 'Roborough Airport',
        'city': 'Plymouth',
    },
    {
        'code': 'PLJ',
        'name': 'Belize',
        'city': 'Placencia',
    },
    {
        'code': 'PLM',
        'name': 'Sultan Mahmud Badaruddin Ii Airport',
        'city': 'Palembang',
    },
    {
        'code': 'PLN',
        'name': 'Pellston Regional Airport',
        'city': 'Pellston',
    },
    {
        'code': 'PLO',
        'name': 'Port Lincoln Airport',
        'city': 'Port Lincoln',
    },
    {
        'code': 'PLQ',
        'name': 'Palanga International',
        'city': 'Klaipeda\/Palanga',
    },
    {
        'code': 'PLS',
        'name': 'Providenciales Airport',
        'city': 'The Bight Settlements',
    },
    {
        'code': 'PLU',
        'name': 'Pampulha Airport',
        'city': 'Belo Horizonte',
    },
    {
        'code': 'PLW',
        'name': 'Mutiara Airport',
        'city': 'Palu',
    },
    {
        'code': 'PLX',
        'name': 'Semipalatinsk',
        'city': 'Semipalatinsk',
    },
    {
        'code': 'PLZ',
        'name': 'H F Verwoerd Airport',
        'city': 'Port Elizabeth',
    },
    {
        'code': 'PMA',
        'name': 'Pemba Airport',
        'city': 'Pemba',
    },
    {
        'code': 'PMC',
        'name': 'El Tepual International Airport',
        'city': 'Los Quemas',
    },
    {
        'code': 'PMD',
        'name': 'Air Force Plant Nr 42 Palmdale',
        'city': 'Palmdale',
    },
    {
        'code': 'PME',
        'name': 'Portsmouth Airport',
        'city': 'Portsmouth',
    },
    {
        'code': 'PMF',
        'name': 'Parma Airport',
        'city': 'Parma',
    },
    {
        'code': 'PMI',
        'name': 'Palma de Mallorca Airport',
        'city': 'Palma',
    },
    {
        'code': 'PML',
        'name': 'Port Moller',
        'city': 'Port Moller',
    },
    {
        'code': 'PMO',
        'name': 'Palermo Airport',
        'city': 'Cinisi',
    },
    {
        'code': 'PMR',
        'name': 'Palmerston North Airport',
        'city': 'Palmerston North',
    },
    {
        'code': 'PMV',
        'name': 'Del Caribe International Airport',
        'city': 'Pampatar',
    },
    {
        'code': 'PMW',
        'name': 'Palmas Airport',
        'city': 'Palmas',
    },
    {
        'code': 'PMY',
        'name': 'El Tehuelche Airport',
        'city': 'Puerto Madryn',
    },
    {
        'code': 'PMZ',
        'name': 'Palmar Sur Airport',
        'city': 'Palmar Sur',
    },
    {
        'code': 'PNA',
        'name': 'Pamplona Airport',
        'city': 'No\u00e1in',
    },
    {
        'code': 'PND',
        'name': 'Punta Gorda Airport',
        'city': 'Punta Gorda',
    },
    {
        'code': 'PNH',
        'name': 'Pochentong Airport',
        'city': 'Phnom Penh',
    },
    {
        'code': 'PNI',
        'name': 'Pohnpei International Airport',
        'city': 'Palikir',
    },
    {
        'code': 'PNK',
        'name': 'Supadio Airport',
        'city': 'Pontianak',
    },
    {
        'code': 'PNL',
        'name': 'Pantelleria Airport',
        'city': 'Pantelleria',
    },
    {
        'code': 'PNP',
        'name': 'Girua Airport',
        'city': 'Popondetta',
    },
    {
        'code': 'PNQ',
        'name': 'Pune Airport',
        'city': 'Pune',
    },
    {
        'code': 'PNR',
        'name': 'Pointe Noire Airport',
        'city': 'Pointe-Noire',
    },
    {
        'code': 'PNS',
        'name': 'Pensacola Regional Airport',
        'city': 'Pensacola',
    },
    {
        'code': 'PNZ',
        'name': 'Senador Nilo Coelho Airport',
        'city': 'Petrolina',
    },
    {
        'code': 'POA',
        'name': 'Salgado Filho International Airport',
        'city': 'Porto Alegre',
    },
    {
        'code': 'POG',
        'name': 'Port Gentil Airport',
        'city': 'Port-Gentil',
    },
    {
        'code': 'POL',
        'name': 'Pemba Airport',
        'city': 'Pemba',
    },
    {
        'code': 'POM',
        'name': 'Port Moresby International Airport',
        'city': 'Port Moresby',
    },
    {
        'code': 'POP',
        'name': 'Puerto Plata International Airport',
        'city': 'San Felipe de Puerto Plata',
    },
    {
        'code': 'POR',
        'name': 'Pori Airport',
        'city': 'Pori',
    },
    {
        'code': 'POS',
        'name': 'Piarco Airport',
        'city': 'Trinidad',
    },
    {
        'code': 'POZ',
        'name': 'Lawica Airport',
        'city': 'Poznan',
    },
    {
        'code': 'PPB',
        'name': 'Presidente Prudente Airport',
        'city': 'Presidente Prudente',
    },
    {
        'code': 'PPE',
        'name': 'Punta Penasco Airport',
        'city': 'Pto. Penasco',
    },
    {
        'code': 'PPG',
        'name': 'Pago Pago International Airport',
        'city': 'Pago Pago',
    },
    {
        'code': 'PPK',
        'name': 'Petropavlovsk',
        'city': 'Petropavlovsk',
    },
    {
        'code': 'PPL',
        'name': 'Nepal',
        'city': 'Phaplu',
    },
    {
        'code': 'PPN',
        'name': 'Guillermo Leon Valencia Airport',
        'city': 'Popay\u00e1n',
    },
    {
        'code': 'PPP',
        'name': 'Proserpine Aerodrome',
        'city': 'Brandy Creek',
    },
    {
        'code': 'PPS',
        'name': 'Puerto Princesa International Airport',
        'city': 'Puerto Princesa',
    },
    {
        'code': 'PPT',
        'name': 'Tahiti Faaa Airport',
        'city': 'Papeete',
    },
    {
        'code': 'PPV',
        'name': 'Alaska',
        'city': 'Port Protection',
    },
    {
        'code': 'PQC',
        'name': 'Duong Dong Airport',
        'city': 'Kien Giang',
    },
    {
        'code': 'PQI',
        'name': 'Northern Maine Regional Airport',
        'city': 'Presque Isle',
    },
    {
        'code': 'PQQ',
        'name': 'Port Macquarie Airport',
        'city': 'Port Macquarie',
    },
    {
        'code': 'PQS',
        'name': 'Pilot Station',
        'city': 'Pilot Station',
    },
    {
        'code': 'PRC',
        'name': 'Ernest A Love Field Airport',
        'city': 'Prescott',
    },
    {
        'code': 'PRG',
        'name': 'Prague Ruzyne Airport',
        'city': 'Prague 6',
    },
    {
        'code': 'PRI',
        'name': 'Praslin Airport',
        'city': 'Praslin Island',
    },
    {
        'code': 'PRN',
        'name': 'Pristina Airport',
        'city': 'Prishtina',
    },
    {
        'code': 'PSA',
        'name': 'Pisa Airport',
        'city': 'Pisa',
    },
    {
        'code': 'PSC',
        'name': 'Tri Cities Airport',
        'city': 'Pasco',
    },
    {
        'code': 'PSE',
        'name': 'Mercedita Airport',
        'city': 'Coto Laurel',
    },
    {
        'code': 'PSG',
        'name': 'Petersburg James A Johnson Airport',
        'city': 'Petersburg',
    },
    {
        'code': 'PSO',
        'name': 'Antonio Narino Airport',
        'city': 'Chachag\u00fc\u00ed',
    },
    {
        'code': 'PSP',
        'name': 'Palm Springs International Airport',
        'city': 'Palm Springs',
    },
    {
        'code': 'PSR',
        'name': 'Pescara Airport',
        'city': 'Pescara',
    },
    {
        'code': 'PSS',
        'name': 'Posadas Airport',
        'city': 'Posadas',
    },
    {
        'code': 'PSZ',
        'name': 'Salvador Ogaya Gutierrez Airport',
        'city': 'Puerto Su\u00e1rez',
    },
    {
        'code': 'PTA',
        'name': 'Port Alsworth',
        'city': 'Port Alsworth',
    },
    {
        'code': 'PTF',
        'name': 'Malololailai Airport',
        'city': 'Malololailai',
    },
    {
        'code': 'PTG',
        'name': 'Pietersburg Municipal Airport',
        'city': 'Pietersburg',
    },
    {
        'code': 'PTH',
        'name': 'Port Heiden Airport',
        'city': 'Port Heiden',
    },
    {
        'code': 'PTP',
        'name': 'Le Raizet Airport',
        'city': 'Les Abymes',
    },
    {
        'code': 'PTU',
        'name': 'Platinum',
        'city': 'Platinum',
    },
    {
        'code': 'PTY',
        'name': 'Tocumen International Airport',
        'city': 'Tocumen',
    },
    {
        'code': 'PUB',
        'name': 'Pueblo Memorial Airport',
        'city': 'Pueblo',
    },
    {
        'code': 'PUF',
        'name': 'Pont Long Uzein Airport',
        'city': 'Lescar',
    },
    {
        'code': 'PUJ',
        'name': 'Punta Cana Airport',
        'city': 'Salvale\u00f3n de Hig\u00fcey',
    },
    {
        'code': 'PUK',
        'name': 'Pukarua',
        'city': 'Pukarua',
    },
    {
        'code': 'PUQ',
        'name': 'Carlos Ibanez de Campo International Airport',
        'city': 'Punta Arenas',
    },
    {
        'code': 'PUS',
        'name': 'Kimhae International Airport',
        'city': 'Busan',
    },
    {
        'code': 'PUU',
        'name': 'Puerto Asis Airport',
        'city': 'Puerto As\u00eds',
    },
    {
        'code': 'PUW',
        'name': 'Pullman-Moscow Regional Airport',
        'city': 'Pullman',
    },
    {
        'code': 'PUY',
        'name': 'Pula Airport',
        'city': 'Pluj',
    },
    {
        'code': 'PVA',
        'name': 'Providencia Island Airport',
        'city': 'San Andr\u00e9s',
    },
    {
        'code': 'PVC',
        'name': 'Provincetown Municipal Airport',
        'city': 'Provincetown',
    },
    {
        'code': 'PVD',
        'name': 'Theodore Francis Green State Airport',
        'city': 'Warwick',
    },
    {
        'code': 'PVG',
        'name': 'Pudong International Airport',
        'city': 'Huinan',
    },
    {
        'code': 'PVH',
        'name': 'Governador Jorge Teixeira de Oliveira Internatio',
        'city': 'P\u00f4rto Velho',
    },
    {
        'code': 'PVK',
        'name': 'Preveza Airport',
        'city': 'Paliambela',
    },
    {
        'code': 'PVR',
        'name': 'Lic Gustavo Diaz Ordaz International Airport',
        'city': 'Puerto Vallarta',
    },
    {
        'code': 'PWE',
        'name': 'Under Construction Pevek Airport',
        'city': 'Anadyr\'',
    },
    {
        'code': 'PWK',
        'name': 'Pal Waukee Airport',
        'city': 'Wheeling',
    },
    {
        'code': 'PWM',
        'name': 'Jetport International Airport',
        'city': 'Portland',
    },
    {
        'code': 'PWQ',
        'name': 'Pavlodar South Airport',
        'city': 'Pavlodar',
    },
    {
        'code': 'PXM',
        'name': 'Puerto Escondido Airport',
        'city': 'San Pedro Juchatengo',
    },
    {
        'code': 'PXO',
        'name': 'Porto Santo Airport',
        'city': 'Porto Santo',
    },
    {
        'code': 'PXU',
        'name': 'Pleiku Area Airport',
        'city': 'Gia Lai',
    },
    {
        'code': 'PYH',
        'name': 'Puerto Ayacucho Airport',
        'city': 'Maroa',
    },
    {
        'code': 'PYJ',
        'name': 'Russia',
        'city': 'Polyarnyj',
    },
    {
        'code': 'PZB',
        'name': 'Pietermaritzburg Airport',
        'city': 'Pietermaritzburg',
    },
    {
        'code': 'PZE',
        'name': 'Penzance Heliport',
        'city': 'Penzance',
    },
    {
        'code': 'PZI',
        'name': 'Pan Zhi Hua Bao AnYing',
        'city': 'Pan Zhi Hua',
    },
    {
        'code': 'PZO',
        'name': 'Puerto Ordaz Airport',
        'city': 'Ciudad Guayana',
    },
    {
        'code': 'PZU',
        'name': 'Port Sudan International Airport',
        'city': 'Port Sudan',
    },
    {
        'code': 'QBC',
        'name': 'Bella Coola Airport',
        'city': 'Masset',
    },
    {
        'code': 'QDH',
        'name': 'Ashford International Rail Station',
        'city': 'Ashford',
    },
    {
        'code': 'QDU',
        'name': 'Germany',
        'city': 'Dusseldorf',
    },
    {
        'code': 'QFB',
        'name': 'Freiburg Hauptbahnhof',
        'city': 'Freiburg',
    },
    {
        'code': 'QFZ',
        'name': 'Saarbruecken Rail Station',
        'city': 'Sarrebruck',
    },
    {
        'code': 'QJY',
        'name': 'Cheju International Airport',
        'city': 'Jeju-Si',
    },
    {
        'code': 'QJZ',
        'name': 'France',
        'city': 'Nantes',
    },
    {
        'code': 'QKL',
        'name': 'Koeln Hauptbahnhof',
        'city': 'Cologne',
    },
    {
        'code': 'QOW',
        'name': 'Owerri',
        'city': 'Owerri',
    },
    {
        'code': 'QQD',
        'name': 'Dover Rail Station',
        'city': 'Dover',
    },
    {
        'code': 'QQH',
        'name': 'Harwich Rail Station',
        'city': 'Harwich',
    },
    {
        'code': 'QQK',
        'name': 'England',
        'city': 'London',
    },
    {
        'code': 'QQM',
        'name': 'Manchester International Airport',
        'city': 'Manchester',
    },
    {
        'code': 'QQN',
        'name': 'Birmingham International Airport',
        'city': 'Birmingham',
    },
    {
        'code': 'QQP',
        'name': 'Paddington Station',
        'city': 'London',
    },
    {
        'code': 'QQS',
        'name': 'St Pancras International',
        'city': 'Britrail Rail Zone S',
    },
    {
        'code': 'QQU',
        'name': 'Birmingham International Airport',
        'city': 'London',
    },
    {
        'code': 'QQW',
        'name': 'Waterloo Railway Station',
        'city': 'London',
    },
    {
        'code': 'QQX',
        'name': 'Bath Rail Service',
        'city': 'Bath',
    },
    {
        'code': 'QQY',
        'name': 'Birmingham International Airport',
        'city': 'York',
    },
    {
        'code': 'QRH',
        'name': 'Rotterdam Airport',
        'city': 'Rotterdam',
    },
    {
        'code': 'QRO',
        'name': 'Queretaro Airport',
        'city': 'Queretaro',
    },
    {
        'code': 'QRW',
        'name': 'Delta',
        'city': 'Warri',
    },
    {
        'code': 'QSF',
        'name': 'Setif',
        'city': 'Setif',
    },
    {
        'code': 'QUL',
        'name': 'Qulin',
        'city': 'Qulin',
    },
    {
        'code': 'QWB',
        'name': 'Afonso Pena International Airport',
        'city': 'Sao Jose dos Pinhais',
    },
    {
        'code': 'QXB',
        'name': 'Aix Les Milles Airport',
        'city': 'Aix-les-milles',
    },
    {
        'code': 'QXG',
        'name': 'Pays de la Loire',
        'city': 'Angers',
    },
    {
        'code': 'QYU',
        'name': 'Gavleborg',
        'city': 'Gefle',
    },
    {
        'code': 'QYX',
        'name': 'Uppsala Station',
        'city': 'Uppsala',
    },
    {
        'code': 'RAB',
        'name': 'Rabaul Airport',
        'city': 'Rabaul',
    },
    {
        'code': 'RAE',
        'name': 'Arar Airport',
        'city': 'Arar',
    },
    {
        'code': 'RAH',
        'name': 'Rafha Airport',
        'city': 'Rafha',
    },
    {
        'code': 'RAI',
        'name': 'Francisco Mendes Airport',
        'city': 'Praia',
    },
    {
        'code': 'RAJ',
        'name': 'Rajkot Airport',
        'city': 'Rajkot',
    },
    {
        'code': 'RAK',
        'name': 'Menara Airport',
        'city': 'Marrakesh',
    },
    {
        'code': 'RAO',
        'name': 'Leite Lopes Airport',
        'city': 'Ribeir\u00e3o Pr\u00eato',
    },
    {
        'code': 'RAP',
        'name': 'Rapid City Regional Airport',
        'city': 'Rapid City',
    },
    {
        'code': 'RAR',
        'name': 'Rarotonga International Airport',
        'city': 'Avarua',
    },
    {
        'code': 'RAS',
        'name': 'Rasht Airport',
        'city': 'Rasht',
    },
    {
        'code': 'RBA',
        'name': 'Sale Airport',
        'city': 'Rabat',
    },
    {
        'code': 'RBH',
        'name': 'Brooks Lodge',
        'city': 'Brooks Lodge',
    },
    {
        'code': 'RBQ',
        'name': 'Rurrenabaque Airport',
        'city': 'Rurrenabaque',
    },
    {
        'code': 'RBR',
        'name': 'Presidente Medici International Airport',
        'city': 'Rio Branco',
    },
    {
        'code': 'RBV',
        'name': 'Ramata',
        'city': 'Ramata',
    },
    {
        'code': 'RBX',
        'name': 'Roundup Airport',
        'city': 'Roundup',
    },
    {
        'code': 'RBY',
        'name': 'Ruby Airport',
        'city': 'Ruby',
    },
    {
        'code': 'RCB',
        'name': 'Richards Bay Airport',
        'city': 'Empangeni',
    },
    {
        'code': 'RCE',
        'name': 'Roche Harbor Airport',
        'city': 'Friday Harbor',
    },
    {
        'code': 'RCH',
        'name': 'Almirante Padilla Airport',
        'city': 'R\u00edohacha',
    },
    {
        'code': 'RCL',
        'name': 'Redcliffe',
        'city': 'Redcliffe',
    },
    {
        'code': 'RCM',
        'name': 'Richmond Aerodrome',
        'city': 'Bellfield',
    },
    {
        'code': 'RCP',
        'name': 'Cinder River',
        'city': 'Cinder River',
    },
    {
        'code': 'RDB',
        'name': 'Red Dog',
        'city': 'Red Dog',
    },
    {
        'code': 'RDD',
        'name': 'Redding Municipal Airport',
        'city': 'Redding',
    },
    {
        'code': 'RDM',
        'name': 'Roberts Field Airport',
        'city': 'Redmond',
    },
    {
        'code': 'RDN',
        'name': 'Malaysia',
        'city': 'Redang',
    },
    {
        'code': 'RDU',
        'name': 'Durham International Airport',
        'city': 'Raleigh\/Durham',
    },
    {
        'code': 'RDV',
        'name': 'Red Devil',
        'city': 'Red Devil',
    },
    {
        'code': 'RDZ',
        'name': 'Marcillac Airport',
        'city': 'Marcillac',
    },
    {
        'code': 'REA',
        'name': 'Reao',
        'city': 'Reao',
    },
    {
        'code': 'REC',
        'name': 'Gilberto Freyre International Airport',
        'city': 'Recife',
    },
    {
        'code': 'REG',
        'name': 'Reggio Calabria Airport',
        'city': 'Reggio di Calabria',
    },
    {
        'code': 'REL',
        'name': 'Trelew Almirante Zar Airport',
        'city': 'Trelew',
    },
    {
        'code': 'REN',
        'name': 'Orenburg East Airport',
        'city': 'Orenburg',
    },
    {
        'code': 'REP',
        'name': 'Siem Reap Airport',
        'city': 'Siemrap',
    },
    {
        'code': 'RES',
        'name': 'Resistencia Airport',
        'city': 'Makall\u00e9',
    },
    {
        'code': 'REU',
        'name': 'Reus Airport',
        'city': 'Reus',
    },
    {
        'code': 'REX',
        'name': 'Reynosa International Airport',
        'city': 'Reynosa',
    },
    {
        'code': 'RFD',
        'name': 'Greater Rockford Airport',
        'city': 'Rockford',
    },
    {
        'code': 'RFP',
        'name': 'Raiatea Island Airport',
        'city': 'Papeete',
    },
    {
        'code': 'RGA',
        'name': 'Rio Grande Airport',
        'city': 'R\u00edo Grande',
    },
    {
        'code': 'RGI',
        'name': 'Rangiroa Airport',
        'city': 'Papeete',
    },
    {
        'code': 'RGL',
        'name': 'Rio Gallegos Airport',
        'city': 'R\u00edo Gallegos',
    },
    {
        'code': 'RGN',
        'name': 'Mingaladon Airport',
        'city': 'Insein',
    },
    {
        'code': 'RHI',
        'name': 'Rhinelander-Oneida County Airport',
        'city': 'Rhinelander',
    },
    {
        'code': 'RHO',
        'name': 'Paradisi Airport',
        'city': 'Rodhos',
    },
    {
        'code': 'RIA',
        'name': 'Santa Maria Airport',
        'city': 'Santa Maria',
    },
    {
        'code': 'RIB',
        'name': 'Gen. Buech Airport',
        'city': 'Riberalta',
    },
    {
        'code': 'RIC',
        'name': 'Richmond International Airport',
        'city': 'Richmond',
    },
    {
        'code': 'RIG',
        'name': 'Rio Grande Airport',
        'city': 'Rio Grande',
    },
    {
        'code': 'RIS',
        'name': 'Rishiri Airport',
        'city': 'Rishirifuji-cho',
    },
    {
        'code': 'RIV',
        'name': 'March Air Force Base',
        'city': 'Alessandro',
    },
    {
        'code': 'RIW',
        'name': 'Riverton Regional Airport',
        'city': 'Riverton',
    },
    {
        'code': 'RIX',
        'name': 'Riga Airport',
        'city': 'Marupe',
    },
    {
        'code': 'RIY',
        'name': 'Riyan Airport',
        'city': 'Shuhayr',
    },
    {
        'code': 'RJA',
        'name': 'Rajahmundry Airport',
        'city': 'Kapavaram',
    },
    {
        'code': 'RJK',
        'name': 'Rijeka Krk Airport',
        'city': 'Rijeka',
    },
    {
        'code': 'RJL',
        'name': 'Agoncillo',
        'city': 'Logrono',
    },
    {
        'code': 'RJN',
        'name': 'Kerman',
        'city': 'Rafsanjan',
    },
    {
        'code': 'RKD',
        'name': 'Knox County Regional Airport',
        'city': 'Owls Head',
    },
    {
        'code': 'RKS',
        'name': 'Rock Springs-Sweetwater County Airport',
        'city': 'Rock Springs',
    },
    {
        'code': 'RKT',
        'name': 'Ras Al Khaimah International Airport',
        'city': 'Ras Al Khaimah',
    },
    {
        'code': 'RKV',
        'name': 'Reykjavik Airport',
        'city': 'Reykjavik',
    },
    {
        'code': 'RLG',
        'name': 'Rostock-laage',
        'city': 'Rostock-laage',
    },
    {
        'code': 'RMA',
        'name': 'Roma Aerodrome',
        'city': 'Blythdale',
    },
    {
        'code': 'RMF',
        'name': 'Marsa Alam International',
        'city': 'Marsa Alam',
    },
    {
        'code': 'RMI',
        'name': 'Rimini Airport',
        'city': 'Rimini',
    },
    {
        'code': 'RMP',
        'name': 'Rampart',
        'city': 'Rampart',
    },
    {
        'code': 'RMQ',
        'name': 'Taiwan',
        'city': 'Taichung',
    },
    {
        'code': 'RMT',
        'name': 'Remada Airport',
        'city': 'Tatawin',
    },
    {
        'code': 'RNA',
        'name': 'Ulawa Airport',
        'city': 'Arona',
    },
    {
        'code': 'RNB',
        'name': 'Ronneby Airport',
        'city': 'Kallinge',
    },
    {
        'code': 'RNL',
        'name': 'Rennell',
        'city': 'Rennell',
    },
    {
        'code': 'RNN',
        'name': 'Bornholm Airport',
        'city': 'Ronne',
    },
    {
        'code': 'RNO',
        'name': 'Reno-Tahoe International Airport',
        'city': 'Reno',
    },
    {
        'code': 'RNP',
        'name': 'Rongelap Island',
        'city': 'Rongelap Island',
    },
    {
        'code': 'RNS',
        'name': 'St Jacques Airport',
        'city': 'St-Jacques',
    },
    {
        'code': 'ROA',
        'name': 'Roanoke Regional Airport-Woodrum Field',
        'city': 'Roanoke',
    },
    {
        'code': 'ROB',
        'name': 'Roberts International Airport',
        'city': 'Harbelville',
    },
    {
        'code': 'ROC',
        'name': 'Greater Rochester International Airport',
        'city': 'Rochester',
    },
    {
        'code': 'ROI',
        'name': 'Mueang Poi Et',
        'city': 'Roi Et',
    },
    {
        'code': 'ROK',
        'name': 'Rockhampton Airport',
        'city': 'Rockhampton',
    },
    {
        'code': 'ROO',
        'name': 'Rondonopolis Airport',
        'city': 'Rondon\u00f3polis',
    },
    {
        'code': 'ROP',
        'name': 'Rota International Airport',
        'city': 'Rota',
    },
    {
        'code': 'ROR',
        'name': 'Koror Airport',
        'city': 'Koror',
    },
    {
        'code': 'ROS',
        'name': 'Rosario Airport',
        'city': 'Rosario',
    },
    {
        'code': 'ROT',
        'name': 'Rotorua Airport',
        'city': 'Rotorua',
    },
    {
        'code': 'ROV',
        'name': 'Rostov East Airport',
        'city': 'Taganrog',
    },
    {
        'code': 'ROW',
        'name': 'Roswell Industrial Air Center',
        'city': 'Roswell',
    },
    {
        'code': 'RPR',
        'name': 'Raipur Airport',
        'city': 'Banarsi',
    },
    {
        'code': 'RRG',
        'name': 'Mauritius',
        'city': 'Rodrigues Is',
    },
    {
        'code': 'RRS',
        'name': 'Roeros Airport',
        'city': 'Roros',
    },
    {
        'code': 'RSA',
        'name': 'Santa Rosa Airport',
        'city': 'Santa Rosa',
    },
    {
        'code': 'RSD',
        'name': 'Rock Sound Airport',
        'city': 'Rock Sound',
    },
    {
        'code': 'RSH',
        'name': 'Russian',
        'city': 'Russian Mission',
    },
    {
        'code': 'RSJ',
        'name': 'Rosario Seaplane Base',
        'city': 'Olga',
    },
    {
        'code': 'RST',
        'name': 'Rochester International Airport',
        'city': 'Rochester',
    },
    {
        'code': 'RSU',
        'name': 'Yeosu Airport',
        'city': 'Yeosu-Si',
    },
    {
        'code': 'RSW',
        'name': 'Southwest Florida International Airport',
        'city': 'Fort Myers',
    },
    {
        'code': 'RTA',
        'name': 'Rotuma',
        'city': 'Rotuma Island',
    },
    {
        'code': 'RTB',
        'name': 'Roatan Island Airport',
        'city': 'Roat\u00e1n',
    },
    {
        'code': 'RTG',
        'name': 'Satartacik Airport',
        'city': 'Ruteng',
    },
    {
        'code': 'RTM',
        'name': 'Rotterdam Airport',
        'city': 'Rotterdam',
    },
    {
        'code': 'RTW',
        'name': 'Saratov Airport',
        'city': 'Saratov',
    },
    {
        'code': 'RUA',
        'name': 'Arua',
        'city': 'Arua',
    },
    {
        'code': 'RUD',
        'name': 'Oslo',
        'city': 'Oslo',
    },
    {
        'code': 'RUH',
        'name': 'King Khalid International Airport',
        'city': 'Riyadh',
    },
    {
        'code': 'RUK',
        'name': 'Nepal',
        'city': 'Rukumkot',
    },
    {
        'code': 'RUM',
        'name': 'Rumjatar Airport',
        'city': 'Rumjatar',
    },
    {
        'code': 'RUN',
        'name': 'Saint Denis Gillot Airport',
        'city': 'Sainte-Marie',
    },
    {
        'code': 'RUR',
        'name': 'Rurutu',
        'city': 'Rurutu',
    },
    {
        'code': 'RUT',
        'name': 'Rutland State Airport',
        'city': 'North Clarendon',
    },
    {
        'code': 'RVA',
        'name': 'Farafangana',
        'city': 'Farafangana',
    },
    {
        'code': 'RVE',
        'name': 'Saravena El Eden Airport',
        'city': 'Saravena',
    },
    {
        'code': 'RVK',
        'name': 'Ryumsjoen Airport',
        'city': 'Rorvik',
    },
    {
        'code': 'RVN',
        'name': 'Rovaniemi Airport',
        'city': 'Saarenkyl\u00e4',
    },
    {
        'code': 'RVT',
        'name': 'Western Australia',
        'city': 'Ravensthorpe',
    },
    {
        'code': 'RVV',
        'name': 'Raivavae Airport',
        'city': 'Rairua',
    },
    {
        'code': 'RXS',
        'name': 'Roxas Airport',
        'city': 'Ivisan',
    },
    {
        'code': 'RYG',
        'name': 'Moss Airport',
        'city': 'Rygge',
    },
    {
        'code': 'RYK',
        'name': 'Rahim Yar Khan',
        'city': 'Rahim Yar Khan',
    },
    {
        'code': 'RZE',
        'name': 'Jasionka Airport',
        'city': 'Trzebownisko',
    },
    {
        'code': 'RZP',
        'name': 'Philippines',
        'city': 'Taytay Sandoval',
    },
    {
        'code': 'RZR',
        'name': 'Ramsar Airport',
        'city': 'Ramsar',
    },
    {
        'code': 'RZS',
        'name': 'Sawan',
        'city': 'Sawan',
    },
    {
        'code': 'SAB',
        'name': 'Yrausquin Airport',
        'city': 'Yrausquin',
    },
    {
        'code': 'SAH',
        'name': 'Sanaa International Airport',
        'city': 'Ar Raudha',
    },
    {
        'code': 'SAL',
        'name': 'El Salvador International Airport',
        'city': 'San Luis',
    },
    {
        'code': 'SAN',
        'name': 'San Diego International Airport',
        'city': 'San Diego',
    },
    {
        'code': 'SAP',
        'name': 'La Mesa International Airport',
        'city': 'San Pedro Sula',
    },
    {
        'code': 'SAQ',
        'name': 'San Andros Municipal Airport',
        'city': 'San Andros',
    },
    {
        'code': 'SAT',
        'name': 'San Antonio International Airport',
        'city': 'San Antonio',
    },
    {
        'code': 'SAV',
        'name': 'Savannah International Airport',
        'city': 'Savannah',
    },
    {
        'code': 'SAW',
        'name': 'Istanbul Sabiha Gokcen Airport',
        'city': 'Umraniye',
    },
    {
        'code': 'SBA',
        'name': 'Santa Barbara Municipal Airport',
        'city': 'Goleta',
    },
    {
        'code': 'SBH',
        'name': 'Gustavia Airport',
        'city': 'Gustavia',
    },
    {
        'code': 'SBL',
        'name': 'Santa Ana de Yacuma Airport',
        'city': 'Santa Ana',
    },
    {
        'code': 'SBN',
        'name': 'South Bend Regional Airport',
        'city': 'South Bend',
    },
    {
        'code': 'SBP',
        'name': 'San Luis Obispo County Airport',
        'city': 'San Luis Obispo',
    },
    {
        'code': 'SBR',
        'name': 'Saibai Island',
        'city': 'Saibai Island',
    },
    {
        'code': 'SBW',
        'name': 'Sibu Airport',
        'city': 'Sibu',
    },
    {
        'code': 'SBY',
        'name': 'Salisbury-Wicomico County Regional Airport',
        'city': 'Salisbury',
    },
    {
        'code': 'SBZ',
        'name': 'Turnisor Airport',
        'city': 'Sibiu',
    },
    {
        'code': 'SCC',
        'name': 'Deadhorse Airport',
        'city': 'Prudhoe Bay',
    },
    {
        'code': 'SCE',
        'name': 'University Park Airport',
        'city': 'State College',
    },
    {
        'code': 'SCK',
        'name': 'Stockton Metropolitan Airport',
        'city': 'Stockton',
    },
    {
        'code': 'SCL',
        'name': 'Arturo Merino Benitez International Airport',
        'city': 'Lo Amor',
    },
    {
        'code': 'SCM',
        'name': 'Scammon Bay',
        'city': 'Scammon Bay',
    },
    {
        'code': 'SCN',
        'name': 'Saarbrucken Airport',
        'city': 'Sarrebruck',
    },
    {
        'code': 'SCO',
        'name': 'Aktau',
        'city': 'Aktau',
    },
    {
        'code': 'SCQ',
        'name': 'Santiago Airport',
        'city': 'Santiago',
    },
    {
        'code': 'SCT',
        'name': 'Socotra',
        'city': 'Socotra',
    },
    {
        'code': 'SCU',
        'name': 'Antonio Maceo Airport',
        'city': 'Antonio Maceo',
    },
    {
        'code': 'SCV',
        'name': 'Suceava Salcea Airport',
        'city': 'Suceava Salcea',
    },
    {
        'code': 'SCW',
        'name': 'Russia',
        'city': 'Syktyvkar',
    },
    {
        'code': 'SCX',
        'name': 'Salina Cruz',
        'city': 'Salina Cruz',
    },
    {
        'code': 'SCY',
        'name': 'San Cristobal Airport',
        'city': 'Puerto Baquerizo Moreno',
    },
    {
        'code': 'SCZ',
        'name': 'Santa Cruz Is',
        'city': 'Santa Cruz Is',
    },
    {
        'code': 'SDD',
        'name': 'Lubango Airport',
        'city': 'Lubango',
    },
    {
        'code': 'SDE',
        'name': 'Santiago del Estero Airport',
        'city': 'Fr\u00edas',
    },
    {
        'code': 'SDF',
        'name': 'Louisville International Airport',
        'city': 'Louisville',
    },
    {
        'code': 'SDG',
        'name': 'Sanandaj Airport',
        'city': 'Sanandaj',
    },
    {
        'code': 'SDJ',
        'name': 'Sendai Airport',
        'city': 'Natori-shi',
    },
    {
        'code': 'SDK',
        'name': 'Sandakan Airport',
        'city': 'Sandakan',
    },
    {
        'code': 'SDL',
        'name': 'Sundsvall Harnosand Airport',
        'city': 'Bergeforsen',
    },
    {
        'code': 'SDN',
        'name': 'Sandane Airport',
        'city': 'Sandene',
    },
    {
        'code': 'SDP',
        'name': 'Sand Point Airport',
        'city': 'Sand Point',
    },
    {
        'code': 'SDQ',
        'name': 'De Las Americas International Airport',
        'city': 'Santo Domingo',
    },
    {
        'code': 'SDR',
        'name': 'Santander Airport',
        'city': 'Santander',
    },
    {
        'code': 'SDT',
        'name': 'Saidu Sharif Airport',
        'city': 'Saidu',
    },
    {
        'code': 'SDU',
        'name': 'Santos Dumont Airport',
        'city': 'Rio de Janeiro',
    },
    {
        'code': 'SDV',
        'name': 'Sde Dov Airport',
        'city': 'Tel Aviv Yafo',
    },
    {
        'code': 'SDY',
        'name': 'Sidney Richland Municipal Airport',
        'city': 'Sidney',
    },
    {
        'code': 'SEA',
        'name': 'Tacoma International Airport',
        'city': 'Seattle',
    },
    {
        'code': 'SEB',
        'name': 'Sebha Airport',
        'city': 'Sabha',
    },
    {
        'code': 'SEN',
        'name': 'Southend Airport',
        'city': 'Southend on Sea',
    },
    {
        'code': 'SEW',
        'name': 'Siwa',
        'city': 'Siwa',
    },
    {
        'code': 'SEZ',
        'name': 'Seychelles International Airport',
        'city': 'Victoria',
    },
    {
        'code': 'SFA',
        'name': 'El Maou Airport',
        'city': 'Safaqis',
    },
    {
        'code': 'SFB',
        'name': 'Orlando Sanford International Airport',
        'city': 'Sanford',
    },
    {
        'code': 'SFD',
        'name': 'San Fernando de Apure Airport',
        'city': 'San Fernando de Apure',
    },
    {
        'code': 'SFE',
        'name': 'San Fernando Airport',
        'city': 'San Fernando',
    },
    {
        'code': 'SFG',
        'name': 'Grand Case-Esperance Airport',
        'city': 'Case-Esperance',
    },
    {
        'code': 'SFJ',
        'name': 'Kangerlussuaq',
        'city': 'Kangerlussuaq',
    },
    {
        'code': 'SFL',
        'name': 'Sao Filipe',
        'city': 'Sao Filipe',
    },
    {
        'code': 'SFN',
        'name': 'Sauce Viejo Airport',
        'city': 'Santa Fe',
    },
    {
        'code': 'SFO',
        'name': 'San Francisco International Airport',
        'city': 'San Francisco',
    },
    {
        'code': 'SFT',
        'name': 'Skelleftea Airport',
        'city': 'Skelleftea',
    },
    {
        'code': 'SGC',
        'name': 'Surgut North Airport',
        'city': 'Khanty-Mansiysk',
    },
    {
        'code': 'SGD',
        'name': 'Sonderborg Airport',
        'city': 'Sonderborg',
    },
    {
        'code': 'SGF',
        'name': 'Springfield Regional Airport',
        'city': 'Springfield',
    },
    {
        'code': 'SGN',
        'name': 'Tan Son Nhut Airport',
        'city': 'Ho Chi Minh City',
    },
    {
        'code': 'SGO',
        'name': 'St George',
        'city': 'St George',
    },
    {
        'code': 'SGU',
        'name': 'St George Municipal Airport',
        'city': 'St. George',
    },
    {
        'code': 'SGX',
        'name': 'Ruvuma',
        'city': 'Songea',
    },
    {
        'code': 'SGY',
        'name': 'Skagway Airport',
        'city': 'Skagway',
    },
    {
        'code': 'SHA',
        'name': 'Hongqiao Airport',
        'city': 'Shanghai',
    },
    {
        'code': 'SHB',
        'name': 'Nakashibetsu Airport',
        'city': 'Nakashibetsu-cho',
    },
    {
        'code': 'SHC',
        'name': 'Indaselassie',
        'city': 'Indaselassie',
    },
    {
        'code': 'SHD',
        'name': 'Shenandoah Valley Regional Airport',
        'city': 'Weyers Cave',
    },
    {
        'code': 'SHE',
        'name': 'Dongta Airport',
        'city': 'Shenyang',
    },
    {
        'code': 'SHG',
        'name': 'Shungnak Airport',
        'city': 'Shungnak',
    },
    {
        'code': 'SHH',
        'name': 'Shishmaref',
        'city': 'Shishmaref',
    },
    {
        'code': 'SHJ',
        'name': 'Sharjah International Airport',
        'city': 'Ajman',
    },
    {
        'code': 'SHL',
        'name': 'Shillong',
        'city': 'Shillong',
    },
    {
        'code': 'SHM',
        'name': 'Nanki-Shirahama Airport',
        'city': 'Shirahama-cho',
    },
    {
        'code': 'SHP',
        'name': 'Qinhuangdao',
        'city': 'Qinhuangdao',
    },
    {
        'code': 'SHR',
        'name': 'Sheridan County Airport',
        'city': 'Sheridan',
    },
    {
        'code': 'SHV',
        'name': 'Shreveport Regional Airport',
        'city': 'Shreveport',
    },
    {
        'code': 'SHW',
        'name': 'Sharurah Airport',
        'city': 'As-Saraura',
    },
    {
        'code': 'SHX',
        'name': 'Shageluk',
        'city': 'Shageluk',
    },
    {
        'code': 'SHY',
        'name': 'Shinyanga',
        'city': 'Shinyanga',
    },
    {
        'code': 'SIA',
        'name': 'Xiguan Airport',
        'city': 'Xi\'an',
    },
    {
        'code': 'SIC',
        'name': 'Sinop',
        'city': 'Sinop',
    },
    {
        'code': 'SID',
        'name': 'Amilcar Cabral International Airport',
        'city': 'Santa Maria',
    },
    {
        'code': 'SIF',
        'name': 'Simara Airport',
        'city': 'Simara',
    },
    {
        'code': 'SIG',
        'name': 'Isla Grande Airport',
        'city': 'San Juan',
    },
    {
        'code': 'SIN',
        'name': 'Singapore Changi Airport',
        'city': 'Singapore',
    },
    {
        'code': 'SIP',
        'name': 'Simferopol North Airport',
        'city': 'Simferopol\'',
    },
    {
        'code': 'SIT',
        'name': 'Sitka Airport',
        'city': 'Sitka',
    },
    {
        'code': 'SJC',
        'name': 'Norman Y Mineta San Jose International Airport',
        'city': 'San Jose',
    },
    {
        'code': 'SJD',
        'name': 'Los Cabos International Airport',
        'city': 'S. Jose del Cabo',
    },
    {
        'code': 'SJE',
        'name': 'San Jose del Guaviaro Airport',
        'city': 'San Jose del Guavuare',
    },
    {
        'code': 'SJI',
        'name': 'San Jose Airport',
        'city': 'San Jose',
    },
    {
        'code': 'SJJ',
        'name': 'Sarajevo Airport',
        'city': 'Ilid\u017ea',
    },
    {
        'code': 'SJK',
        'name': 'Sao Jose dos Campos Airport',
        'city': 'Sao Jose dos Campos',
    },
    {
        'code': 'SJO',
        'name': 'Juan Santamaria International Airport',
        'city': 'Heredia',
    },
    {
        'code': 'SJP',
        'name': 'Sao Jose do Rio Preto Airport',
        'city': 'S\u00e3o Jos\u00e9 do Rio Pr\u00eato',
    },
    {
        'code': 'SJT',
        'name': 'Mathis Field Airport',
        'city': 'San Angelo',
    },
    {
        'code': 'SJU',
        'name': 'Luis Munoz Marin Airport',
        'city': 'Carolina',
    },
    {
        'code': 'SJW',
        'name': 'Shijiazhuang',
        'city': 'Shijiazhuang',
    },
    {
        'code': 'SJY',
        'name': 'Ilmajoki Airport',
        'city': 'Seinajoki',
    },
    {
        'code': 'SJZ',
        'name': 'Sao Jorge Airport',
        'city': 'Velas',
    },
    {
        'code': 'SKB',
        'name': 'Golden Rock Airport',
        'city': 'Basseterre',
    },
    {
        'code': 'SKC',
        'name': 'Papua New Guinea',
        'city': 'Suki',
    },
    {
        'code': 'SKD',
        'name': 'Samarqand',
        'city': 'Samarkand',
    },
    {
        'code': 'SKE',
        'name': 'Geiterygen Airport',
        'city': 'Skien',
    },
    {
        'code': 'SKG',
        'name': 'Thessaloniki Airport',
        'city': 'Thessaloniki',
    },
    {
        'code': 'SKH',
        'name': 'Surkhet',
        'city': 'Surkhet',
    },
    {
        'code': 'SKK',
        'name': 'Shaktoolik',
        'city': 'Shaktoolik',
    },
    {
        'code': 'SKN',
        'name': 'Stokmarknes Airport',
        'city': 'Stokkmarknes',
    },
    {
        'code': 'SKO',
        'name': 'Sadiq Abubakar Iii Airport',
        'city': 'Shunni',
    },
    {
        'code': 'SKP',
        'name': 'Petrovec',
        'city': 'Skopje',
    },
    {
        'code': 'SKT',
        'name': 'Sialkot',
        'city': 'Sialkot',
    },
    {
        'code': 'SKU',
        'name': 'Skiros Airport',
        'city': 'Skiros',
    },
    {
        'code': 'SKZ',
        'name': 'Sukkur Airport',
        'city': 'Sukkur',
    },
    {
        'code': 'SLA',
        'name': 'Salta Airport',
        'city': 'La Caldera',
    },
    {
        'code': 'SLC',
        'name': 'Salt Lake City International Airport',
        'city': 'Salt Lake City',
    },
    {
        'code': 'SLE',
        'name': 'Mcnary Field Airport',
        'city': 'Salem',
    },
    {
        'code': 'SLH',
        'name': 'Torba',
        'city': 'Sola',
    },
    {
        'code': 'SLI',
        'name': 'Solwezi',
        'city': 'Solwezi',
    },
    {
        'code': 'SLK',
        'name': 'Adirondack Regional Airport',
        'city': 'Saranac Lake',
    },
    {
        'code': 'SLL',
        'name': 'Salalah Airport',
        'city': 'Salalah',
    },
    {
        'code': 'SLM',
        'name': 'Salamanca Airport',
        'city': 'Villagonzalo de Tormes',
    },
    {
        'code': 'SLN',
        'name': 'Salina Municipal Airport',
        'city': 'Salina',
    },
    {
        'code': 'SLP',
        'name': 'San Luis Potosi Airport',
        'city': 'S. Luis Potosi',
    },
    {
        'code': 'SLQ',
        'name': 'Sleetmute Airport',
        'city': 'Sleetmute',
    },
    {
        'code': 'SLU',
        'name': 'Vigie Airport',
        'city': 'St Lucia',
    },
    {
        'code': 'SLV',
        'name': 'Simla Airport',
        'city': 'Jutogh',
    },
    {
        'code': 'SLW',
        'name': 'Plan de Guadalupe Airport',
        'city': 'General Cepeda',
    },
    {
        'code': 'SLX',
        'name': 'Salt Cay Airport',
        'city': 'Salt Cay',
    },
    {
        'code': 'SLY',
        'name': 'Russia',
        'city': 'Salekhard',
    },
    {
        'code': 'SLZ',
        'name': 'Marechal Cunha Machado International Airport',
        'city': 'Salvador',
    },
    {
        'code': 'SMA',
        'name': 'Santa Maria Airport',
        'city': 'Vila do Porto',
    },
    {
        'code': 'SMF',
        'name': 'Sacramento International Airport',
        'city': 'Sacramento',
    },
    {
        'code': 'SMI',
        'name': 'Samos Airport',
        'city': 'Pithagorion',
    },
    {
        'code': 'SMK',
        'name': 'Alaska',
        'city': 'St Michael',
    },
    {
        'code': 'SML',
        'name': 'Stella Maris Airport',
        'city': 'Simms',
    },
    {
        'code': 'SMN',
        'name': 'Lemhi County Airport',
        'city': 'Salmon',
    },
    {
        'code': 'SMR',
        'name': 'Simon Bolivar Airport',
        'city': 'Bogota',
    },
    {
        'code': 'SMS',
        'name': 'Sainte Marie Airport',
        'city': 'Toamasina',
    },
    {
        'code': 'SMX',
        'name': 'Santa Maria Public Airport',
        'city': 'Santa Maria',
    },
    {
        'code': 'SNA',
        'name': 'John Wayne Airport',
        'city': 'Santa Ana',
    },
    {
        'code': 'SNC',
        'name': 'General Ulpiano Paez Airport',
        'city': 'Salinas',
    },
    {
        'code': 'SNE',
        'name': 'Preguica Airport',
        'city': 'Ribeira Brava',
    },
    {
        'code': 'SNN',
        'name': 'Shannon Airport',
        'city': 'Shannon Airport',
    },
    {
        'code': 'SNO',
        'name': 'Sakon Nakhon Airport',
        'city': 'Sakon Nakhon',
    },
    {
        'code': 'SNP',
        'name': 'Saint Paul Island',
        'city': 'Saint Paul Island',
    },
    {
        'code': 'SNR',
        'name': 'Montoir Airport',
        'city': 'Montoir-de-Bretagne',
    },
    {
        'code': 'SNU',
        'name': 'Santa Clara Airport',
        'city': 'Esperanza',
    },
    {
        'code': 'SNW',
        'name': 'Myanmar',
        'city': 'Thandwe',
    },
    {
        'code': 'SOB',
        'name': 'Sarmellek Airport',
        'city': 'Zalav\u00e1r',
    },
    {
        'code': 'SOC',
        'name': 'Adi Sumarmo Wiryokusumo Airport',
        'city': 'Surakarta',
    },
    {
        'code': 'SOF',
        'name': 'Vrazhdebna Airport',
        'city': 'Sofia',
    },
    {
        'code': 'SOG',
        'name': 'Haukasen Airport',
        'city': 'Kaupanger',
    },
    {
        'code': 'SOJ',
        'name': 'Sorkjosen Airport',
        'city': 'S\u00f8rkjosen',
    },
    {
        'code': 'SOM',
        'name': 'San Tome Airport',
        'city': 'Cantaura',
    },
    {
        'code': 'SON',
        'name': 'Santo Pekoa International Airport',
        'city': 'Santo Pekoa',
    },
    {
        'code': 'SOO',
        'name': 'Soderhamn Airport',
        'city': 'Soderhamn',
    },
    {
        'code': 'SOQ',
        'name': 'Jefman Airport',
        'city': 'Sorong',
    },
    {
        'code': 'SOU',
        'name': 'Southampton International Airport',
        'city': 'Southampton',
    },
    {
        'code': 'SOV',
        'name': 'Seldovia',
        'city': 'Seldovia',
    },
    {
        'code': 'SOW',
        'name': 'Show Low Municipal Airport',
        'city': 'Show Low',
    },
    {
        'code': 'SPB',
        'name': 'St Thomas Seaplane Base',
        'city': 'Charlotte Amalie',
    },
    {
        'code': 'SPC',
        'name': 'Santa Cruz de la Palma Airport',
        'city': 'Bre\u00f1a Alta',
    },
    {
        'code': 'SPD',
        'name': 'Saidpur Airport',
        'city': 'Dinajpur',
    },
    {
        'code': 'SPI',
        'name': 'Capital Airport',
        'city': 'Springfield',
    },
    {
        'code': 'SPL',
        'name': 'Santa Maria Airport',
        'city': 'Vila do Porto',
    },
    {
        'code': 'SPN',
        'name': 'Saipan International Airport',
        'city': 'Saipan',
    },
    {
        'code': 'SPP',
        'name': 'Menongue East Airport',
        'city': 'Menongue',
    },
    {
        'code': 'SPR',
        'name': 'San Pedro Airport',
        'city': 'San Pedro',
    },
    {
        'code': 'SPS',
        'name': 'Sheppard Air Force Base',
        'city': 'Wichita Falls',
    },
    {
        'code': 'SPU',
        'name': 'Split Airport',
        'city': 'Split',
    },
    {
        'code': 'SQO',
        'name': 'Sweden',
        'city': 'Storuman',
    },
    {
        'code': 'SRA',
        'name': 'Santa Rosa Airport',
        'city': 'Santa Rosa',
    },
    {
        'code': 'SRE',
        'name': 'Juana Azurduy de Padilla Airport',
        'city': 'Sucre',
    },
    {
        'code': 'SRG',
        'name': 'Achmad Yani Airport',
        'city': 'Semarang',
    },
    {
        'code': 'SRJ',
        'name': 'Capitan G Q Guardia',
        'city': 'San Borja',
    },
    {
        'code': 'SRP',
        'name': 'Sorstukken Airport',
        'city': 'Skjold',
    },
    {
        'code': 'SRQ',
        'name': 'Sarasota Bradenton Airport',
        'city': 'Sarasota',
    },
    {
        'code': 'SRV',
        'name': 'Alaska',
        'city': 'Stony River',
    },
    {
        'code': 'SRX',
        'name': 'Surt',
        'city': 'Sert',
    },
    {
        'code': 'SRY',
        'name': 'Sary',
        'city': 'Sary',
    },
    {
        'code': 'SRZ',
        'name': 'El Trompillo Airport',
        'city': 'Santa Cruz de la Sierra',
    },
    {
        'code': 'SSA',
        'name': 'Deputado Luis Eduardo Magalhaes International Ai',
        'city': 'Salvador',
    },
    {
        'code': 'SSB',
        'name': 'Christiansted Harbor Seaplane Base',
        'city': 'Christiansted',
    },
    {
        'code': 'SSG',
        'name': 'Malabo Airport',
        'city': 'Malabo',
    },
    {
        'code': 'SSH',
        'name': 'Ras Nasrani Airport',
        'city': 'Al Arish',
    },
    {
        'code': 'SSJ',
        'name': 'Stokka Airport',
        'city': 'Sandnessjoen',
    },
    {
        'code': 'SSR',
        'name': 'Vanuatu',
        'city': 'Sara',
    },
    {
        'code': 'SSY',
        'name': 'Mbanza Congo Airport',
        'city': 'M\'banza Congo',
    },
    {
        'code': 'STC',
        'name': 'St Cloud Regional Airport',
        'city': 'St. Cloud',
    },
    {
        'code': 'STD',
        'name': 'Mayor Buenaventura Vivas Airport',
        'city': 'Santa Ana del Tachira',
    },
    {
        'code': 'STG',
        'name': 'Alaska',
        'city': 'St George Island',
    },
    {
        'code': 'STI',
        'name': 'Cibao International Airport',
        'city': 'La Lomota',
    },
    {
        'code': 'STL',
        'name': 'Lambert St Louis International Airport',
        'city': 'St. Louis',
    },
    {
        'code': 'STM',
        'name': 'Santarem International Airport',
        'city': 'Santar\u00e9m',
    },
    {
        'code': 'STN',
        'name': 'London Stansted International Airport',
        'city': 'Stansted Mountfitchet',
    },
    {
        'code': 'STR',
        'name': 'Stuttgart Airport',
        'city': 'Stuttgart',
    },
    {
        'code': 'STS',
        'name': 'Sonoma County Airport',
        'city': 'Windsor',
    },
    {
        'code': 'STT',
        'name': 'Cyril E King International Airport',
        'city': 'Charlotte Amalie',
    },
    {
        'code': 'STV',
        'name': 'Surat Airport',
        'city': 'Un',
    },
    {
        'code': 'STW',
        'name': 'Mikhaylovskoye Airport',
        'city': 'Stavropol\'',
    },
    {
        'code': 'STX',
        'name': 'Henry E Rohlson International Airport',
        'city': 'Frederiksted',
    },
    {
        'code': 'SUB',
        'name': 'Juanda Airport',
        'city': 'Sidoarjo',
    },
    {
        'code': 'SUF',
        'name': 'Lamezia Terme Airport',
        'city': 'Case Cervi',
    },
    {
        'code': 'SUG',
        'name': 'Surigao Airport',
        'city': 'Surigao City',
    },
    {
        'code': 'SUJ',
        'name': 'Satu Mare Airport',
        'city': 'Satu Mare',
    },
    {
        'code': 'SUN',
        'name': 'Friedman Memorial Airport',
        'city': 'Hailey',
    },
    {
        'code': 'SUR',
        'name': 'Summer Beaver',
        'city': 'Summer Beaver',
    },
    {
        'code': 'SUV',
        'name': 'Nausori International Airport',
        'city': 'Nausori',
    },
    {
        'code': 'SUX',
        'name': 'Sioux Gateway Airport',
        'city': 'Sioux City',
    },
    {
        'code': 'SVA',
        'name': 'Alaska',
        'city': 'Savoonga',
    },
    {
        'code': 'SVB',
        'name': 'Sambava',
        'city': 'Sambava',
    },
    {
        'code': 'SVC',
        'name': 'Silver City-Grant County Airport',
        'city': 'Silver City',
    },
    {
        'code': 'SVD',
        'name': 'E T Joshua Airport',
        'city': 'Kingstown',
    },
    {
        'code': 'SVG',
        'name': 'Stavanger Sola Airport',
        'city': 'Rage',
    },
    {
        'code': 'SVI',
        'name': 'San Vicente del Caguan Airport',
        'city': 'San Vicente del Cagu\u00e1n',
    },
    {
        'code': 'SVJ',
        'name': 'Helle Airport',
        'city': 'Svolvar',
    },
    {
        'code': 'SVL',
        'name': 'Savonlinna Airport',
        'city': 'Savonlinna',
    },
    {
        'code': 'SVO',
        'name': 'Sheremtyevo Airport',
        'city': 'Zelenograd',
    },
    {
        'code': 'SVQ',
        'name': 'Sevilla Airport',
        'city': 'Seville',
    },
    {
        'code': 'SVS',
        'name': 'Stevens Village',
        'city': 'Stevens Village',
    },
    {
        'code': 'SVU',
        'name': 'Savusavu Airport',
        'city': 'Labasa',
    },
    {
        'code': 'SVX',
        'name': 'Koltsovo Airport',
        'city': 'Yekaterinburg',
    },
    {
        'code': 'SVZ',
        'name': 'San Antonio del Tachira Airport',
        'city': 'T\u00e1riba',
    },
    {
        'code': 'SWA',
        'name': 'Shantou Northeast Airport',
        'city': 'Chenghai',
    },
    {
        'code': 'SWF',
        'name': 'Stewart International Airport',
        'city': 'New Windsor',
    },
    {
        'code': 'SWJ',
        'name': 'South West Bay Airport',
        'city': 'South West Bay',
    },
    {
        'code': 'SWK',
        'name': 'Segrate Airport',
        'city': 'Trezzano sul Naviglio',
    },
    {
        'code': 'SWO',
        'name': 'Stillwater Municipal Airport',
        'city': 'Stillwater',
    },
    {
        'code': 'SWQ',
        'name': 'Brang Bidji Airport',
        'city': 'Sumbawa Besar',
    },
    {
        'code': 'SWS',
        'name': 'Swansea Airport',
        'city': 'Swansea',
    },
    {
        'code': 'SXB',
        'name': 'Entzheim Airport',
        'city': 'Entzheim',
    },
    {
        'code': 'SXF',
        'name': 'Berlin-Schonefeld International Airport',
        'city': 'Sch\u00f6nefeld',
    },
    {
        'code': 'SXL',
        'name': 'Sligo Airport',
        'city': 'Larass',
    },
    {
        'code': 'SXM',
        'name': 'Prinses Juliana International Airport',
        'city': 'Juliana',
    },
    {
        'code': 'SXP',
        'name': 'Sheldon SPB',
        'city': 'Sheldon Point',
    },
    {
        'code': 'SXR',
        'name': 'Srinagar Airport',
        'city': 'Srinagar',
    },
    {
        'code': 'SYB',
        'name': 'Seal Bay Airport',
        'city': 'Kodiak',
    },
    {
        'code': 'SYD',
        'name': 'Kingsford Smith Airport',
        'city': 'Sydney',
    },
    {
        'code': 'SYJ',
        'name': 'Sirjan',
        'city': 'Sirjan',
    },
    {
        'code': 'SYM',
        'name': 'Simao',
        'city': 'Simao',
    },
    {
        'code': 'SYO',
        'name': 'Shonai',
        'city': 'Shonai',
    },
    {
        'code': 'SYR',
        'name': 'Hancock International Airport',
        'city': 'Syracuse',
    },
    {
        'code': 'SYU',
        'name': 'Australia',
        'city': 'Sue Island',
    },
    {
        'code': 'SYX',
        'name': 'Sanya',
        'city': 'Sanya',
    },
    {
        'code': 'SYY',
        'name': 'Stornoway Airport',
        'city': 'Isle of lewis',
    },
    {
        'code': 'SYZ',
        'name': 'Shiraz International Airport',
        'city': 'Shiraz',
    },
    {
        'code': 'SZA',
        'name': 'Soyo Airport',
        'city': 'Santo Ant\u00f3nio do Zaire',
    },
    {
        'code': 'SZB',
        'name': 'Sultan Abdul Aziz Shah Airport',
        'city': 'Kampong Baru Subang',
    },
    {
        'code': 'SZD',
        'name': 'Sheffield City Airport',
        'city': 'Sheffield',
    },
    {
        'code': 'SZF',
        'name': '\u00c7ar\u015famba',
        'city': 'Samsun',
    },
    {
        'code': 'SZG',
        'name': 'Salzburg Airport',
        'city': 'Salzburg',
    },
    {
        'code': 'SZV',
        'name': 'China',
        'city': 'Suzhou',
    },
    {
        'code': 'SZX',
        'name': 'Shenzhen Airport',
        'city': 'Shenzhen',
    },
    {
        'code': 'SZZ',
        'name': 'Golenow Airport',
        'city': 'Goleni\u00f3w',
    },
    {
        'code': 'TAB',
        'name': 'Crown Point Airport',
        'city': 'Plymouth',
    },
    {
        'code': 'TAC',
        'name': 'Daniel Z Romualdez Airport',
        'city': 'Tacloban City',
    },
    {
        'code': 'TAE',
        'name': 'Daegu International Airport',
        'city': 'Daegu',
    },
    {
        'code': 'TAG',
        'name': 'Tagbilaran Airport',
        'city': 'Tagbilaran City',
    },
    {
        'code': 'TAH',
        'name': 'Tanna Airport',
        'city': 'Isangel',
    },
    {
        'code': 'TAI',
        'name': 'Taiz Ganed Airport',
        'city': 'Al-Ganad',
    },
    {
        'code': 'TAK',
        'name': 'Japan',
        'city': 'Takamatsu',
    },
    {
        'code': 'TAL',
        'name': 'Ralph Calhoun',
        'city': 'Tanana',
    },
    {
        'code': 'TAM',
        'name': 'Gen Francisco J Mina International Airport',
        'city': 'Tampico',
    },
    {
        'code': 'TAO',
        'name': 'Liuting Airport',
        'city': 'Wanggezhuang',
    },
    {
        'code': 'TAP',
        'name': 'Tapachula International Airport',
        'city': 'Tapachula',
    },
    {
        'code': 'TAS',
        'name': 'Tashkent South Airport',
        'city': 'Tashkent',
    },
    {
        'code': 'TAT',
        'name': 'Poprad Tatry Airport',
        'city': 'Poprad',
    },
    {
        'code': 'TBB',
        'name': 'Tuy Hoa Airport',
        'city': 'Tuy Hoa',
    },
    {
        'code': 'TBG',
        'name': 'Western',
        'city': 'Tabubil',
    },
    {
        'code': 'TBH',
        'name': 'Romblon Airport',
        'city': 'Alcantara',
    },
    {
        'code': 'TBI',
        'name': 'The Bight Airport',
        'city': 'New Bight',
    },
    {
        'code': 'TBJ',
        'name': 'Tabarka Airport',
        'city': 'Jundobah',
    },
    {
        'code': 'TBN',
        'name': 'Waynesville Regional Airport At Forney Field',
        'city': 'Fort Leonard Wood',
    },
    {
        'code': 'TBO',
        'name': 'Tabora',
        'city': 'Tabora',
    },
    {
        'code': 'TBP',
        'name': 'Pedro Canga Airport',
        'city': 'Tumbes',
    },
    {
        'code': 'TBS',
        'name': 'Tbilisi-Noyo Alekseyevka Airport',
        'city': 'Tbilisi',
    },
    {
        'code': 'TBU',
        'name': 'Fua\'amotu International Airport',
        'city': 'Nuku\'alofa',
    },
    {
        'code': 'TBW',
        'name': 'Tambov',
        'city': 'Tambov',
    },
    {
        'code': 'TBZ',
        'name': 'Tabriz Airport',
        'city': 'Tabriz',
    },
    {
        'code': 'TCB',
        'name': 'Treasure Cay Airport',
        'city': 'Green Turtle Cay',
    },
    {
        'code': 'TCE',
        'name': 'Cataloi Airport',
        'city': 'Tulcea',
    },
    {
        'code': 'TCH',
        'name': 'Tchibanga',
        'city': 'Tchibanga',
    },
    {
        'code': 'TCO',
        'name': 'La Florida Airport',
        'city': 'Tumaco',
    },
    {
        'code': 'TCP',
        'name': 'Taba',
        'city': 'Taba',
    },
    {
        'code': 'TCQ',
        'name': 'Cor Fap Carlos C Santa Rosa Airport',
        'city': 'Tacna',
    },
    {
        'code': 'TCR',
        'name': 'Tuticorin',
        'city': 'Tuticorin',
    },
    {
        'code': 'TCT',
        'name': 'Takotna',
        'city': 'Takotna',
    },
    {
        'code': 'TDD',
        'name': 'Jorge Henrich Arauz Airport',
        'city': 'Trinidad',
    },
    {
        'code': 'TDX',
        'name': 'Mueang Trat',
        'city': 'Trat',
    },
    {
        'code': 'TEB',
        'name': 'Teterboro Airport',
        'city': 'Teterboro',
    },
    {
        'code': 'TEE',
        'name': 'Tebessa Airport',
        'city': 'Tebessa',
    },
    {
        'code': 'TEK',
        'name': 'Tatitlek Seaplane Base',
        'city': 'Valdez',
    },
    {
        'code': 'TEN',
        'name': 'Tongren',
        'city': 'Tongren',
    },
    {
        'code': 'TER',
        'name': 'Lajes Airport',
        'city': 'Praia da Vit\u00f3ria',
    },
    {
        'code': 'TET',
        'name': 'Tete Chingozi Airport',
        'city': 'Tete',
    },
    {
        'code': 'TEX',
        'name': 'Telluride Regional Airport',
        'city': 'Telluride',
    },
    {
        'code': 'TFI',
        'name': 'Tufi',
        'city': 'Tufi',
    },
    {
        'code': 'TFN',
        'name': 'Norte-Los Rodeos Airport',
        'city': 'Tegueste',
    },
    {
        'code': 'TFS',
        'name': 'Sur-Reina Sofia Airport',
        'city': 'Granadilla',
    },
    {
        'code': 'TGC',
        'name': 'Gibson County Airport',
        'city': 'Milan',
    },
    {
        'code': 'TGD',
        'name': 'Titograd Airport',
        'city': 'Podgorica',
    },
    {
        'code': 'TGG',
        'name': 'Sultan Mahmud Airport',
        'city': 'Kuala Terengganu',
    },
    {
        'code': 'TGH',
        'name': 'Tongoa Airport',
        'city': 'Tongoa',
    },
    {
        'code': 'TGJ',
        'name': 'Loyaute',
        'city': 'Tiga',
    },
    {
        'code': 'TGM',
        'name': 'Vidrasau Airport',
        'city': 'Vidrasau',
    },
    {
        'code': 'TGO',
        'name': 'Tongliao',
        'city': 'Tongliao',
    },
    {
        'code': 'TGR',
        'name': 'Touggourt Airport',
        'city': 'Ouargla',
    },
    {
        'code': 'TGU',
        'name': 'Toncontin International Airport',
        'city': 'Tegucigalpa',
    },
    {
        'code': 'TGZ',
        'name': 'Tuxtla Gutierrez Airport',
        'city': 'San Fernando',
    },
    {
        'code': 'THE',
        'name': 'Senador Petronio Portella Airport',
        'city': 'Teresina',
    },
    {
        'code': 'THF',
        'name': 'Tempelhof Central Airport',
        'city': 'Berlin',
    },
    {
        'code': 'THL',
        'name': 'Tachilek Airport',
        'city': 'Tachilek',
    },
    {
        'code': 'THN',
        'name': 'Trollhattan Vanersborg Airport',
        'city': 'Trollhatan',
    },
    {
        'code': 'THO',
        'name': 'Thorshofn Airport',
        'city': 'Thorshofn',
    },
    {
        'code': 'THR',
        'name': 'Mehrabad International Airport',
        'city': 'Tehran',
    },
    {
        'code': 'THS',
        'name': 'Sukhothai Airport',
        'city': 'Sawankhalok',
    },
    {
        'code': 'THU',
        'name': 'Pituffik',
        'city': 'Pituffik',
    },
    {
        'code': 'TIA',
        'name': 'Tirane Rinas Airport',
        'city': 'Krna',
    },
    {
        'code': 'TIF',
        'name': 'Taif Airport',
        'city': 'Taif',
    },
    {
        'code': 'TIH',
        'name': 'French Polynesia',
        'city': 'Tikehau Atoll',
    },
    {
        'code': 'TIJ',
        'name': 'General Abelardo L Rodriguez International Airpo',
        'city': 'Tijuana',
    },
    {
        'code': 'TIM',
        'name': 'Tembagapura Airport',
        'city': 'Nabire',
    },
    {
        'code': 'TIN',
        'name': 'Tindouf',
        'city': 'Tindouf',
    },
    {
        'code': 'TIP',
        'name': 'International',
        'city': 'Tripoli',
    },
    {
        'code': 'TIQ',
        'name': 'Tinian',
        'city': 'Tinian',
    },
    {
        'code': 'TIR',
        'name': 'Tirupathi Airport',
        'city': 'Renigunta',
    },
    {
        'code': 'TIS',
        'name': 'Thursday Island Airport',
        'city': 'Kubin Village',
    },
    {
        'code': 'TIU',
        'name': 'Richard Pearse Airport',
        'city': 'Timaru',
    },
    {
        'code': 'TIV',
        'name': 'Tivat Airport',
        'city': 'Teodo',
    },
    {
        'code': 'TIZ',
        'name': 'Tari Airport',
        'city': 'Mendi',
    },
    {
        'code': 'TJA',
        'name': 'Capitan Oriel Lea Plaza Airport',
        'city': 'Tarija',
    },
    {
        'code': 'TJM',
        'name': 'Tyumen Northwest Airport',
        'city': 'Tyumen\'',
    },
    {
        'code': 'TJN',
        'name': 'French Polynesia',
        'city': 'Takume',
    },
    {
        'code': 'TJQ',
        'name': 'Bulutumbang Airport',
        'city': 'Tanjungpandan',
    },
    {
        'code': 'TKE',
        'name': 'Tenakee Springs',
        'city': 'Tenakee Springs',
    },
    {
        'code': 'TKG',
        'name': 'Branti Airport',
        'city': 'Tanjungkarang',
    },
    {
        'code': 'TKJ',
        'name': 'Tok',
        'city': 'Tok',
    },
    {
        'code': 'TKK',
        'name': 'Truk International Airport',
        'city': 'Weno',
    },
    {
        'code': 'TKN',
        'name': 'Tokunoshima Airport',
        'city': 'Amagi-cho',
    },
    {
        'code': 'TKP',
        'name': 'French Polynesia',
        'city': 'Takapoto',
    },
    {
        'code': 'TKQ',
        'name': 'Tanzania',
        'city': 'Kigoma',
    },
    {
        'code': 'TKS',
        'name': 'Tokushima Airport',
        'city': 'Matsushige-cho',
    },
    {
        'code': 'TKU',
        'name': 'Turku Airport',
        'city': 'Turku',
    },
    {
        'code': 'TKV',
        'name': 'French Polynesia',
        'city': 'Tatakoto',
    },
    {
        'code': 'TKX',
        'name': 'Takaroa',
        'city': 'Takaroa',
    },
    {
        'code': 'TLA',
        'name': 'Teller',
        'city': 'Teller',
    },
    {
        'code': 'TLC',
        'name': 'Jose Maria Morelos Y Pavon Airport',
        'city': 'Toluca de Lerdo',
    },
    {
        'code': 'TLE',
        'name': 'Toliara Airport',
        'city': 'Toliara',
    },
    {
        'code': 'TLH',
        'name': 'Tallahassee Regional Airport',
        'city': 'Tallahassee',
    },
    {
        'code': 'TLJ',
        'name': 'Tatalina',
        'city': 'Tatalina',
    },
    {
        'code': 'TLL',
        'name': 'Ulemiste Airport',
        'city': 'Tallinn',
    },
    {
        'code': 'TLM',
        'name': 'Zenata Airport',
        'city': 'Tlemcen',
    },
    {
        'code': 'TLN',
        'name': 'Le Palyvestre Airport',
        'city': 'Hyeres',
    },
    {
        'code': 'TLS',
        'name': 'Blagnac Airport',
        'city': 'Blagnac',
    },
    {
        'code': 'TLT',
        'name': 'Tuluksak',
        'city': 'Tuluksak',
    },
    {
        'code': 'TLV',
        'name': 'Ben Gurion Airport',
        'city': 'Petah\u0331 Tiqwa',
    },
    {
        'code': 'TMC',
        'name': 'Tambolaka Airport',
        'city': 'Tambolaka',
    },
    {
        'code': 'TME',
        'name': 'Tame Airport',
        'city': 'Tame',
    },
    {
        'code': 'TMJ',
        'name': 'Termez Airport',
        'city': 'Termiz',
    },
    {
        'code': 'TML',
        'name': 'Tamale Airport',
        'city': 'Savelugu',
    },
    {
        'code': 'TMM',
        'name': 'Toamasina Airport',
        'city': 'Toamasina',
    },
    {
        'code': 'TMP',
        'name': 'Tampere Pirkkala Airport',
        'city': 'Pitk\u00e4niemi',
    },
    {
        'code': 'TMR',
        'name': 'Tamanrasset Airport',
        'city': 'Tamanrasset',
    },
    {
        'code': 'TMS',
        'name': 'Sao Tome Salazar Airport',
        'city': 'Sao Tome',
    },
    {
        'code': 'TMT',
        'name': 'Trombetas',
        'city': 'Trombetas',
    },
    {
        'code': 'TMU',
        'name': 'Tambor Airport',
        'city': 'Lepanto',
    },
    {
        'code': 'TMW',
        'name': 'Tamworth Airport',
        'city': 'Barry',
    },
    {
        'code': 'TMX',
        'name': 'Adrar',
        'city': 'Timimoun',
    },
    {
        'code': 'TNA',
        'name': 'Shandong',
        'city': 'Jinan',
    },
    {
        'code': 'TNC',
        'name': 'Tin City AFS',
        'city': 'Tin City',
    },
    {
        'code': 'TNG',
        'name': 'Boukhalf Airport',
        'city': 'Tangiers',
    },
    {
        'code': 'TNJ',
        'name': 'Kijang Airport',
        'city': 'Tanjungpinang',
    },
    {
        'code': 'TNK',
        'name': 'Tununak Airport',
        'city': 'Tununak',
    },
    {
        'code': 'TNN',
        'name': 'Tainan Airport',
        'city': 'Tainan City',
    },
    {
        'code': 'TNO',
        'name': 'Tamarindo Airport',
        'city': 'Liberia',
    },
    {
        'code': 'TNR',
        'name': 'Antananarivo Ivato Airport',
        'city': 'Ambohidratrimo',
    },
    {
        'code': 'TNZ',
        'name': 'Hovsgol',
        'city': 'Tosontsengel',
    },
    {
        'code': 'TOD',
        'name': 'Tioman Airport',
        'city': 'Kampung Genting',
    },
    {
        'code': 'TOE',
        'name': 'Nefta Airport',
        'city': 'Tawzar',
    },
    {
        'code': 'TOF',
        'name': 'Tomsk',
        'city': 'Tomsk',
    },
    {
        'code': 'TOG',
        'name': 'Togiak Village',
        'city': 'Togiak Village',
    },
    {
        'code': 'TOH',
        'name': 'Vanuatu',
        'city': 'Torres',
    },
    {
        'code': 'TOL',
        'name': 'Toledo Express Airport',
        'city': 'Swanton',
    },
    {
        'code': 'TOM',
        'name': 'Tombouctou Airport',
        'city': 'Tombouctou',
    },
    {
        'code': 'TOS',
        'name': 'Tromso Langnes Airport',
        'city': 'Tromso',
    },
    {
        'code': 'TOU',
        'name': 'Touho',
        'city': 'Touho',
    },
    {
        'code': 'TOY',
        'name': 'Toyama Airport',
        'city': 'Toyama-shi',
    },
    {
        'code': 'TPA',
        'name': 'Tampa International Airport',
        'city': 'Tampa',
    },
    {
        'code': 'TPE',
        'name': 'Taiwan Taoyuan International Airport',
        'city': 'Taoyuan City',
    },
    {
        'code': 'TPJ',
        'name': 'Taplejung Suketar',
        'city': 'Taplejung',
    },
    {
        'code': 'TPP',
        'name': 'Tarapoto Airport',
        'city': 'Tarapoto',
    },
    {
        'code': 'TPQ',
        'name': 'Tepic Airport',
        'city': 'Tepic',
    },
    {
        'code': 'TPS',
        'name': 'Trapani Birgi Airport',
        'city': 'Trapani',
    },
    {
        'code': 'TQR',
        'name': 'San Domino Island',
        'city': 'San Domino Island',
    },
    {
        'code': 'TRC',
        'name': 'Torreon International Airport',
        'city': 'Torre\u00f3n',
    },
    {
        'code': 'TRD',
        'name': 'Trondheim Vaernes Airport',
        'city': 'Stjordal',
    },
    {
        'code': 'TRE',
        'name': 'Tiree Aerodrome',
        'city': 'Crossapol',
    },
    {
        'code': 'TRF',
        'name': 'Torp Airport',
        'city': 'Sandefjord',
    },
    {
        'code': 'TRG',
        'name': 'Tauranga Airport',
        'city': 'Tauranga',
    },
    {
        'code': 'TRI',
        'name': 'Tri-Cities Regional Airport',
        'city': 'Blountville',
    },
    {
        'code': 'TRK',
        'name': 'Tarakan Airport',
        'city': 'Tarakan',
    },
    {
        'code': 'TRN',
        'name': 'Turin International Airport',
        'city': 'Caselle',
    },
    {
        'code': 'TRO',
        'name': 'Taree Airport',
        'city': 'Taree',
    },
    {
        'code': 'TRS',
        'name': 'Ronchi Dei Legionari Airport',
        'city': 'Ronchi',
    },
    {
        'code': 'TRU',
        'name': 'Cap C Martinez de Pinillos Airport',
        'city': 'Huanchaco',
    },
    {
        'code': 'TRV',
        'name': 'Thiruvananthapuram Airport',
        'city': 'Thiruvananthapuram',
    },
    {
        'code': 'TRW',
        'name': 'Bonriki International Airport',
        'city': 'Tarawa',
    },
    {
        'code': 'TRZ',
        'name': 'Tiruchirapally',
        'city': 'Tiruchirapally',
    },
    {
        'code': 'TSA',
        'name': 'Taipei Songshan Airport',
        'city': 'Taipei City',
    },
    {
        'code': 'TSE',
        'name': 'Tselinograd South Airport',
        'city': 'Aqmola',
    },
    {
        'code': 'TSF',
        'name': 'Treviso Airport',
        'city': 'Treviso',
    },
    {
        'code': 'TSJ',
        'name': 'Tsushima Airport',
        'city': 'Tsushima-shi',
    },
    {
        'code': 'TSL',
        'name': 'Tamuin Airport',
        'city': 'Ciudad Valles',
    },
    {
        'code': 'TSN',
        'name': 'Zhangguizhuang Airport',
        'city': 'Tanggu',
    },
    {
        'code': 'TSO',
        'name': 'Isles Of Scilly',
        'city': 'Isles Of Scilly',
    },
    {
        'code': 'TSR',
        'name': 'Timisoara Northeast Airport',
        'city': 'Timisoara',
    },
    {
        'code': 'TSS',
        'name': 'East 34th Street Heliport',
        'city': 'New York',
    },
    {
        'code': 'TST',
        'name': 'Trang Airport',
        'city': 'Muang Trang',
    },
    {
        'code': 'TSV',
        'name': 'Townsville Airport',
        'city': 'Townsville',
    },
    {
        'code': 'TTA',
        'name': 'Tan-Tan',
        'city': 'Tan Tan',
    },
    {
        'code': 'TTE',
        'name': 'Babullah Airport',
        'city': 'Ternate',
    },
    {
        'code': 'TTJ',
        'name': 'Tottori Airport',
        'city': 'Tottori-shi',
    },
    {
        'code': 'TTQ',
        'name': 'Tortuquero Airport',
        'city': 'Colorado',
    },
    {
        'code': 'TTT',
        'name': 'Taitung Airport',
        'city': 'Taitung City',
    },
    {
        'code': 'TTU',
        'name': 'Sania Ramel Airport',
        'city': 'Tetouan',
    },
    {
        'code': 'TUA',
        'name': 'El Rosal Teniente Guerrero Airport',
        'city': 'Urbina',
    },
    {
        'code': 'TUB',
        'name': 'Tubuai',
        'city': 'Tubuai',
    },
    {
        'code': 'TUC',
        'name': 'Teniente Benjamin Matienzo Airport',
        'city': 'Banda del R\u00edo Sal\u00ed',
    },
    {
        'code': 'TUD',
        'name': 'Tambacounda Airport',
        'city': 'Tambacounda',
    },
    {
        'code': 'TUF',
        'name': 'St Symphorien Airport',
        'city': 'Tours',
    },
    {
        'code': 'TUG',
        'name': 'Tuguegarao Airport',
        'city': 'Tuguegarao',
    },
    {
        'code': 'TUI',
        'name': 'Turaif Airport',
        'city': 'Turayf',
    },
    {
        'code': 'TUK',
        'name': 'Turbat Airport',
        'city': 'Turbat',
    },
    {
        'code': 'TUL',
        'name': 'Tulsa International Airport',
        'city': 'Tulsa',
    },
    {
        'code': 'TUN',
        'name': 'Aeroport Tunis',
        'city': 'Tunis',
    },
    {
        'code': 'TUO',
        'name': 'Taupo Aerodrome',
        'city': 'Taupo',
    },
    {
        'code': 'TUP',
        'name': 'Tupelo Municipal-C D Lemons Airport',
        'city': 'Tupelo',
    },
    {
        'code': 'TUR',
        'name': 'Tucurui Airport',
        'city': 'Tucuru\u00ed',
    },
    {
        'code': 'TUS',
        'name': 'Tucson International Airport',
        'city': 'Tucson',
    },
    {
        'code': 'TUU',
        'name': 'Tabuk Airport',
        'city': 'Tabuk',
    },
    {
        'code': 'TVC',
        'name': 'Cherry Capital Airport',
        'city': 'Traverse City',
    },
    {
        'code': 'TVF',
        'name': 'Thief River Falls Regional Airport',
        'city': 'Thief River Falls',
    },
    {
        'code': 'TVU',
        'name': 'Taveuni Airport',
        'city': 'Taveuni',
    },
    {
        'code': 'TVY',
        'name': 'Dawe',
        'city': 'Dawe',
    },
    {
        'code': 'TWA',
        'name': 'Twin Hills',
        'city': 'Twin Hills',
    },
    {
        'code': 'TWB',
        'name': 'Toowoomba Airport',
        'city': 'Toowoomba',
    },
    {
        'code': 'TWF',
        'name': 'Twin Falls-Sun Valley Regional Airport',
        'city': 'Twin Falls',
    },
    {
        'code': 'TWT',
        'name': 'Tawitawi',
        'city': 'Tawitawi',
    },
    {
        'code': 'TWU',
        'name': 'Tawau Airport',
        'city': 'Tawau',
    },
    {
        'code': 'TXK',
        'name': 'Texarkana Regional Airport',
        'city': 'Texarkana',
    },
    {
        'code': 'TXL',
        'name': 'Berlin-Tegel International Airport',
        'city': 'Berlin',
    },
    {
        'code': 'TXN',
        'name': 'Tunxi Airport',
        'city': 'Haiyang',
    },
    {
        'code': 'TYF',
        'name': 'Fryklanda Airport',
        'city': 'Torsby',
    },
    {
        'code': 'TYN',
        'name': 'Taiyuan Wusu Airport',
        'city': 'Taiyuan',
    },
    {
        'code': 'TYR',
        'name': 'Tyler Pounds Field Airport',
        'city': 'Tyler',
    },
    {
        'code': 'TYS',
        'name': 'Mcghee Tyson Airport',
        'city': 'Knoxville',
    },
    {
        'code': 'TZA',
        'name': 'Belize City Municipal Airport',
        'city': 'Hattieville',
    },
    {
        'code': 'TZN',
        'name': 'South Andros Airport',
        'city': 'Mangrove Cay',
    },
    {
        'code': 'TZX',
        'name': 'Trabzon Air Base',
        'city': 'Trabzon',
    },
    {
        'code': 'UAH',
        'name': 'French Polynesia',
        'city': 'Ua Huka',
    },
    {
        'code': 'UAK',
        'name': 'Narsarsuaq Airport',
        'city': 'Narsarssurk',
    },
    {
        'code': 'UAP',
        'name': 'French Polynesia',
        'city': 'Ua Pou',
    },
    {
        'code': 'UAQ',
        'name': 'San Juan Airport',
        'city': '9 de Julio',
    },
    {
        'code': 'UAS',
        'name': 'Samburu Airport',
        'city': 'Samburu',
    },
    {
        'code': 'UBA',
        'name': 'Uberaba',
        'city': 'Uberaba',
    },
    {
        'code': 'UBJ',
        'name': 'Yamaguchi-Ube Airport',
        'city': 'Ube-shi',
    },
    {
        'code': 'UBP',
        'name': 'Ubon Airport',
        'city': 'Don Mot Daeng',
    },
    {
        'code': 'UCT',
        'name': 'Ust Ukhta Airport',
        'city': 'Ukhta',
    },
    {
        'code': 'UDI',
        'name': 'Coronel Aviador Cesar Bombonato Airport',
        'city': 'Uberlandia',
    },
    {
        'code': 'UDJ',
        'name': 'Uzhgorod Airport',
        'city': 'Uzhhorod',
    },
    {
        'code': 'UDR',
        'name': 'Udaipur Airport',
        'city': 'Debari',
    },
    {
        'code': 'UEL',
        'name': 'Quelimane Airport',
        'city': 'Quelimane',
    },
    {
        'code': 'UEO',
        'name': 'Kumejima Airport',
        'city': 'Kumejima-cho',
    },
    {
        'code': 'UET',
        'name': 'Quetta Airport',
        'city': 'Quetta',
    },
    {
        'code': 'UFA',
        'name': 'Ufa South Airport',
        'city': 'Oufa',
    },
    {
        'code': 'UGB',
        'name': 'Ugashik Bay Airport',
        'city': 'Pilot Point',
    },
    {
        'code': 'UGC',
        'name': 'Urganch',
        'city': 'Urgench',
    },
    {
        'code': 'UGI',
        'name': 'Uganik Airport',
        'city': 'Kodiak',
    },
    {
        'code': 'UIB',
        'name': 'El Carano Airport',
        'city': 'Quibd\u00f3',
    },
    {
        'code': 'UIH',
        'name': 'Vietnam',
        'city': 'Qui Nhon',
    },
    {
        'code': 'UII',
        'name': 'Utila Airport',
        'city': 'Utila',
    },
    {
        'code': 'UIN',
        'name': 'Quincy Municipal Airport-Baldwin Field',
        'city': 'Quincy',
    },
    {
        'code': 'UIO',
        'name': 'Mariscal Sucre International Airport',
        'city': 'Quito',
    },
    {
        'code': 'UIP',
        'name': 'Pluguffan Airport',
        'city': 'Plomelin',
    },
    {
        'code': 'UKB',
        'name': 'Kobe Airport',
        'city': 'Kobe-shi',
    },
    {
        'code': 'UKK',
        'name': 'Ust-kamenogorsk',
        'city': 'Ust-kamenogorsk',
    },
    {
        'code': 'ULB',
        'name': 'Ulei Airport',
        'city': 'Port-Vato',
    },
    {
        'code': 'ULN',
        'name': 'Ulaanbaatar Southwest Airport',
        'city': 'Ulan Bator',
    },
    {
        'code': 'ULO',
        'name': 'Ulaangom',
        'city': 'Ulaangom',
    },
    {
        'code': 'ULP',
        'name': 'Quilpie Aerodrome',
        'city': 'Quilpie',
    },
    {
        'code': 'ULU',
        'name': 'Gulu Airport',
        'city': 'Gulu',
    },
    {
        'code': 'ULY',
        'name': 'Ulyanovsk Northeast Airport',
        'city': 'Dimitrovgrad',
    },
    {
        'code': 'UMD',
        'name': 'Uummannaq Airport',
        'city': 'Uummannaq',
    },
    {
        'code': 'UME',
        'name': 'Umea Airport',
        'city': 'Umea',
    },
    {
        'code': 'UNG',
        'name': 'Kiunga',
        'city': 'Kiunga',
    },
    {
        'code': 'UNK',
        'name': 'Unalakleet',
        'city': 'Unalakleet',
    },
    {
        'code': 'UNN',
        'name': 'Ranong Airport',
        'city': 'Ranong',
    },
    {
        'code': 'UPB',
        'name': 'Playa Baracoa',
        'city': 'Havana',
    },
    {
        'code': 'UPG',
        'name': 'Hasanuddin Airport',
        'city': 'Maros',
    },
    {
        'code': 'URA',
        'name': 'Podstepnyy Airport',
        'city': 'Oral',
    },
    {
        'code': 'URC',
        'name': 'Diwopu Airport',
        'city': 'Urumqi',
    },
    {
        'code': 'URE',
        'name': 'Kuressarre Airport',
        'city': 'Kingissepa',
    },
    {
        'code': 'URG',
        'name': 'Rubem Berta International Airport',
        'city': 'Uruguaiana',
    },
    {
        'code': 'URJ',
        'name': 'Uraj',
        'city': 'Uraj',
    },
    {
        'code': 'URO',
        'name': 'Boos Airport',
        'city': 'St-Pierre',
    },
    {
        'code': 'URS',
        'name': 'Kursk',
        'city': 'Kursk',
    },
    {
        'code': 'URT',
        'name': 'Surat Thani Airport',
        'city': 'Phun Phin',
    },
    {
        'code': 'URY',
        'name': 'Guriat Airport',
        'city': 'Gurayat',
    },
    {
        'code': 'USH',
        'name': 'Ushuaia Airport',
        'city': 'Ushuaia',
    },
    {
        'code': 'USK',
        'name': 'Usinsk',
        'city': 'Usinsk',
    },
    {
        'code': 'USM',
        'name': 'Koh Samui Airport',
        'city': 'Ko Samui',
    },
    {
        'code': 'USN',
        'name': 'Ulsan Airport',
        'city': 'Ulsan',
    },
    {
        'code': 'USQ',
        'name': 'Usak',
        'city': 'Usak',
    },
    {
        'code': 'USU',
        'name': 'Busuanga Airport',
        'city': 'Coron',
    },
    {
        'code': 'UTH',
        'name': 'Udon Airport',
        'city': 'Changwat Udon Thani; Udon Thani',
    },
    {
        'code': 'UTN',
        'name': 'Pierre Van Ryneveld Airport',
        'city': 'Upington',
    },
    {
        'code': 'UTP',
        'name': 'Rayong Airport',
        'city': 'Ban Chang',
    },
    {
        'code': 'UTT',
        'name': 'K D Matanzima Airport',
        'city': 'Umtata',
    },
    {
        'code': 'UUD',
        'name': 'Ulan Ude-Mukhino Airport',
        'city': 'Kabansk',
    },
    {
        'code': 'UUN',
        'name': 'Baruun Urt Airport',
        'city': 'Baruun-Urt',
    },
    {
        'code': 'UUS',
        'name': 'Yuzhno Sakhalinsk South Airport',
        'city': 'Kholmsk',
    },
    {
        'code': 'UVE',
        'name': 'Ouloup Airport',
        'city': 'Fayaou\u00e9',
    },
    {
        'code': 'UVF',
        'name': 'Hewanorra International Airport',
        'city': 'Vieux Fort',
    },
    {
        'code': 'UWE',
        'name': 'Metropolitan Area',
        'city': 'Wiesbaden',
    },
    {
        'code': 'UYL',
        'name': 'Janub Darfur',
        'city': 'Nyala',
    },
    {
        'code': 'UYN',
        'name': 'Yulin Airport',
        'city': 'Yulin',
    },
    {
        'code': 'VAA',
        'name': 'Vaasa Airport',
        'city': 'Vaasa',
    },
    {
        'code': 'VAI',
        'name': 'Vanimo',
        'city': 'Vanimo',
    },
    {
        'code': 'VAK',
        'name': 'Chevak Airport',
        'city': 'Hooper Bay',
    },
    {
        'code': 'VAN',
        'name': 'Van Airport',
        'city': 'Van',
    },
    {
        'code': 'VAO',
        'name': 'Suavanao Airstrip',
        'city': 'Suavanao',
    },
    {
        'code': 'VAR',
        'name': 'Topoli Airport',
        'city': 'Varna',
    },
    {
        'code': 'VAS',
        'name': 'Sivas Airport',
        'city': 'Sivas',
    },
    {
        'code': 'VAV',
        'name': 'Lupepau\'u Airport',
        'city': 'Neiafu',
    },
    {
        'code': 'VAW',
        'name': 'Vardoe Airport',
        'city': 'Vardo',
    },
    {
        'code': 'VBM',
        'name': 'Alaska',
        'city': 'Blue Mountain',
    },
    {
        'code': 'VBS',
        'name': 'Brescia Montichiari',
        'city': 'Verona',
    },
    {
        'code': 'VBV',
        'name': 'Vanuabalavu',
        'city': 'Vanuabalavu',
    },
    {
        'code': 'VBY',
        'name': 'Visby Airport',
        'city': 'Visby',
    },
    {
        'code': 'VCE',
        'name': 'Marco Polo International Airport',
        'city': 'Venice',
    },
    {
        'code': 'VCL',
        'name': 'Chulai',
        'city': 'Tamky',
    },
    {
        'code': 'VCP',
        'name': 'Viracopos International Airport',
        'city': 'Campinas',
    },
    {
        'code': 'VCS',
        'name': 'Vietnam',
        'city': 'Con Dao',
    },
    {
        'code': 'VCT',
        'name': 'Victoria Regional Airport',
        'city': 'Victoria',
    },
    {
        'code': 'VCV',
        'name': 'Southern California Logistics Airport',
        'city': 'Victorville',
    },
    {
        'code': 'VDA',
        'name': 'Ovda Airport',
        'city': 'Ovda',
    },
    {
        'code': 'VDB',
        'name': 'Fagernes Leirin Airport',
        'city': 'Fagernes',
    },
    {
        'code': 'VDC',
        'name': 'Vitoria da Conquista Airport',
        'city': 'Vit\u00f3ria da Conquista',
    },
    {
        'code': 'VDE',
        'name': 'Valverde Airport',
        'city': 'Valverde',
    },
    {
        'code': 'VDM',
        'name': 'Gobernador Castello Airport',
        'city': 'Viedma',
    },
    {
        'code': 'VDS',
        'name': 'Vadso Airport',
        'city': 'Vadso',
    },
    {
        'code': 'VDZ',
        'name': 'Valdez Airport',
        'city': 'Valdez',
    },
    {
        'code': 'VEE',
        'name': 'Venetie',
        'city': 'Venetie',
    },
    {
        'code': 'VEL',
        'name': 'Vernal Airport',
        'city': 'Vernal',
    },
    {
        'code': 'VER',
        'name': 'General Heriberto Jara International Airport',
        'city': 'Teocelo',
    },
    {
        'code': 'VEY',
        'name': 'Vestmannaeyjar Airport',
        'city': 'Vestmannaeyjar',
    },
    {
        'code': 'VFA',
        'name': 'Victoria Falls Airport',
        'city': 'Victoria',
    },
    {
        'code': 'VGA',
        'name': 'Vijaywada Airport',
        'city': 'Manthena',
    },
    {
        'code': 'VGO',
        'name': 'Vigo Airport',
        'city': 'Vigo',
    },
    {
        'code': 'VGZ',
        'name': 'Villagarzon Airport',
        'city': 'Villagarzon',
    },
    {
        'code': 'VHC',
        'name': 'Saurimo Airport',
        'city': 'Saurimo',
    },
    {
        'code': 'VHM',
        'name': 'Vilhelmina Airport',
        'city': 'Vilhelmina',
    },
    {
        'code': 'VHZ',
        'name': 'French Polynesia',
        'city': 'Vahitahi',
    },
    {
        'code': 'VIE',
        'name': 'Vienna Schwechat International Airport',
        'city': 'Klein-Neusiedl',
    },
    {
        'code': 'VIG',
        'name': 'El Vigia',
        'city': 'El Vigia',
    },
    {
        'code': 'VII',
        'name': 'Vinh',
        'city': 'Vinh City',
    },
    {
        'code': 'VIJ',
        'name': 'Virgin Gorda Airport',
        'city': 'Virgin Gorda',
    },
    {
        'code': 'VIL',
        'name': 'Dakhla Airport',
        'city': 'Ad Dakhla',
    },
    {
        'code': 'VIS',
        'name': 'Visalia Municipal Airport',
        'city': 'Visalia',
    },
    {
        'code': 'VIT',
        'name': 'Vitoria Airport',
        'city': 'Vitoria',
    },
    {
        'code': 'VIX',
        'name': 'Goiabeiras Airport',
        'city': 'Vitoria',
    },
    {
        'code': 'VKG',
        'name': 'Kien Giang Airport',
        'city': 'Kien Giang',
    },
    {
        'code': 'VKO',
        'name': 'Ynukovo Airport',
        'city': 'Podol\'sk',
    },
    {
        'code': 'VKT',
        'name': 'Vorkuta Airport',
        'city': 'Ukhta',
    },
    {
        'code': 'VLC',
        'name': 'Valencia Airport',
        'city': 'Manises',
    },
    {
        'code': 'VLD',
        'name': 'Valdosta Regional Airport',
        'city': 'Valdosta',
    },
    {
        'code': 'VLI',
        'name': 'Port Vila Bauerfield Airport',
        'city': 'Port-Vila',
    },
    {
        'code': 'VLL',
        'name': 'Valladolid Airport',
        'city': 'Valladolid',
    },
    {
        'code': 'VLN',
        'name': 'Zim Valencia Airport',
        'city': 'Valencia',
    },
    {
        'code': 'VLS',
        'name': 'Vanuatu',
        'city': 'Valesdir',
    },
    {
        'code': 'VLV',
        'name': 'Dr Antonio Nicolas Briceno Airport',
        'city': 'Siquisique',
    },
    {
        'code': 'VLY',
        'name': 'Wales',
        'city': 'Anglesey',
    },
    {
        'code': 'VNO',
        'name': 'Vilnius Airport',
        'city': 'Vilnius',
    },
    {
        'code': 'VNS',
        'name': 'Varanasi Airport',
        'city': 'Baragaon',
    },
    {
        'code': 'VNX',
        'name': 'Vilanculos Airport',
        'city': 'Vilanculos',
    },
    {
        'code': 'VOG',
        'name': 'Gumrak Airport',
        'city': 'Kamyshin',
    },
    {
        'code': 'VOL',
        'name': 'Nea Anchialos Airport',
        'city': 'Almiros',
    },
    {
        'code': 'VOZ',
        'name': 'Voronezh-Chertovitskoye Airport',
        'city': 'Semiluki',
    },
    {
        'code': 'VPE',
        'name': 'Ondjiva',
        'city': 'Ongiva',
    },
    {
        'code': 'VPN',
        'name': 'Vopnafjordur Airport',
        'city': 'Egilsstadir',
    },
    {
        'code': 'VPS',
        'name': 'Eglin Air Force Base',
        'city': 'Eglin Village',
    },
    {
        'code': 'VPY',
        'name': 'Chimoio Airport',
        'city': 'Chimoio',
    },
    {
        'code': 'VQS',
        'name': 'Aeropuerto Antonio Rivera Rodr\u00edguez',
        'city': 'Puerto Ferro',
    },
    {
        'code': 'VRA',
        'name': 'Varadero Airport',
        'city': 'Varadero',
    },
    {
        'code': 'VRC',
        'name': 'Virac Airport',
        'city': 'Virac',
    },
    {
        'code': 'VRK',
        'name': 'Varkaus Airport',
        'city': 'Varkaus',
    },
    {
        'code': 'VRN',
        'name': 'Verona Airport',
        'city': 'Sommacampagna',
    },
    {
        'code': 'VRY',
        'name': 'Vaeroy Airport',
        'city': 'Varoy',
    },
    {
        'code': 'VSA',
        'name': 'Villahermosa Airport',
        'city': 'Villahermosa',
    },
    {
        'code': 'VSG',
        'name': 'Lugansk Airport',
        'city': 'Luhans\'k',
    },
    {
        'code': 'VST',
        'name': 'Hasslo Airport',
        'city': 'Vasteras',
    },
    {
        'code': 'VTE',
        'name': 'Vientiane Airport',
        'city': 'Vientiane',
    },
    {
        'code': 'VTU',
        'name': 'Las Tunas Airport',
        'city': 'Becerra',
    },
    {
        'code': 'VTZ',
        'name': 'Vishakapatnam Airport',
        'city': 'Visakhapatnam',
    },
    {
        'code': 'VUP',
        'name': 'Alfonso Lopez Airport',
        'city': 'Valledupar',
    },
    {
        'code': 'VVC',
        'name': 'Vanguardia Airport',
        'city': 'Villavicencio',
    },
    {
        'code': 'VVI',
        'name': 'Viru Viru International Airport',
        'city': 'Santa Cruz',
    },
    {
        'code': 'VVO',
        'name': 'Artem North Airport',
        'city': 'Nakhodka',
    },
    {
        'code': 'VVZ',
        'name': 'Illizi',
        'city': 'Illizi',
    },
    {
        'code': 'VXC',
        'name': 'Lichinga Airport',
        'city': 'Lichinga',
    },
    {
        'code': 'VXE',
        'name': 'San Pedro Airport',
        'city': 'Mindelo',
    },
    {
        'code': 'VXO',
        'name': 'Kronoberg Airport',
        'city': 'Vaxjo',
    },
    {
        'code': 'WAA',
        'name': 'Wales',
        'city': 'Wales',
    },
    {
        'code': 'WAE',
        'name': 'Saudi Arabia',
        'city': 'Wadi Ad Dawasir',
    },
    {
        'code': 'WAG',
        'name': 'Wanganui Airport',
        'city': 'Wanganui',
    },
    {
        'code': 'WAQ',
        'name': 'Mahajanga',
        'city': 'Antsalova',
    },
    {
        'code': 'WAT',
        'name': 'Waterford Airport',
        'city': 'Waterford',
    },
    {
        'code': 'WAW',
        'name': 'Okecie International Airport',
        'city': 'Warsaw',
    },
    {
        'code': 'WBB',
        'name': 'Stebbins',
        'city': 'Stebbins',
    },
    {
        'code': 'WBQ',
        'name': 'Alaska',
        'city': 'Beaver',
    },
    {
        'code': 'WDH',
        'name': 'Windhoek Airport',
        'city': 'Windhoek',
    },
    {
        'code': 'WEF',
        'name': 'Shandong',
        'city': 'Weifang',
    },
    {
        'code': 'WEH',
        'name': 'Shandong',
        'city': 'Weihai',
    },
    {
        'code': 'WEI',
        'name': 'Weipa Aerodrome',
        'city': 'Weipa',
    },
    {
        'code': 'WGA',
        'name': 'Wagga Wagga Airport',
        'city': 'Forest Hill',
    },
    {
        'code': 'WGE',
        'name': 'Walgett Airport',
        'city': 'Walgett',
    },
    {
        'code': 'WGP',
        'name': 'Mau Hau Airport',
        'city': 'Waingapu',
    },
    {
        'code': 'WHF',
        'name': 'Wadi Halfa\'',
        'city': 'Wadi Halfa',
    },
    {
        'code': 'WHK',
        'name': 'Whakatane Airport',
        'city': 'Whakatane',
    },
    {
        'code': 'WIC',
        'name': 'Wick Airport',
        'city': 'Wick',
    },
    {
        'code': 'WIL',
        'name': 'Nairobi Wilson Airport',
        'city': 'Nairobi',
    },
    {
        'code': 'WIN',
        'name': 'Winton Aerodrome',
        'city': 'Corfield',
    },
    {
        'code': 'WJA',
        'name': 'Woja',
        'city': 'Woja',
    },
    {
        'code': 'WJU',
        'name': 'Wonju Airport',
        'city': 'WonJu',
    },
    {
        'code': 'WKA',
        'name': 'Wanaka Airport',
        'city': 'Wanaka',
    },
    {
        'code': 'WKJ',
        'name': 'Wakkanai Airport',
        'city': 'Wakkanai-shi',
    },
    {
        'code': 'WKK',
        'name': 'Aleknagik',
        'city': 'Aleknagik',
    },
    {
        'code': 'WLG',
        'name': 'Wellington International Airport',
        'city': 'Wellington',
    },
    {
        'code': 'WLH',
        'name': 'Vanuatu',
        'city': 'Walaha',
    },
    {
        'code': 'WLK',
        'name': 'Alaska',
        'city': 'Selawik',
    },
    {
        'code': 'WLS',
        'name': 'Wallis Island',
        'city': 'Wallis Island',
    },
    {
        'code': 'WMK',
        'name': 'Meyers Chuck',
        'city': 'Meyers Chuck',
    },
    {
        'code': 'WMN',
        'name': 'Maroantsetra Airport',
        'city': 'Maroantsetra',
    },
    {
        'code': 'WMO',
        'name': 'White Mountain',
        'city': 'White Mountain',
    },
    {
        'code': 'WMR',
        'name': 'Mananara',
        'city': 'Mananara',
    },
    {
        'code': 'WNA',
        'name': 'Napaskiak',
        'city': 'Napakiak',
    },
    {
        'code': 'WNN',
        'name': 'Wunnummin Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'WNP',
        'name': 'Naga Airport',
        'city': 'Pili',
    },
    {
        'code': 'WNR',
        'name': 'Windorah Airport',
        'city': 'Tanbar',
    },
    {
        'code': 'WNS',
        'name': 'Nawabshah Airport',
        'city': 'Nawabshah',
    },
    {
        'code': 'WNZ',
        'name': 'Wenzhou Airport',
        'city': 'Wenzhou',
    },
    {
        'code': 'WPM',
        'name': 'Wipim',
        'city': 'Wipim',
    },
    {
        'code': 'WRE',
        'name': 'Whangarei Airport',
        'city': 'Whangarei',
    },
    {
        'code': 'WRG',
        'name': 'Wrangell Airport',
        'city': 'Wrangell',
    },
    {
        'code': 'WRL',
        'name': 'Worland Municipal Airport',
        'city': 'Worland',
    },
    {
        'code': 'WRO',
        'name': 'Strachowice Airport',
        'city': 'Wroclaw',
    },
    {
        'code': 'WSN',
        'name': 'Naknek',
        'city': 'South Naknek',
    },
    {
        'code': 'WST',
        'name': 'Westerly State Airport',
        'city': 'Westerly',
    },
    {
        'code': 'WSX',
        'name': 'United States',
        'city': 'Westsound',
    },
    {
        'code': 'WSZ',
        'name': 'Westport Airport',
        'city': 'Westport',
    },
    {
        'code': 'WTK',
        'name': 'Alaska',
        'city': 'Noatak',
    },
    {
        'code': 'WTL',
        'name': 'Tuntutuliak',
        'city': 'Tuntutuliak',
    },
    {
        'code': 'WTS',
        'name': 'Antananarivo',
        'city': 'Tsiroanomandidy',
    },
    {
        'code': 'WUA',
        'name': 'Wu Hai',
        'city': 'Wu Hai',
    },
    {
        'code': 'WUH',
        'name': 'Wuchang Nanhu Airport',
        'city': 'Wuhan',
    },
    {
        'code': 'WUN',
        'name': 'Wiluna',
        'city': 'Wiluna',
    },
    {
        'code': 'WUS',
        'name': 'Wuyishan',
        'city': 'Wuyishan',
    },
    {
        'code': 'WUX',
        'name': 'Wuxi',
        'city': 'Wuxi',
    },
    {
        'code': 'WVB',
        'name': 'Rooikop',
        'city': 'Walvis Bay',
    },
    {
        'code': 'WWK',
        'name': 'Wewak International Airport',
        'city': 'Wewak',
    },
    {
        'code': 'WWP',
        'name': 'Alaska',
        'city': 'Whale Pass',
    },
    {
        'code': 'WWT',
        'name': 'Alaska',
        'city': 'Newtok',
    },
    {
        'code': 'WXN',
        'name': 'Wanxian',
        'city': 'Wanxian',
    },
    {
        'code': 'WYA',
        'name': 'Whyalla Airport',
        'city': 'Whyalla',
    },
    {
        'code': 'WYS',
        'name': 'Yellowstone Airport',
        'city': 'West Yellowstone',
    },
    {
        'code': 'XAD',
        'name': 'Churchill Rail Station',
        'city': 'Oro-Medonte',
    },
    {
        'code': 'XAP',
        'name': 'Chapeco Airport',
        'city': 'Chapeco',
    },
    {
        'code': 'XAW',
        'name': 'Capreol Rail Service',
        'city': 'Capreol',
    },
    {
        'code': 'XAX',
        'name': 'Dorval Rail Station',
        'city': 'Dorval',
    },
    {
        'code': 'XAZ',
        'name': 'Cambellton',
        'city': 'Cambellton',
    },
    {
        'code': 'XBE',
        'name': 'Bearskin Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'XBJ',
        'name': 'Birjand Airport',
        'city': 'Birjand',
    },
    {
        'code': 'XBR',
        'name': 'Brockville Airport',
        'city': 'Brockville',
    },
    {
        'code': 'XCH',
        'name': 'Christmas Island Airport',
        'city': 'The Settlement',
    },
    {
        'code': 'XCI',
        'name': 'Ontario',
        'city': 'Oro-Medonte',
    },
    {
        'code': 'XCM',
        'name': 'Chatham Airport',
        'city': 'Chatham',
    },
    {
        'code': 'XCR',
        'name': 'Europort Vatry',
        'city': 'Coole',
    },
    {
        'code': 'XDB',
        'name': 'Lille-Europe Railway Station',
        'city': 'Lille',
    },
    {
        'code': 'XDD',
        'name': 'XDD',
        'city': 'XDD',
    },
    {
        'code': 'XDG',
        'name': 'Halifax Rail Service',
        'city': 'Halifax',
    },
    {
        'code': 'XDH',
        'name': 'XDH',
        'city': 'XDH',
    },
    {
        'code': 'XDM',
        'name': 'Drummondville Airport',
        'city': 'Drummondville',
    },
    {
        'code': 'XDP',
        'name': 'Moncton Rail Service',
        'city': 'Moncton',
    },
    {
        'code': 'XDQ',
        'name': 'London Ontario Rail Service',
        'city': 'London',
    },
    {
        'code': 'XDS',
        'name': 'Ontario',
        'city': 'Oro-Medonte',
    },
    {
        'code': 'XDU',
        'name': 'XDU',
        'city': 'XDU',
    },
    {
        'code': 'XDV',
        'name': 'Prince George',
        'city': 'Prince George',
    },
    {
        'code': 'XDW',
        'name': 'Canada',
        'city': 'Prince Rupert',
    },
    {
        'code': 'XDX',
        'name': 'Sarina Rail Station',
        'city': 'Sarina',
    },
    {
        'code': 'XDY',
        'name': 'Sudbury',
        'city': 'Sudbury',
    },
    {
        'code': 'XDZ',
        'name': 'The Pas Rail Service',
        'city': 'The Pas',
    },
    {
        'code': 'XEA',
        'name': 'Vancouver Rail Service',
        'city': 'Vancouver',
    },
    {
        'code': 'XEC',
        'name': 'Windsor Ontario Rail Service',
        'city': 'Windsor',
    },
    {
        'code': 'XED',
        'name': 'Disneyland Railway Station',
        'city': 'Paris',
    },
    {
        'code': 'XEE',
        'name': 'Lac Edouard Rail Service',
        'city': 'Lac Edouard',
    },
    {
        'code': 'XEF',
        'name': 'Winnipeg Rail Service',
        'city': 'Winnipeg',
    },
    {
        'code': 'XEG',
        'name': 'Kingston Rail Service',
        'city': 'Kingston',
    },
    {
        'code': 'XEH',
        'name': 'Ladysmith Rail Service',
        'city': 'Ladysmith',
    },
    {
        'code': 'XEK',
        'name': 'Saskatchewan',
        'city': 'Melville',
    },
    {
        'code': 'XEL',
        'name': 'Quebec',
        'city': 'New Carlisle',
    },
    {
        'code': 'XER',
        'name': 'Strasbourg Bus Station',
        'city': 'Strasbourg',
    },
    {
        'code': 'XET',
        'name': 'London City Airport',
        'city': 'London',
    },
    {
        'code': 'XEV',
        'name': 'Stockholm Central Station',
        'city': 'Stockholm',
    },
    {
        'code': 'XEZ',
        'name': 'Sodertalje',
        'city': 'Sodertalje',
    },
    {
        'code': 'XFD',
        'name': 'Stratford',
        'city': 'Stratford',
    },
    {
        'code': 'XFE',
        'name': 'Parent Rail Service',
        'city': 'Parent',
    },
    {
        'code': 'XFG',
        'name': 'Perce Rail Service',
        'city': 'Perce',
    },
    {
        'code': 'XFJ',
        'name': 'Eskilstuna Station',
        'city': 'Eskilstuna',
    },
    {
        'code': 'XFK',
        'name': 'Senneterre Rail Service',
        'city': 'Senneterre',
    },
    {
        'code': 'XFL',
        'name': 'Shawinigan Rail Station',
        'city': 'Shawinigan',
    },
    {
        'code': 'XFM',
        'name': 'Shawnigan Rail Service',
        'city': 'Cowichan Valley',
    },
    {
        'code': 'XFN',
        'name': 'Xiangfan',
        'city': 'Xiangfan',
    },
    {
        'code': 'XFP',
        'name': 'Malm\u00f6 Station',
        'city': 'Malmo',
    },
    {
        'code': 'XFQ',
        'name': 'Weymont Rail Service',
        'city': 'Weymont',
    },
    {
        'code': 'XFR',
        'name': 'Malmo South Railway',
        'city': 'Malmo',
    },
    {
        'code': 'XFS',
        'name': 'Alexandria',
        'city': 'Alexandria',
    },
    {
        'code': 'XFU',
        'name': 'Tierp Station',
        'city': 'Tierp',
    },
    {
        'code': 'XFV',
        'name': 'Brantford',
        'city': 'Brantford',
    },
    {
        'code': 'XFW',
        'name': 'Finkenwerder Airport',
        'city': 'Hamburg',
    },
    {
        'code': 'XFY',
        'name': 'Sainte Foy Rail Service',
        'city': 'Quebec',
    },
    {
        'code': 'XFZ',
        'name': 'Charny',
        'city': 'Charny',
    },
    {
        'code': 'XGC',
        'name': 'Lund',
        'city': 'Lund',
    },
    {
        'code': 'XGJ',
        'name': 'Cobourg Rail Station',
        'city': 'Cobourg',
    },
    {
        'code': 'XGK',
        'name': 'Coteau Rail Station',
        'city': 'Coteau',
    },
    {
        'code': 'XGM',
        'name': 'England',
        'city': 'Grantham',
    },
    {
        'code': 'XGR',
        'name': 'Kangiqsualujjuaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'XGY',
        'name': 'Ontario',
        'city': 'Grimsby',
    },
    {
        'code': 'XHJ',
        'name': 'Railway Station',
        'city': 'Aix La Chapelle',
    },
    {
        'code': 'XHK',
        'name': 'Valence Station',
        'city': 'Valence',
    },
    {
        'code': 'XHM',
        'name': 'Georgetown Rail Station',
        'city': 'Georgetown',
    },
    {
        'code': 'XHN',
        'name': 'Belgium',
        'city': 'Liege',
    },
    {
        'code': 'XHS',
        'name': 'British Columbia',
        'city': 'Chemainus',
    },
    {
        'code': 'XIA',
        'name': 'Guelph Airport',
        'city': 'Guelph',
    },
    {
        'code': 'XIB',
        'name': 'Ontario',
        'city': 'Ingersoll',
    },
    {
        'code': 'XIC',
        'name': 'Xichang North Airport',
        'city': 'Xichang',
    },
    {
        'code': 'XID',
        'name': 'Maxville Rail Station',
        'city': 'Maxville',
    },
    {
        'code': 'XIF',
        'name': 'Ontario',
        'city': 'Napanee',
    },
    {
        'code': 'XIL',
        'name': 'Xilinhot Airport',
        'city': 'Xilin Hot',
    },
    {
        'code': 'XIM',
        'name': 'Quebec',
        'city': 'Saint Hyacinthe',
    },
    {
        'code': 'XIO',
        'name': 'St Marys Rail Station',
        'city': 'St Marys',
    },
    {
        'code': 'XIP',
        'name': 'Woodstock Rail Service',
        'city': 'Woodstock',
    },
    {
        'code': 'XIT',
        'name': 'London City Airport',
        'city': 'London',
    },
    {
        'code': 'XIY',
        'name': 'Hsien Yang Airport',
        'city': 'Xianyang',
    },
    {
        'code': 'XJL',
        'name': 'Quebec',
        'city': 'Joliette',
    },
    {
        'code': 'XJQ',
        'name': 'Jonquiere Rail Station',
        'city': 'Jonquiere',
    },
    {
        'code': 'XKH',
        'name': 'Xieng Khouang',
        'city': 'Xieng Khouang',
    },
    {
        'code': 'XKL',
        'name': 'Kuala Lumpur Central Station',
        'city': 'Kuala Lumpur',
    },
    {
        'code': 'XKS',
        'name': 'Kasabonika Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'XKV',
        'name': 'Sackville Rail Station',
        'city': 'Sackville',
    },
    {
        'code': 'XLB',
        'name': 'Lac Brochet',
        'city': 'Lac Brochet',
    },
    {
        'code': 'XLJ',
        'name': 'Quebec Stn. Rail Svce.',
        'city': 'Quebec',
    },
    {
        'code': 'XLM',
        'name': 'St Lambert Rail Svce.',
        'city': 'Montreal',
    },
    {
        'code': 'XLQ',
        'name': 'Guildwood',
        'city': 'Guildwood',
    },
    {
        'code': 'XLS',
        'name': 'Saint Louis Airport',
        'city': 'Saint Louis',
    },
    {
        'code': 'XLV',
        'name': 'Ontario',
        'city': 'Niagara Falls',
    },
    {
        'code': 'XLY',
        'name': 'Aldershot Rail Station',
        'city': 'Aldershot',
    },
    {
        'code': 'XLZ',
        'name': 'Nova Scotia',
        'city': 'Truro',
    },
    {
        'code': 'XMH',
        'name': 'Manihi Airport',
        'city': 'Manihi',
    },
    {
        'code': 'XMN',
        'name': 'Xiamen Airport',
        'city': 'Xiamen',
    },
    {
        'code': 'XMS',
        'name': 'Macas Airport',
        'city': 'Z\u00fa\u00f1ac',
    },
    {
        'code': 'XMY',
        'name': 'Yam Island',
        'city': 'Yam Island',
    },
    {
        'code': 'XNA',
        'name': 'Northwest Arkansas Regional Airport',
        'city': 'Bentonville',
    },
    {
        'code': 'XNB',
        'name': 'Sinop Airport',
        'city': 'Santo Ant\u00f4nio do I\u00e7\u00e1',
    },
    {
        'code': 'XNM',
        'name': 'Nottingham Airport',
        'city': 'Nottingham',
    },
    {
        'code': 'XNN',
        'name': 'Xining Airport',
        'city': 'Xining',
    },
    {
        'code': 'XNO',
        'name': 'Northallerton',
        'city': 'Northallerton',
    },
    {
        'code': 'XNV',
        'name': 'Nuneaton Rail Station',
        'city': 'Nuneaton',
    },
    {
        'code': 'XNY',
        'name': 'York',
        'city': 'New York',
    },
    {
        'code': 'XOK',
        'name': 'Ontario',
        'city': 'Oakville',
    },
    {
        'code': 'XOP',
        'name': 'Poitou-Charentes',
        'city': 'Poitiers',
    },
    {
        'code': 'XPB',
        'name': 'Parksville Rail Service',
        'city': 'Parksville',
    },
    {
        'code': 'XPF',
        'name': 'Penrith Rail Station',
        'city': 'Penrith',
    },
    {
        'code': 'XPG',
        'name': 'Gare du Nord Rail Stn',
        'city': 'Paris',
    },
    {
        'code': 'XPJ',
        'name': 'Montpellier Railway Station',
        'city': 'Montpellier',
    },
    {
        'code': 'XPN',
        'name': 'Brampton',
        'city': 'Brampton',
    },
    {
        'code': 'XPQ',
        'name': 'Port Klang',
        'city': 'Port Klang',
    },
    {
        'code': 'XPT',
        'name': 'Preston Rail Station',
        'city': 'Preston',
    },
    {
        'code': 'XPX',
        'name': 'Pointe-aux-Trembles Rail Station',
        'city': 'Pointe-aux-Trembles',
    },
    {
        'code': 'XQE',
        'name': 'United Kingdom',
        'city': 'London',
    },
    {
        'code': 'XQG',
        'name': 'Berwick Station',
        'city': 'Berwick',
    },
    {
        'code': 'XQH',
        'name': 'United Kingdom',
        'city': 'Nottingham',
    },
    {
        'code': 'XQL',
        'name': 'Lancaster Rail Station',
        'city': 'Lancaster',
    },
    {
        'code': 'XQP',
        'name': 'Quepos Managua Airport',
        'city': 'Quepos',
    },
    {
        'code': 'XQU',
        'name': 'Qualicum Beach Airport',
        'city': 'Qualicum Beach',
    },
    {
        'code': 'XRC',
        'name': 'Runcorn Rail Station',
        'city': 'Runcorn',
    },
    {
        'code': 'XRF',
        'name': 'Marseille Railway',
        'city': 'Marseille',
    },
    {
        'code': 'XRP',
        'name': 'Pine Ridge Rail Station',
        'city': 'Pine Ridge',
    },
    {
        'code': 'XRU',
        'name': 'Rugby Rail Station',
        'city': 'Rugby',
    },
    {
        'code': 'XRY',
        'name': 'Jerez Airport',
        'city': 'Jerez',
    },
    {
        'code': 'XSC',
        'name': 'South Caicos Airport',
        'city': 'Cockburn Harbour',
    },
    {
        'code': 'XSH',
        'name': 'Centre',
        'city': 'Tours',
    },
    {
        'code': 'XSI',
        'name': 'South Indian Lake Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'XSP',
        'name': 'Seletar Airport',
        'city': 'Singapore',
    },
    {
        'code': 'XSR',
        'name': 'England',
        'city': 'Salisbury',
    },
    {
        'code': 'XTG',
        'name': 'Thargomindah Aerodrome',
        'city': 'Thargomindah',
    },
    {
        'code': 'XTK',
        'name': 'England',
        'city': 'Thirsk',
    },
    {
        'code': 'XTL',
        'name': 'Tadoule Lake Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'XTY',
        'name': 'Strathroy Rail Station',
        'city': 'Strathroy',
    },
    {
        'code': 'XUZ',
        'name': 'Jiangsu',
        'city': 'Xuzhou',
    },
    {
        'code': 'XVA',
        'name': 'England',
        'city': 'Stockport',
    },
    {
        'code': 'XVB',
        'name': 'England',
        'city': 'Stafford',
    },
    {
        'code': 'XVC',
        'name': 'United Kingdom',
        'city': 'Crewe',
    },
    {
        'code': 'XVG',
        'name': 'Longville Municipal Airport',
        'city': 'Longville',
    },
    {
        'code': 'XVH',
        'name': 'United Kingdom',
        'city': 'Peterborough',
    },
    {
        'code': 'XVJ',
        'name': 'Stevenage Rail Station',
        'city': 'Stevenage',
    },
    {
        'code': 'XVU',
        'name': 'Durham Rail Station',
        'city': 'Durham',
    },
    {
        'code': 'XVV',
        'name': 'Belleville Rail Service',
        'city': 'Belleville',
    },
    {
        'code': 'XVW',
        'name': 'Belleville',
        'city': 'Belleville',
    },
    {
        'code': 'XWD',
        'name': 'Wakefield Westgate Rail Station',
        'city': 'Wakefield Westgate',
    },
    {
        'code': 'XWH',
        'name': 'Stroke on Trent Rail Station',
        'city': 'Stroke on Trent',
    },
    {
        'code': 'XWK',
        'name': 'Karlskrona Rail Svc.',
        'city': 'Karlskrona',
    },
    {
        'code': 'XWL',
        'name': 'Gothenburg',
        'city': 'Gothenburg',
    },
    {
        'code': 'XWM',
        'name': 'Hallsberg Rail Station',
        'city': 'Hallsberg',
    },
    {
        'code': 'XWN',
        'name': 'England',
        'city': 'Warrington',
    },
    {
        'code': 'XWP',
        'name': 'Sweden',
        'city': 'Hassleholm',
    },
    {
        'code': 'XWQ',
        'name': 'Sweden',
        'city': 'Enkoping',
    },
    {
        'code': 'XWR',
        'name': 'Orebro Railway Station',
        'city': 'Orebro',
    },
    {
        'code': 'XWS',
        'name': 'United Kingdom',
        'city': 'Swindon',
    },
    {
        'code': 'XWV',
        'name': 'Varberg Rail Station',
        'city': 'Varberg',
    },
    {
        'code': 'XWY',
        'name': 'Wyoming Rail Station',
        'city': 'Wyoming',
    },
    {
        'code': 'XWZ',
        'name': 'Sweden',
        'city': 'Nykoping',
    },
    {
        'code': 'XXA',
        'name': 'Sweden',
        'city': 'Alvesta',
    },
    {
        'code': 'XXD',
        'name': 'Degerfors Rail Station',
        'city': 'Degerfors',
    },
    {
        'code': 'XXK',
        'name': 'Katrineholm',
        'city': 'Katrineholm',
    },
    {
        'code': 'XXM',
        'name': 'Mjolby',
        'city': 'Mjolby',
    },
    {
        'code': 'XXN',
        'name': 'Riyadh Air Base',
        'city': 'Riyadh',
    },
    {
        'code': 'XXO',
        'name': 'Leksand Rail Station',
        'city': 'Leksand',
    },
    {
        'code': 'XXT',
        'name': 'Sophia Antipolis Heliport',
        'city': 'Valbonne',
    },
    {
        'code': 'XXU',
        'name': 'Sweden',
        'city': 'Hedemora',
    },
    {
        'code': 'XXZ',
        'name': 'Sundsvall Railway Station',
        'city': 'Sundsvall',
    },
    {
        'code': 'XYA',
        'name': 'Yandina',
        'city': 'Yandina',
    },
    {
        'code': 'XYB',
        'name': 'Borlange',
        'city': 'Borl\u00e4nge',
    },
    {
        'code': 'XYC',
        'name': 'Sweden',
        'city': 'Herrljunga',
    },
    {
        'code': 'XYD',
        'name': 'Lyon Part-Dieu Railway Station',
        'city': 'Lyon',
    },
    {
        'code': 'XYF',
        'name': 'Falkoping Rail Station',
        'city': 'Falkoping',
    },
    {
        'code': 'XYH',
        'name': 'Helsingborg Railway',
        'city': 'Helsingborg',
    },
    {
        'code': 'XYI',
        'name': 'Sweden',
        'city': 'Flen',
    },
    {
        'code': 'XYK',
        'name': 'Norrkoping Railway Service',
        'city': 'Norrkoping',
    },
    {
        'code': 'XYN',
        'name': 'Kristinehamn',
        'city': 'Kristinehamn',
    },
    {
        'code': 'XYP',
        'name': 'Kyrlbo',
        'city': 'Avesta Krylbo',
    },
    {
        'code': 'XYQ',
        'name': 'Angelholm Railway Svc.',
        'city': 'Angelholm\/Helsingborg',
    },
    {
        'code': 'XYX',
        'name': 'Sala',
        'city': 'Sala',
    },
    {
        'code': 'XYY',
        'name': 'Arvika Airport',
        'city': 'Arvika',
    },
    {
        'code': 'XYZ',
        'name': 'Harnosand Rail Station',
        'city': 'Harnosand',
    },
    {
        'code': 'XZB',
        'name': 'Casselman Rail Station',
        'city': 'Casselman',
    },
    {
        'code': 'XZC',
        'name': 'Glencoe',
        'city': 'Glencoe',
    },
    {
        'code': 'XZJ',
        'name': 'Rail',
        'city': 'Rail (Generic)',
    },
    {
        'code': 'XZL',
        'name': 'Edmonton International Airport',
        'city': 'Edmonton',
    },
    {
        'code': 'XZM',
        'name': 'Macau Ferry',
        'city': 'Macau',
    },
    {
        'code': 'XZN',
        'name': 'Avignon',
        'city': 'Avignon',
    },
    {
        'code': 'XZO',
        'name': 'Oslo Central Station',
        'city': 'Oslo',
    },
    {
        'code': 'XZU',
        'name': 'Off line Point',
        'city': 'Rail (Generic)',
    },
    {
        'code': 'XZV',
        'name': 'TGV Station',
        'city': 'Toulon',
    },
    {
        'code': 'YAA',
        'name': 'Anahim Lake Airport',
        'city': 'Alexis Creek',
    },
    {
        'code': 'YAC',
        'name': 'Cat Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YAG',
        'name': 'Fort Frances Municipal Airport',
        'city': 'Fort Frances',
    },
    {
        'code': 'YAK',
        'name': 'Yakutat Airport',
        'city': 'Yakutat',
    },
    {
        'code': 'YAM',
        'name': 'Sault Ste Marie Airport',
        'city': 'Sault Ste. Marie',
    },
    {
        'code': 'YAO',
        'name': 'Yaounde Airport',
        'city': 'Yaounde',
    },
    {
        'code': 'YAP',
        'name': 'Yap International Airport',
        'city': 'Colonia',
    },
    {
        'code': 'YAT',
        'name': 'Attawapiskat Airport',
        'city': 'Winisk',
    },
    {
        'code': 'YAX',
        'name': 'Angling Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YAY',
        'name': 'St Anthony Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YAZ',
        'name': 'Tofino Airport',
        'city': 'Lake Cowichan',
    },
    {
        'code': 'YBB',
        'name': 'Pelly Bay Townsite Airport',
        'city': 'Cambridge Bay',
    },
    {
        'code': 'YBC',
        'name': 'Baie Comeau Airport',
        'city': 'Betsiamites',
    },
    {
        'code': 'YBG',
        'name': 'Bagotville Airport',
        'city': 'Saguenay',
    },
    {
        'code': 'YBI',
        'name': 'Black Tickle Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YBK',
        'name': 'Baker Lake Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YBL',
        'name': 'Campbell River Airport',
        'city': 'Gold River',
    },
    {
        'code': 'YBP',
        'name': 'Yibin',
        'city': 'Yibin',
    },
    {
        'code': 'YBR',
        'name': 'Brandon Airport',
        'city': 'Killarney',
    },
    {
        'code': 'YBT',
        'name': 'Brochet',
        'city': 'Brochet',
    },
    {
        'code': 'YBV',
        'name': 'Berens River Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YBW',
        'name': 'Bedwell Harbor',
        'city': 'Bedwell Harbor',
    },
    {
        'code': 'YBX',
        'name': 'Lourdes-De-Blanc-Sablon Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'YBZ',
        'name': 'Toronto Downtown Airport',
        'city': 'Toronto',
    },
    {
        'code': 'YCA',
        'name': 'Courtenay Airport',
        'city': 'Courtenay',
    },
    {
        'code': 'YCB',
        'name': 'Cambridge Bay Airport',
        'city': 'Cambridge Bay',
    },
    {
        'code': 'YCC',
        'name': 'Cornwall Regional Airport',
        'city': 'Moose Creek',
    },
    {
        'code': 'YCD',
        'name': 'Nanaimo Airport',
        'city': 'Nanaimo',
    },
    {
        'code': 'YCG',
        'name': 'Castlegar Airport',
        'city': 'Castlegar',
    },
    {
        'code': 'YCK',
        'name': 'Colville Lake Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YCM',
        'name': 'St Catharines Airport',
        'city': 'Fonthill',
    },
    {
        'code': 'YCO',
        'name': 'Coppermine Airport',
        'city': 'Cambridge Bay',
    },
    {
        'code': 'YCR',
        'name': 'Cross Lake Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YCS',
        'name': 'Chesterfield Inlet Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YCU',
        'name': 'Cullaton Lake Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YCY',
        'name': 'Clyde River Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YDA',
        'name': 'Dawson Airport',
        'city': 'Dawson',
    },
    {
        'code': 'YDF',
        'name': 'Deer Lake Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YDN',
        'name': 'Dauphin Airport',
        'city': 'Dauphin',
    },
    {
        'code': 'YDP',
        'name': 'Nain Airport',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YDQ',
        'name': 'Dawson Creek Airport',
        'city': 'Dawson Creek',
    },
    {
        'code': 'YEG',
        'name': 'Edmonton International Airport',
        'city': 'Leduc',
    },
    {
        'code': 'YEI',
        'name': 'Bursa',
        'city': 'Bursa',
    },
    {
        'code': 'YEK',
        'name': 'Arviat Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YER',
        'name': 'Fort Severn Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YES',
        'name': 'Yasouj',
        'city': 'Yasouj',
    },
    {
        'code': 'YEV',
        'name': 'Inuvik Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YFA',
        'name': 'Fort Albany Airport',
        'city': 'Winisk',
    },
    {
        'code': 'YFB',
        'name': 'Iqaluit Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YFC',
        'name': 'Fredericton Airport',
        'city': 'Fredericton',
    },
    {
        'code': 'YFH',
        'name': 'Fort Hope Airport',
        'city': 'Marathon',
    },
    {
        'code': 'YFJ',
        'name': 'Snare Lake',
        'city': 'Snare Lake',
    },
    {
        'code': 'YFO',
        'name': 'Flin Flon Airport',
        'city': 'Flin Flon',
    },
    {
        'code': 'YFS',
        'name': 'Fort Simpson Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YFX',
        'name': 'Fox Harbour Aerodrome',
        'city': 'St. Anthony',
    },
    {
        'code': 'YGB',
        'name': 'Gillies Bay Airport',
        'city': 'Gibsons',
    },
    {
        'code': 'YGG',
        'name': 'Ganges Harbor Airport',
        'city': 'Saltspring Island',
    },
    {
        'code': 'YGH',
        'name': 'Fort Good Hope Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YGJ',
        'name': 'Yonago Airport',
        'city': 'Sakaiminato-shi',
    },
    {
        'code': 'YGK',
        'name': 'Kingston Airport',
        'city': 'Kingston',
    },
    {
        'code': 'YGL',
        'name': 'La Grande Riviere Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YGO',
        'name': 'Gods Lake Narrows Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YGP',
        'name': 'Gaspe Airport',
        'city': 'Gasp\u00e9',
    },
    {
        'code': 'YGR',
        'name': 'Iles de la Madeleine Airport',
        'city': 'Fatima',
    },
    {
        'code': 'YGT',
        'name': 'Igloolik Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YGV',
        'name': 'Harve-St-Pierre Airport',
        'city': 'Havre St Pierre',
    },
    {
        'code': 'YGW',
        'name': 'Kuujjuarapik Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YGX',
        'name': 'Gillam Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YGZ',
        'name': 'Grise Fiord Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YHA',
        'name': 'Port Hope Simpson Aerodrome',
        'city': 'St. Anthony',
    },
    {
        'code': 'YHB',
        'name': 'Hudson Bay Airport',
        'city': 'Melfort',
    },
    {
        'code': 'YHD',
        'name': 'Dryden Regional Airport',
        'city': 'Dryden',
    },
    {
        'code': 'YHG',
        'name': 'Charlottetown Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YHI',
        'name': 'Holman Airport',
        'city': 'Holman',
    },
    {
        'code': 'YHK',
        'name': 'Gjoa Haven Airport',
        'city': 'Cambridge Bay',
    },
    {
        'code': 'YHM',
        'name': 'Hamilton Airport',
        'city': 'Beamsville',
    },
    {
        'code': 'YHO',
        'name': 'Hopedale Airport',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YHP',
        'name': 'Poplar Hill Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YHR',
        'name': 'Harrington Harbour Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'YHS',
        'name': 'Sechelt Water Aerodrome',
        'city': 'Gibsons',
    },
    {
        'code': 'YHU',
        'name': 'Montreal St Hubert Airport',
        'city': 'St-Hubert',
    },
    {
        'code': 'YHY',
        'name': 'Hay River Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YHZ',
        'name': 'Halifax International Airport',
        'city': 'Fall River',
    },
    {
        'code': 'YIF',
        'name': 'Pakuashipi Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'YIH',
        'name': 'China',
        'city': 'Yichang',
    },
    {
        'code': 'YIK',
        'name': 'Ivujivik Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YIN',
        'name': 'Yining',
        'city': 'Yining',
    },
    {
        'code': 'YIO',
        'name': 'Pond Inlet Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YIP',
        'name': 'Willow Run Airport',
        'city': 'Ypsilanti',
    },
    {
        'code': 'YIV',
        'name': 'Island Lake-Garden Hill Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YIW',
        'name': 'Yiwu',
        'city': 'Yiwu',
    },
    {
        'code': 'YJT',
        'name': 'Stephenville International Airport',
        'city': 'Stephenville',
    },
    {
        'code': 'YKA',
        'name': 'Kamloops Airport',
        'city': 'Kamloops',
    },
    {
        'code': 'YKF',
        'name': 'Kitchener Airport',
        'city': 'Kitchener',
    },
    {
        'code': 'YKG',
        'name': 'Kangirsuk Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YKL',
        'name': 'Schefferville Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YKM',
        'name': 'Yakima Air Terminal',
        'city': 'Yakima',
    },
    {
        'code': 'YKQ',
        'name': 'Waskaganish Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YKS',
        'name': 'Yakutsk Airport',
        'city': 'Yakutsk',
    },
    {
        'code': 'YKT',
        'name': 'Klemtu Water Aerodrome',
        'city': 'Masset',
    },
    {
        'code': 'YKU',
        'name': 'Chisasibi Aerodrome',
        'city': 'Chisasibi',
    },
    {
        'code': 'YLC',
        'name': 'Lake Harbour Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YLE',
        'name': 'Lac la Martre Aerodrome',
        'city': 'Hay River',
    },
    {
        'code': 'YLH',
        'name': 'Lansdowne House Airport',
        'city': 'Marathon',
    },
    {
        'code': 'YLL',
        'name': 'Lloydminster Airport',
        'city': 'Vegreville',
    },
    {
        'code': 'YLQ',
        'name': 'La Tuque Airport',
        'city': 'La Tuque',
    },
    {
        'code': 'YLW',
        'name': 'Kelowna International Airport',
        'city': 'Kelowna',
    },
    {
        'code': 'YMH',
        'name': 'Mary\'s Harbour Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YMM',
        'name': 'Fort Mcmurray Airport',
        'city': 'Fort Chipewyan',
    },
    {
        'code': 'YMN',
        'name': 'Makkovik Airport',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YMO',
        'name': 'Moosonee Airport',
        'city': 'Winisk',
    },
    {
        'code': 'YMT',
        'name': 'A\u00e9roport de Chapais-Chibougamau',
        'city': 'M\u00e9tabetchouan',
    },
    {
        'code': 'YMX',
        'name': 'Mirabel International Airport',
        'city': 'Mirabel',
    },
    {
        'code': 'YMY',
        'name': 'Downtown Rail Station',
        'city': 'Montreal',
    },
    {
        'code': 'YNA',
        'name': 'Natashquan Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'YNB',
        'name': 'Yenbo Airport',
        'city': 'Yanbu al Bahr',
    },
    {
        'code': 'YNC',
        'name': 'Wemindji Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YND',
        'name': 'Ottawa Gatineau Airport',
        'city': 'Gatineau',
    },
    {
        'code': 'YNE',
        'name': 'Norway House Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YNG',
        'name': 'Youngstown-Warren Regional Airport',
        'city': 'Vienna',
    },
    {
        'code': 'YNJ',
        'name': 'Yanji',
        'city': 'Yanji',
    },
    {
        'code': 'YNO',
        'name': 'North Spirit Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YNP',
        'name': 'Natuashish',
        'city': 'Natuashish',
    },
    {
        'code': 'YNS',
        'name': 'Nemiscau Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YNT',
        'name': 'Yantai Airport',
        'city': 'Yantai',
    },
    {
        'code': 'YNY',
        'name': 'Yang Yang International Airport',
        'city': 'Sonyang-Myeon',
    },
    {
        'code': 'YNZ',
        'name': 'Yancheng',
        'city': 'Yancheng',
    },
    {
        'code': 'YOC',
        'name': 'Old Crow Airport',
        'city': 'Dawson',
    },
    {
        'code': 'YOG',
        'name': 'Ogoki Aerodrome',
        'city': 'Marathon',
    },
    {
        'code': 'YOH',
        'name': 'Oxford House Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YOJ',
        'name': 'High Level Airport',
        'city': 'Brownvale',
    },
    {
        'code': 'YOO',
        'name': 'Oshawa Airport',
        'city': 'Oshawa',
    },
    {
        'code': 'YOP',
        'name': 'Rainbow Lake Airport',
        'city': 'Brownvale',
    },
    {
        'code': 'YOW',
        'name': 'Ottawa International Airport',
        'city': 'Ottawa',
    },
    {
        'code': 'YPB',
        'name': 'Port Alberni Airport',
        'city': 'Lake Cowichan',
    },
    {
        'code': 'YPC',
        'name': 'Paulatuk Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YPE',
        'name': 'Peace River Airport',
        'city': 'Brownvale',
    },
    {
        'code': 'YPH',
        'name': 'Inukjuak Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YPJ',
        'name': 'Aupaluk Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YPL',
        'name': 'Pickle Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YPM',
        'name': 'Pikangikum Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YPO',
        'name': 'Peawanuck Airport',
        'city': 'Winisk',
    },
    {
        'code': 'YPR',
        'name': 'Prince Rupert Airport',
        'city': 'Prince Rupert',
    },
    {
        'code': 'YPW',
        'name': 'Powell River Airport',
        'city': 'Powell River',
    },
    {
        'code': 'YPX',
        'name': 'Povungnituk Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YPZ',
        'name': 'Burns Lake Airport',
        'city': 'Smithers',
    },
    {
        'code': 'YQB',
        'name': 'Quebec Airport',
        'city': 'Ste-Foy',
    },
    {
        'code': 'YQC',
        'name': 'Quaqtaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YQD',
        'name': 'The Pas Airport',
        'city': 'The Pas',
    },
    {
        'code': 'YQF',
        'name': 'Red Deer Regional Airport',
        'city': 'Sylvan Lake',
    },
    {
        'code': 'YQG',
        'name': 'Windsor Airport',
        'city': 'Windsor',
    },
    {
        'code': 'YQK',
        'name': 'Kenora Airport',
        'city': 'Kenora',
    },
    {
        'code': 'YQL',
        'name': 'Lethbridge Airport',
        'city': 'Pincher',
    },
    {
        'code': 'YQM',
        'name': 'Greater Moncton International Airport',
        'city': 'Moncton',
    },
    {
        'code': 'YQN',
        'name': 'Nakina Airport',
        'city': 'Marathon',
    },
    {
        'code': 'YQQ',
        'name': 'Comox Airport',
        'city': 'Comox',
    },
    {
        'code': 'YQR',
        'name': 'Regina Airport',
        'city': 'Regina',
    },
    {
        'code': 'YQT',
        'name': 'Thunder Bay International Airport',
        'city': 'Thunder Bay',
    },
    {
        'code': 'YQU',
        'name': 'Grande Prairie Airport',
        'city': 'Brownvale',
    },
    {
        'code': 'YQX',
        'name': 'Gander International Airport',
        'city': 'Gander',
    },
    {
        'code': 'YQY',
        'name': 'Sydney Airport',
        'city': 'Sydney',
    },
    {
        'code': 'YQZ',
        'name': 'Quesnel Airport',
        'city': 'Quesnel',
    },
    {
        'code': 'YRA',
        'name': 'Rae Lakes Aerodrome',
        'city': 'Hay River',
    },
    {
        'code': 'YRB',
        'name': 'Resolute Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YRF',
        'name': 'Cartwright Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YRG',
        'name': 'Rigolet Aerodrome',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YRJ',
        'name': 'Roberval Airport',
        'city': 'Roberval',
    },
    {
        'code': 'YRL',
        'name': 'Red Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YRS',
        'name': 'Red Sucker Lake Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YRT',
        'name': 'Rankin Inlet Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YSB',
        'name': 'Sudbury Airport',
        'city': 'Garson',
    },
    {
        'code': 'YSG',
        'name': 'Snowdrift Aerodrome',
        'city': 'Hay River',
    },
    {
        'code': 'YSH',
        'name': 'Smiths Falls Montague Township Russ Beach Airpor',
        'city': 'Smiths Falls',
    },
    {
        'code': 'YSJ',
        'name': 'Saint John Airport',
        'city': 'St. John',
    },
    {
        'code': 'YSK',
        'name': 'Sanikiluaq Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YSM',
        'name': 'Fort Smith Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YSO',
        'name': 'Postville Aerodrome',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YSR',
        'name': 'Nanisivik Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YST',
        'name': 'Shante Airport',
        'city': 'Meiktila',
    },
    {
        'code': 'YSY',
        'name': 'Sachs Harbour Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YTD',
        'name': 'Thicket Portage Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YTE',
        'name': 'Cape Dorset Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YTF',
        'name': 'Alma',
        'city': 'Alma',
    },
    {
        'code': 'YTH',
        'name': 'Thompson Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YTL',
        'name': 'Big Trout Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YTM',
        'name': 'La Macaza',
        'city': 'Mont Tremblant',
    },
    {
        'code': 'YTQ',
        'name': 'Tasiujuaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YTS',
        'name': 'Timmins Airport',
        'city': 'South Porcupine',
    },
    {
        'code': 'YTZ',
        'name': 'Toronto City Centre Airport',
        'city': 'Toronto',
    },
    {
        'code': 'YUB',
        'name': 'Tuktoyaktuk Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YUD',
        'name': 'Umiujaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YUL',
        'name': 'A\u00e9roport International Pierre-Elliott-Trudeau d',
        'city': 'Dorval',
    },
    {
        'code': 'YUM',
        'name': 'Yuma International Airport',
        'city': 'Yuma',
    },
    {
        'code': 'YUT',
        'name': 'Repulse Bay Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YUX',
        'name': 'Hall Beach Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YUY',
        'name': 'Rouyn Noranda Airport',
        'city': '\u00c9vain',
    },
    {
        'code': 'YVA',
        'name': 'Moroni Iconi Airport',
        'city': 'Moroni',
    },
    {
        'code': 'YVB',
        'name': 'Bonaventure Airport',
        'city': 'Perc\u00e9',
    },
    {
        'code': 'YVM',
        'name': 'Broughton Island Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YVO',
        'name': 'Val d\'or Airport',
        'city': 'Val-d\'or',
    },
    {
        'code': 'YVP',
        'name': 'Kuujjuaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YVQ',
        'name': 'Norman Wells Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YVR',
        'name': 'Vancouver International Airport',
        'city': 'Richmond',
    },
    {
        'code': 'YVZ',
        'name': 'Deer Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'YWB',
        'name': 'Kangiqsujuaq Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YWG',
        'name': 'Winnipeg International Airport',
        'city': 'Winnipeg',
    },
    {
        'code': 'YWH',
        'name': 'Inner Harbour Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YWJ',
        'name': 'Fort Franklin Airport',
        'city': 'Hay River',
    },
    {
        'code': 'YWK',
        'name': 'Wabush Airport',
        'city': 'Wabush',
    },
    {
        'code': 'YWL',
        'name': 'Williams Lake Airport',
        'city': 'Williams Lake',
    },
    {
        'code': 'YWM',
        'name': 'Williams Harbour Airport',
        'city': 'St. Anthony',
    },
    {
        'code': 'YWP',
        'name': 'Webequie Airport',
        'city': 'Marathon',
    },
    {
        'code': 'YWS',
        'name': 'Green Lake Water Aerodrome',
        'city': 'Gibsons',
    },
    {
        'code': 'YXC',
        'name': 'Cranbrook Airport',
        'city': 'Cranbrook',
    },
    {
        'code': 'YXE',
        'name': 'John G Diefenbaker International Airport',
        'city': 'Saskatoon',
    },
    {
        'code': 'YXH',
        'name': 'Medicine Hat Airport',
        'city': 'Medicine Hat',
    },
    {
        'code': 'YXJ',
        'name': 'North Peace Airport',
        'city': 'Fort St. John',
    },
    {
        'code': 'YXK',
        'name': 'Rimouski Airport',
        'city': 'Rimouski',
    },
    {
        'code': 'YXL',
        'name': 'Sioux Lookout Airport',
        'city': 'Sioux Lookout',
    },
    {
        'code': 'YXN',
        'name': 'Whale Cove Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YXP',
        'name': 'Pangnirtung Airport',
        'city': 'Iqaluit',
    },
    {
        'code': 'YXS',
        'name': 'Prince George Airport',
        'city': 'Prince George',
    },
    {
        'code': 'YXT',
        'name': 'Terrace Airport',
        'city': 'Terrace',
    },
    {
        'code': 'YXU',
        'name': 'London International Airport',
        'city': 'London',
    },
    {
        'code': 'YXX',
        'name': 'Abbotsford International Airport',
        'city': 'Abbotsford',
    },
    {
        'code': 'YXY',
        'name': 'Whitehorse International Airport',
        'city': 'Whitehorse',
    },
    {
        'code': 'YYB',
        'name': 'North Bay Airport',
        'city': 'North Bay',
    },
    {
        'code': 'YYC',
        'name': 'Calgary International Airport',
        'city': 'Calgary',
    },
    {
        'code': 'YYD',
        'name': 'Smithers Airport',
        'city': 'Smithers',
    },
    {
        'code': 'YYE',
        'name': 'Fort Nelson Airport',
        'city': 'Fort Nelson',
    },
    {
        'code': 'YYF',
        'name': 'Penticton Airport',
        'city': 'Penticton',
    },
    {
        'code': 'YYG',
        'name': 'Charlottetown Airport',
        'city': 'Charlottetown',
    },
    {
        'code': 'YYH',
        'name': 'Taloyoak Airport',
        'city': 'Cambridge Bay',
    },
    {
        'code': 'YYJ',
        'name': 'Victoria International Airport',
        'city': 'Sidney',
    },
    {
        'code': 'YYL',
        'name': 'Lynn Lake Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YYQ',
        'name': 'Churchill Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'YYR',
        'name': 'Goose Bay Airport',
        'city': 'Happy Valley-Goose Bay',
    },
    {
        'code': 'YYT',
        'name': 'St John\'s International Airport',
        'city': 'St. John\'s',
    },
    {
        'code': 'YYU',
        'name': 'Kapuskasing Airport',
        'city': 'Kapuskasing',
    },
    {
        'code': 'YYY',
        'name': 'Mont Joli Airport',
        'city': 'Mont-Joli',
    },
    {
        'code': 'YYZ',
        'name': 'Toronto Lester B Pearson International Airport',
        'city': 'Mississauga',
    },
    {
        'code': 'YZF',
        'name': 'Yellowknife Airport',
        'city': 'Yellowknife',
    },
    {
        'code': 'YZG',
        'name': 'Salluit Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'YZP',
        'name': 'Sandspit Airport',
        'city': 'Masset',
    },
    {
        'code': 'YZR',
        'name': 'Sarnia Airport',
        'city': 'Sarnia',
    },
    {
        'code': 'YZS',
        'name': 'Coral Harbour Airport',
        'city': 'Chesterfield Inlet',
    },
    {
        'code': 'YZT',
        'name': 'Port Hardy Airport',
        'city': 'Gibsons',
    },
    {
        'code': 'YZV',
        'name': 'Sept Iles Airport',
        'city': 'Sept-\u00celes',
    },
    {
        'code': 'YZZ',
        'name': 'Trail Airport',
        'city': 'Trail',
    },
    {
        'code': 'ZAC',
        'name': 'York Landing Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'ZAD',
        'name': 'Zadar Airport',
        'city': 'Zadar',
    },
    {
        'code': 'ZAG',
        'name': 'Zagreb Airport',
        'city': 'Nagygoricza',
    },
    {
        'code': 'ZAH',
        'name': 'Zahedan International Airport',
        'city': 'Dowzdab',
    },
    {
        'code': 'ZAL',
        'name': 'Pichoy Airport',
        'city': 'Pelchuquin',
    },
    {
        'code': 'ZAM',
        'name': 'Zamboanga International Airport',
        'city': 'Zamboanga',
    },
    {
        'code': 'ZAQ',
        'name': 'Bavaria',
        'city': 'Nuremberg',
    },
    {
        'code': 'ZAT',
        'name': 'Zhaotong',
        'city': 'Zhaotong',
    },
    {
        'code': 'ZAZ',
        'name': 'Zaragoza Air Base',
        'city': 'Zaragoza',
    },
    {
        'code': 'ZBA',
        'name': 'Switzerland',
        'city': 'Basel',
    },
    {
        'code': 'ZBF',
        'name': 'Bathurst Airport',
        'city': 'Bathurst',
    },
    {
        'code': 'ZBL',
        'name': 'Australia',
        'city': 'Biloela',
    },
    {
        'code': 'ZBP',
        'name': 'Baltimore',
        'city': 'Baltimore',
    },
    {
        'code': 'ZBR',
        'name': 'Chah Bahar Airport',
        'city': 'Chabahar',
    },
    {
        'code': 'ZCB',
        'name': 'Skopje Airport',
        'city': 'Skopje',
    },
    {
        'code': 'ZCL',
        'name': 'Zacatecas Airport',
        'city': 'P\u00e1nuco',
    },
    {
        'code': 'ZCO',
        'name': 'Maquehue Airport',
        'city': 'Padre Las Casas',
    },
    {
        'code': 'ZDH',
        'name': 'Basel SBB station',
        'city': 'Basel',
    },
    {
        'code': 'ZDN',
        'name': 'Kingsford Smith Airport',
        'city': 'Sydney',
    },
    {
        'code': 'ZDU',
        'name': 'London City Airport',
        'city': 'London',
    },
    {
        'code': 'ZEE',
        'name': 'Kelsey Airport',
        'city': 'Kelsey',
    },
    {
        'code': 'ZEI',
        'name': 'Zei',
        'city': 'Zei',
    },
    {
        'code': 'ZEJ',
        'name': 'Satu Mare Airport',
        'city': 'Satu Mare',
    },
    {
        'code': 'ZEL',
        'name': 'Bella Bella Airport',
        'city': 'Masset',
    },
    {
        'code': 'ZEM',
        'name': 'East Main Airport',
        'city': 'Chisasibi',
    },
    {
        'code': 'ZEP',
        'name': 'London',
        'city': 'London',
    },
    {
        'code': 'ZEU',
        'name': 'Zeu',
        'city': 'Zeu',
    },
    {
        'code': 'ZFI',
        'name': 'England',
        'city': 'Chesterfield',
    },
    {
        'code': 'ZFJ',
        'name': 'France',
        'city': 'Rennes',
    },
    {
        'code': 'ZFM',
        'name': 'Fort Mcpherson Airport',
        'city': 'Hay River',
    },
    {
        'code': 'ZFN',
        'name': 'Fort Norman Airport',
        'city': 'Hay River',
    },
    {
        'code': 'ZFQ',
        'name': 'France',
        'city': 'Bordeaux',
    },
    {
        'code': 'ZFV',
        'name': 'Philadelphia Rail',
        'city': 'Philadelphia',
    },
    {
        'code': 'ZFZ',
        'name': 'New York',
        'city': 'Buffalo',
    },
    {
        'code': 'ZGD',
        'name': 'New London',
        'city': 'Groton',
    },
    {
        'code': 'ZGG',
        'name': 'United Kingdom',
        'city': 'Glasgow',
    },
    {
        'code': 'ZGH',
        'name': 'Copenhagen Main Station',
        'city': 'Copenhagen',
    },
    {
        'code': 'ZGI',
        'name': 'Gods River Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'ZGN',
        'name': 'Zhongshan Ferry Port',
        'city': 'Zhongshan',
    },
    {
        'code': 'ZGO',
        'name': 'Gotha',
        'city': 'Gotha',
    },
    {
        'code': 'ZGS',
        'name': 'Gethsemani Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'ZGU',
        'name': 'Gaua Airport',
        'city': 'Gaua',
    },
    {
        'code': 'ZHA',
        'name': 'Zhanjiang Airport',
        'city': 'Zhanjiang',
    },
    {
        'code': 'ZHO',
        'name': 'Bus Station',
        'city': 'Houston',
    },
    {
        'code': 'ZIF',
        'name': 'Fallowfield Railway',
        'city': 'Ottawa',
    },
    {
        'code': 'ZIG',
        'name': 'Ziguinchor Airport',
        'city': 'Ziguinchor',
    },
    {
        'code': 'ZIH',
        'name': 'Ixtapa Zihuatanejo International Airport',
        'city': 'Petatl\u00e1n',
    },
    {
        'code': 'ZIV',
        'name': 'Inverness Rail Station',
        'city': 'Inverness',
    },
    {
        'code': 'ZJT',
        'name': 'Tanjung',
        'city': 'Tanjung Pelepas',
    },
    {
        'code': 'ZKE',
        'name': 'Kaschechewan Airport',
        'city': 'Winisk',
    },
    {
        'code': 'ZKG',
        'name': 'Kegaska Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'ZLN',
        'name': 'Le Mans',
        'city': 'Le Mans',
    },
    {
        'code': 'ZLO',
        'name': 'Playa de Oro International Airport',
        'city': 'Manzanillo',
    },
    {
        'code': 'ZLS',
        'name': 'England',
        'city': 'London',
    },
    {
        'code': 'ZLT',
        'name': 'La Tabatiere Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'ZLY',
        'name': 'Albany International Airport',
        'city': 'Albany',
    },
    {
        'code': 'ZMB',
        'name': 'Hamburg Hauptbahnhof',
        'city': 'Hamburg',
    },
    {
        'code': 'ZME',
        'name': 'New Jersey',
        'city': 'Newark',
    },
    {
        'code': 'ZML',
        'name': 'General Mitchell International Airport',
        'city': 'Milwaukee',
    },
    {
        'code': 'ZMT',
        'name': 'Masset Airport',
        'city': 'Masset',
    },
    {
        'code': 'ZMU',
        'name': 'Bavaria',
        'city': 'Munich',
    },
    {
        'code': 'ZMY',
        'name': 'Huangpu Harbour',
        'city': 'Huangpu',
    },
    {
        'code': 'ZNA',
        'name': 'Nanaimo Harbour Airport',
        'city': 'Nanaimo',
    },
    {
        'code': 'ZNB',
        'name': 'Sinop Airport',
        'city': 'Santo Ant\u00f4nio do I\u00e7\u00e1',
    },
    {
        'code': 'ZNE',
        'name': 'Newman Airport',
        'city': 'Newman',
    },
    {
        'code': 'ZNV',
        'name': 'Santa Elena Airport',
        'city': 'Santa Elena de Uair\u00e9n',
    },
    {
        'code': 'ZNZ',
        'name': 'Zanzibar Airport',
        'city': 'Stone Town',
    },
    {
        'code': 'ZOS',
        'name': 'Canal Bajo Carlos H Siebert Airport',
        'city': 'Osorno',
    },
    {
        'code': 'ZPB',
        'name': 'Sachigo Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'ZQN',
        'name': 'Frankton Airport',
        'city': 'Queenstown',
    },
    {
        'code': 'ZQW',
        'name': 'Rheinland-Pfalz',
        'city': 'Zweibrucken',
    },
    {
        'code': 'ZRB',
        'name': 'Frankfurt International Airport',
        'city': 'Frankfurt',
    },
    {
        'code': 'ZRD',
        'name': 'Richmond',
        'city': 'Richmond',
    },
    {
        'code': 'ZRH',
        'name': 'Zurich International Airport',
        'city': 'Kloten',
    },
    {
        'code': 'ZRJ',
        'name': 'Round Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'ZRL',
        'name': 'Lancaster',
        'city': 'Lancaster',
    },
    {
        'code': 'ZRP',
        'name': 'Pennsylvania Station',
        'city': 'Newark',
    },
    {
        'code': 'ZRT',
        'name': 'Hartford',
        'city': 'Hartford',
    },
    {
        'code': 'ZRU',
        'name': 'Boston',
        'city': 'Boston',
    },
    {
        'code': 'ZRV',
        'name': 'Providence',
        'city': 'Providence',
    },
    {
        'code': 'ZSA',
        'name': 'San Salvador Airport',
        'city': 'Cockburn Town',
    },
    {
        'code': 'ZSE',
        'name': 'R\u00e9union',
        'city': 'St Pierre dela Reunion',
    },
    {
        'code': 'ZSF',
        'name': 'Springfield MA RR',
        'city': 'Springfield',
    },
    {
        'code': 'ZSJ',
        'name': 'Sandy Lake Airport',
        'city': 'Casummit Lake',
    },
    {
        'code': 'ZSN',
        'name': 'South Indian Lake Airport',
        'city': 'South Indian Lake',
    },
    {
        'code': 'ZTA',
        'name': 'Tureira',
        'city': 'Tureira',
    },
    {
        'code': 'ZTB',
        'name': 'Tete-a-la-Baleine Airport',
        'city': 'Havre-St-Pierre',
    },
    {
        'code': 'ZTD',
        'name': 'Schenectady',
        'city': 'Schenectady',
    },
    {
        'code': 'ZTE',
        'name': 'Rochester',
        'city': 'Rochester',
    },
    {
        'code': 'ZTF',
        'name': 'Stamford',
        'city': 'Stamford',
    },
    {
        'code': 'ZTH',
        'name': 'Zakinthos Airport',
        'city': 'Zante',
    },
    {
        'code': 'ZTI',
        'name': 'Humen Port',
        'city': 'Humen',
    },
    {
        'code': 'ZTJ',
        'name': 'New Jersey',
        'city': 'Princeton',
    },
    {
        'code': 'ZTM',
        'name': 'Shamattawa Airport',
        'city': 'Nelson House',
    },
    {
        'code': 'ZTN',
        'name': 'Philadelphia',
        'city': 'Philadelphia',
    },
    {
        'code': 'ZTO',
        'name': 'Boston',
        'city': 'Boston',
    },
    {
        'code': 'ZTV',
        'name': 'Louisville International Airport',
        'city': 'Louisville',
    },
    {
        'code': 'ZTY',
        'name': 'Boston',
        'city': 'Boston',
    },
    {
        'code': 'ZUA',
        'name': 'Utica',
        'city': 'Utica',
    },
    {
        'code': 'ZUG',
        'name': 'Harrisburg',
        'city': 'Harrisburg',
    },
    {
        'code': 'ZUH',
        'name': 'Zhuhai Airport',
        'city': 'Zhuhai',
    },
    {
        'code': 'ZUM',
        'name': 'Churchill Falls Airport',
        'city': 'Wabush',
    },
    {
        'code': 'ZUN',
        'name': 'Black Rock Airport',
        'city': 'Zuni',
    },
    {
        'code': 'ZVE',
        'name': 'New Haven',
        'city': 'New Haven',
    },
    {
        'code': 'ZVK',
        'name': 'Savannakhet Airport',
        'city': 'Savannakhet',
    },
    {
        'code': 'ZVR',
        'name': 'Hannover Hauptbahnhof',
        'city': 'Hanover',
    },
    {
        'code': 'ZWB',
        'name': 'Williamsburg Rail',
        'city': 'Hampton',
    },
    {
        'code': 'ZWE',
        'name': 'ZWE',
        'city': 'ZWE',
    },
    {
        'code': 'ZWI',
        'name': 'Wilmington Rail',
        'city': 'Wilmington',
    },
    {
        'code': 'ZWS',
        'name': 'Stuttgart Hauptbahnhof',
        'city': 'Stuttgart',
    },
    {
        'code': 'ZWU',
        'name': 'Union Station',
        'city': 'Washington',
    },
    {
        'code': 'ZWV',
        'name': 'Illinois',
        'city': 'Glenview',
    },
    {
        'code': 'ZWW',
        'name': 'Newport News',
        'city': 'Hampton',
    },
    {
        'code': 'ZXA',
        'name': 'Aberdeen railway station',
        'city': 'Aberdeen',
    },
    {
        'code': 'ZXE',
        'name': 'Waverley station',
        'city': 'Edinburgh',
    },
    {
        'code': 'ZYA',
        'name': 'Amsterdam Central Station',
        'city': 'Amsterdam',
    },
    {
        'code': 'ZYK',
        'name': 'Shekou Port',
        'city': 'Shekou',
    },
    {
        'code': 'ZYL',
        'name': 'Osmany Sylhet Airport',
        'city': 'Sylhet',
    },
    {
        'code': 'ZYN',
        'name': 'Nimes Rail Station',
        'city': 'Nimes',
    },
    {
        'code': 'ZYP',
        'name': 'Penn Station',
        'city': 'New York',
    },
    {
        'code': 'ZYQ',
        'name': 'Syracuse',
        'city': 'Syracuse',
    },
    {
        'code': 'ZYR',
        'name': 'Brussels Midi Railway Station',
        'city': 'Brussels',
    },
    {
        'code': 'ZYZ',
        'name': 'Berchem Railway Stn.',
        'city': 'Antwerp',
    },
    {
        'code': 'TNM',
        'name': 'Teniente R. Marsh Airport',
        'city': 'Teniente R. Marsh',
    }
]);