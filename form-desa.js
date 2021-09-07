
const desa = {
    "title": "SDGs Desa - Kuesioner Desa",
    "pages": [
        {
            "name": "1Lokasi",
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
                    "type": "file",
                    "name": "foto_desa",
                    "title": "Foto Balai Desa",
                    "isRequired": true,
                    "waitForUpload": true,
                    "maxSize": 0
                },
                {
                    "type": "text",
                    "name": "D.P205",
                    "title": "Email Desa",
                    "inputType": "email"
                },
                {
                    "type": "text",
                    "name": "D.P206",
                    "title": "Web Desa",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P207",
                    "title": "Facebook",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P208",
                    "title": "Twitter",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P209",
                    "title": "Instagram",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P210",
                    "title": "Youtube",
                    "inputType": "url"
                },
                {
                    "type": "radiogroup",
                    "name": "D.P211",
                    "title": "Status Pemerintahan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Desa"
                        },
                        {
                            "value": "2",
                            "text": "Kelurahan"
                        },
                        {
                            "value": "3",
                            "text": "Kampung"
                        },
                        {
                            "value": "4",
                            "text": "Nagari"
                        },
                        {
                            "value": "5",
                            "text": "Gampong"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "D.P212",
                    "title": "Jumlah RW",
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
                    "name": "D.P213",
                    "title": "Jumlah RT",
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
                    "name": "D.P214",
                    "title": "SK Pendirian Desa",
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
                    "name": "D.P215",
                    "visibleIf": "{D.P214} = =1",
                    "title": "No SK Pendirian Desa",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "D.P216",
                    "title": "Peta Desa",
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
                    "name": "D.P217",
                    "visibleIf": "{D.P216} ==1",
                    "title": "No SK Bupati/Gubernur tentang Peta Desa",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "D.P218",
                    "title": "Luas Wilayah Desa (ha)",
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
                    "name": "D.P219",
                    "title": "Lokasi Desa terletak di pulau",
                    "description": "Sebutkan nama pulau, pisahkan dengan tanda koma jika lebih dari 1",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "D.P220",
                    "title": "Topografi terluas wilayah",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Lereng/Puncak"
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
                            "value": "4",
                            "text": "Pesisir Pantai"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "D.P221",
                    "title": "Jumlah warga di lereng/puncak",
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
                    "name": "D.P222",
                    "title": "Kantor Kepala Desa/Balai Desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada dan layak"
                        },
                        {
                            "value": "2",
                            "text": "Ada tetapi tidak layak"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P223",
                    "visibleIf": "{D.P222} !=3",
                    "title": "Kepemilikan Kantor Kepala Desa/Balai Desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Aset desa"
                        },
                        {
                            "value": "2",
                            "text": "Bukan aset desa"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P224",
                    "visibleIf": "{D.P222} !=3",
                    "title": "Lokasi Kantor",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Di dalam desa"
                        },
                        {
                            "value": "2",
                            "text": "Di luar desa"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P225",
                    "visibleIf": "{D.P222} !=3",
                    "title": "Penyelenggaran pemerintahan utamanya dilaksanakan di",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Kantor kepala desa/balai desa"
                        },
                        {
                            "value": "2",
                            "text": "Bukan kantor kepala desa/balai desa"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P226",
                    "visibleIf": "{D.P222} !=3",
                    "title": "Jam kerja di kantor desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Tidak menentu"
                        },
                        {
                            "value": "2",
                            "text": "Ada jadwal kerja"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "D.P227.1",
                    "title": "Koordinat Lintang (Latitude)",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "D.P227.2",
                    "title": "Lintang Utara",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "D.P227.3",
                    "title": "Lintang Selatan",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "D.P227.4",
                    "title": "Koordinat Bujur (Longitude)",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "D.P228",
                    "title": "Ketinggian Lokasi (mdpl)",
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
                    "name": "D.P229",
                    "visibleIf": "{D.P220} ==4",
                    "title": "Panjang Garis Pantai (km)",
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
                    "name": "D.P230",
                    "title": "Luas Lahan Hutan (ha)",
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
                    "name": "D.P231",
                    "title": "Luas Lahan Pertanian (ha)",
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
                    "name": "D.P232",
                    "title": "Luas Lahan Perkebunan (ha)",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                        }
                    ]
                }
            ],
            "title": "Lokasi"
        },
        {
            "name": "2Pemerintahan",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P3",
                    "title": "Pemerintahan Desa",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P301",
                            "title": "Jabatan",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Kepala Desa"
                                },
                                {
                                    "value": "2",
                                    "text": "Sekretaris Desa"
                                },
                                {
                                    "value": "3",
                                    "text": "Bendahara Desa"
                                },
                                {
                                    "value": "4",
                                    "text": "Kepala Urusan Tata Usaha"
                                },
                                {
                                    "value": "5",
                                    "text": "Kepala Urusan Keuangan"
                                },
                                {
                                    "value": "6",
                                    "text": "Kepala Urusan perencanaan"
                                },
                                {
                                    "value": "7",
                                    "text": "Kepala Seksi Pemerintahan"
                                },
                                {
                                    "value": "8",
                                    "text": "Kepala Seksi Kesejahteraan"
                                },
                                {
                                    "value": "9",
                                    "text": "Kepala Seksi Pelayanan"
                                },
                                {
                                    "value": "10",
                                    "text": "Kepala Badan permusyawaratan Desa"
                                },
                                {
                                    "value": "11",
                                    "text": "Anggota Badan Permusyawaratan Desa"
                                },
                                {
                                    "value": "12",
                                    "text": "Pegawai Desa"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P302",
                            "title": "Nama",
                            "isRequired": true
                        },
                        {
                            "type": "radiogroup",
                            "name": "P303",
                            "title": "Jenis Kelamin",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Laki-laki"
                                },
                                {
                                    "value": "2",
                                    "text": "Perempuan"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P304",
                            "title": "NIK",
                            "isRequired": true,
                            "requiredErrorText": "Maksimal 16 digit",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "maxLength": 16
                        },
                        {
                            "type": "text",
                            "name": "D.P305",
                            "title": "No. HP",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "maxLength": ""
                        },
                        {
                            "type": "text",
                            "name": "D.P306",
                            "title": "Menjabat sejak tahun",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "min": "1900",
                            "max": "2100",
                            "maxLength": 4
                        }
                    ],
                    "panelCount": 1,
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Pemerintahan Desa"
        },
        {
            "name": "3Musyawarah",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P401",
                    "title": "Musyawarah Desa",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P401.1",
                            "title": "Bulan ke",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1"
                                },
                                {
                                    "value": "2",
                                    "text": "2"
                                },
                                {
                                    "value": "3",
                                    "text": "3"
                                },
                                {
                                    "value": "4",
                                    "text": "4"
                                },
                                {
                                    "value": "5",
                                    "text": "5"
                                },
                                {
                                    "value": "6",
                                    "text": "6"
                                },
                                {
                                    "value": "7",
                                    "text": "7"
                                },
                                {
                                    "value": "8",
                                    "text": "8"
                                },
                                {
                                    "value": "9",
                                    "text": "9"
                                },
                                {
                                    "value": "10",
                                    "text": "10"
                                },
                                {
                                    "value": "11",
                                    "text": "11"
                                },
                                {
                                    "value": "12",
                                    "text": "12"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P401.2",
                            "title": "Agenda Musyawarah",
                            "isRequired": true
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P401.3",
                            "title": "Ada Dokumen Musyawarah?",
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
                            "type": "checkbox",
                            "name": "D.P401.4",
                            "title": "Unsur Masyarakat yang Hadir",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Perempuan"
                                },
                                {
                                    "value": "2",
                                    "text": "Tokoh Agama"
                                },
                                {
                                    "value": "3",
                                    "text": "Pengusaha"
                                }
                            ],
                            "hasOther": true,
                            "otherText": "Lainnya"
                        }
                    ],
                    "panelCount": 1,
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Musyawarah Desa",
            "description": "Musyawarah desa tahun sebelumnya"
        },
        {
            "name": "4Regulasi",
            "elements": [
                {
                    "type": "text",
                    "name": "D.P502",
                    "title": "RPJM Desa Berlaku sampai tahun",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Input harus berupa angka",
                            "regex": "^[0-9]*$"
                        }
                    ],
                    "min": "2015",
                    "max": "2100"
                },
                {
                    "type": "radiogroup",
                    "name": "D.P503",
                    "title": "RKP Desa",
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
                    "type": "paneldynamic",
                    "name": "D.P501",
                    "title": "Regulasi",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P501.peraturan",
                            "title": "Peraturan",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Peraturan yang mendukung pemberdayaan perempuan"
                                },
                                {
                                    "value": "2",
                                    "text": "Peraturan yang menjamin perempuan mendapatkan pelayanan, informasi, dan Pendidikan terkait KB dan Kesehatan Reproduksi"
                                },
                                {
                                    "value": "3",
                                    "text": "Peraturan tentang penggunaan air tanah, tata kelola sumber daya air"
                                },
                                {
                                    "value": "4",
                                    "text": "Peraturan tentang pelestarian lingkungan di sekitar aliran sungai"
                                },
                                {
                                    "value": "5",
                                    "text": "Peraturan tentang advokasi pekerja migran"
                                },
                                {
                                    "value": "6",
                                    "text": "Peraturan tentang kegiatan usaha yang tidak menimbulkan pencemaran dan pengelolaan limbah serta sampah rumah tangga"
                                },
                                {
                                    "value": "7",
                                    "text": "Peraturan tentang tata ruang desa dan perlindungan sumber daya laut"
                                },
                                {
                                    "value": "8",
                                    "text": "Peraturan tentang pelestarian keanekaragaman hayati"
                                }
                            ],
                            "hasOther": true,
                            "otherText": "Lainnya"
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P501.jenis",
                            "title": "Jenis Peraturan",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Peraturan Desa"
                                },
                                {
                                    "value": "2",
                                    "text": "Peraturan Kepala Desa"
                                },
                                {
                                    "value": "3",
                                    "text": "SK Kepala Desa"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P501.nomor",
                            "title": "Nomor Dokumen",
                            "isRequired": true
                        },
                        {
                            "type": "dropdown",
                            "name": "D.P501.bulan",
                            "title": "Bulan ke",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1"
                                },
                                {
                                    "value": "2",
                                    "text": "2"
                                },
                                {
                                    "value": "3",
                                    "text": "3"
                                },
                                {
                                    "value": "4",
                                    "text": "4"
                                },
                                {
                                    "value": "5",
                                    "text": "5"
                                },
                                {
                                    "value": "6",
                                    "text": "6"
                                },
                                {
                                    "value": "7",
                                    "text": "7"
                                },
                                {
                                    "value": "8",
                                    "text": "8"
                                },
                                {
                                    "value": "9",
                                    "text": "9"
                                },
                                {
                                    "value": "10",
                                    "text": "10"
                                },
                                {
                                    "value": "11",
                                    "text": "11"
                                },
                                {
                                    "value": "12",
                                    "text": "12"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P501.tahun",
                            "title": "Tahun",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "min": "1900",
                            "max": "2100",
                            "maxLength": 4
                        }
                    ],
                    "panelCount": 1,
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Regulasi Desa"
        },
        {
            "name": "5APBDesa",
            "elements": [
                {
                    "type": "multipletext",
                    "name": "D.P601",
                    "title": "Anggaran Pendapatan Desa Tahun Sebelumnya",
                    "description": "Dalam rupiah (Rp)",
                    "items": [
                        {
                            "name": "D.P601.0",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Anggaran Pendapatan"
                        },
                        {
                            "name": "D.P601.1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Dana Desa dari APBN"
                        },
                        {
                            "name": "D.P601.2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Pendapatan asli Desa"
                        },
                        {
                            "name": "D.P601.3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bagian dari Pajak dan Retribusi Daerah"
                        },
                        {
                            "name": "D.P601.4",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Alokasi Dana Desa"
                        },
                        {
                            "name": "D.P601.5",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bantuan Keuangan dari APBD Provinsi"
                        },
                        {
                            "name": "D.P601.6",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bantuan Keuangan dari APBD Kabupaten/Kota"
                        },
                        {
                            "name": "D.P601.7",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Hibah dan Sumbangan Pihak Ketiga"
                        },
                        {
                            "name": "D.P601.8",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Lain–lain pendapatan desa yang sah"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "D.P602",
                    "title": "Anggaran Pembelanjaan Desa Tahun Sebelumnya",
                    "description": "Dalam rupiah (Rp)",
                    "items": [
                        {
                            "name": "D.P602.0",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Anggaran Pengeluaran"
                        },
                        {
                            "name": "D.P602.1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bidang Penyelenggaraan Pemerintahan Desa"
                        },
                        {
                            "name": "D.P602.2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bidang Pelaksanaan Pembangunan Desa"
                        },
                        {
                            "name": "D.P602.3",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bidang Pemberdayaan Masyarakat"
                        },
                        {
                            "name": "D.P602.4",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Bidang Pembinaan Masyarakat"
                        },
                        {
                            "name": "D.P602.5",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Belanja Modal (tanah, bangunan, jalan, komputer, dll)"
                        },
                        {
                            "name": "D.P602.6",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Penyertaan Modal ke BUMDes"
                        },
                        {
                            "name": "D.P602.7",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Lainnya (belanja tak terduga, konsumsi rapat, dll)"
                        }
                    ]
                }
            ],
            "title": "APBDesa"
        },
        {
            "name": "6Aset",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P603",
                    "title": "Nilai Aset Desa",
                    "isRequired": true,
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P603.aset",
                            "title": "Aset",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Bumdes dan Bumdesma"
                                },
                                {
                                    "value": "2",
                                    "text": "Tanah Desa"
                                },
                                {
                                    "value": "3",
                                    "text": "Bangunan Milik Desa"
                                },
                                {
                                    "value": "4",
                                    "text": "Pasar Desa"
                                },
                                {
                                    "value": "5",
                                    "text": "Tempat Pelelangan Ikan"
                                },
                                {
                                    "value": "6",
                                    "text": "Pertokoan"
                                },
                                {
                                    "value": "7",
                                    "text": "Tambatan Perahu"
                                },
                                {
                                    "value": "8",
                                    "text": "Pemandian Umum"
                                },
                                {
                                    "value": "9",
                                    "text": "Lapangan Olahraga"
                                },
                                {
                                    "value": "10",
                                    "text": "Lokasi Wisata"
                                }
                            ],
                            "hasOther": true,
                            "otherText": "Aset Desa Lainnya"
                        },
                        {
                            "type": "text",
                            "name": "D.P603.volume",
                            "title": "Volume",
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
                            "type": "html",
                            "name": "satuan_unit",
                            "visibleIf": "{D.P603[0].D.P603.aset} != 2",
                            "startWithNewLine": false,
                            "html": "Satuan: <b> Unit </b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_ha",
                            "visibleIf": "{D.P603[0].D.P603.aset} == 2",
                            "startWithNewLine": false,
                            "html": "Satuan: <b> Ha </b>"
                        },
                        {
                            "type": "text",
                            "name": "D.P603.nilai",
                            "title": "Nilai Rp",
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
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Aset Desa"
        },
        {
            "name": "7Layanan",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "D.P701.1",
                    "title": "Komputer/PC/Laptop",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Digunakan"
                        },
                        {
                            "value": "2",
                            "text": "Jarang digunakan"
                        },
                        {
                            "value": "3",
                            "text": "Tidak digunakan"
                        },
                        {
                            "value": "4",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P701.2",
                    "title": "Fasilitas Internet",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Berfungsi"
                        },
                        {
                            "value": "2",
                            "text": "Jarang berfungsi"
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
                    "type": "radiogroup",
                    "name": "D.P701.3",
                    "title": "Kecepatan Akses Internet",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Cepat"
                        },
                        {
                            "value": "2",
                            "text": "Sedang"
                        },
                        {
                            "value": "3",
                            "text": "Lambat"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P702.1",
                    "title": "Sistem Informasi Desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada dan diperbarui"
                        },
                        {
                            "value": "2",
                            "text": "Ada tapi tidak diperbarui"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P702.2",
                    "title": "Sistem Keuangan Desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ada dan diperbarui"
                        },
                        {
                            "value": "2",
                            "text": "Ada tapi tidak diperbarui"
                        },
                        {
                            "value": "3",
                            "text": "Tidak ada"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "D.P703",
                    "title": "Jumlah surat keterangan tidak mampu/miskin setahun terakhir ",
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
                    "name": "D.P704.1",
                    "title": "Jumlah penduduk yang belum merekam eKTP ",
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
                    "name": "D.P704.2",
                    "title": "Jumlah penduduk yang belum tercatat di KK",
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
                    "name": "D.P705",
                    "title": "Pelayanan desa setahun terakhir",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Baik"
                        },
                        {
                            "value": "2",
                            "text": "Cukup baik"
                        },
                        {
                            "value": "3",
                            "text": "Buruk"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "D.P706",
                    "title": "Ketersediaan data statistik desa",
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
                    "type": "text",
                    "name": "D.P707",
                    "title": "Jumlah petugas statistik desa",
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
                    "name": "D.P708",
                    "title": "Ketersediaan data SDGs Desa tahunan",
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
                    "type": "radiogroup",
                    "name": "D.P709",
                    "visibleIf": "{D.P708} ==1",
                    "title": "Apakah data SDGs Desa sudah digunakan untuk RKPDes dan APBDes setahun terakhir?",
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
                    "type": "panel",
                    "name": "D.P711",
                    "elements": [
                        {
                            "type": "text",
                            "name": "D.P711.1",
                            "title": "Nama",
                            "isRequired": true
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P711.2",
                            "title": "Jenis Kelamin",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Laki-laki"
                                },
                                {
                                    "value": "2",
                                    "text": "Perempuan"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P711.3",
                            "title": "No. HP",
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
                    "title": "Pendamping Desa"
                },
                {
                    "type": "radiogroup",
                    "name": "D.P712",
                    "title": "Status Terakhir IDM Desa",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Desa Sangat Tertinggal"
                        },
                        {
                            "value": "2",
                            "text": "Desa Tertinggal"
                        },
                        {
                            "value": "3",
                            "text": "Desa Berkembang"
                        },
                        {
                            "value": "4",
                            "text": "Desa Maju"
                        },
                        {
                            "value": "5",
                            "text": "Desa Mandiri"
                        }
                    ]
                }
            ],
            "title": "Layanan"
        },
        {
            "name": "8Kerjasama",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P710",
                    "title": "Kerja Sama Desa",
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "D.P710.pihak",
                            "title": "Pihak yang diajak kerja sama"
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P710.lingkup",
                            "title": "Lingkup kerja sama",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Antar desa"
                                },
                                {
                                    "value": "2",
                                    "text": "Dengan pemerintah daerah"
                                },
                                {
                                    "value": "3",
                                    "text": "Dengan pemerintah pusat"
                                },
                                {
                                    "value": "4",
                                    "text": "Dengan swasta"
                                },
                                {
                                    "value": "5",
                                    "text": "Dengan lembaga internasional"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P710.tahun",
                            "title": "Tahun kerja sama berakhir",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "min": "1900",
                            "max": "2100"
                        },
                        {
                            "type": "text",
                            "name": "D.P710.pemanfaat",
                            "title": "Jumlah Pemanfaat (jiwa)",
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
                            "name": "D.P710.nilai",
                            "title": "Nilai kerja sama (Rp)",
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
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Kerja Sama Desa"
        },
        {
            "name": "9Lembaga",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P800",
                    "title": "Lembaga Kemasyarakatan Desa",
                    "templateElements": [
                        {
                            "type": "html",
                            "name": "question1",
                            "html": "Contoh Lembaga: PKK, Karang Taruna, Adat, Anak dan Perempuan, Perlindugan Masyarakat, dll."
                        },
                        {
                            "type": "text",
                            "name": "D.P800.nama",
                            "title": "Nama Lembaga"
                        },
                        {
                            "type": "text",
                            "name": "D.P800.pengurus",
                            "title": "Jumlah Pengurus",
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
                            "name": "D.P800.anggota",
                            "title": "Jumlah Anggota",
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
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Lembaga Kemasyarakatan Desa"
        },
        {
            "name": "10Bumdes",
            "elements": [
                {
                    "type": "text",
                    "name": "D.P901",
                    "title": "Nama Bumdes"
                },
                {
                    "type": "text",
                    "name": "D.P902",
                    "title": "Email",
                    "inputType": "email"
                },
                {
                    "type": "text",
                    "name": "D.P903",
                    "title": "Web",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P904",
                    "title": "Facebook",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P905",
                    "title": "Twitter",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P906",
                    "title": "Instagram",
                    "inputType": "url"
                },
                {
                    "type": "text",
                    "name": "D.P907",
                    "title": "Youtube",
                    "inputType": "url"
                },
                {
                    "type": "multipletext",
                    "name": "D.P908",
                    "title": "Modal Awal (Rp)",
                    "items": [
                        {
                            "name": "D.P908.1",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Dari Pemerintah Desa"
                        },
                        {
                            "name": "D.P908.2",
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Dari warga Desa"
                        },
                        {
                            "name": "D.P908.3",
                            "title": "Dari Pihak Lain"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "D.P909",
                    "title": "Omzet Setahun Terakhir (Rp)",
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
                    "name": "D.P910",
                    "title": "Keuntungan Bersih Setahun Terakhir (Rp)",
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
                    "name": "D.P911",
                    "title": "Keuntungan Kotor Belum Dikurangi Pajak Setahun Terakhir (Rp)",
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
                    "name": "D.P912",
                    "title": "Nilai Aset (Rp)",
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
                    "name": "D.P913",
                    "title": "Sumbangan diberikan kepada PADdesa (Rp)",
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
                    "type": "paneldynamic",
                    "name": "D.P914",
                    "title": "Pengurus Bumdes",
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P914.jabatan",
                            "title": "Jabatan",
                            "choices": [
                                {
                                    "value": "Pembina/Komisaris",
                                    "text": "Pembina/Komisaris"
                                },
                                {
                                    "value": "Pengawas",
                                    "text": "Pengawas"
                                },
                                {
                                    "value": "Direksi",
                                    "text": "Direksi"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P914.nama",
                            "title": "Nama"
                        },
                        {
                            "type": "text",
                            "name": "D.P914.nik",
                            "title": "NIK",
                            "validators": [
                                {
                                    "type": "numeric"
                                }
                            ],
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]{16}$"
                                }
                            ],
                            "maxLength": 16
                        },
                        {
                            "type": "text",
                            "name": "D.P914.hp",
                            "title": "Nomor HP",
                            "inputType": "tel",
                            "maxLength": ""
                        }
                    ],
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Badan Usaha Milik Desa"
        },
        {
            "name": "11UnitUsaha",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P941",
                    "title": "Unit Usaha Bumdes",
                    "templateElements": [
                        {
                            "type": "text",
                            "name": "D.P941.nama",
                            "title": "Nama Unit Usaha"
                        },
                        {
                            "type": "text",
                            "name": "D.P941.jml",
                            "title": "Jumlah Unit Usaha",
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
                            "name": "D.P941.pekerja",
                            "title": "Jumlah Pekerja (jiwa)",
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
                            "name": "D.P941.keuntungan",
                            "title": "Keuntungan Bersih Tahun Lalu (Rp)",
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
                            "name": "D.P941.omset",
                            "title": "Omset Tahun Lalu (Rp)",
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
                            "name": "D.P941.aset",
                            "title": "Aset Unit Usaha Tahun Lalu (Rp)",
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
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                }
            ],
            "title": "Unit Usaha Bumdes"
        },
        {
            "name": "12Infrastruktur",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "D.P1001",
                    "title": "Transportasi",
                    "isRequired": true,
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "D.P1001.tujuan",
                            "title": "Dari Kantor Kepala Desa ke",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Kantor Camat"
                                },
                                {
                                    "value": "2",
                                    "text": "Kantor Bupati"
                                },
                                {
                                    "value": "3",
                                    "text": "Kantor Camat Lain Terdekat"
                                },
                                {
                                    "value": "4",
                                    "text": "Kantor Bupati Lain Terdekat"
                                }
                            ]
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P1001.sarana",
                            "title": "Sarana transportasi yang biasa digunakan",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Angkutan umum"
                                },
                                {
                                    "value": "2",
                                    "text": "Kendaraan pribadi"
                                },
                                {
                                    "value": "3",
                                    "text": "Sepeda, becak, bentor, delman"
                                },
                                {
                                    "value": "4",
                                    "text": "Jalan kaki"
                                }
                            ]
                        },
                        {
                            "type": "radiogroup",
                            "name": "D.P1001.jenis",
                            "title": "Jenis angkutan umum yang ada",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Ojek sepeda motor"
                                },
                                {
                                    "value": "2",
                                    "text": "Kendaraan bermotor roda 3 atau lebih"
                                },
                                {
                                    "value": "3",
                                    "text": "Perahu"
                                },
                                {
                                    "value": "4",
                                    "text": "Lainnya (becak, delman, pedati, dll)"
                                }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "D.P1001.jarak",
                            "title": "Jarak tempuh (km)",
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
                            "name": "D.P1001.waktu",
                            "title": "Waktu tempuh (menit)",
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
                            "name": "D.P1001.biaya",
                            "title": "Biaya (x Rp1000)",
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
                    "panelCount": 1,
                    "minPanelCount": 1,
                    "panelAddText": "Tambah",
                    "panelRemoveText": "Hapus"
                },
                {
                    "type": "multipletext",
                    "name": "D.P1002",
                    "title": "Pengadaan dan Publikasi",
                    "isRequired": true,
                    "items": [
                        {
                            "name": "D.P1002.1",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah pengadaan barang dan jasa setahun terakhir"
                        },
                        {
                            "name": "D.P1002.2",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "Jumlah publikasi terbuka (papan, website, dll) pengadaan badang dan jasa"
                        }
                    ]
                },
                {
                    "type": "panel",
                    "name": "D.P11",
                    "elements": [
                        {
                            "type": "text",
                            "name": "D.P1101",
                            "title": "Jumlah posyandu di desa",
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
                            "name": "D.P1102",
                            "title": "Jumlah ibu terdaftar",
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
                            "name": "D.P1103",
                            "title": "Jumlah ibu hamil terdaftar",
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
                            "name": "D.P1104",
                            "title": "Jumlah ibu melahirkan",
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
                            "name": "D.P1105",
                            "title": "Jumlah ibu meninggal karena melahirkan",
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
                            "name": "D.P1106",
                            "title": "Jumlah balita terdaftar",
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
                            "name": "D.P1107",
                            "title": "Jumlah bayi mendapat ASI eksklusif",
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
                            "name": "D.P1108",
                            "title": "Jumlah bayi meninggal",
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
                            "name": "D.P1109",
                            "title": "Apakah posyandu menangani kesehatan jiwa?",
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
                        }
                    ],
                    "title": "Posyandu",
                    "isRequired": true
                },
                {
                    "type": "panel",
                    "name": "D.P12",
                    "elements": [
                        {
                            "type": "radiogroup",
                            "name": "D.P1201",
                            "title": "Hutan konservasi di desa",
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
                            "type": "text",
                            "name": "D.P1202",
                            "visibleIf": "{D.P1201} ==1",
                            "title": "Luas kerusakan hutan konservasi tahun sebelumnya",
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
                            "name": "D.P1203",
                            "visibleIf": "{D.P1201} ==1",
                            "title": "Luas kerusakan hutan konservasi setahun terakhir",
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
                            "type": "checkbox",
                            "name": "D.P1204",
                            "visibleIf": "{D.P1201} ==1",
                            "title": "Apakah ada populasi satwa terancam punah saat ini?",
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Harimau Sumatera"
                                },
                                {
                                    "value": "2",
                                    "text": "Gajah Sumatera"
                                },
                                {
                                    "value": "3",
                                    "text": "Badak"
                                },
                                {
                                    "value": "4",
                                    "text": "Banteng"
                                },
                                {
                                    "value": "5",
                                    "text": "Owa"
                                },
                                {
                                    "value": "6",
                                    "text": "Orangutan"
                                },
                                {
                                    "value": "7",
                                    "text": "Bekantan"
                                },
                                {
                                    "value": "8",
                                    "text": "Komodo"
                                },
                                {
                                    "value": "9",
                                    "text": "Jalak Bali"
                                },
                                {
                                    "value": "10",
                                    "text": "Maleo"
                                },
                                {
                                    "value": "11",
                                    "text": "Babi Rusa"
                                },
                                {
                                    "value": "12",
                                    "text": "Anoa"
                                },
                                {
                                    "value": "13",
                                    "text": "Elang"
                                },
                                {
                                    "value": "14",
                                    "text": "Tarsius"
                                },
                                {
                                    "value": "15",
                                    "text": "Monyet Hitam Sulawesi"
                                }
                            ],
                            "hasNone": true,
                            "noneText": "Tidak Ada"
                        },
                        {
                            "type": "text",
                            "name": "D.P1205",
                            "title": "Jumlah satwa terancam punah tahun sebelumnya",
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
                            "name": "D.P1206",
                            "title": "Jumlah satwa terancam punah setahun terakhir",
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
                            "name": "D.P1207",
                            "title": "Kawasan konservasi perairan",
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
                            "type": "text",
                            "name": "D.P1208",
                            "visibleIf": "{D.P1207} ==1",
                            "title": "Luas kawasan konservasi perairan (m2)",
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
                            "name": "D.P1209",
                            "title": "Jumlah kejadian penangkapan ikan ilegal",
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
                            "name": "D.P1210",
                            "title": "Jumlah warga dihukum karena pelanggaran lingkungan hidup tahun sebelumnya",
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
                            "name": "D.P1211",
                            "title": "Jumlah warga dihukum karena pelanggaran lingkungan hidup setahun terakhir",
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
                            "name": "D.P1212",
                            "title": "Jumlah omset wisata tahun sebelumnya",
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
                            "name": "D.P1213",
                            "title": "Total keuntungan wisata tahun sebelumnya",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": /^(0|[1-9]\d*)(\.\d+)?$/gm
                                }
                            ]
                        }
                    ],
                    "title": "Lingkungan"
                }
            ],
            "title": "Infrastruktur dan Lainnya"
        }
    ]
}
