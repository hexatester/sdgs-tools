
const rtjson = {
    "title": "SDGs DESA - KUESIONER RUKUN TETANGGA",
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
                    "name": "R.P206",
                    "title": "Nama ketua RT",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "R.P207",
                    "title": "Alamat",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "R.P208",
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
                    "name": "R.P209",
                    "title": "Lokasi RT terletak di pulau",
                    "description": "(ketik nama pulau, pisahkan dengan koma jika lebih dari satu)",
                    "isRequired": true
                },
                {
                    "type": "dropdown",
                    "name": "R.P210",
                    "title": "Topografi terluas wilayah RT",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Lereng/puncak"
                        },
                        {
                            "value": "2",
                            "text": "Lembah"
                        },
                        {
                            "value": "3",
                            "text": "Dataran"
                        },
                        {
                            "value": 4,
                            "text": "Pesisir"
                        }
                    ],
                    "otherText": "10. Lainnya (sebutkan)"
                },
                {
                    "type": "text",
                    "name": "R.P211",
                    "title": "Jumlah warga di lereng/puncak (jiwa)",
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
                    "type": "dropdown",
                    "name": "R.P212",
                    "title": "Penanaman/pemeliharaan pepohonan di lahan kritis",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada, sebagian warga terlibat"
                        },
                        {
                            "value": "2",
                            "text": "Ada, warga tidak terlibat"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada kegiatan"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P213",
                    "title": "Panjang garis pantai (km)",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P214",
                    "title": "Pemanfaatan laut perikanan tangkap",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P215",
                    "title": "Pemanfaatan laut perikanan budidaya",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P216",
                    "title": "Pemanfaatan laut tambak garam",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P217",
                    "title": "Pemanfaatan laut wisata bahari",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P218",
                    "title": "Pemanfaatan laut transportasi umum",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P219",
                    "title": "Kondisi mangrove",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Seluruhnya baik"
                        },
                        {
                            "value": "2",
                            "text": "Sebagian besar baik"
                        },
                        {
                            "value": "3",
                            "text": "Sebagian besar buruk"
                        },
                        {
                            "value": "4",
                            "text": "Seluruhnya buruk"
                        },
                        {
                            "value": "5",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "P220",
                    "title": "Penanaman mangrove",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada, sebagian warga terlibat"
                        },
                        {
                            "value": "2",
                            "text": "Ada, warga tidak terlibat"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada kegiatan"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P221",
                    "title": "Jumlah warga di wilayah pesisir (jiwa)",
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
                    "name": "R.P222",
                    "title": "Jumlah warga yang tinggal di atas air (jiwa) ",
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
                    "name": "R.P223",
                    "title": "Wilayah desa di dalam hutan (Ha)",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P224",
                    "title": "Wilayah desa di tepi hutan (Ha)",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P225",
                    "title": "Fungsi hutan",
                    "items": [
                        {
                            "name": "1",
                            "title": "1.\tkonservasi (Ha): "
                        },
                        {
                            "name": "2",
                            "title": "2.\tlindung (Ha): "
                        },
                        {
                            "name": "3",
                            "title": "3.\tproduksi (Ha): "
                        },
                        {
                            "name": "4",
                            "title": "4.\thutan desa (Ha): "
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P226",
                    "title": "Jumlah warga yang tinggal di dalam hutan (jiwa)",
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
                    "name": "R.P227",
                    "title": "Jumlah warga yang tinggal di sekitar hutan (jiwa)",
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
                    "type": "dropdown",
                    "name": "R.P228",
                    "title": "Ketergantungan warga terhadap hutan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Tinggi"
                        },
                        {
                            "value": "2",
                            "text": "Sedang"
                        },
                        {
                            "value": "3",
                            "text": "Rendah"
                        },
                        {
                            "value": "4",
                            "text": "Tidak tergantung"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P229",
                    "title": "Reboisasi hutan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada, sebagian warga terlibat"
                        },
                        {
                            "value": "2",
                            "text": "Ada, warga tidak terlibat"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada kegiatan"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P230",
                    "title": "Jumlah penduduk luar desa yang masuk dan menetap di desa selama setahun terakhir?",
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
                    "name": "R.P231",
                    "title": "Jumlah penduduk yang keluar dari desa selama setahun terakhir?",
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
            "title": "DESKRIPSI RUKUN TETANGGA"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "R.P301",
                    "title": "Ketua RW",
                    "items": [
                        {
                            "name": "P301",
                            "title": "Nama Ketua RW"
                        },
                        {
                            "name": "P302",
                            "inputType": "text",
                            "title": "NIK Ketua RW",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P303",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P304",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Ketua RW sejak tahun"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P305",
                    "title": "Sekretaris RW",
                    "items": [
                        {
                            "name": "P305",
                            "title": "Nama Sekretaris RW"
                        },
                        {
                            "name": "P306",
                            "inputType": "text",
                            "title": "NIK Sekretaris RW",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P307",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P308",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Sekretaris RW sejak tahun"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P309",
                    "title": "Bendahara RW",
                    "items": [
                        {
                            "name": "P309",
                            "title": "Nama Bendahara RW"
                        },
                        {
                            "name": "P310",
                            "inputType": "text",
                            "title": "NIK Bendahara RW",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P311",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P312",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Bendahara RW sejak tahun"
                        }
                    ]
                }
            ],
            "title": "DESKRIPSI PENGURUS RW"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "R.P401",
                    "title": "Ketua RT",
                    "items": [
                        {
                            "name": "P401",
                            "isRequired": true,
                            "title": "Nama Ketua RT"
                        },
                        {
                            "name": "P402",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "NIK Ketua RT",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P403",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P404",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Ketua RT sejak tahun"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P405",
                    "title": "Sekretaris RT",
                    "items": [
                        {
                            "name": "P405",
                            "isRequired": true,
                            "title": "Nama Sekretaris RT"
                        },
                        {
                            "name": "P406",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "NIK Sekretaris RT",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P407",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P408",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Sekretaris RT sejak tahun"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P409",
                    "title": "Bendahara RT",
                    "items": [
                        {
                            "name": "P409",
                            "isRequired": true,
                            "title": "Nama Bendahara RT"
                        },
                        {
                            "name": "P410",
                            "isRequired": true,
                            "inputType": "text",
                            "title": "NIK Bendahara RT",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "NIK harus berjumlah 16 digit",
                                    "regex": "^[0-9]{16}$"
                                }
                            ]
                        },
                        {
                            "name": "P411",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "HP/telepon"
                        },
                        {
                            "name": "P412",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Menjabat Bendahara RT sejak tahun"
                        }
                    ]
                }
            ],
            "title": "DESKRIPSI PENGURUS RT"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "R.P501",
                    "title": "Agen pengerahan TKI ke luar negeri",
                    "items": [
                        {
                            "name": "1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah (perusahaan)"
                        },
                        {
                            "name": "2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah (orang)"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P503",
                    "title": "Tata ruang industri",
                    "items": [
                        {
                            "name": "1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah sentra industri"
                        },
                        {
                            "name": "2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah Lingkungan Industri Kecil (LIK) "
                        },
                        {
                            "name": "3",
                            "isRequired": true,
                            "title": "Jumlah Perkampungan Industri Kecil (PIK) "
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "R.P504",
                    "title": "Keberadaan pub/diskotik/tempat karaoke",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak Ada"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P504_jarak",
                    "title": "Jarak pub/diskotik/tempat karaoke terdekat"
                },
                {
                    "type": "dropdown",
                    "name": "R.P505_1",
                    "title": "Keberadaan pangkalan/agen/penjual minyak tanah (termasuk penjual minyak tanah keliling)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P505_2",
                    "title": "Keberadaan pangkalan/agen/penjual LPG (warung, toko, supermarket, penjual gas keliling)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P506",
                    "title": "Keberadaan koperasi",
                    "items": [
                        {
                            "name": "1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1.\tJumlah KUD"
                        },
                        {
                            "name": "2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "2.\tJumlah KUD yang membeli/menjual hasil/produksi pertanian"
                        },
                        {
                            "name": "3",
                            "isRequired": true,
                            "title": "3.\tJumlah KUD yang menyediakan Kredit Usaha"
                        },
                        {
                            "name": "4",
                            "isRequired": true,
                            "title": "4.\tJumlah KUD yang melakukan kegiatan lainnya"
                        },
                        {
                            "name": "5",
                            "isRequired": true,
                            "title": "5.\tJumlah Koperasi Industri Kecil dan Kerajinan Rakyat (Kopinkra)/Usaha mikro"
                        },
                        {
                            "name": "6",
                            "isRequired": true,
                            "title": "6.\tJumlah Koperasi Simpan Pinjam (Kospin) "
                        },
                        {
                            "name": "7",
                            "isRequired": true,
                            "title": "7.\tJumlah Koperasi Serba usaha"
                        },
                        {
                            "name": "8",
                            "isRequired": true,
                            "title": "8. Jumlah koperasi lainnya"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P507",
                    "title": "Kios sarana produksi petani/nelayan",
                    "items": [
                        {
                            "name": "1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1.\tMilik KUD (unit)"
                        },
                        {
                            "name": "2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "2.\tMilik Bumdes (unit) "
                        },
                        {
                            "name": "3",
                            "isRequired": true,
                            "title": "3. Milik selain KUD dan Bumdes"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P509_1",
                    "title": "Kredit Usaha Rakyat (KUR)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P509_2",
                    "title": "Kredit Ketahanan Pangan dan Energi (KKP-E) ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P509_3",
                    "title": "Kredit Usaha Kecil (KUK)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P509_4",
                    "title": "Kelompok Usaha Bersama (KUBE)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                }
            ],
            "title": "LEMBAGA EKONOMI"
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "html",
                    "name": "note1",
                    "html": "<p style=\"color:red\">*) Jika di Rukun Tetangga ini tidak ada data, bagian ini tidak perlu diisi.</p>\n"
                },
                {
                    "type": "paneldynamic",
                    "name": "R.P502",
                    "title": "Industri menurut bahan baku utama",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P502_jenis",
                            "title": "Jenis industri",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. Industri barang dari kulit (tas, sepatu, sandal, dll)"
                                },
                                {
                                    "value": "2",
                                    "text": "2. Industri barang dari kayu (meja, kursi, lemari, dll)"
                                },
                                {
                                    "value": "3",
                                    "text": "3. Industri barang dari logam mulia atau bahan logam (perabot, perhiasan, dll)"
                                },
                                {
                                    "value": "4",
                                    "text": "4. industri logam berat"
                                },
                                {
                                    "value": "5",
                                    "text": "5. industri barang dari kain (tenun, konveksi, dll)"
                                },
                                {
                                    "value": "6",
                                    "text": "6. Industri gerabah/ keramik/ batu (porselen, keramik, tegel, dll)"
                                },
                                {
                                    "value": "7",
                                    "text": "7. Industri genteng dan batu bata"
                                },
                                {
                                    "value": "8",
                                    "text": "8. Industri anyaman dari rotan/ bambu/ rumput/ pandan, dll"
                                },
                                {
                                    "value": "9",
                                    "text": "9. Industri makanan dan minuman (pengolahan dan pengawetan daging, ikan, buah-buahan, minyak dan lemak, susu dan makanan dari susu, dll)"
                                },
                                {
                                    "value": "10",
                                    "text": "10. industri tembakau"
                                }
                            ],
                            "hasOther": true,
                            "otherText": "11. industri lainnya, sebutkan"
                        },
                        {
                            "type": "multipletext",
                            "name": "R.P502_jumlah",
                            "title": "Jumlah Industri dan SDM",
                            "items": [
                                {
                                    "name": "P502_kolom1",
                                    "inputType": "text",
                                    "validators": [
                                        {
                                            "type": "regexvalidator",
                                            "text": "Input harus berupa angka",
                                            "regex": "^[0-9]*$"
                                        }
                                    ],
                                    "title": "Jumlah industri kecil dan rumah tangga (pekerja di bawah 20 orang)"
                                },
                                {
                                    "name": "P502_kolom2",
                                    "inputType": "text",
                                    "validators": [
                                        {
                                            "type": "regexvalidator",
                                            "text": "Input harus berupa angka",
                                            "regex": "^[0-9]*$"
                                        }
                                    ],
                                    "title": "Jumlah industri sedang dan besar"
                                },
                                {
                                    "name": "P502_kolom3",
                                    "inputType": "text",
                                    "validators": [
                                        {
                                            "type": "regexvalidator",
                                            "text": "Input harus berupa angka",
                                            "regex": "^[0-9]*$"
                                        }
                                    ],
                                    "title": "Jumlah manajemen (orang)"
                                },
                                {
                                    "name": "P502_kolom4",
                                    "inputType": "text",
                                    "validators": [
                                        {
                                            "type": "regexvalidator",
                                            "text": "Input harus berupa angka",
                                            "regex": "^[0-9]*$"
                                        }
                                    ],
                                    "title": "Jumlah pekerja (orang)"
                                }
                            ]
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "INDUSTRI"
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "html",
                    "name": "note2",
                    "html": "<p style=\"color:red\">*) Jika di Rukun Tetangga ini tidak ada data, bagian ini tidak perlu diisi.</p>\n"
                },
                {
                    "type": "paneldynamic",
                    "name": "R.P508",
                    "title": "Sarana ekonomi yang tersedia",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P502_jenis",
                            "title": "Jenis industri",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. Kelompok pertokoan (minimal 10 toko dan mengelompok dalam satu lokasi)"
                                },
                                {
                                    "value": "2",
                                    "text": "2. Pasar dengan bangunan permanen (memiliki atap, lantai, dan dinding)"
                                },
                                {
                                    "value": "3",
                                    "text": "3. Pasar dengan bangunan semi permanen (memiliki atap dan lantai, tanpa dinding)"
                                },
                                {
                                    "value": "4",
                                    "text": "4. Pasar tanpa bangunan (misalnya: pasar subuh, pasar terapung, dll.)"
                                },
                                {
                                    "value": "5",
                                    "text": "5. Jumlah minimarket/swalayan (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang secara eceran dengan label harga, sistem pelayanan mandiri, luas lantai < 400 m2)"
                                },
                                {
                                    "value": "6",
                                    "text": "6. Toko/warung kelontong (tempat usaha di bangunan tetap untuk menjual berbagai jenis barang keperluan sehari-hari secara eceran, tanpa ada sistem pelayanan mandiri)"
                                },
                                {
                                    "value": "7",
                                    "text": "7. Toko/warung kelontong yang menjual bahan pangan (sembako)"
                                },
                                {
                                    "value": "8",
                                    "text": "8. Restoran/rumah makan (usaha pangan siap saji di bangunan tetap, pembeli biasanya dikenai pajak)"
                                },
                                {
                                    "value": "9",
                                    "text": "9. Warung/kedai makanan minuman (usaha pangan siap saji di bangunan tetap, pembeli biasanya tidak dikenai pajak)"
                                },
                                {
                                    "value": "10",
                                    "text": "10. Hotel (menyediakan jasa akomodasi dan ada restoran, penginapan dengan izin usaha sebagai hotel)"
                                },
                                {
                                    "value": "11",
                                    "text": "11. Penginapan: hostel/motel/losmen/wisma (menyediakan akomodasi, penginapan dengan izin usaha bukan sebagai hotel)"
                                },
                                {
                                    "value": "12",
                                    "text": "12. Bengkel mobil/motor"
                                },
                                {
                                    "value": "13",
                                    "text": "13. SalonKecantikan"
                                },
                                {
                                    "value": "14",
                                    "text": "14. Agen Tiket/Travel/Biro Perjalanan"
                                },
                                {
                                    "value": "15",
                                    "text": "15. Bank BRI"
                                },
                                {
                                    "value": "16",
                                    "text": "16. Agen BRI"
                                },
                                {
                                    "value": "17",
                                    "text": "17. Bank BNI"
                                },
                                {
                                    "value": "18",
                                    "text": "18. Agen BNI"
                                },
                                {
                                    "value": "19",
                                    "text": "19. Bank Mandiri"
                                },
                                {
                                    "value": "20",
                                    "text": "20. Agen Mandiri"
                                },
                                {
                                    "value": "21",
                                    "text": "21. BPD"
                                },
                                {
                                    "value": "22",
                                    "text": "22. Agen BPD"
                                },
                                {
                                    "value": "23",
                                    "text": "23. Bank umum pemerintah lainnya"
                                },
                                {
                                    "value": "24",
                                    "text": "24. Bank BCA"
                                },
                                {
                                    "value": "25",
                                    "text": "25. Bank CIMB-Niaga/Maybank"
                                },
                                {
                                    "value": "26",
                                    "text": "26. Bank Sinarmas"
                                },
                                {
                                    "value": "27",
                                    "text": "27. Bank Permata"
                                },
                                {
                                    "value": "28",
                                    "text": "28. Bank swasta lainnya"
                                },
                                {
                                    "value": "29",
                                    "text": "29. BPR (Bank Perkreditan Rakyat)"
                                },
                                {
                                    "value": "30",
                                    "text": "30. Baitul Maal Wa Tamwil (BMT)"
                                },
                                {
                                    "value": "31",
                                    "text": "31. Pegadaian"
                                },
                                {
                                    "value": "32",
                                    "text": "32. Anjungan Tunai Mandiri (ATM)"
                                },
                                {
                                    "value": "33",
                                    "text": "33. Sarana ekonomi lain"
                                }
                            ],
                            "otherText": "11. industri lainnya, sebutkan"
                        },
                        {
                            "type": "text",
                            "name": "R.P502_jumlah",
                            "title": "Jumlah",
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
                            "type": "dropdown",
                            "name": "R.P502_kondisi",
                            "title": "Kondisi",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Baik"
                                },
                                {
                                    "value": "2",
                                    "text": "Buruk"
                                },
                                {
                                    "value": "3",
                                    "text": "Tidak berfungsi"
                                },
                                {
                                    "value": "4",
                                    "text": "Tidak ada"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P502_jarak",
                            "visibleIf": "{P508[0].P502_kondisi} = 4",
                            "title": "Jika Tidak Ada, jarak ke sarana terdekat (km)",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P502_kemudahan",
                            "title": "Kemudahan untuk mencapai",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Sangat mudah"
                                },
                                {
                                    "value": "2",
                                    "text": "Mudah "
                                },
                                {
                                    "value": "3",
                                    "text": "Sulit"
                                },
                                {
                                    "value": "4",
                                    "text": "Sangat sulit"
                                }
                            ]
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "SARANA EKONOMI"
        },
        {
            "name": "page8",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "R.P601",
                    "title": "Penerangan di jalan utama",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Listrik diusahakan pemerintah"
                        },
                        {
                            "value": "2",
                            "text": "Listrik diusahakan non pemerintah"
                        },
                        {
                            "value": "3",
                            "text": "Non listrik"
                        },
                        {
                            "value": "4",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P602",
                    "title": "Prasarana transportasi antar RT",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Darat"
                        },
                        {
                            "value": "2",
                            "text": "Air"
                        },
                        {
                            "value": "3",
                            "text": "Darat dan air"
                        },
                        {
                            "value": "4",
                            "text": "Udara"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P603",
                    "title": "Panjang jalan (km)",
                    "items": [
                        {
                            "name": "1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "1. Jalan aspal"
                        },
                        {
                            "name": "2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "2. Jalan diperkeras (kerikil, batu, dll) "
                        },
                        {
                            "name": "3",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "3. Jalan tanah"
                        },
                        {
                            "name": "4",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "4. Jalan papan di atas air"
                        },
                        {
                            "name": "5",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "5. Jalan setapak"
                        },
                        {
                            "name": "6",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "6. Jalan lainnya"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P604",
                    "title": "Jalan darat dapat dilalui kendaraan bermotor roda 4 atau lebih",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Sepanjang tahun"
                        },
                        {
                            "value": "2",
                            "text": "Sepanjang tahun kecuali saat tertentu (ketika hujan, pasang, dll)"
                        },
                        {
                            "value": "3",
                            "text": "Selama musim kemarau"
                        },
                        {
                            "value": "4",
                            "text": "Tidak dapat dilalui sepanjang tahun"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P605_1",
                    "title": "Keberadaan trayek angkutan umum",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Trayek tetap"
                        },
                        {
                            "value": "2",
                            "text": "Tanpa trayek tetap"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada angkutan umum"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P605_2",
                    "visibleIf": "{R.P605_1} anyof [1, 2]",
                    "title": "Operasional angkutan umum",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Setiap hari"
                        },
                        {
                            "value": "2",
                            "text": "Tidak setiap hari"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P605_3",
                    "visibleIf": "{R.P605_1} anyof [1, 2]",
                    "title": "Jam operasi angkutan umum",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Siang dan malam hari"
                        },
                        {
                            "value": "2",
                            "text": "Hanya siang hari"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P606",
                    "title": "Dermaga laut/sungai",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada, kondisi baik"
                        },
                        {
                            "value": "2",
                            "text": "Ada, kondisi buruk"
                        },
                        {
                            "value": "3",
                            "text": "Ada, tidak dapat berfungsi"
                        },
                        {
                            "value": "4",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P607_1",
                    "title": "Jumlah menara Base Transceiver Station (BTS)",
                    "description": "Pemancar sinyal HP",
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
                    "type": "matrixdropdown",
                    "name": "R.P607_2",
                    "title": "Sinyal Operator",
                    "defaultValue": {
                        "Telkomsel": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "Indosat": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "XL/Axis": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "Hutchison 3": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "PSN ByRU": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "Smartfren": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        },
                        "Bakrie Telecom": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4"
                        }
                    },
                    "isRequired": true,
                    "columns": [
                        {
                            "name": "Sinyal Operator",
                            "cellType": "dropdown",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Sinyal sangat kuat"
                                },
                                {
                                    "value": "2",
                                    "text": "Sinyal kuat"
                                },
                                {
                                    "value": "3",
                                    "text": "Sinyal lemah"
                                },
                                {
                                    "value": "4",
                                    "text": "Tidak ada sinyal"
                                }
                            ]
                        },
                        {
                            "name": "Sinyal Internet",
                            "cellType": "dropdown",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "4G/LTE"
                                },
                                {
                                    "value": "2",
                                    "text": "3G/H/H+/EVDO"
                                },
                                {
                                    "value": "3",
                                    "text": "5G/E/GPRS"
                                },
                                {
                                    "value": "4",
                                    "text": "Tidak ada sinyal internet"
                                }
                            ]
                        }
                    ],
                    "rows": [
                        "Telkomsel",
                        "Indosat",
                        "XL/Axis",
                        "Hutchison 3",
                        "PSN ByRU",
                        "Smartfren",
                        "Bakrie Telecom"
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P608_1",
                    "title": "Kantor pos/pos pembantu/rumah pos",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Beroperasi"
                        },
                        {
                            "value": "2",
                            "text": "Jarang beroperasi"
                        },
                        {
                            "value": "3",
                            "text": "Tidak beroperasi"
                        },
                        {
                            "value": "4",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P608_2",
                    "title": "Kantor pos/pos pembantu/rumah pos",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P608_3",
                    "title": "Perusahaan/agen jasa ekspedisi (pengiriman barang/dokumen) swasta",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Beroperasi"
                        },
                        {
                            "value": "2",
                            "text": "Jarang beroperasi"
                        },
                        {
                            "value": "3",
                            "text": "Tidak beroperasi"
                        },
                        {
                            "value": "4",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "matrixdropdown",
                    "name": "R.P609",
                    "title": "Program/siaran TV/radio yang diterima",
                    "defaultValue": {
                        "Telkomsel": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Indosat": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "XL/Axis": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Hutchison 3": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "PSN ByRU": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Smartfren": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Bakrie Telecom": {
                            "Kekuatan sinyal": "4",
                            "Jenis sinyal": "4",
                            "Sinyal Operator": "4",
                            "Sinyal Internet": "4",
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "TVRI": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "TVRI Daerah": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "TV swasta": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "TV luar negeri": {
                            "Dapat Diterima": "2",
                            "Perlu Parabola": "1"
                        },
                        "RRI": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "RRI Daerah": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Radio swasta": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        },
                        "Radio komunitas": {
                            "Dapat Diterima": "1",
                            "Perlu Parabola": "2"
                        }
                    },
                    "isRequired": true,
                    "columns": [
                        {
                            "name": "Dapat Diterima",
                            "cellType": "dropdown",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ya"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "name": "Perlu Parabola",
                            "cellType": "dropdown",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ya"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        }
                    ],
                    "rows": [
                        "TVRI",
                        "TVRI Daerah",
                        "TV swasta",
                        "TV luar negeri",
                        "RRI",
                        "RRI Daerah",
                        "Radio swasta",
                        "Radio komunitas"
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P610_1",
                    "title": "Jumlah lokasi permukiman liar",
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
                    "type": "multipletext",
                    "name": "R.P610_2",
                    "title": "Jumlah fasilitas umum/fasilitas sosial yang ditinggali penduduk",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1. Pasar"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "2. Stasiun"
                        },
                        {
                            "name": "3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "3. Terminal"
                        },
                        {
                            "name": "4",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "4. Kolong jembatan"
                        },
                        {
                            "name": "5",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "5. Pelabuhan"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P611",
                    "title": "Jumlah lokasi permukiman khusus",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1. Permukiman/perumahan mewah"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "2.\tapartemen"
                        },
                        {
                            "name": "3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "3.\trumah susun"
                        },
                        {
                            "name": "4",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "4.\tsekolah berasrama (boarding school)"
                        },
                        {
                            "name": "5",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "5.\tkos-kosan"
                        },
                        {
                            "name": "6",
                            "title": "6.\tasrama/barak militer"
                        },
                        {
                            "name": "7",
                            "title": "7.\tLP/Rutan"
                        }
                    ]
                }
            ],
            "title": "INFRASTRUKTUR"
        },
        {
            "name": "page9",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "R.P701",
                    "title": "Luas lahan menurut jenis penggunaan lahan (Ha)",
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "1.\tLahan sawah irigasi "
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "2.\tLahan sawah non irigasi (tadah hujan, pasang surut, rawa, dll) "
                        },
                        {
                            "name": "3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "3.\tKebun "
                        },
                        {
                            "name": "4",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "4.\tHuma/ladang"
                        },
                        {
                            "name": "5",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "5.\tTambak "
                        },
                        {
                            "name": "6",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "6.\tKolam/tebat/empang "
                        },
                        {
                            "name": "7",
                            "title": "7.\tLahan gembala ternak "
                        },
                        {
                            "name": "8",
                            "title": "8.\tLahan perusahaan perkebunan "
                        },
                        {
                            "name": "9",
                            "title": "9.\tAreal hutan"
                        },
                        {
                            "name": "10",
                            "title": "10.\tLahan pertanian non sawah lainnya"
                        },
                        {
                            "name": "11",
                            "title": "11.\tLahan pertambangan"
                        },
                        {
                            "name": "12",
                            "title": "12.\tLahan perumahan "
                        },
                        {
                            "name": "13",
                            "title": "13.\tLahan perkantoran "
                        },
                        {
                            "name": "14",
                            "title": "14.\tLahan pertokoan "
                        },
                        {
                            "name": "15",
                            "title": "15.\tLahan industri "
                        },
                        {
                            "name": "16",
                            "title": "16.\tFasilitas umum (lapangan, prasarana umum, jalan, dermaga, dll) "
                        },
                        {
                            "name": "17",
                            "title": "17.\tLahan lainnya "
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P702",
                    "title": "Nama sungai yang melintasi",
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Sungai 1"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Sungai 2"
                        },
                        {
                            "name": "3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Sungai 3"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P703",
                    "title": "Nama danau/waduk/situ",
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Danau 1"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Danau 2"
                        },
                        {
                            "name": "3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Danau 3"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "R.P704",
                    "title": "Jumlah mata air",
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
                    "name": "R.P705",
                    "title": "Jumlah embung",
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
                    "type": "multipletext",
                    "name": "R.P705a",
                    "visible": false,
                    "visibleIf": "{R.P705} > 0",
                    "title": "Pemanfaatan embung",
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1.\t Jumlah petani yang memanfaatkan embung"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "2.\tTotal lahan (Ha) yang memperoleh manfaat embung"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P705b",
                    "title": "Ketersediaan sumur bor sawah dan pompa air untuk lahan pertanian",
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "R.P705c",
                    "visible": false,
                    "visibleIf": "{R.P705b} = 1",
                    "title": "Pemanfaatan sumur bor",
                    "items": [
                        {
                            "name": "1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "1.\tJumlah petani yang memanfaatkan sumur bor"
                        },
                        {
                            "name": "2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ],
                            "title": "2.\tTotal lahan (Ha) yang memanfaatkan sumur bor dan pompa air"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_1sungai_kondisi",
                    "title": "Kondisi Sungai",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kondisi Baik"
                        },
                        {
                            "value": "2",
                            "text": "Tercemar"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_1sungai_digunakan",
                    "visible": false,
                    "visibleIf": "{R.P706_1sungai_kondisi} anyof [1, 2]",
                    "title": "Sungai digunakan?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Digunakan"
                        },
                        {
                            "value": "2",
                            "text": "Tidak digunakan"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "R.P706_1sungai_jenis",
                    "visible": false,
                    "visibleIf": "{R.P706_1sungai_digunakan} = 1",
                    "title": "Jenis Penggunaan Sungai",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Mandi/cuci"
                        },
                        {
                            "value": "2",
                            "text": "Sumber air minum/ masak"
                        },
                        {
                            "value": "3",
                            "text": "Bahan baku air minum"
                        },
                        {
                            "value": "4",
                            "text": "Pengairan/ irigasi lahan pertanian"
                        },
                        {
                            "value": "5",
                            "text": "Pariwisata (komersial)"
                        },
                        {
                            "value": "6",
                            "text": "Perikanan"
                        },
                        {
                            "value": "7",
                            "text": "Transportasi"
                        },
                        {
                            "value": "8",
                            "text": "Pembangkit listrik"
                        },
                        {
                            "value": "9",
                            "text": "Industri/ pabrik"
                        },
                        {
                            "value": "10",
                            "text": "Lainnya"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_2irigasi_kondisi",
                    "title": "Kondisi Saluran Irigasi",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kondisi Baik"
                        },
                        {
                            "value": "2",
                            "text": "Tercemar"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_2irigasi_digunakan",
                    "visible": false,
                    "visibleIf": "{R.P706_2irigasi_kondisi} anyof [1, 2]",
                    "title": "Saluran Irigasi digunakan?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Digunakan"
                        },
                        {
                            "value": "2",
                            "text": "Tidak digunakan"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "R.P706_2irigasi_jenis",
                    "visible": false,
                    "visibleIf": "{R.P706_2irigasi_digunakan} = 1",
                    "title": "Jenis Penggunaan Saluran Irigasi",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Mandi/cuci"
                        },
                        {
                            "value": "2",
                            "text": "Sumber air minum/ masak"
                        },
                        {
                            "value": "3",
                            "text": "Bahan baku air minum"
                        },
                        {
                            "value": "4",
                            "text": "Pengairan/ irigasi lahan pertanian"
                        },
                        {
                            "value": "5",
                            "text": "Pariwisata (komersial)"
                        },
                        {
                            "value": "6",
                            "text": "Perikanan"
                        },
                        {
                            "value": "7",
                            "text": "Transportasi"
                        },
                        {
                            "value": "8",
                            "text": "Pembangkit listrik"
                        },
                        {
                            "value": "9",
                            "text": "Industri/ pabrik"
                        },
                        {
                            "value": "10",
                            "text": "Lainnya"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_2danau_kondisi",
                    "title": "Kondisi Danau/waduk/situ/bendungan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kondisi Baik"
                        },
                        {
                            "value": "2",
                            "text": "Tercemar"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_2danau_digunakan",
                    "visible": false,
                    "visibleIf": "{R.P706_2danau_kondisi} anyof [1, 2]",
                    "title": "Danau/waduk/situ/bendungan digunakan?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Digunakan"
                        },
                        {
                            "value": "2",
                            "text": "Tidak digunakan"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "R.P706_2danau_jenis",
                    "visible": false,
                    "visibleIf": "{R.P706_2danau_digunakan} = 1",
                    "title": "Jenis Penggunaan Danau/waduk/situ/bendungan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Mandi/cuci"
                        },
                        {
                            "value": "2",
                            "text": "Sumber air minum/ masak"
                        },
                        {
                            "value": "3",
                            "text": "Bahan baku air minum"
                        },
                        {
                            "value": "4",
                            "text": "Pengairan/ irigasi lahan pertanian"
                        },
                        {
                            "value": "5",
                            "text": "Pariwisata (komersial)"
                        },
                        {
                            "value": "6",
                            "text": "Perikanan"
                        },
                        {
                            "value": "7",
                            "text": "Transportasi"
                        },
                        {
                            "value": "8",
                            "text": "Pembangkit listrik"
                        },
                        {
                            "value": "9",
                            "text": "Industri/ pabrik"
                        },
                        {
                            "value": "10",
                            "text": "Lainnya"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_3embung_kondisi",
                    "title": "Kondisi Embung",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kondisi Baik"
                        },
                        {
                            "value": "2",
                            "text": "Tercemar"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P706_3embung_digunakan",
                    "visible": false,
                    "visibleIf": "{R.P706_3embung_kondisi} anyof [1, 2]",
                    "title": "Embung digunakan?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Digunakan"
                        },
                        {
                            "value": "2",
                            "text": "Tidak digunakan"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "R.P706_3embung_jenis",
                    "visible": false,
                    "visibleIf": "{R.P706_3embung_digunakan} = 1",
                    "title": "Jenis Penggunaan Embung",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Mandi/cuci"
                        },
                        {
                            "value": "2",
                            "text": "Sumber air minum/ masak"
                        },
                        {
                            "value": "3",
                            "text": "Bahan baku air minum"
                        },
                        {
                            "value": "4",
                            "text": "Pengairan/ irigasi lahan pertanian"
                        },
                        {
                            "value": "5",
                            "text": "Pariwisata (komersial)"
                        },
                        {
                            "value": "6",
                            "text": "Perikanan"
                        },
                        {
                            "value": "7",
                            "text": "Transportasi"
                        },
                        {
                            "value": "8",
                            "text": "Pembangkit listrik"
                        },
                        {
                            "value": "9",
                            "text": "Industri/ pabrik"
                        },
                        {
                            "value": "10",
                            "text": "Lainnya"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P707_1a",
                    "visibleIf": "{R.P706_1sungai_kondisi} = 2 or {R.P706_2danau_kondisi} = 2",
                    "title": "Keberadaan sumber limbah dari pabrik/ industry/ usaha ",
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
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P707_1b",
                    "visibleIf": "{R.P706_1sungai_kondisi} = 2 or {R.P706_2danau_kondisi} = 2",
                    "title": "Keberadaan sumber limbah dari rumah tangga",
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
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P707_1c",
                    "visibleIf": "{R.P706_1sungai_kondisi} = 2 or {R.P706_2danau_kondisi} = 2",
                    "title": "Keberadaan sumber limbah lainnya",
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
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P707_2",
                    "visibleIf": "{R.P707_1a} = 1 or {R.P707_1b} = 1 or {R.P707_1c} = 1",
                    "title": "Sumber limbah berlokasi di",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Dalam RT"
                        },
                        {
                            "value": "2",
                            "text": "Dalam RW"
                        },
                        {
                            "value": "3",
                            "text": "Dalam Desa"
                        },
                        {
                            "value": "4",
                            "text": "Luar Desa"
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "R.P708_pencemaran_1air",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P708_1air_1keberadaan",
                            "title": "Pencemaran Air",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "checkbox",
                            "name": "R.P708_1air_2sumber",
                            "visible": false,
                            "visibleIf": "{R.P708_1air_1keberadaan} = 1",
                            "title": "Sumber pencemaran",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Pabrik/Industry/usaha"
                                },
                                {
                                    "value": "2",
                                    "text": "Rumah tangga"
                                },
                                {
                                    "value": "3",
                                    "text": "Lainnya"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_1air_3lokasi",
                            "visible": false,
                            "visibleIf": "{R.P708_1air_1keberadaan} = 1",
                            "title": "Lokasi limbah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Dalam RT"
                                },
                                {
                                    "value": "2",
                                    "text": "Dalam RW"
                                },
                                {
                                    "value": "3",
                                    "text": "Dalam Desa"
                                },
                                {
                                    "value": "4",
                                    "text": "Luar desa"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_1air_4pengaduan",
                            "visible": false,
                            "visibleIf": "{R.P708_1air_1keberadaan} = 1",
                            "title": "Pengaduan warga",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        }
                    ],
                    "title": "Pencemaran Air Setahun Terakhir",
                    "isRequired": true
                },
                {
                    "type": "panel",
                    "name": "R.P708_pencemaran_2tanah",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P708_2tanah_1keberadaan",
                            "title": "Pencemaran Tanah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "checkbox",
                            "name": "R.P708_2tanah_2sumber",
                            "visible": false,
                            "visibleIf": "{R.P708_2tanah_1keberadaan} = 1",
                            "title": "Sumber pencemaran",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Pabrik/Industry/usaha"
                                },
                                {
                                    "value": "2",
                                    "text": "Rumah tangga"
                                },
                                {
                                    "value": "3",
                                    "text": "Lainnya"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_2tanah_3lokasi",
                            "visible": false,
                            "visibleIf": "{R.P708_2tanah_1keberadaan} = 1",
                            "title": "Lokasi limbah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Dalam RT"
                                },
                                {
                                    "value": "2",
                                    "text": "Dalam RW"
                                },
                                {
                                    "value": "3",
                                    "text": "Dalam Desa"
                                },
                                {
                                    "value": "4",
                                    "text": "Luar desa"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_2tanah_4pengaduan",
                            "visible": false,
                            "visibleIf": "{R.P708_2tanah_1keberadaan} = 1",
                            "title": "Pengaduan warga",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        }
                    ],
                    "title": "Pencemaran Tanah Setahun Terakhir",
                    "isRequired": true
                },
                {
                    "type": "panel",
                    "name": "R.P708_pencemaran_3udara",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P708_3udara_1keberadaan",
                            "title": "Pencemaran Tanah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "checkbox",
                            "name": "R.P708_3udara_2sumber",
                            "visible": false,
                            "visibleIf": "{R.P708_3udara_1keberadaan} = 1",
                            "title": "Sumber pencemaran",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Pabrik/Industry/usaha"
                                },
                                {
                                    "value": "2",
                                    "text": "Rumah tangga"
                                },
                                {
                                    "value": "3",
                                    "text": "Lainnya"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_3udara_3lokasi",
                            "visible": false,
                            "visibleIf": "{R.P708_3udara_1keberadaan} = 1",
                            "title": "Lokasi limbah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Dalam RT"
                                },
                                {
                                    "value": "2",
                                    "text": "Dalam RW"
                                },
                                {
                                    "value": "3",
                                    "text": "Dalam Desa"
                                },
                                {
                                    "value": "4",
                                    "text": "Luar desa"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P708_3udara_4pengaduan",
                            "visible": false,
                            "visibleIf": "{R.P708_3udara_1keberadaan} = 1",
                            "title": "Pengaduan warga",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        }
                    ],
                    "title": "Pencemaran Udara Setahun Terakhir",
                    "isRequired": true
                },
                {
                    "type": "dropdown",
                    "name": "R.P709",
                    "title": "Pengolahan/daur ulang sampah/limbah",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada, sebagian warga terlibat"
                        },
                        {
                            "value": "2",
                            "text": "Ada, warga tidak terlibat"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada kegiatan"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P710",
                    "title": "Kebiasaan masyarakat membakar ladang/kebun di desa/kelurahan untuk proses usaha pertanian",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P711",
                    "title": "Keberadaan lokasi penggalian Golongan C (misalnya: batu kali, pasir, kapur, kaolin, pasir kuarsa, tanah liat, dll.)",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                }
            ],
            "title": "LINGKUNGAN"
        },
        {
            "name": "page10",
            "elements": [
                {
                    "type": "panel",
                    "name": "R.P712_1",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_1keberadaan",
                            "title": "Bencana Tanah longsor setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_1kejadian",
                            "visibleIf": "{R.P712_1keberadaan} = 1",
                            "title": "Banyak kejadian Tanah longsor (jumlah)",
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
                            "name": "R.P712_1korban",
                            "visibleIf": "{R.P712_1keberadaan} = 1",
                            "title": "Korban jiwa Tanah longsor (jiwa)",
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
                            "name": "R.P712_1pengungsi",
                            "visibleIf": "{R.P712_1keberadaan} = 1",
                            "title": "Pengungsi Banjir (jiwa)",
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
                            "name": "R.P712_1terdampak",
                            "visibleIf": "{R.P712_1keberadaan} = 1",
                            "title": "Warga terdampak Tanah longsor (jiwa)",
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
                    "title": "Tanah longsor"
                },
                {
                    "type": "panel",
                    "name": "R.P712_2",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_2keberadaan",
                            "title": "Bencana Banjir setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_2kejadian",
                            "visibleIf": "{R.P712_2keberadaan} = 1",
                            "title": "Banyak kejadian Banjir (jumlah)",
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
                            "name": "R.P712_2korban",
                            "visibleIf": "{R.P712_2keberadaan} = 1",
                            "title": "Korban jiwa Banjir (jiwa)",
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
                            "name": "R.P712_2pengungsi",
                            "visibleIf": "{R.P712_2keberadaan} = 1",
                            "title": "Pengungsi Banjir (jiwa)",
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
                            "name": "R.P712_2terdampak",
                            "visibleIf": "{R.P712_2keberadaan} = 1",
                            "title": "Warga terdampak Banjir (jiwa)",
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
                    "title": "Banjir"
                },
                {
                    "type": "panel",
                    "name": "R.P712_3",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_3keberadaan",
                            "title": "Bencana Banjir bandang setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_3kejadian",
                            "visibleIf": "{R.P712_3keberadaan} = 1",
                            "title": "Banyak kejadian Banjir bandang (jumlah)",
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
                            "name": "R.P712_3korban",
                            "visibleIf": "{R.P712_3keberadaan} = 1",
                            "title": "Korban jiwa Banjir bandang (jiwa)",
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
                            "name": "R.P712_3pengungsi",
                            "visibleIf": "{R.P712_3keberadaan} = 1",
                            "title": "Pengungsi Banjir bandang (jiwa)",
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
                            "name": "R.P712_3terdampak",
                            "visibleIf": "{R.P712_3keberadaan} = 1",
                            "title": "Warga terdampak Banjir bandang (jiwa)",
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
                    "title": "Banjir bandang"
                },
                {
                    "type": "panel",
                    "name": "R.P712_4",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_4keberadaan",
                            "title": "Bencana Gempa bumi setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_4kejadian",
                            "visibleIf": "{R.P712_4keberadaan} = 1",
                            "title": "Banyak kejadian Gempa bumi (jumlah)",
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
                            "name": "R.P712_4korban",
                            "visibleIf": "{R.P712_4keberadaan} = 1",
                            "title": "Korban jiwa Gempa bumi (jiwa)",
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
                            "name": "R.P712_4pengungsi",
                            "visibleIf": "{R.P712_4keberadaan} = 1",
                            "title": "Pengungsi Gempa bumi (jiwa)",
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
                            "name": "R.P712_4terdampak",
                            "visibleIf": "{R.P712_4keberadaan} = 1",
                            "title": "Warga terdampak Gempa bumi (jiwa)",
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
                    "title": "Gempa bumi"
                },
                {
                    "type": "panel",
                    "name": "R.P712_5",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_5keberadaan",
                            "title": "Bencana Tsunami setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_5kejadian",
                            "visibleIf": "{R.P712_5keberadaan} = 1",
                            "title": "Banyak kejadian Tsunami (jumlah)",
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
                            "name": "R.P712_5korban",
                            "visibleIf": "{R.P712_5keberadaan} = 1",
                            "title": "Korban jiwa Tsunami (jiwa)",
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
                            "name": "R.P712_5pengungsi",
                            "visibleIf": "{R.P712_5keberadaan} = 1",
                            "title": "Pengungsi Tsunami (jiwa)",
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
                            "name": "R.P712_5terdampak",
                            "visibleIf": "{R.P712_5keberadaan} = 1",
                            "title": "Warga terdampak Tsunami (jiwa)",
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
                    "title": "Tsunami"
                },
                {
                    "type": "panel",
                    "name": "R.P712_6",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_6keberadaan",
                            "title": "Bencana Gelombang pasang laut setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_6kejadian",
                            "visibleIf": "{R.P712_6keberadaan} = 1",
                            "title": "Banyak kejadian Gelombang pasang laut (jumlah)",
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
                            "name": "R.P712_6korban",
                            "visibleIf": "{R.P712_6keberadaan} = 1",
                            "title": "Korban jiwa Gelombang pasang laut (jiwa)",
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
                            "name": "R.P712_6pengungsi",
                            "visibleIf": "{R.P712_6keberadaan} = 1",
                            "title": "Pengungsi Gelombang pasang laut (jiwa)",
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
                            "name": "R.P712_6terdampak",
                            "visibleIf": "{R.P712_6keberadaan} = 1",
                            "title": "Warga terdampak Gelombang pasang laut (jiwa)",
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
                    "title": "Gelombang pasang laut"
                },
                {
                    "type": "panel",
                    "name": "R.P712_7",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_7keberadaan",
                            "title": "Bencana Angin puyuh/putting beliung/topan setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_7kejadian",
                            "visibleIf": "{R.P712_7keberadaan} = 1",
                            "title": "Banyak kejadian (jumlah)",
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
                            "name": "R.P712_7korban",
                            "visibleIf": "{R.P712_7keberadaan} = 1",
                            "title": "Korban jiwa (jiwa)",
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
                            "name": "R.P712_7pengungsi",
                            "visibleIf": "{R.P712_7keberadaan} = 1",
                            "title": "Pengungsi (jiwa)",
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
                            "name": "R.P712_7terdampak",
                            "visibleIf": "{R.P712_7keberadaan} = 1",
                            "title": "Warga terdampak (jiwa)",
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
                    "title": "Angin puyuh/ putting beliung/ topan"
                },
                {
                    "type": "panel",
                    "name": "R.P712_8",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_8keberadaan",
                            "title": "Bencana Gunung meletus setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_8kejadian",
                            "visibleIf": "{R.P712_8keberadaan} = 1",
                            "title": "Banyak kejadian Gunung meletus (jumlah)",
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
                            "name": "R.P712_8korban",
                            "visibleIf": "{R.P712_8keberadaan} = 1",
                            "title": "Korban jiwa Gunung meletus (jiwa)",
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
                            "name": "R.P712_8pengungsi",
                            "visibleIf": "{R.P712_8keberadaan} = 1",
                            "title": "Pengungsi Gunung meletus (jiwa)",
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
                            "name": "R.P712_8terdampak",
                            "visibleIf": "{R.P712_8keberadaan} = 1",
                            "title": "Warga terdampak Gunung meletus (jiwa)",
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
                    "title": "Gunung meletus"
                },
                {
                    "type": "panel",
                    "name": "R.P712_9",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_9keberadaan",
                            "title": "Bencana Kebakaran hutan/lahan setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_9kejadian",
                            "visibleIf": "{R.P712_9keberadaan} = 1",
                            "title": "Banyak kejadian Kebakaran hutan/lahan (jumlah)",
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
                            "name": "R.P712_9korban",
                            "visibleIf": "{R.P712_9keberadaan} = 1",
                            "title": "Korban jiwa Kebakaran hutan/lahan (jiwa)",
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
                            "name": "R.P712_9pengungsi",
                            "visibleIf": "{R.P712_9keberadaan} = 1",
                            "title": "Pengungsi Kebakaran hutan/lahan (jiwa)",
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
                            "name": "R.P712_9terdampak",
                            "visibleIf": "{R.P712_9keberadaan} = 1",
                            "title": "Warga terdampak Kebakaran hutan/lahan (jiwa)",
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
                    "title": "Kebakaran hutan/lahan"
                },
                {
                    "type": "panel",
                    "name": "R.P712_10",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P712_10keberadaan",
                            "title": "Bencana Kekeringan (lahan) setahun terakhir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P712_10kejadian",
                            "visibleIf": "{R.P712_10keberadaan} = 1",
                            "title": "Banyak kejadian Kekeringan (lahan) (jumlah)",
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
                            "name": "R.P712_10korban",
                            "visibleIf": "{R.P712_10keberadaan} = 1",
                            "title": "Korban jiwa Kekeringan (lahan) (jiwa)",
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
                            "name": "R.P712_10pengungsi",
                            "visibleIf": "{R.P712_10keberadaan} = 1",
                            "title": "Pengungsi Kekeringan (lahan) (jiwa)",
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
                            "name": "R.P712_10terdampak",
                            "visibleIf": "{R.P712_10keberadaan} = 1",
                            "title": "Warga terdampak Kekeringan (lahan) (jiwa)",
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
                    "title": "Kekeringan (lahan)"
                }
            ],
            "title": "BENCANA"
        },
        {
            "name": "page11",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "R.P713_1",
                    "title": "Sistem peringatan dini bencana alam",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P713_2",
                    "title": "Sistem peringatan dini khusus tsunami",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Bukan wilayah potensi tsunami"
                        },
                        {
                            "value": "2",
                            "text": "Ada"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P713_3",
                    "title": "Perlengkapan keselamatan (perahu karet, tenda, masker, dll.):",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P713_4",
                    "title": "Rambu–rambu dan jalur evakuasi bencana",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "R.P713_5",
                    "title": "Pembuatan/perawatan/normalisasi: sungai, kanal, tanggul, parit, drainase, waduk, pantai, dll: ",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                }
            ],
            "title": "MITIGASI BENCANA"
        },
        {
            "name": "page12",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P801",
                    "title": "Keberadaan sarana pendidikan",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P801_jenis",
                            "title": "Jenjang Pendidikan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. Pos PAUD"
                                },
                                {
                                    "value": "2",
                                    "text": "2. TK/RA/BA"
                                },
                                {
                                    "value": "3",
                                    "text": "3. SD/Mi"
                                },
                                {
                                    "value": "4",
                                    "text": "4. SDLB"
                                },
                                {
                                    "value": "5",
                                    "text": "5. SMP/MTs"
                                },
                                {
                                    "value": "6",
                                    "text": "6. SMPLB"
                                },
                                {
                                    "value": "7",
                                    "text": "7. SMU/MA"
                                },
                                {
                                    "value": "8",
                                    "text": "8. SMK"
                                },
                                {
                                    "value": "9",
                                    "text": "9. SMALB"
                                },
                                {
                                    "value": "10",
                                    "text": "10. Akademi/perguruan tinggi"
                                },
                                {
                                    "value": "11",
                                    "text": "11. Pesantren"
                                },
                                {
                                    "value": "12",
                                    "text": "12. Madrasah diniyah"
                                },
                                {
                                    "value": "13",
                                    "text": "13. Seminari/sejenisnya"
                                },
                                {
                                    "value": "14",
                                    "text": "14. Sekolah agamal ainnya"
                                },
                                {
                                    "value": "15",
                                    "text": "15. Kegiatan pemberantasan buta aksara/keaksaraan fungsional (KF)"
                                },
                                {
                                    "value": "16",
                                    "text": "16. Kegiatan Kejar Paket A"
                                },
                                {
                                    "value": "17",
                                    "text": "17. Kegiatan Kejar Paket B"
                                },
                                {
                                    "value": "18",
                                    "text": "18. Kegiatan Kejar Paket C"
                                },
                                {
                                    "value": "19",
                                    "text": "19. Kelompok bermain/ play group"
                                },
                                {
                                    "value": "20",
                                    "text": "20. Tempat penitipan anak"
                                },
                                {
                                    "value": "21",
                                    "text": "21. Taman Pendidikan Alquran"
                                },
                                {
                                    "value": "22",
                                    "text": "22. Kursus bahasa asing"
                                },
                                {
                                    "value": "23",
                                    "text": "23. Kursus komputer"
                                },
                                {
                                    "value": "24",
                                    "text": "24. Kursus menjahit/ tata busana"
                                },
                                {
                                    "value": "25",
                                    "text": "25. Kursus kecantikan"
                                },
                                {
                                    "value": "26",
                                    "text": "26. Kursus montir mobil/motor"
                                },
                                {
                                    "value": "27",
                                    "text": "27. Kursus menyetir"
                                },
                                {
                                    "value": "28",
                                    "text": "28. Kursus elektronika"
                                },
                                {
                                    "value": "29",
                                    "text": "29. Kursus memasak/ tataboga"
                                },
                                {
                                    "value": "30",
                                    "text": "30. Kursus mengetik"
                                },
                                {
                                    "value": "31",
                                    "text": "31. Kursus akuntansi"
                                },
                                {
                                    "value": "32",
                                    "text": "32. Kursus lainnya"
                                }
                            ],
                            "otherText": "11. industri lainnya, sebutkan"
                        },
                        {
                            "type": "text",
                            "name": "R.P801_nama",
                            "title": "Nama Sarana Pendidikan"
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P801_pemilik",
                            "title": "Pemilik",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Negeri"
                                },
                                {
                                    "value": "2",
                                    "text": "Swasta"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P801_kondisi",
                            "title": "Kondisi bangunan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Layak"
                                },
                                {
                                    "value": "2",
                                    "text": "Rusak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P801_guru",
                            "title": "Jumlah Guru",
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
                            "name": "R.P801_murid",
                            "title": "Jumlah Murid",
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
                            "name": "R.P801_pegawai",
                            "title": "Jumlah Pegawai",
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
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                },
                {
                    "type": "dropdown",
                    "name": "R.P802",
                    "title": "Perpustakaan atau taman bacaan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada"
                        },
                        {
                            "value": "2",
                            "text": "Tidak ada"
                        }
                    ]
                }
            ],
            "title": "SARANA PENDIDIKAN"
        },
        {
            "name": "page13",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P901",
                    "title": "Keberadaan sarana kesehatan",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P901_jenis",
                            "title": "Sarana Kesehatan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. Rumah sakit"
                                },
                                {
                                    "value": "2",
                                    "text": "2. Rumah sakit bersalin"
                                },
                                {
                                    "value": "3",
                                    "text": "3. Puskesmas dengan rawat inap"
                                },
                                {
                                    "value": "4",
                                    "text": "4. Puskesmas tanpa rawat inap"
                                },
                                {
                                    "value": "5",
                                    "text": "5. Puskesmas pembantu"
                                },
                                {
                                    "value": "6",
                                    "text": "6. Poliklinik/ balai pengobatan"
                                },
                                {
                                    "value": "7",
                                    "text": "7. Tempat praktik dokter"
                                },
                                {
                                    "value": "8",
                                    "text": "8. Rumah bersalin"
                                },
                                {
                                    "value": "9",
                                    "text": "9. Tempat praktik bidan"
                                },
                                {
                                    "value": "10",
                                    "text": "10. Poskesdes"
                                },
                                {
                                    "value": "11",
                                    "text": "11. Polindes"
                                },
                                {
                                    "value": "12",
                                    "text": "12. Apotik"
                                },
                                {
                                    "value": "13",
                                    "text": "13. Toko khusus obat/ jamu"
                                },
                                {
                                    "value": "14",
                                    "text": "14. Posyandu"
                                },
                                {
                                    "value": "15",
                                    "text": "15. Posbindu"
                                },
                                {
                                    "value": "16",
                                    "text": "16. Tempat praktik dukun bayi/ dukun bersalin/ paraji"
                                }
                            ],
                            "otherText": "11. industri lainnya, sebutkan"
                        },
                        {
                            "type": "text",
                            "name": "R.P901_nama",
                            "title": "Nama Sarana Kesehatan"
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P901_pemilik",
                            "title": "Pemilik",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Negeri"
                                },
                                {
                                    "value": "2",
                                    "text": "Swasta"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P901_kondisi",
                            "title": "Kondisi bangunan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Layak"
                                },
                                {
                                    "value": "2",
                                    "text": "Rusak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P901_dokter",
                            "title": "Jumlah Dokter",
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
                            "name": "R.P901_bidan",
                            "title": "Jumlah Bidan",
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
                            "name": "R.P901_nakes",
                            "title": "Jumlah Tenaga Kesehatan",
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
                            "name": "R.P901_pegawai",
                            "title": "Jumlah Pegawai Lain",
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
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "SARANA KESEHATAN"
        },
        {
            "name": "page14",
            "elements": [
                {
                    "type": "panel",
                    "name": "R.P902_1",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_1kejadian",
                            "title": "Kejadian Muntaber/diare",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_1penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_1kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_1meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_1kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Muntaber/diare"
                },
                {
                    "type": "panel",
                    "name": "R.P902_2",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_2kejadian",
                            "title": "Kejadian Demam berdarah",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_2penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_2kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_2meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_2kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Demam berdarah"
                },
                {
                    "type": "panel",
                    "name": "R.P902_3",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_3kejadian",
                            "title": "Kejadian Campak",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_3penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_3kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_3meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_3kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Campak"
                },
                {
                    "type": "panel",
                    "name": "R.P902_4",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_4kejadian",
                            "title": "Kejadian Malaria",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_4penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_4kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_4meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_4kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Malaria"
                },
                {
                    "type": "panel",
                    "name": "R.P902_5",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_5kejadian",
                            "title": "Kejadian Flu burung/SARS",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_5penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_5kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_5meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_5kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Flu burung/SARS"
                },
                {
                    "type": "panel",
                    "name": "R.P902_6",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_6kejadian",
                            "title": "Kejadian Covid-19",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_6penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_6kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_6meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_6kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Covid-19"
                },
                {
                    "type": "panel",
                    "name": "R.P902_7",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_7kejadian",
                            "title": "Kejadian Hepatitis B",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_7penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_7kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_7meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_7kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Hepatitis B"
                },
                {
                    "type": "panel",
                    "name": "R.P902_8",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_8kejadian",
                            "title": "Kejadian Hepatitis E",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_8penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_8kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_8meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_8kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Hepatitis E"
                },
                {
                    "type": "panel",
                    "name": "R.P902_9",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_9kejadian",
                            "title": "Kejadian Difteri",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_9penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_9kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_9meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_9kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Difteri"
                },
                {
                    "type": "panel",
                    "name": "R.P902_10",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_10kejadian",
                            "title": "Kejadian Chikungunya",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_10penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_10kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_10meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_10kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Chikungunya"
                },
                {
                    "type": "panel",
                    "name": "R.P902_11",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_11kejadian",
                            "title": "Kejadian Leptospirosis",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_11penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_11kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_11meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_11kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Leptospirosis"
                },
                {
                    "type": "panel",
                    "name": "R.P902_12",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_12kejadian",
                            "title": "Kejadian Kolera",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_12penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_12kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_12meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_12kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Kolera"
                },
                {
                    "type": "panel",
                    "name": "R.P902_13",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_13kejadian",
                            "title": "Kejadian Gizi buruk (marasmus dan kwasiorkor)",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_13penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_13kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_13meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_13kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Gizi buruk (marasmus dan kwasiorkor)"
                },
                {
                    "type": "panel",
                    "name": "R.P902_14",
                    "elements": [
                        {
                            "type": "dropdown",
                            "name": "R.P902_14kejadian",
                            "title": "Kejadian Penyakit Lain",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada "
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P902_14nama",
                            "visible": false,
                            "visibleIf": "{R.P902_14kejadian} = 1",
                            "title": "Nama Penyakit",
                            "isRequired": true
                        },
                        {
                            "type": "text",
                            "name": "R.P902_14penderita",
                            "visible": false,
                            "visibleIf": "{R.P902_14kejadian} = 1",
                            "title": "Jumlah penderita (jiwa)",
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
                            "name": "R.P902_14meninggal",
                            "visible": false,
                            "visibleIf": "{R.P902_14kejadian} = 1",
                            "title": "Jumlah meninggal (jiwa)",
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
                    "title": "Penyakit Lainnya"
                }
            ],
            "title": "KEJADIAN LUAR BIASA"
        },
        {
            "name": "page15",
            "elements": [
                {
                    "type": "text",
                    "name": "R.P1001",
                    "title": "Jumlah warga peserta jaminan sosial kesehatan (jiwa)",
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
                    "name": "R.P1002",
                    "title": "Jumlah warga peserta jaminan sosial ketenagakerjaan (jiwa)",
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
                    "type": "panel",
                    "name": "R.P1003",
                    "elements": [
                        {
                            "type": "text",
                            "name": "R.P1003_1",
                            "title": "Masjid",
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
                            "name": "R.P1003_2",
                            "title": "Musala/surau/langgar ",
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
                            "name": "R.P1003_3",
                            "title": "Gereja Kristen",
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
                            "name": "R.P1003_4",
                            "title": "Gereja Katolik",
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
                            "name": "R.P1003_5",
                            "title": "Kapel",
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
                            "name": "R.P1003_6",
                            "title": "Pura",
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
                            "name": "R.P1003_7",
                            "title": "Wihara",
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
                            "name": "R.P1003_8",
                            "title": "Kelenteng ",
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
                            "name": "R.P1003_10",
                            "title": "Lainnya (sebutkan)"
                        },
                        {
                            "type": "panel",
                            "name": "R.P1005",
                            "elements": [
                                {
                                    "type": "text",
                                    "name": "R.P1005_1",
                                    "title": "Situs Cagar Budaya 1"
                                },
                                {
                                    "type": "text",
                                    "name": "R.P1005_2",
                                    "title": "Situs Cagar Budaya 2"
                                },
                                {
                                    "type": "text",
                                    "name": "R.P1005_3",
                                    "title": "Situs Cagar Budaya 3"
                                }
                            ],
                            "title": "Situs cagar budaya (sebutkan)"
                        },
                        {
                            "type": "panel",
                            "name": "R.P1006",
                            "elements": [
                                {
                                    "type": "text",
                                    "name": "R.P1006_1",
                                    "title": "Perkiraan jumlah keluarga"
                                },
                                {
                                    "type": "text",
                                    "name": "R.P1006_2",
                                    "title": "Perkiraan jumlah jiwa"
                                }
                            ],
                            "title": "Keberadaan suku terasing"
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P1007",
                            "title": "Ruang publik terbuka yang peruntukan utamanya sebagai tempat bagi warga desa/kelurahan untuk bersantai/ bermain tanpa perlu membayar (misalnya: lapangan terbuka/alun–alun, taman, dll.)",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada, dikelola"
                                },
                                {
                                    "value": "2",
                                    "text": "Ada, tidak dikelola"
                                },
                                {
                                    "value": "3",
                                    "text": "Tidak ada"
                                }
                            ]
                        }
                    ],
                    "title": "Tempat ibadah (jumlah)"
                },
                {
                    "type": "panel",
                    "name": "R.P1008",
                    "elements": [
                        {
                            "type": "text",
                            "name": "R.P1008_1",
                            "title": "Kehamilan"
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_2",
                            "title": "Kelahiran  "
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_3",
                            "title": "Pekerjaan/pencaharian "
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_4",
                            "title": "Alam/lingkungan hidup "
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_5",
                            "title": "Perkawinan"
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_6",
                            "title": "Kehidupan warga "
                        },
                        {
                            "type": "text",
                            "name": "R.P1008_7",
                            "title": "Kematian"
                        }
                    ],
                    "title": "Nama kearifan lokal /adat (tuliskan)"
                }
            ],
            "title": "AGAMA/SOSBUD"
        },
        {
            "name": "page16",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P1004",
                    "title": "Keberadaan lembaga keagamaan",
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "R.P1004_nama",
                            "title": "Nama lembaga keagamaan"
                        },
                        {
                            "type": "text",
                            "name": "R.P1004_pengurus",
                            "title": "Jumlah pengurus (jiwa)",
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
                            "name": "R.P1004_anggota",
                            "title": "Jumlah anggota (jiwa)",
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
                            "type": "dropdown",
                            "name": "R.P1004_fasilitas",
                            "title": "Fasilitas",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada, baik"
                                },
                                {
                                    "value": "2",
                                    "text": "Ada, rusak sedang"
                                },
                                {
                                    "value": "3",
                                    "text": "Ada, rusak parah"
                                },
                                {
                                    "value": "4",
                                    "text": "Tidak ada"
                                }
                            ]
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "LEMBAGA KEAGAMAAN"
        },
        {
            "name": "page17",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P1009",
                    "title": "Keberadaan lembaga kemasyarakatan desa",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P1009_nama",
                            "title": "Nama Lembaga Kemasyarakatan Desa",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. kelompok tani"
                                },
                                {
                                    "value": "2",
                                    "text": "2. masyarakat (pokmas)"
                                },
                                {
                                    "value": "3",
                                    "text": "3. pengelola air"
                                },
                                {
                                    "value": "4",
                                    "text": "4. musik"
                                },
                                {
                                    "value": "5",
                                    "text": "5. musik tradisional/etnis"
                                },
                                {
                                    "value": "6",
                                    "text": "6. tari"
                                },
                                {
                                    "value": "7",
                                    "text": "7. tari tradisional/etnis"
                                },
                                {
                                    "value": "8",
                                    "text": "8. lukis"
                                },
                                {
                                    "value": "9",
                                    "text": "9. drama"
                                },
                                {
                                    "value": "10",
                                    "text": "10. fotografi"
                                },
                                {
                                    "value": "11",
                                    "text": "11. kesenian lainnya"
                                },
                                {
                                    "value": "12",
                                    "text": "12. sepakbola"
                                },
                                {
                                    "value": "13",
                                    "text": "13. bola voli"
                                },
                                {
                                    "value": "14",
                                    "text": "14. bulu tangkis"
                                },
                                {
                                    "value": "15",
                                    "text": "15. bola basket"
                                },
                                {
                                    "value": "16",
                                    "text": "16. tenis lapangan"
                                },
                                {
                                    "value": "17",
                                    "text": "17. tenis meja"
                                },
                                {
                                    "value": "18",
                                    "text": "18. futsal"
                                },
                                {
                                    "value": "19",
                                    "text": "19. renang"
                                },
                                {
                                    "value": "20",
                                    "text": "20. bela diri"
                                },
                                {
                                    "value": "21",
                                    "text": "21. biliar"
                                },
                                {
                                    "value": "22",
                                    "text": "22. fitness/aerobik"
                                },
                                {
                                    "value": "23",
                                    "text": "23. olah raga lainnya"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P1009_lembaga",
                            "title": "Jumlah kelompok/lembaga"
                        },
                        {
                            "type": "text",
                            "name": "R.P1009_pengurus",
                            "title": "Jumlah pengurus (jiwa)",
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
                            "name": "R.P1009_anggota",
                            "title": "Jumlah anggota (jiwa)",
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
                            "type": "dropdown",
                            "name": "R.P1009_fasilitas",
                            "title": "Fasilitas",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ada, baik"
                                },
                                {
                                    "value": "2",
                                    "text": "Ada, rusak sedang"
                                },
                                {
                                    "value": "3",
                                    "text": "Ada, rusak parah"
                                },
                                {
                                    "value": "4",
                                    "text": "Tidak ada"
                                }
                            ]
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "LEMBAGA KEMASYARAKATAN DESA"
        },
        {
            "name": "page18",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P1101",
                    "title": "Kejadian perkelahian massal setahun terakhir",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P1101_jenis",
                            "title": "Jenis perkelahian massal ",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. antar kelompok masyarakat"
                                },
                                {
                                    "value": "2",
                                    "text": "2. kelompok masyarakat antar desa"
                                },
                                {
                                    "value": "3",
                                    "text": "3. kelompok masyarakat dengan aparat keamanan"
                                },
                                {
                                    "value": "4",
                                    "text": "4. kelompok masyarakat dengan aparat pemerintah"
                                },
                                {
                                    "value": "5",
                                    "text": "5. antar aparat keamanan"
                                },
                                {
                                    "value": "6",
                                    "text": "6. antar aparat pemerintah"
                                },
                                {
                                    "value": "7",
                                    "text": "7. pelajar/ mahasiswa"
                                },
                                {
                                    "value": "8",
                                    "text": "8. antar suku"
                                },
                                {
                                    "value": "9",
                                    "text": "9. lainnya"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P1101_penyebab",
                            "title": "Penyebab utama",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1.\tharta"
                                },
                                {
                                    "value": "2",
                                    "text": "2.\tkekuasaan"
                                },
                                {
                                    "value": "3",
                                    "text": "3.\tasmara"
                                },
                                {
                                    "value": "4",
                                    "text": "4.\tideologi"
                                },
                                {
                                    "value": "5",
                                    "text": "5.\tagama/kepercayaan"
                                },
                                {
                                    "value": "6",
                                    "text": "6.\tkeramaian (olah raga, hiburan, dll)"
                                },
                                {
                                    "value": "7",
                                    "text": "7.\tketidakpuasan atas kebijakan/ pelayanan"
                                },
                                {
                                    "value": "8",
                                    "text": "8.\tlainnya"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P1101_kejadian",
                            "title": "Jumlah kejadian"
                        },
                        {
                            "type": "text",
                            "name": "R.P1101_luka",
                            "title": "Korban luka-luka (jiwa)",
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
                            "name": "R.P1101_tewas",
                            "title": "Korban tewas (jiwa)",
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
                            "type": "dropdown",
                            "name": "R.P1101_penyelesaian",
                            "title": "Penyelesaian",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ya, semuanya"
                                },
                                {
                                    "value": "2",
                                    "text": "Ya, sebagian"
                                },
                                {
                                    "value": "3",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P1101_pendamai",
                            "title": "Pihak pendamai utama",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1.\taparat keamanan"
                                },
                                {
                                    "value": "2",
                                    "text": "2.\taparat pemerintah desa"
                                },
                                {
                                    "value": "3",
                                    "text": "3.\taparat pemerintah daerah"
                                },
                                {
                                    "value": "4",
                                    "text": "4.\ttokoh masyarakat"
                                },
                                {
                                    "value": "5",
                                    "text": "5.\ttokoh agama"
                                },
                                {
                                    "value": "6",
                                    "text": "6.\tlainnya"
                                },
                                {
                                    "value": "7",
                                    "text": "7.\ttidak ada"
                                }
                            ]
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "KEAMANAN"
        },
        {
            "name": "page19",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "R.P1102",
                    "title": "Tindak kejahatan yang terjadi di desa selama setahun terakhir",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "R.P1102_jenis",
                            "title": "Jenis kejahatan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1. Pencurian"
                                },
                                {
                                    "value": "2",
                                    "text": "2. Pencurian dengan kekerasan"
                                },
                                {
                                    "value": "3",
                                    "text": "3. Penipuan/ penggelapan"
                                },
                                {
                                    "value": "4",
                                    "text": "4. Penganiayaan"
                                },
                                {
                                    "value": "5",
                                    "text": "5. Pembakaran"
                                },
                                {
                                    "value": "6",
                                    "text": "6. Perkosaan/ kejahatan terhadap kesusilaan"
                                },
                                {
                                    "value": "7",
                                    "text": "7. Penyalahgunaan/ peredaran narkoba"
                                },
                                {
                                    "value": "8",
                                    "text": "8. Perjudian"
                                },
                                {
                                    "value": "9",
                                    "text": "9. Pembunuhan"
                                },
                                {
                                    "value": "10",
                                    "text": "10.\tPerdagangan orang (trafficking)"
                                },
                                {
                                    "value": "11",
                                    "text": "11.\tKorupsi"
                                },
                                {
                                    "value": "12",
                                    "text": "12.\tLainnya"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "R.P1102_kasus",
                            "title": "Jumlah kasus",
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
                            "name": "R.P1102_tertangani",
                            "title": "Jumlah kasus selesai ditangani",
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
                            "name": "R.P1102_tidak_tertangani",
                            "title": "Jumlah kasus tidak bisa ditangani",
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
                            "name": "R.P1102_luka",
                            "title": "Korban luka-luka (jiwa)",
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
                            "name": "R.P1102_tewas",
                            "title": "Korban tewas (jiwa)",
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
                    "panelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "TINDAK KEJAHATAN"
        },
        {
            "name": "page20",
            "elements": [
                {
                    "type": "panel",
                    "name": "R.P1103",
                    "elements": [
                        {
                            "type": "text",
                            "name": "R.P1103_1",
                            "title": "Jumlah kegiatan pembangunan/pemeliharaan pos keamanan lingkungan ",
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
                            "name": "R.P1103_2",
                            "title": "Jumlah kegiatan pembentukan/pengaturan regu keamanan",
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
                            "name": "R.P1103_3",
                            "title": "jumlah anggota hansip/linmas yang ditambahkan (jiwa)",
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
                            "type": "dropdown",
                            "name": "R.P1103_4",
                            "title": "Pelaporan tamu yang menginap lebih dari 24 jam ke aparat lingkungan",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ya"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        },
                        {
                            "type": "dropdown",
                            "name": "R.P1103_5",
                            "title": "Pengaktifan sistem keamanan lingkungan berasal dari inisiatif warga",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ya"
                                },
                                {
                                    "value": "2",
                                    "text": "Tidak"
                                }
                            ]
                        }
                    ],
                    "title": "Kegiatan warga untuk menjaga keamanan lingkungan selama setahun terakhir",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "R.P1106",
                    "title": "Jumlah korban bunuh diri (termasuk percobaan bunuh diri) yang terjadi selama setahun terakhir (jiwa)",
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
                    "name": "R.P1107_1",
                    "title": "Jumlah lokasi berkumpul/mangkal anak jalanan (selain rumah singgah)",
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
                    "name": "R.P1107_2",
                    "title": "Jumlah tempat mangkal gelandangan/pengemis",
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
                    "name": "R.P1108",
                    "title": "Jumlah lokalisasi/lokasi/tempat mangkal Pekerja Seks Komersial (PSK)",
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
            "title": "KEGIATAN WARGA"
        }
    ]
}
