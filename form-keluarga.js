const keluarga = {
    "title": "SDGs DESA - KUESIONER KELUARGA",
    "description": "KEMENTERIAN DESA, PDT DAN TRANSMIGRASI",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "provinsi",
                    "title": "Provinsi",
                    "isRequired": true,
                    "enableIf": "{provinsi}=''",
                    "choicesByUrl": {
                        "url": "/wilayah/prov",
                        "path": "data",
                        "valueName": "id",
                        "titleName": "value"
                    }
                },
                {
                    "type": "dropdown",
                    "name": "kota",
                    "title": "Kabupaten/kota",
                    "isRequired": true,
                    "enableIf": "{kota}=''",
                    "choicesByUrl": {
                        "url": "/wilayah/kota/{provinsi}",
                        "path": "data",
                        "valueName": "id",
                        "titleName": "value"
                    }
                },
                {
                    "type": "dropdown",
                    "name": "kecamatan",
                    "title": "Kecamatan",
                    "isRequired": true,
                    "enableIf": "{kecamatan}=''",
                    "choicesByUrl": {
                        "url": "/wilayah/kecamatan/{kota}",
                        "path": "data",
                        "valueName": "id",
                        "titleName": "value"
                    }
                },
                {
                    "type": "dropdown",
                    "name": "desa",
                    "title": "Desa",
                    "isRequired": true,
                    "choicesByUrl": {
                        "url": "/wilayah/desa/{kecamatan}",
                        "path": "data",
                        "valueName": "id",
                        "titleName": "value"
                    }
                },
                {
                    "type": "text",
                    "name": "rt",
                    "title": "RT",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Nomor RT harus berjumlah 3 digit",
                            "regex": "^[0-9][0-9][0-9]$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "rw",
                    "title": "RW",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Nomor RW harus berjumlah 3 digit",
                            "regex": "^[0-9][0-9][0-9]$"
                        }
                    ]
                }
            ],
            "title": "WILAYAH"
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "text",
                    "name": "K.P206",
                    "title": "Nama",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "K.P207",
                    "title": "Alamat",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "K.P208",
                    "title": "Nomor HP",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "K.P209",
                    "title": "Nomor telepon kabel/rumah",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "no_kk",
                    "title": "Nomor Kartu Keluarga",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Nomor KK harus berjumlah 16 digit",
                            "regex": "^[0-9]{16,16}$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "nik",
                    "title": "NIK Kepala Keluarga",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "NIK harus berjumlah 16 digit",
                            "regex": "^[0-9]{16,16}$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "K.P303",
                    "title": "Jumlah anggota keluarga (termasuk kepala keluarga)",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "K.P401",
                    "title": "Tempat tinggal yang ditempati",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Milik sendiri  "
                        },
                        {
                            "value": "2",
                            "text": "Kontrak/Sewa       "
                        },
                        {
                            "value": "3",
                            "text": "Bebas Sewa       "
                        },
                        {
                            "value": 4,
                            "text": "Dipinjami "
                        },
                        {
                            "value": 5,
                            "text": "Dinas"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "Lainnya (Jelaskan)"
                },
                {
                    "type": "radiogroup",
                    "name": "K.P402",
                    "title": "Status lahan tempat tinggal yang ditempati",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Milik sendiri  "
                        },
                        {
                            "value": "2",
                            "text": "Milik orang lain"
                        },
                        {
                            "value": "3",
                            "text": "Tanah negara"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "Lainnya (Jelaskan)"
                },
                {
                    "type": "multipletext",
                    "name": "K.P403",
                    "title": "Luas tempat tinggal",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "lantai",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Luas lantai tempat tinggal (m2)"
                        },
                        {
                            "name": "lahan",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Luas lahan tempat tinggal (m2)"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "K.P404",
                    "title": "Jenis lantai tempat tinggal terluas: ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Marmer/granit                                            "
                        },
                        {
                            "value": "2",
                            "text": "2. Keramik                                                            "
                        },
                        {
                            "value": "3",
                            "text": "3. Parket/vinil/permadani                              "
                        },
                        {
                            "value": 4,
                            "text": "4. Ubin/tegel/teraso                                       "
                        },
                        {
                            "value": 5,
                            "text": "5. Kayu/papan kualitas tinggi                            "
                        },
                        {
                            "value": 6,
                            "text": "6. Semen/bata merah                                       "
                        },
                        {
                            "value": 7,
                            "text": "7. Bambu"
                        },
                        {
                            "value": 8,
                            "text": "8. Kayu/papan kualitas rendah"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "9. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P405",
                    "title": "Dinding sebagian besar rumah:",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Semen/beton/kayu berkualitas tinggi"
                        },
                        {
                            "value": "2",
                            "text": "2. Kayu berkualitas rendah/bamboo"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "3. Lainnya"
                },
                {
                    "type": "dropdown",
                    "name": "K.P406",
                    "title": "Jendela",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Ada, berfungsi          "
                        },
                        {
                            "value": "2",
                            "text": "2. Ada, tidak berfungsi           "
                        },
                        {
                            "value": 3,
                            "text": "3. Tidak ada"
                        }
                    ],
                    "otherText": "3. Lainnya"
                },
                {
                    "type": "dropdown",
                    "name": "K.P407",
                    "title": "Atap",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Genteng                      "
                        },
                        {
                            "value": "2",
                            "text": "2. Kayu/Jerami                         "
                        }
                    ],
                    "hasOther": true,
                    "otherText": "3. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P408",
                    "title": "Penerangan rumah:                     ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Listrik PLN                           "
                        },
                        {
                            "value": "2",
                            "text": "2. Listrik non PLN                   "
                        },
                        {
                            "value": 3,
                            "text": "3. Lampu minyak/lilin"
                        },
                        {
                            "value": 4,
                            "text": "4. Sumber penerangan lainnya                          "
                        },
                        {
                            "value": 5,
                            "text": "5. Tidak ada"
                        }
                    ],
                    "otherText": "3. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P409",
                    "title": "Energi untuk memasak",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Gas kota/LPG/biogas "
                        },
                        {
                            "value": "2",
                            "text": "2. Minyak tanah/batu bara"
                        },
                        {
                            "value": 3,
                            "text": "3. Kayu bakar"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P410",
                    "visibleIf": "{K.P409} = 3",
                    "title": "Jika menggunakan kayu bakar untuk memasak, sumber kayu bakar:",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Pembelian          "
                        },
                        {
                            "value": "2",
                            "text": "2. Diambil dari hutan          "
                        },
                        {
                            "value": 3,
                            "text": "3. Diambil di luar/bukan hutan          "
                        }
                    ],
                    "hasOther": true,
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P411",
                    "title": "Tempat pembuangan sampah",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Tidak ada          "
                        },
                        {
                            "value": "2",
                            "text": "2. Di kebun/sungai/drainase         "
                        },
                        {
                            "value": 3,
                            "text": "3. Dibakar"
                        },
                        {
                            "value": 4,
                            "text": "4. Tempat sampah            "
                        },
                        {
                            "value": 5,
                            "text": "5. Tempat sampah diangkut reguler"
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P412",
                    "title": "Fasilitas MCK",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Sendiri          "
                        },
                        {
                            "value": "2",
                            "text": "2. Berkelompok/tetangga          "
                        },
                        {
                            "value": 3,
                            "text": "3. MCK umum          "
                        },
                        {
                            "value": 4,
                            "text": "4. Tidak ada"
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P413",
                    "title": "Sumber air mandi terbanyak dari: ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Ledeng/perpipaan berbayar/air isi ulang/kemasan          "
                        },
                        {
                            "value": "2",
                            "text": "2. Perpipaan                                                                         "
                        },
                        {
                            "value": 3,
                            "text": "3. Mata air/ sumur                                                                "
                        },
                        {
                            "value": 4,
                            "text": "4. Sungai, danau, embung "
                        },
                        {
                            "value": 5,
                            "text": "5. Tadah air hujan "
                        }
                    ],
                    "hasOther": true,
                    "otherText": "6. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P414",
                    "title": "Fasilitas buang air besar: ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Jamban sendiri                               "
                        },
                        {
                            "value": "2",
                            "text": "2. Jamban bersama/tetangga         "
                        },
                        {
                            "value": 3,
                            "text": "3. Jamban umum"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P416",
                    "title": "Tempat pembuangan limbah cair",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Tangki/instalasi pengelolaan limbah                         "
                        },
                        {
                            "value": "2",
                            "text": "2. Sawah/kolam/sungai/drainase/laut                          "
                        },
                        {
                            "value": 3,
                            "text": "3. Lubang di tanah"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P417",
                    "title": "Rumah berada di bawah SUTET/SUTT/SUTTAS",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ya"
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P418",
                    "title": "Rumah di bantaran sungai: ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ya"
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P419",
                    "title": "Rumah di lereng bukit/gunung",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ya"
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                },
                {
                    "type": "dropdown",
                    "name": "K.P420",
                    "title": "Secara keseluruhan kondisi rumah    ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kumuh      "
                        },
                        {
                            "value": "2",
                            "text": "Tidak Kumuh      "
                        }
                    ],
                    "otherText": "4. Lainnya (sebutkan)"
                }
            ],
            "title": "DESKRIPSI KELUARGA & PEMUKIMAN"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "K.P421_1PAUD",
                    "title": "PAUD",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_2TK",
                    "title": "TK/RA",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_3SD",
                    "title": "SD/MI atau sederajat",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_4SMP",
                    "title": "SMP/MTs atau sederajat",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_5SMA",
                    "title": "SMA/MA atau sederajat",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_6PT",
                    "title": "Perguruan tinggi",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_7Pesantren",
                    "title": "Pesantren",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_8Seminari",
                    "title": "Seminari",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P421_9lainnya",
                    "title": "Pendidikan keagamaan lain",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                }
            ],
            "title": "AKSES PENDIDIKAN TERDEKAT"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "K.P422_1RS",
                    "title": "Rumah sakit",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_2bersalin",
                    "title": "Rumah sakit bersalin",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_3Poliklinik",
                    "title": "Poliklinik",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_4Puskesmas",
                    "title": "Puskesmas",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_5pustu",
                    "title": "Puskesmas pembantu/pustu",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_6Polindes",
                    "title": "Polindes",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_7Poskesdes",
                    "title": "Poskesdes",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_8Posyandu",
                    "title": "Posyandu",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_9Apotik",
                    "title": "Apotik",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P422_10Toko",
                    "title": "Toko obat",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                }
            ],
            "title": "AKSES FASILITAS KESEHATAN TERDEKAT"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "K.P423_1spesialis",
                    "title": "Dokter spesialis",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P423_2dokter",
                    "title": "Dokter umum",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P423_3Bidan",
                    "title": "Bidan",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jarak",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P423_4nakes",
                    "title": "Tenaga kesehatan",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P423_5Dukun",
                    "title": "Dukun",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jarak",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Jarak (km)"
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh (jam)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                }
            ],
            "title": "AKSES TENAGA KESEHATAN TERDEKAT"
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "K.P424_1pekerjaan",
                    "title": "Tujuan: Lokasi pekerjaan utama",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jenis",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P424_2pertanian",
                    "title": "Tujuan: Lahan pertanian yang sedang diusahakan",
                    "items": [
                        {
                            "name": "jenis",
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P424_3sekolah",
                    "title": "Tujuan: Sekolah",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jenis",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P424_4berobat",
                    "title": "Tujuan: Berobat",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "jenis",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P424_5ibadah",
                    "title": "Tujuan: Beribadah mingguan/ bulanan/ tahunan",
                    "description": "Note: 45menit=0.75jam | 30menit=0.5jam | 15menit=0.25jam | 10menit=0.17jam | <5 menit==0jam",
                    "items": [
                        {
                            "name": "jenis",
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "K.P424_6rekreasi",
                    "title": "Tujuan: Rekreasi terdekat",
                    "items": [
                        {
                            "name": "jenis",
                            "inputType": "text",
                            "title": "Jenis Transportasi terlama (1=Darat | 2=Air | 3=Udara)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Darat | 2=Air | 3=Udara",
                                    "minValue": 1,
                                    "maxValue": 3
                                }
                            ]
                        },
                        {
                            "name": "transport_umum",
                            "inputType": "text",
                            "title": "Penggunaan transportasi umum (1=Ya | 2=Tidak)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1=Ya | 2=Tidak",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        },
                        {
                            "name": "waktu",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "Waktu Tempuh Sekali jalan (jam)"
                        },
                        {
                            "name": "biaya",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Biaya Sekali jalan (Rp)"
                        },
                        {
                            "name": "kemudahan",
                            "inputType": "text",
                            "title": "Kemudahan (1=Mudah atau 2=Susah)",
                            "validators": [
                                {
                                    "type": "numeric",
                                    "text": "Input 1 jika mudah atau 2 jika susah",
                                    "minValue": 1,
                                    "maxValue": 2
                                }
                            ]
                        }
                    ]
                }
            ],
            "title": "AKSES PRASARANA DAN SARANA TRANSPORTASI"
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "text",
                    "name": "K.P425",
                    "title": "Berapa jumlah anggota keluarga yang menggunakan transportasi umum dalam sebulan terakhir?",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "K.P426",
                    "title": "Berapa jumlah anggota keluarga yang menggunakan transportasi umum pada bulan sebelumnya?",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                },
                {
                    "type": "matrix",
                    "name": "K.P427",
                    "title": "Pemanfaat/penerima program pemerintah",
                    "defaultValue": {
                        "1": "2",
                        "2": "2",
                        "3": "2",
                        "4": "2",
                        "5": "2",
                        "6": "2",
                        "7": "2",
                        "8": "2"
                    },
                    "isRequired": true,
                    "columns": [
                        {
                            "value": "1",
                            "text": "Ya"
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ],
                    "rows": [
                        {
                            "value": "1",
                            "text": "1. BLT Dana Desa "
                        },
                        {
                            "value": "2",
                            "text": "2. Program Keluarga Harapan/PKH"
                        },
                        {
                            "value": "3",
                            "text": "3. Bantuan Sosial Tunai /BST"
                        },
                        {
                            "value": "4",
                            "text": "4. Bantuan Presiden/Banpres:             "
                        },
                        {
                            "value": "5",
                            "text": "5. Bantuan UMKM"
                        },
                        {
                            "value": "6",
                            "text": "6. Bantuan untuk pekerja "
                        },
                        {
                            "value": "7",
                            "text": "7. Bantuan pendidikan anak"
                        },
                        {
                            "value": "8",
                            "text": "8. Lainnya                                      "
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "K.P428",
                    "title": "Berapa rata-rata pengeluaran satu keluarga dalam sebulan (rupiah)?",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ]
                }
            ],
            "title": "LAIN-LAIN"
        }
    ]
}
