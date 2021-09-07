const individu = {
    "title": "SDGs DESA - KUESIONER INDIVIDU",
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
                    "name": "no_kk",
                    "title": "Nomor Kartu Keluarga",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "Nomor KK harus berjumlah 16 digit",
                            "regex": "^[0-9]{16}$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "nik",
                    "title": "NIK",
                    "isRequired": true,
                    "inputType": "text",
                    "validators": [
                        {
                            "type": "regexvalidator",
                            "text": "NIK harus berjumlah 16 digit",
                            "regex": "^[0-9]{16}$"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P103",
                    "title": "Nama",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "I.P104",
                    "title": "Jenis kelamin",
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
                    "name": "I.P105",
                    "title": "Tempat lahir",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "I.P106",
                    "title": "Tanggal Lahir",
                    "isRequired": true,
                    "inputType": "date"
                },
                {
                    "type": "text",
                    "name": "I.P107",
                    "title": "Usia (tahun)",
                    "description": "Catatan jika usia < 1 tahun maka tulis 0",
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
                    "name": "I.P108",
                    "title": "Status pernikahan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Belum Kawin"
                        },
                        {
                            "value": "2",
                            "text": "Kawin"
                        },
                        {
                            "value": 3,
                            "text": "Cerai hidup"
                        },
                        {
                            "value": 4,
                            "text": "Cerai mati"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P109",
                    "visibleIf": "{I.P108} anyof [2, 3, 4]",
                    "title": "Berapa usia saat pertama kali menikah (tahun)?",
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
                    "name": "I.P110",
                    "title": "Agama",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Islam"
                        },
                        {
                            "value": "2",
                            "text": "Kristen"
                        },
                        {
                            "value": "3",
                            "text": "Katolik"
                        },
                        {
                            "value": 4,
                            "text": "Hindu"
                        },
                        {
                            "value": 5,
                            "text": "Budha"
                        },
                        {
                            "value": 6,
                            "text": "Khonghucu"
                        }
                    ],
                    "hasOther": true,
                    "otherText": "Lainnya, tuliskan"
                },
                {
                    "type": "text",
                    "name": "I.P111",
                    "title": "Suku bangsa",
                    "isRequired": true
                },
                {
                    "type": "dropdown",
                    "name": "I.P112",
                    "title": "Warganegara",
                    "defaultValue": "1",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "WNI "
                        },
                        {
                            "value": "2",
                            "text": "WNA"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P113",
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
                    "name": "I.P114",
                    "title": "Nomor untuk Whatsapp",
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
                    "name": "I.P115",
                    "title": "Alamat email pribadi"
                },
                {
                    "type": "text",
                    "name": "I.P116",
                    "title": "Alamat Facebook pribadi"
                },
                {
                    "type": "text",
                    "name": "I.P117",
                    "title": "Alamat Twitter pribadi"
                },
                {
                    "type": "text",
                    "name": "I.P118",
                    "title": "Alamat Instagram pribadi"
                },
                {
                    "type": "radiogroup",
                    "name": "I.P119",
                    "title": "Apakah aktif menggunakan internet selama sebulan terakhir?   ",
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
                    "type": "radiogroup",
                    "name": "I.P120",
                    "visibleIf": "{I.P119} = 1",
                    "title": "Akses internet yang diperoleh melalui",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Wifi"
                        },
                        {
                            "value": "2",
                            "text": "Handphone"
                        },
                        {
                            "value": 3,
                            "text": "Wifi dan Handphone"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P121",
                    "title": "Kecepatan akses internet",
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
                }
            ],
            "title": "INDIVIDU"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "I.P201",
                    "title": "Kondisi pekerjaan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Bersekolah"
                        },
                        {
                            "value": "2",
                            "text": "Ibu rumah tangga "
                        },
                        {
                            "value": "3",
                            "text": "Tidak bekerja"
                        },
                        {
                            "value": 4,
                            "text": "Sedang mencari pekerjaan "
                        },
                        {
                            "value": 5,
                            "text": "Bekerja"
                        }
                    ]
                },
                {
                    "type": "dropdown",
                    "name": "I.P202",
                    "visibleIf": "{I.P201} = 5",
                    "title": "Pekerjaan utama",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Petani  pemilik lahan    "
                        },
                        {
                            "value": "2",
                            "text": "2. Petani penyewa    "
                        },
                        {
                            "value": "3",
                            "text": "3. Buruh tani        "
                        },
                        {
                            "value": 4,
                            "text": "4. Nelayan pemilik kapal/perahu         "
                        },
                        {
                            "value": 5,
                            "text": "5. Nelayan penyewa perahu/kapal         "
                        },
                        {
                            "value": 6,
                            "text": "6. Buruh nelayan          "
                        },
                        {
                            "value": 7,
                            "text": "7. Guru            "
                        },
                        {
                            "value": 8,
                            "text": "8. Guru agama                  "
                        },
                        {
                            "value": 9,
                            "text": "9. Pedagang                    "
                        },
                        {
                            "value": 10,
                            "text": "10. Pengolahan/industri                        "
                        },
                        {
                            "value": 11,
                            "text": "11. PNS                 "
                        },
                        {
                            "value": 12,
                            "text": "12. TNI          "
                        },
                        {
                            "value": 13,
                            "text": "13. Perangkat desa      "
                        },
                        {
                            "value": 14,
                            "text": "14. Pegawai kantor desa"
                        },
                        {
                            "value": 15,
                            "text": "15. TKI                                                 "
                        }
                    ],
                    "hasOther": true,
                    "otherText": "16. Lainnya, sebutkan "
                },
                {
                    "type": "radiogroup",
                    "name": "I.P203",
                    "visibleIf": "{I.P201} = 5",
                    "title": "Jaminan sosial ketenagakerjaan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Peserta         "
                        },
                        {
                            "value": "2",
                            "text": "Bukan peserta"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P204_penghasilan",
                    "visibleIf": "{I.P201} = 5",
                    "title": "Penghasilan setahun terakhir (Rp)",
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
            "title": "PEKERJAAN"
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "I.P204",
                    "title": "Penghasilan setahun terakhir dari ",
                    "isRequired": true,
                    "templateElements": [
                        {
                            "type": "dropdown",
                            "name": "sumber_penghasilan",
                            "title": "Sumber Penghasilan",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "1 Padi"
                                },
                                {
                                    "value": "2",
                                    "text": "2 Palawija (jagung, kacang-kacangan, ubi-ubian, dll)"
                                },
                                {
                                    "value": "3",
                                    "text": "3 Hortikultura (buah-buahan, sayur-sayuran, tanaman hias, tanaman obat-obatan, dll)"
                                },
                                {
                                    "value": 4,
                                    "text": "4 Karet"
                                },
                                {
                                    "value": 5,
                                    "text": "5 Kelapa sawit"
                                },
                                {
                                    "value": 6,
                                    "text": "6 Kopi"
                                },
                                {
                                    "value": 7,
                                    "text": "7 Kakao"
                                },
                                {
                                    "value": 8,
                                    "text": "8 Kelapa"
                                },
                                {
                                    "value": 9,
                                    "text": "9 Lada"
                                },
                                {
                                    "value": 10,
                                    "text": "10 Cengkeh"
                                },
                                {
                                    "value": 11,
                                    "text": "11 Tembakau"
                                },
                                {
                                    "value": 12,
                                    "text": "12 Tebu"
                                },
                                {
                                    "value": 13,
                                    "text": "13 Sapi potong"
                                },
                                {
                                    "value": 14,
                                    "text": "14 Susu sapi"
                                },
                                {
                                    "value": 15,
                                    "text": "15 Domba"
                                },
                                {
                                    "value": 16,
                                    "text": "16 Ternak  besar lainnya (kuda, kerbau, dll)"
                                },
                                {
                                    "value": 17,
                                    "text": "17 Ayam pedaging"
                                },
                                {
                                    "value": 18,
                                    "text": "18 Telur ayam"
                                },
                                {
                                    "value": 19,
                                    "text": "19 Ternak kecil lainnya (bebek, burung, dll)"
                                },
                                {
                                    "value": 20,
                                    "text": "20 Perikanan tangkap (termasuk biota lainnya)"
                                },
                                {
                                    "value": 21,
                                    "text": "21 Perikanan budidaya (termasuk biota lainnya)"
                                },
                                {
                                    "value": 22,
                                    "text": "22 Bambu"
                                },
                                {
                                    "value": 23,
                                    "text": "23 Budidaya tanaman kehutanan (jati, mahoni, sengon, dll)"
                                },
                                {
                                    "value": 24,
                                    "text": "24 Pemungutan hasil hutan (madu, gaharu, buah-buahan, kayu bakar, rotan, dll)"
                                },
                                {
                                    "value": 25,
                                    "text": "25 Penangkapan satwa liar (babi, ayam hutan, kijang, dll)"
                                },
                                {
                                    "value": 26,
                                    "text": "26 Penangkaran satwa liar (arwana, buaya, dll)"
                                },
                                {
                                    "value": 27,
                                    "text": "27 Jasa pertanian (sewa traktor, penggilingan, dll)"
                                },
                                {
                                    "value": 28,
                                    "text": "28 Pertambangan dan penggalian"
                                },
                                {
                                    "value": 29,
                                    "text": "29 Industri kerajinan"
                                },
                                {
                                    "value": 30,
                                    "text": "30 Industri pengolahan"
                                },
                                {
                                    "value": 31,
                                    "text": "31 Perdagangan"
                                },
                                {
                                    "value": 32,
                                    "text": "32 Warung dan rumah makan"
                                },
                                {
                                    "value": 33,
                                    "text": "33 Angkutan"
                                },
                                {
                                    "value": 34,
                                    "text": "34 Pergudangan"
                                },
                                {
                                    "value": 35,
                                    "text": "35 Komunikasi"
                                },
                                {
                                    "value": 36,
                                    "text": "36 Jasa di luar pertanian"
                                },
                                {
                                    "value": "37",
                                    "text": "37 Uang Pensiunan"
                                },
                                {
                                    "value": 38,
                                    "text": "38 Karyawan tetap"
                                },
                                {
                                    "value": 39,
                                    "text": "39 Karyawan tidak tetap"
                                },
                                {
                                    "value": 40,
                                    "text": "40 TNI"
                                },
                                {
                                    "value": 41,
                                    "text": "41 PNS"
                                },
                                {
                                    "value": 42,
                                    "text": "42 TKI di luar negeri"
                                },
                                {
                                    "value": 43,
                                    "text": "43 Sumbangan (dari keluarga, dari pemerintah)"
                                }
                            ],
                            "hasOther": true,
                            "otherText": "Lainnya, sebutkan"
                        },
                        {
                            "type": "text",
                            "name": "jumlah",
                            "title": "Jumlah",
                            "description": "(yang tidak berpenghasilan isi dengan 0)",
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
                            "type": "html",
                            "name": "satuan_ton",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [1, 2, 4, 5, 7, 8, 12]",
                            "html": "Satuan Jumlah : <b>Ton</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_kg",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [3, 6, 9, 10, 11, 18, 20, 21, 24, 28]",
                            "html": "Satuan Jumlah : <b>Kg</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_ekor",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [13, 15, 16, 17, 19, 25, 26]",
                            "html": "Satuan Jumlah : <b>Ekor</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_liter",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [14]",
                            "html": "Satuan Jumlah : <b>Liter</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_batang",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [22, 23]",
                            "html": "Satuan Jumlah : <b>Batang</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_hari",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [27]",
                            "html": "Satuan Jumlah : <b>Hari</b>"
                        },
                        {
                            "type": "html",
                            "name": "satuan_bln",
                            "visibleIf": "{P204[0].sumber_penghasilan} anyof [29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 37]",
                            "html": "Satuan Jumlah : <b>Bulan</b>"
                        },
                        {
                            "type": "text",
                            "name": "penghasilan",
                            "title": "Penghasilan Setahun (Rp)",
                            "description": "(yang tidak berpenghasilan isi dengan 0)",
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
                            "name": "diekspor",
                            "title": "Diekspor ",
                            "isRequired": true,
                            "choices": [
                                {
                                    "value": "1",
                                    "text": "Semua"
                                },
                                {
                                    "value": "2",
                                    "text": "Sebagian besar"
                                },
                                {
                                    "value": "3",
                                    "text": "Tidak"
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
            "visibleIf": "{I.P201} anyof [2, 5]",
            "title": "PENGHASILAN"
        },
        {
            "name": "page5",
            "elements": [
                {
                    "type": "matrix",
                    "name": "I.P401",
                    "title": "Penyakit  yang diderita setahun terakhir",
                    "defaultValue": {
                        "1": "2",
                        "2": "2",
                        "3": "2",
                        "4": "2",
                        "5": "2",
                        "6": "2",
                        "7": "2",
                        "8": "2",
                        "9": "2",
                        "10": "2",
                        "11": "2",
                        "12": "2",
                        "13": "2",
                        "14": "2",
                        "15": "2",
                        "16": "2",
                        "17": "2",
                        "18": "2",
                        "19": "2"
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
                            "text": "1. Muntaber/diare"
                        },
                        {
                            "value": "2",
                            "text": "2. Demam berdarah"
                        },
                        {
                            "value": 3,
                            "text": "3. Campak"
                        },
                        {
                            "value": 4,
                            "text": "4. Malaria"
                        },
                        {
                            "value": 5,
                            "text": "5. Flu burung/SARS"
                        },
                        {
                            "value": 6,
                            "text": "6. Covid-19"
                        },
                        {
                            "value": 7,
                            "text": "7. Hepatitis B"
                        },
                        {
                            "value": 8,
                            "text": "8. Hepatitis E"
                        },
                        {
                            "value": 9,
                            "text": "9. Difteri"
                        },
                        {
                            "value": 10,
                            "text": "10. Chikungunya"
                        },
                        {
                            "value": 11,
                            "text": "11. Leptospirosis"
                        },
                        {
                            "value": 12,
                            "text": "12. Kolera"
                        },
                        {
                            "value": 13,
                            "text": "13. Gizi buruk (marasmus dan kwasiorkor)"
                        },
                        {
                            "value": 14,
                            "text": "14. Jantung"
                        },
                        {
                            "value": 15,
                            "text": "15. TBC paru-paru"
                        },
                        {
                            "value": 16,
                            "text": "16. Kanker"
                        },
                        {
                            "value": 17,
                            "text": "17. Diabetes/kencing manis/ gula"
                        },
                        {
                            "value": 18,
                            "text": "18. Lumpuh"
                        },
                        {
                            "value": 19,
                            "text": "19. Lainnya"
                        }
                    ]
                },
                {
                    "type": "multipletext",
                    "name": "I.P402",
                    "title": "Berapa kali fasilitas kesehatan berikut didatangi setahun terakhir untuk pengobatan/perawatan (jumlah)",
                    "isRequired": true,
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
                            "title": "1. Rumah sakit                              "
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
                            "title": "2. Rumah sakit bersalin                "
                        },
                        {
                            "name": "3",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "3. Puskesmas dengan rawat inap"
                        },
                        {
                            "name": "4",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "4. Puskesmas tanpa rawat inap"
                        },
                        {
                            "name": "5",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "5. Puskesmas pembantu"
                        },
                        {
                            "name": "6",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "6. Poliklinik/ balai pengobatan "
                        },
                        {
                            "name": "7",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "7. Tempat praktik dokter               "
                        },
                        {
                            "name": "8",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "8. Rumah bersalin                         "
                        },
                        {
                            "name": "9",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "9. Tempat praktik bidan     "
                        },
                        {
                            "name": "10",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "10. Poskesdes                     "
                        },
                        {
                            "name": "11",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "11. Polindes                        "
                        },
                        {
                            "name": "12",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "12. Apotik                             "
                        },
                        {
                            "name": "13",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "13. Toko khusus obat/ jamu"
                        },
                        {
                            "name": "14",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "14. Posyandu                      "
                        },
                        {
                            "name": "15",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "15. Posbindu                       "
                        },
                        {
                            "name": "16",
                            "isRequired": true,
                            "inputType": "text",
                            "validators": [
                                {
                                    "type": "regexvalidator",
                                    "text": "Input harus berupa angka",
                                    "regex": "^[0-9]*$"
                                }
                            ],
                            "title": "16. Tempat praktik dukun bayi/ bersalin/ paraji"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P403",
                    "title": "Jaminan sosial kesehatan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Peserta         "
                        },
                        {
                            "value": "2",
                            "text": "Bukan peserta"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P405",
                    "visibleIf": "{I.P104} = 2 and {I.P108} anyof [2, 3, 4]",
                    "title": "Apakah dalam setahun terakhir ini Ibu melahirkan?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ya   "
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P406",
                    "visibleIf": "{I.P107} <= 2",
                    "title": "Apakah bayi Bapak/Ibu memperoleh ASI ekslusif (pada usia 1-6 bulan hanya mengkonsumsi ASI saja)?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Ya     "
                        },
                        {
                            "value": "2",
                            "text": "Tidak"
                        }
                    ]
                }
            ],
            "title": "KESEHATAN"
        },
        {
            "name": "page6",
            "elements": [
                {
                    "type": "matrix",
                    "name": "I.P404",
                    "title": "Disabilitas",
                    "defaultValue": {
                        "1": "2",
                        "2": "2",
                        "3": "2",
                        "4": "2",
                        "5": "2",
                        "6": "2",
                        "7": "2",
                        "8": "2",
                        "9": "2",
                        "10": "2",
                        "11": "2",
                        "12": "2",
                        "13": "2",
                        "14": "2",
                        "15": "2",
                        "16": "2",
                        "17": "2",
                        "18": "2",
                        "19": "2"
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
                            "text": "1. Tunanetra (buta)                    "
                        },
                        {
                            "value": "2",
                            "text": "2. Tunarungu (tuli)"
                        },
                        {
                            "value": 3,
                            "text": "3. Tunawicara (bisu)                   "
                        },
                        {
                            "value": 4,
                            "text": "4. Tunarungu–wicara (tuli–bisu) "
                        },
                        {
                            "value": 5,
                            "text": "5. Tunadaksa (cacat tubuh): kelumpuhan/kelainan/ketidaklengkapan anggota gerak"
                        },
                        {
                            "value": 6,
                            "text": "6. Tunagrahita (cacat mental, keterbelakangan mental"
                        },
                        {
                            "value": 7,
                            "text": "7. Tunalaras (eks–sakit jiwa, gangguan mengendalikan emosi dan kontrol sosial)    "
                        },
                        {
                            "value": 8,
                            "text": "8. Cacat eks–sakit kusta: pernah sakit kusta dan dinyatakan sembuh oleh dokter"
                        },
                        {
                            "value": 9,
                            "text": "9. Cacat ganda (cacat fisik–mental): cacat fisik dan cacat mental "
                        },
                        {
                            "value": 10,
                            "text": "10. Dipasung                             "
                        }
                    ]
                }
            ],
            "title": "Disabilitas"
        },
        {
            "name": "page7",
            "elements": [
                {
                    "type": "dropdown",
                    "name": "I.P501",
                    "title": "Pendidikan tertinggi yang ditamatkan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Tidak sekolah/belum tamat SD                                          "
                        },
                        {
                            "value": "2",
                            "text": "2. SD dan sederajat                                    "
                        },
                        {
                            "value": "3",
                            "text": "3. SMP dan sederajat                                 "
                        },
                        {
                            "value": 4,
                            "text": "4. SMA dan sederajat                                 "
                        },
                        {
                            "value": 5,
                            "text": "5. Diploma 1-3                                  "
                        },
                        {
                            "value": 6,
                            "text": "6. S1 dan sederajat                               "
                        },
                        {
                            "value": 7,
                            "text": "7. S2 dan sederajat                        "
                        },
                        {
                            "value": 8,
                            "text": "8. S3 dan sederajat"
                        },
                        {
                            "value": 9,
                            "text": "9. Pesantren, seminari, wihara dan sejenisnya"
                        },
                        {
                            "value": 10,
                            "text": "10. Lainnya"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P502",
                    "visibleIf": "{I.P107} >= 20",
                    "title": "Berapa tahun Bapak/Ibu mengenyam pendidikan dasar (SD, SMP, SMA)?",
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
                    "name": "I.P503",
                    "visibleIf": "{I.P201} = 1",
                    "title": "Pendidikan yang sedang diikuti",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "1. Tidak sekolah                                          "
                        },
                        {
                            "value": "2",
                            "text": "2. SD dan sederajat                                    "
                        },
                        {
                            "value": "3",
                            "text": "3. SMP dan sederajat                                 "
                        },
                        {
                            "value": 4,
                            "text": "4. SMA dan sederajat                                 "
                        },
                        {
                            "value": 5,
                            "text": "5. Diploma 1-3                                  "
                        },
                        {
                            "value": 6,
                            "text": "6. S1 dan sederajat                               "
                        },
                        {
                            "value": 7,
                            "text": "7. S2 dan sederajat                        "
                        },
                        {
                            "value": 8,
                            "text": "8. S3 dan sederajat"
                        },
                        {
                            "value": 9,
                            "text": "9. Pesantren, seminari, wihara dan sejenisnya"
                        },
                        {
                            "value": 10,
                            "text": "10. Lainnya"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "I.P504",
                    "visibleIf": "{I.P201} anyof [3, 4]",
                    "title": "Berapa kali mengikuti pelatihan keterampilan kerja dalam setahun?",
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
                    "name": "I.P505",
                    "title": "Bahasa digunakan di rumah dan permukiman (tuliskan): ",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "I.P506",
                    "title": "Bahasa digunakan di lembaga formal (sekolah, tempat kerja, tuliskan): ",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "I.P507",
                    "title": "Kerja bakti setahun terakhir (jumlah)",
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
                    "name": "I.P508",
                    "title": "Siskamling setahun terakhir (jumlah)",
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
                    "name": "I.P509",
                    "title": "Pesta rakyat/adat setahun terakhir (jumlah)",
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
                    "name": "I.P510",
                    "title": "Menolong warga yang mengalami kematian keluarga setahun terakhir (jumlah)",
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
                    "name": "I.P511",
                    "title": "Menolong warga yang sedang sakit setahun terakhir (jumlah)",
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
                    "name": "I.P512",
                    "title": "Menolong warga yang kecelakaan setahun terakhir (jumlah)",
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
                    "name": "I.P513",
                    "title": "Dalam setahun terakhir apakah pernah memperoleh pelayanan desa",
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
                    "type": "radiogroup",
                    "name": "I.P514",
                    "visibleIf": "{I.P513} = 1",
                    "title": "Bagaimana pelayanan desa yang diperoleh",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Baik     "
                        },
                        {
                            "value": "2",
                            "text": "Cukup"
                        },
                        {
                            "value": 3,
                            "text": "Buruk"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P515",
                    "title": "Dalam setahun terakhir apakah pernah menyampaikan masukan/saran kepada pihak desa",
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
                    "type": "radiogroup",
                    "name": "I.P516",
                    "visibleIf": "{I.P515} = 1",
                    "title": "Bagaimana keterbukaan desa terhadap masukan yang telah disampaikan",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "1",
                            "text": "Baik     "
                        },
                        {
                            "value": "2",
                            "text": "Cukup"
                        },
                        {
                            "value": 3,
                            "text": "Buruk"
                        }
                    ]
                },
                {
                    "type": "radiogroup",
                    "name": "I.P517",
                    "title": "Dalam setahun terakhir apakah terjadi bencana",
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
                    "type": "radiogroup",
                    "name": "I.P518",
                    "visibleIf": "{I.P517} = 1",
                    "title": "Apakah anda terkena dampak bencana",
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
                    "type": "radiogroup",
                    "name": "I.P519",
                    "visibleIf": "{I.P518} = 1",
                    "title": "Apakah menerima pemenuhan kebutuhan dasar saat bencana (makanan, pakaian, tempat tinggal)?",
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
                    "type": "radiogroup",
                    "name": "I.P520",
                    "visibleIf": "{I.P518} = 1",
                    "title": "Apakah ada penanganan psikososial keluarga terdampak bencana (penyuluhan/konseling/terapi)?   ",
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
            "title": "PENDIDIKAN"
        }
    ]
}
