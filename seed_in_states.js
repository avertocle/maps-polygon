function getStateSeeds(){
    var seedObjs = JSON.parse(stateSeedsRawData);
    return seedObjs;
}

var stateSeedsRawData = `[
{
    "country": "IN",
    "state": "Andhra Pradesh",
    "nelatitude": 19.1565479,
    "nelongitude": 84.804131,
    "swlatitude": 12.596836,
    "swlongitude": 76.749786
},
{
    "country": "IN",
    "state": "Arunachal Pradesh",
    "nelatitude": 29.453453,
    "nelongitude": 97.403297,
    "swlatitude": 26.64258,
    "swlongitude": 91.558064
},
{
    "country": "IN",
    "state": "Assam",
    "nelatitude": 27.968216,
    "nelongitude": 96.0131609,
    "swlatitude": 24.1384989,
    "swlongitude": 89.68563789999999
},
{
    "country": "IN",
    "state": "Bihar",
    "nelatitude": 27.5213199,
    "nelongitude": 88.289752,
    "swlatitude": 24.286278,
    "swlongitude": 83.31486509999999
},
{
    "country": "IN",
    "state": "Chhattisgarh",
    "nelatitude": 24.1187091,
    "nelongitude": 84.39599799999999,
    "swlatitude": 17.782531,
    "swlongitude": 80.2439
},
{
    "country": "IN",
    "state": "Delhi",
    "nelatitude": 28.881338,
    "nelongitude": 77.3484578,
    "swlatitude": 28.412593,
    "swlongitude": 76.83806899999999
},
{
    "country": "IN",
    "state": "Goa",
    "nelatitude": 15.799917,
    "nelongitude": 74.3405329,
    "swlatitude": 14.8945089,
    "swlongitude": 73.684082
},
{
    "country": "IN",
    "state": "Gujarat",
    "nelatitude": 24.705709,
    "nelongitude": 74.4764881,
    "swlatitude": 20.127954,
    "swlongitude": 68.162834
},
{
    "country": "IN",
    "state": "Haryana",
    "nelatitude": 30.9128649,
    "nelongitude": 77.59544799999999,
    "swlatitude": 27.6529931,
    "swlongitude": 74.457616
},
{
    "country": "IN",
    "state": "Himachal Pradesh",
    "nelatitude": 33.257958,
    "nelongitude": 79.003309,
    "swlatitude": 30.382469,
    "swlongitude": 75.5874709
},
{
    "country": "IN",
    "state": "Jammu and Kashmir",
    "nelatitude": 35.50542739999999,
    "nelongitude": 79.3058506,
    "swlatitude": 32.2922694,
    "swlongitude": 73.750507
},
{
    "country": "IN",
    "state": "Jharkhand",
    "nelatitude": 25.328823,
    "nelongitude": 87.947529,
    "swlatitude": 21.9729309,
    "swlongitude": 83.32382799999999
},
{
    "country": "IN",
    "state": "Karnataka",
    "nelatitude": 18.4411689,
    "nelongitude": 78.5860101,
    "swlatitude": 11.593352,
    "swlongitude": 74.04960609999999
},
{
    "country": "IN",
    "state": "Kerala",
    "nelatitude": 12.7883001,
    "nelongitude": 77.3956369,
    "swlatitude": 8.2929599,
    "swlongitude": 74.861
},
{
    "country": "IN",
    "state": "Madhya Pradesh",
    "nelatitude": 26.8681089,
    "nelongitude": 82.809674,
    "swlatitude": 21.0799139,
    "swlongitude": 74.0362481
},
{
    "country": "IN",
    "state": "Maharashtra",
    "nelatitude": 22.028441,
    "nelongitude": 80.890924,
    "swlatitude": 15.6024121,
    "swlongitude": 72.659363
},
{
    "country": "IN",
    "state": "Manipur",
    "nelatitude": 25.691874,
    "nelongitude": 94.74324,
    "swlatitude": 23.8360479,
    "swlongitude": 92.97107799999999
},
{
    "country": "IN",
    "state": "Meghalaya",
    "nelatitude": 26.1204059,
    "nelongitude": 92.80226599999999,
    "swlatitude": 25.0333579,
    "swlongitude": 89.815674
},
{
    "country": "IN",
    "state": "Mizoram",
    "nelatitude": 24.5174359,
    "nelongitude": 93.4375611,
    "swlatitude": 21.946661,
    "swlongitude": 92.258479
},
{
    "country": "IN",
    "state": "Nagaland",
    "nelatitude": 27.036123,
    "nelongitude": 95.244715,
    "swlatitude": 25.198068,
    "swlongitude": 93.327578
},
{
    "country": "IN",
    "state": "Odisha",
    "nelatitude": 22.5700271,
    "nelongitude": 87.483385,
    "swlatitude": 17.811982,
    "swlongitude": 81.38842389999999
},
{
    "country": "IN",
    "state": "Punjab",
    "nelatitude": 32.4994008,
    "nelongitude": 76.92175809999999,
    "swlatitude": 29.537147,
    "swlongitude": 73.88058
},
{
    "country": "IN",
    "state": "Rajasthan",
    "nelatitude": 30.1932842,
    "nelongitude": 78.26338109999999,
    "swlatitude": 23.0632669,
    "swlongitude": 69.484413
},
{
    "country": "IN",
    "state": "Sikkim",
    "nelatitude": 28.117725,
    "nelongitude": 88.9182876,
    "swlatitude": 27.079261,
    "swlongitude": 88.0143561
},
{
    "country": "IN",
    "state": "Tamil Nadu",
    "nelatitude": 13.496666,
    "nelongitude": 80.3464511,
    "swlatitude": 8.0690069,
    "swlongitude": 76.23055409999999
},
{
    "country": "IN",
    "state": "Telangana",
    "nelatitude": 19.916715,
    "nelongitude": 81.3075465,
    "swlatitude": 15.83535,
    "swlongitude": 77.23791299999999
},
{
    "country": "IN",
    "state": "Tripura",
    "nelatitude": 24.533733,
    "nelongitude": 92.336001,
    "swlatitude": 22.929054,
    "swlongitude": 91.15093189999999
},
{
    "country": "IN",
    "state": "Uttar Pradesh",
    "nelatitude": 30.411635,
    "nelongitude": 84.6743269,
    "swlatitude": 23.870839,
    "swlongitude": 77.0924369
},
{
    "country": "IN",
    "state": "Uttarakhand",
    "nelatitude": 31.45461499999999,
    "nelongitude": 81.0446315,
    "swlatitude": 28.710125,
    "swlongitude": 77.57860889999999
},
{
    "country": "IN",
    "state": "West Bengal",
    "nelatitude": 27.220707,
    "nelongitude": 89.880039,
    "swlatitude": 21.524921,
    "swlongitude": 85.82095799999999
}
]`