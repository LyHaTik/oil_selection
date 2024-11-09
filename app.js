// Данные автомобилей
const carData = {
    "Acura": {
        "MDX": {
            "1 поколение, вкл.рестайлинг (YD1) 2000-2006": [
                "3.5 4WD (J35A3/J35A5)"
            ],
            "2 поколение, вкл.рестайлинг (YD2) 2006-2013": [
                "3.7 AWD (J37A1)"
            ],
            "3 поколение, вкл.рестайлинг (YD3) 2013-2021": [
                "3.5 SH-awd (J35Y4/J35Y5)"
            ]
        },
        "RDX": {
            "1 поколение, вкл.рестайлинг (TB1/TB2) 2006-2012": [
                "2.3 Turbo + SH-AWD (K23A1)"
            ],
            "2 поколение, вкл. рестайлинг (TB3/TB4) 2012 - Н.В.": [
                "3.5 AWD (J35Z2)"
            ]
        },
        "TLX": {
            "1 поколение (2014-2016)": [
                "2.4 (K24W7)",
                "3.5 AWD (J35Y6)"
            ]
        },
        "ZDX": {
            "1 поколение (YB1) 2009-2013": [
                "3.7 AWD (J37A5)"
            ]
        }
    },
    "Audi": {
        "A1 (8X)": {
            "1 поколение, вкл.рестайлинг (8XA/8XF/8X1) 2010-2016": [
                "1.4 TFSI (CAXA/CNVA)",
                "1.2 TFSI (CBZA)",
                "1.4 (CZEA)",
                "1.4 (CZCA/CZDB)"
            ]
        },
        "A2 (8Z)": {
            "1 поколение (1999-2005)": [
                "1.2 TDI (ANY)",
                "1.4 (AUA/BBY)",
                "1.4 TDI (AMF/BHC)",
                "1.4 TDI (ATL)",
                "1.6 FSI (BAD)"
            ]
        },
        "A3": {
            "1 поколение (8L, вкл.рестайлинг) 1996-2003": [
                "1.6 (AEH/AKL/APF)",
                "1.8 (AGN/APG)",
                "1.9 TDI (AHF/ASV)",
                "1.6 (AVU/BFQ)",
                "1.8 T (AGU/ARZ/ARX/AUM/AQA)",
                "1.8 T quattro (AGU/AQA)",
                "1.8 T (AJQ/APP/ARY/AUQ)",
                "1.9 TDI (AGR/ALH)"
            ],
            "2 поколение (8P, вкл.рестайлинг) 2003-2013": [
                "1.6 (BGU/BSE/BSF/CCSA)",
                "1.9 TDI (BJB/BKC/BXE/BLS)",
                "1.2 TSI (CBZB)",
                "1.4 TFSI (CZCC)",
                "1.4 TFSI (CAXC/CMSA)",
                "1.6 FSI (BAG/BLF/BLP)",
                "1.6 TDI (CAYB)",
                "1.6 TDI (CAYC)",
                "1.8 TFSI (BYT/BZB/CDAA)",
                "2.0 FSI (AXW,BLR/X/Y/MB/VY/VZ)",
                "2.0 TDI (AZV/CBAA/CFFA)",
                "2.0 TDI 16V (BKD/BMM/CBAB/CFFB/CLJA)",
                "2.0 TDI (BMN/CBBB/CFGB)",
                "2.0 TDI (BUY)"
            ],
            "3 поколение (8V, вкл.рестайлинг) 2008-2020": [
                "1.4 TFSI (CXSB/CZCA)",
                "1.8 TFSI (CJSA/CJSB)",
                "2.0 TDI (CRBC/CRLB/CRUA)",
                "1.2 TFSI (CJZA)",
                "1.4 TFSI (CMBA/CXSA)",
                "1.6 TDI (CLHA)",
                "2.5 RS3 quattro (CZGB)"
            ]
        },
        "A4": {
            "2 поколение 8E2/8E5 (B6) 2000-2004": [
                "1.6 (ALZ)",
                "1.8 T quattro (AVJ)",
                "1.8 T quattro (BEX)",
                "1.8 T quattro (AMB)",
                "1.8 T (BFB)",
                "1.9 TDI (AVB)",
                "1.9 TDI (BKE/BRB)",
                "1.9 TDI (AVF/AWX)",
                "2.0 (ALT)",
                "2.0 FSi (AWA)",
                "2.4 (BDV)",
                "2.4 (AMM)",
                "2.5 TDI quattro (AKE/BAU/BDH)",
                "2.5 TDI (AYM)",
                "2.5 TDI (BCZ/BDG/BFC)",
                "3.0 quattro (BBJ)",
                "3.0 quattro (ASN/AVK)",
                "4.2 S4 quattro (BBK/BHF)"
            ],
            "3 поколение 8EС/8ED (B7) 2004-2015": [
                "1.6 (ALZ)",
                "1.8 T (BFB)",
                "1.9 TDI (BKE/BRB)",
                "2.0 (ALT)",
                "2.0 TDI (BNA/BRF)",
                "2.0 TDI (BRD)",
                "2.0 TDI quattro (BPW)",
                "2.0 TDI 16V (BLB/BRE)",
                "2.0 TFSI quattro (BGB/BPG/BWE/BWT)",
                "2.0 TFSI quattro (BUL)",
                "2.0 TFSI (BPJ/BYK)",
                "2.5 TDI (BDG)",
                "2.7 TDi (BSG)",
                "2.7 TDI (BPP)",
                "3.0 TDI quattro (ASB)",
                "3.0 TDI quattro (BKN)",
                "3.0 (BBJ)",
                "3.2 FSI quattro (AUK/BKH)",
                "4.2 RS4 quattro (BNS)",
                "4.2 S4 quattro (BBK/BHF)"
            ],
            "4 поколение 8K2/8K5/8KH (B8) 2007-2015": [
                "1.8 TFSI (CABA/CDHA)",
                "1.8 TFSI (CABB/CCUA/CDHB)",
                "1.8 TFSI (CJEB)",
                "2.0 TDI (CJCD/CMFB/CSUA)",
                "2.0 TDI (CAHA)",
                "2.0 TDI (CJCB/CSUB/CAGB)",
                "2.0 TDI (CJCA/CMFA/CAGA/CMEA)",
                "2.0 TDI (CGLD/CNHC/CAHB)",
                "2.0 TDI (CGLC/CMGB)",
                "2.0 TDI (CJCC/CAGC)",
                "2.0 TFSI (CDNC/CADA/CAEB)",
                "2.0 TFSI (CNCD)",
                "2.7 TDI (CAMA/CGKA)",
                "3.0 S4 quattro (CGWC/CGXC/CREC/CTUB/CAKA/CCBA)",
                "3.0 TDI quattro (CKVB/CKVC/CDUC)",
                "3.0 TDI quattro (CAPA/CCLA/CCWA)",
                "3.0 TDI quattro (CCWB)",
                "3.0 TFSI quattro (CMUA/CRED)"
            ],
            "5 поколение 8W2/8W5 (B9) 2015 - Н.В.": [
                "1.4 TFSI (CVNA)",
                "2.0 TDI (CZHA/DEUA)",
                "2.0 TDI (DESA/DETA/DFVA)",
                "2.0 TFSI (CVKB)",
                "2.0 TFSI (CYRC)"
            ]
        },
        "A5": {
            "1 поколение (8T3, купе) 2007 - Н.В.": [
                "1.8 TFSI (CDHB)",
                "1.8 TFSI (CJEB/CABD)",
                "2.0 TDI (CAHA)",
                "2.0 TDI (CGLD/CNHC/CAHB)",
                "2.0 TFSI (CAEA/CAEB/CDNB)",
                "2.0 TFSI (CNCD)",
                "2.0 TFSI (CDNC/CAEB)",
                "2.7 TDI (CAMA/CGKA)",
                "3.0 TDI (CCWB)",
                "3.0 TDI (CAPA/CCWA)",
                "3.0 TDI (CKVB/CKVC/CDUC)",
                "3.0 S5 quattro (CGWC/CGXC/CREC/CTUB/CTDA/CAKA)",
                "3.0 TFSI quattro (CMUA/CRED)",
                "3.2 FSI (CALA)",
                "4.2 S5 quattro (CAUA)"
            ],
            "2 поколение (8TA, Sportback) 2009 - Н.В.": [
                "1.8 TFSI (CDHB)",
                "2.0 TDI (CAHA)",
                "2.0 TFSI (CDNB)",
                "2.0 TFSI (CNCD)",
                "2.0 TFSI (CDNC/CAEB)",
                "3.0 S5 quattro (CGWC/CGXC/CREC/CTUB/CTDA/CAKA)",
                "3.0 TDI (CKVB/CKVC/CDUC)",
                "3.0 TFSI quattro (CMUA)",
                "3.2 FSI (CALA)"
            ]
        },
        "A6": {
            "2 поколение 4B2/4B4/4B5/4B6/4BH (C5) 1997-2005": [
                "1.8 (ANQ/AJP/AQE/ARH)",
                "1.8 (AFY)",
                "1.8T (AEB/ANB/APU/ARK/AWL/AWT)",
                "1.8T (AJL)",
                "1.9 TDI (AFN/AVG)",
                "1.9 TDI (AVF/AWX)",
                "1.9 TDI (AJM)",
                "2.0 (ALT)",
                "2.4 (AGA/ALF/AML/APS/ARJ)",
                "2.4 (APC)",
                "2.4 (AJG/AMM/APZ)",
                "2.4 (BDV)",
                "2.5 TDI (BDG/BFC)",
                "2.5 TDI (AFB/AKN)",
                "2.5 TDI (AYM)",
                "2.5 TDI (AKE/BAU/BDH/BND)",
                "2.7 T (AJK/AZA)",
                "2.8 (BBG/ATX)",
                "2.8 (AGE)",
                "2.8 quattro (AHA/ACK/ALG/AMX/APR/AQD/ATQ)",
                "3.0 (ASN/BBJ)",
                "4.2 RS6 quattro (BCY)",
                "4.2 S6 (ANK/AQJ)",
                "4.2 quattro (ARS/ART/ASG/AWN)"
            ],
            "3 поколение 4FH/4F5 (C6) 2005-2011": [
                "2.0 TDI (BLB/BRE)",
                "2.0 TDI (CAHA)",
                "2.0 TDI (BNA/BRF/BVG/CAGB)",
                "2.0 TFSI (BPJ/BYK)",
                "2.4 (BDW)",
                "2.7 TDI (BPP)",
                "2.7 TDI (BSG/CANB/CAND)",
                "2.7 TDI quattro (CANC)",
                "2.8 FSI (CCDA)",
                "2.8 FSI (CCEA)",
                "2.8 FSI (BDX)",
                "3.0 TDI quattro (BNG/CDYB)",
                "3.0 TDI quattro (CDYA/CDYC)",
                "3.0 TDI quattro (ASB)",
                "3.0 TDI quattro (BMK)",
                "3.0 TFSI quattro (CAJA)",
                "3.0 quattro (BBJ)",
                "3.2 FSI quattro (AUK/BKH/BYU)",
                "4.2 FSI quattro (BVJ)",
                "4.2 FSI quattro (BAT)"
            ],
            "4 поколение 4G5/4GD/4GH (C7) 2012 - Н.В.": [
                "2.0 TDI (CGLD)",
                "2.0 TDI (CGLC/CMGB)",
                "2.0 TFSI (CDNB)",
                "2.8 FSI (CHVA)",
                "3.0 TDI (CLAA/CLAB)",
                "3.0 TDI quattro (CDUD/CKVB/CKVC/CDUC)",
                "3.0 TDI quattro (CGQB)",
                "3.0 TFSI quattro (CGWB)",
                "3.0 TFSI quattro (CGWD)",
                "4.0 S6 quattro (CEUC)"
            ]
        },
        "A7": {
            "1 поколение (4GA/4GF) 2010-2018": [
                "2.8 FSI (CHVA/CNJA)",
                "3.0 TDI (CLAA/CLAB)",
                "3.0 TDI (CDUD/CKVB/CKVC/CDUC)",
                "3.0 TFSI (CGWB)",
                "3.0 TFSI (CGWD/CGXB)",
                "3.0 TFSI (CREC)"
            ]
        },
        "A8": {
            "2 поколение (4E2/4E8) 2002-2010": [
                "2.8 FSI (BDX)",
                "3.0 (ASN/BBJ)",
                "3.0 TDI (ASB/BNG)",
                "3.2 FSI (BPK)",
                "3.7 quattro (BFL)",
                "4.0 TDI quattro (ASE)",
                "4.2 FSI quattro (BVJ)",
                "4.2 TDI quattro (BMC/BVN)",
                "4.2 quattro (BGK/BFM)",
                "5.2 S8 quattro (BSM)",
                "6.0 W12 quattro (BHT/BSB/BTE)"
            ],
            "3 поколение (4H2/4H8/4HC/4HL) 2009 - Н.В.": [
                "3.0 TDI (CLAB)",
                "3.0 TDI quattro (CMHA/CDTA/CDTC)",
                "3.0 TFSI quattro (CGWD/CREA)",
                "3.0 TFSI quattro (CREG/CGWA/CGXA/CGWX)",
                "3.0 TFSI quattro (CGXC/CMDA/CREC/CTDA/CTUB)",
                "4.2 FSI quattro (CDRA)",
                "4.2 TDI quattro (CDSB)",
                "6.3 W12 quattro (CEJA/CTNA)"
            ]
        },
        "Q3": {
            "1 поколение (8UB/8UG) 2011-2017": [
                "1.4 TFSI (CHPB/CZDA/CZEA)",
                "2.0 TDI (CFFA)",
                "2.0 TDI (CFFB/CLJA)",
                "2.0 TFSI quattro (CPSA)",
                "2.0 TFSI quattro (CCZC/CRHA)",
                "2.0 TFSI quattro (CULC)",
                "2.0 TFSI quattro (CULB)",
                "2.5 RS quattro (CTSA)"
            ]
        },
        "Q5": {
            "1 поколение (8RB) 2008 - 2017": [
                "3.0 TDI (CDUD)",
                "2.0 TDI quattro (CGLC/CMGB)",
                "2.0 TDI quattro (CGLB/CMGA/CAHA)",
                "2.0 TFSI Hybrid quattro (CDNC/CHJA)",
                "2.0 TFSI quattro (CNCE)",
                "2.0 TFSI quattro (CPMA/CDNC/CADA/CAEB)",
                "2.0 TFSI quattro (CNCB/CDNA/CDNB/CDZA)",
                "2.0 TFSI quattro (CNCD)",
                "3.0 TDI quattro (CPNB/CCWA)",
                "3.0 TFSI quattro (CTUC/CTVA)",
                "3.2 FSI quattro (CALB)"
            ]
        },
        "Q7": {
            "1 поколение (4LB) 2005-2015": [
                "3.0 TDI quattro (CJGD/CLZB/CRCA)",
                "3.0 TDI quattro (CATA)",
                "3.0 TDI quattro (CJGA/CNRB/CASA/CCMA)",
                "3.0 TDI quattro (CJGC/CJMA)",
                "3.0 TDI quattro (BUG)",
                "3.0 TFSI quattro (CJTB/CJWB/CNAA/CTWA)",
                "3.6 FSI quattro (BHK)",
                "4.2 FSI quattro (BAR)",
                "4.2 TDI quattro (BTR)",
                "4.2 TDI quattro (CCFC/CCFA)",
                "6.0 TDI quattro (CCGA)"
            ],
            "2 поколение (4MB) 2015 - Н.В.": [
                "3.0 TDI quattro (CRTC)",
                "3.0 TDI quattro (CMVD)",
                "3.0 TFSI quattro (CREC)"
            ]
        },
        "TT": {
            "1 поколение (8N3) 1998 - 2006": [
                "1.8 T (BVP)",
                "1.8 T (AUM)",
                "1.8 T (AJQ/APP/ATC/AUQ/AWP)",
                "1.8 T quattro (BFV)",
                "1.8 T quattro (AMU/APX/BAM)",
                "1.8 T quattro (BVR)",
                "3.2 VR6 quattro (BHE/BPF)"
            ],
            "2 поколение (8J3) 2006 - 2014": [
                "1.8 TFSI (CDAA)"
            ]
        }
    },
    "BMW": {
        "1 Series": {
            "1 поколение, вкл.рестайлинг (E81/82/87/87N/88) 2004-2013": [
                "2.0 116d (N47D20A/N47D20C)",
                "1.6 116i (N45B16/N45NB16)",
                "1.6 116i (N43B16A)",
                "1.6 116i (N43B20A)",
                "2.0 118d (N47D20A/N47D20C)",
                "2.0 118d (M47D20)",
                "2.0 118i (N46B20B)",
                "1.6 118i (N43B20A)",
                "2.0 120d (N47D20A/N47D20C)",
                "2.0 120d (M47D20)",
                "2.0 120i (N46B20)",
                "1.6 120i (N43B20A)",
                "2.0 123d (N47D20B)",
                "3.0 130i (N52B30B)"
            ],
            "2 поколение, вкл.рестайлинги (F20/21) 2011-2020": [
                "1.6 114i (N13B16A)",
                "2.0 116d (N47D20C)",
                "1.5 116d (B37D15A)",
                "2.0 116d (N47D16A)",
                "1.6 116i (N13B16A)",
                "2.0 118d (N47D20C)",
                "2.0 118d (B47D20A)",
                "1.6 118i (N13B16A)",
                "1.6 118i (N13B16)",
                "1.5 118i (B38B15A)",
                "3.0M 135i (N55B30A)"
            ]
        },
        "2 Series": {
            "1 поколение, вкл.рестайлинг (F22/23/87) 2014 - Н.В.": [
                "2.0 118d (N47D20C)",
                "2.0 220d (B47D20)",
                "2.0 220i (N20B20B)",
                "2.0 225d (N47D20D)",
                "2.0 228i (N20B20A/N26B20A)",
                "3.0M 235i (N55B30A)"
            ]
        },
        "3 Series": {
            "4 поколение, вкл.рестайлинги (E46) 1998-2007": [
                "1.6 316i (N40B16A/N45B16/N45B16A)",
                "1.8 316i (N42B18A/N42B18/N46B18/N46B18A)",
                "1.9 316i (M43B19)",
                "2.0 318 D/TD (M47D20)",
                "1.9 318i (M43B19)",
                "2.0 318i/Ci (N42B20/N46B20A/N42B20A)",
                "2.0 320 d/td/cd (M47D20)",
                "2.0 320d (M47D20)",
                "2.2 320i (M54B22)",
                "2.0 320i (M52B20)",
                "2.5 323i (M52B20)",
                "2.5 325i (M54B25)",
                "2.8 328i (M52B28)",
                "3.0 330d (M57D30)",
                "2.9 330d (M57D30)",
                "3.0 330i (M54B30)"
            ],
            "5 поколение, вкл. рестайлинг (E90/E91/E92/E93) 2004-2014": [
                "1.6 316i (N45 B16/B16A, N45N B16A)",
                "2.0 318i (N43B20A/N46B20A/B)",
                "2.0 318d (N47D20C/N47D20A)",
                "2.0 318d (M47D20)",
                "2.0 318i (N46B20)",
                "2.0 320si (N45B20A)",
                "2.0 320d (N47D20)",
                "2.0 320i (N46B20A/B/C)",
                "2.0 320i (N43B20A)",
                "2.0 320xd (N47D20A/C)",
                "2.5 323i (N52NB25A)",
                "2.5 323i/xi (N52B25/N53B30/N53B30A)",
                "3.0 325d (M57D30)",
                "2.5 325xi (N52B25A)",
                "3.0 330d (M57D30)",
                "3.0 330d (N57D30A)",
                "3.0 330xi (N52B30A)",
                "3.0 330i/xi (N53B30A)",
                "3.0 335d (M57D30)",
                "3.0 335i/xi (N54B30/N55B30A)",
                "M3 4.0 V8 (S65B40A)"
            ],
            "6 поколение, вкл. рестайлинг (F30/F31/F80) 2011-2019": [
                "1.6 316i (N13B16A)",
                "1.5 318i (B38B15A)",
                "1.6 320i ED (N13B16A)",
                "2.0 320i (B48B20A)",
                "2.0 328i (N20B20A/N26B20A)",
                "2.0 330e (B48B20B)",
                "3.0 335i (N55B30A)",
                "3.0 340i (B58B30A)",
                "3.0 M3 (S55B30A)",
                "2.0 316d (N47D20C/B47D20A)",
                "2.0 318d (B47D20A)",
                "2.0 318d (N47D20C)",
                "2.0 320d (B47D20A)",
                "2.0 320d (N47D20C)",
                "2.0 320 d ED (N47D20C/B47D20A)",
                "2.0 325d (N47D20D)",
                "2.0 325d (B47D20B)",
                "3.0 330d (N57D30A)"
            ]
        },
        "4 Series": {
            "1 поколение, вкл. рестайлинг (F32/F33/F36/F82) 2013-2020": [
                "2.0 418d (B47D20A)",
                "2.0 320i (B48B20A)",
                "2.0 420i (N20B20A/N20B20B)",
                "2.0 428i (N20B20A/N26B20A)",
                "2.0 430i (B48B20A)",
                "3.0 435i (N55B30A)",
                "3.0 440i (B58B30A)",
                "3.0 M4 (S55B30A)",
                "2.0 420d (N47D20C)",
                "2.0 420d (B47D20A)",
                "2.0 425d (N47D20D)",
                "2.0 425d (B47D20B)",
                "3.0 430d (N57D30A)",
                "3.0 435d (N57D30B)"
            ]
        },
        "5 Series": {
            "4 поколение, вкл. рестайлинг (E39) 1995-2004": [
                "2.0 520d (M47D20)",
                "2.0 520i (M52B20)",
                "2.2 520i (M52/54B22)",
                "2.2 523i (M52B25)",
                "2.5 525i (M54B25)",
                "2.8 528i (M52B28)",
                "3.0 530i (M54B30)",
                "3.5 535i (M62B35)",
                "4.4 540i (M62B44)",
                "2.5 525d (M57D25)",
                "2.5 525 TD (M51D25)",
                "2.5 525 TDS (M51D25)",
                "2.9 530d (M57D30)"
            ],
            "5 поколение, вкл. рестайлинг (E60/E61) 2003-2010": [
                "2.2 520i (M52/54B22)",
                "2.0 520i (N43/46B20)",
                "2.5 523i (N52B25A/N53B25A)",
                "2.5 523i (N52B25A)",
                "2.5 525i (N52B25)",
                "2.5 525i (M52/54B25)",
                "3.0 525i (N53B30)",
                "3.0 530i (M54B30)",
                "3.0 530i (N53B30)",
                "3.0 530i (N52B30)",
                "4.0 540i (N62B40A)",
                "4.4 545i (N62B44A)",
                "4.8 550i (N62B48A/B)",
                "2.0 520d (N47D20A)",
                "2.0 520d (M47D20/N47D20A/C)",
                "2.5 525d (M57D25)",
                "2.9 530d (M57D30)",
                "2.9 535d (M57D30)"
            ],
            "6 поколение, вкл.рестайлинг (F10/11/18) 2009-2017": [
                "2.0 520i (N20B20A)",
                "3.0 523i (N52B30A/N53B30A)",
                "3.0 528i (N52B30A/N53B30A)",
                "2.0 528i (N20B20A)",
                "3.0 530i (N52B30A)",
                "3.0 535i (N55B30A)",
                "4.4 535i (N55B30A)",
                "2.0 518d (N47D20C)",
                "2.0 518d (B47D20A)",
                "2.0 520d (B47D20A)",
                "2.0 520d (N47D20C)",
                "3.0 525d (N57D30A)",
                "2.0 425d (N47D20D)",
                "3.0 530d (N57D30A)",
                "3.0 435d (N57D30B)"
            ]
        },
        "6 Series": {
            "2 поколение, вкл. рестайлинг (E63/64) 2003-2010": [
                "3.0 630Ci (N52B30)",
                "3.0 630Ci (N52B30A)",
                "3.0 635d (M57D30)",
                "4.4 645i (N62B44A)",
                "4.8 650i (N62B48B)"
            ],
            "3 поколение, вкл. рестайлинг (F06) 2012-2018": [
                "3.0 640i (N55B30A)",
                "4.4 650i (N63B44A/N63B44B)",
                "4.4 M6 (S63B44B)",
                "3.0 640d (N57D30B)"
            ],
            "3 поколение, вкл.рестайлинг (F12/13) 2011-2018": [
                "3.0 640i (N55B30A)",
                "4.4 650i (N63B44B)",
                "4.4 650i (N63B44A)",
                "4.4 M6 (S63B44B)",
                "3.0 640d (N57D30B)"
            ]
        },
        "7 Series": {
            "4 поколение, вкл. рестайлинг (E65/66) 2001-2008": [
                "3.0 730i (M54B30)",
                "3.0 730Ci (N52B30A)",
                "3.6 735Ci (N62B36)",
                "4.0 740i (N62B40)",
                "4.4 745i (N62B44A)",
                "4.8 750i (N62B48B)",
                "6.0 760i (N73B60A)",
                "3.0 730d (M57D30/M57D30N2)",
                "3.9 740d (M67D39)",
                "4.4 745d (M67D45)"
            ],
            "5 поколение, вкл. рестайлинг (F01/02/03/04) 2008-2015": [
                "3.0 730i (N52B30A/N52B30BF)",
                "3.0 740i (N55B30A)",
                "3.0 740i (N54B30A)",
                "4.4 650i (N63B44A)",
                "4.4 750i (N63B44B)",
                "6.0 760i (N74B60A)",
                "3.0 730d (N57D30A)",
                "3.0 740d (N57D30B)"
            ],
            "6 поколение, вкл. рестайлинг (G11/G12) 2015 - Н.В.": [
                "3.0 730d (B57D30A)",
                "3.0 740d (B57D30B)",
                "2.0 730i/730 Li(B48B20B)",
                "3.0 740i/740Li (B58B30A/B58B30C)",
                "4.4 740i/740Li (B58B30A/B58B30C)"
            ]
        },
        "X1": {
            "1 поколение, вкл. рестайлинг (E84) 2009-2015": [
                "1.6 16i (N20B16A)",
                "2.0 18i (N46B20B)",
                "2.0 20i (N20B20A)",
                "2.0 28iX (N20B20A)",
                "3.0 25iX (N52B30A)",
                "3.0 28iX (N52B30A)",
                "3.0 35iX (N55B30A)",
                "2.0 16d (N47D20C)",
                "2.0 18d/dX (N47D20C)",
                "2.0 20d/dX (N47D20C)",
                "2.0 23dX (N47D20C)",
                "2.0 23dX (N47D20D)"
            ],
            "2 поколение, вкл. рестайлинг (E48) 2015 - Н.В.": [
                "1.5 18i (B38A15A)",
                "2.0 20i (B48A20A/B48A20F)",
                "2.0 25i (B48A20B)",
                "1.5 16d (B37C15A)",
                "2.0 18d (B47C20A)",
                "2.0 20d (B47C20A)",
                "2.0 25d (B47C20B)"
            ]
        },
        "X3": {
            "1 поколение, вкл. рестайлинг (E83) 2003-2010": [
                "2.0i (N46B20B)",
                "2.5i (M54B25)",
                "2.5 si (N52B25A)",
                "3.0i(M54B30)",
                "3.0 si (N52B30A)",
                "2.0d (M47D20)",
                "2.0d (N47D20A)",
                "3.0d (M57D30N2)",
                "3.0d (M57D30)",
                "3.0sd (M57D30N2)"
            ],
            "2 поколение, вкл. рестайлинг (F25) 2010-2017": [
                "1.6 18i (N20B16A)",
                "2.0 20iX (N20B20A)",
                "2.0 28iX (N20B20A)",
                "3.0 28iX (N52B30A)",
                "3.0 35iX (N55B30A)",
                "2.0 18d (B47D20A)",
                "2.0 18d (N47D20C)",
                "2.0 20dX (N47D20C)",
                "2.0 20dX (B47D20A)",
                "3.0 30dX (N57D30A)",
                "3.0 35dX (N57D30B)"
            ]
        },
        "X4": {
            "1 поколение (F26) 2014-2018": [
                "2.0 20dX (B47D20A)",
                "3.0 30dX (N57D30A)",
                "3.0 35dX (N57D30B)",
                "2.0 20iX (N20B20A)",
                "2.0 28iX (N20B20A)",
                "3.0 35iX (N55B30A)"
            ]
        },
        "X5": {
            "1 поколение, вкл. рестайлинг (E53) 1999-2006": [
                "3.0 (M54B30)",
                "4.4 (M62B44)",
                "4.4i (N62B44)",
                "4.6 is HP (M62B46)",
                "4.8 is (N62B48)",
                "3.0 TDS (M57D30)",
                "3.0d (M57D30)"
            ],
            "2 поколение, вкл. рестайлинг (E70) 2006-2013": [
                "3.0si (N52B30A/N52B30AF/N52B30BF)",
                "4.8i (N62B48B)",
                "4.4 M (S63B44A)",
                "3.0 35iX (N55B30A)",
                "4.4 50iX (N63B44A)",
                "3.0 M50d (N57D30C)",
                "3.0d (M57D30)",
                "3.0 30dX (N57D30A)",
                "3.0 40dX (N57D30B)"
            ],
            "3 поколение (F15/85) 2013-2018": [
                "4.4 M (S63B44B)",
                "3.0 35i (N55B30A)",
                "2.0 28i (N20B20A)",
                "4.4 50i (N63B44B)",
                "3.0 M50d (N57D30C)",
                "2.0 25d (N47D20D)",
                "2.0 25d (B47D20B)",
                "3.0 30dX (N57D30A)",
                "3.0 40d (N57D30B)"
            ]
        },
        "X6": {
            "1 поколение, вкл. рестайлинг (E71/E72) 2008-2014": [
                "4.4 M50 (S63B44A)",
                "3.0 35iX (N55B30A)",
                "3.0 35iX (N54B30A)",
                "4.4 50iX (N63B44A)",
                "3.0 M50d (N57D30C)",
                "3.0 30dX (M57D30)",
                "3.0 30dX (N57D30A)",
                "3.0 35dX (M57D30N2)",
                "3.0 40dX (N57D30B)"
            ],
            "2 поколение (F16/86) 2014-2020": [
                "4.4 M (S63B44B)",
                "3.0 35i (N55B30A)",
                "2.0 28i (N20B20A)",
                "4.4 50i (N63B44B)",
                "3.0 M50d (N57D30C)",
                "3.0 30d (N57D30A)",
                "3.0 40d (N57D30B)"
            ]
        }
    },
    "BYD": {
        "F3": {
            "1 поколение (2005-2014)": [
                "1.6 (4G18)",
                "1.5 (4G15S)",
                "1.5 (473QB)"
            ]
        },
        "Flyer": {
            "1 поколение (2005-2008)": [
                "0.8 (hh368qa1)"
            ]
        }
    },
    "Cadillac": {
        "ATS": {
            "1 поколение, вкл.рестайлинг (2012-2016)": [
                "2.0 (LTG)"
            ]
        },
        "BLS": {
            "1 поколение (2006-2009)": [
                "2.0 T (LK9/B207R)",
                "2.0 T (B207L/Z20NET)",
                "2.8 V6 Turbo (Z28NET)"
            ]
        },
        "CTS": {
            "1 поколение (2002-2007)": [
                "2.6 (LY9)",
                "2.8 (LP1)",
                "3.2 (LA3)",
                "3.6 (LY7)",
                "5.7 V8 (LS6)",
                "6.0 V8 (LS2)"
            ],
            "2 поколение (2007-2015)": [
                "2.8 (LP1)",
                "3.0 (LF1)",
                "3.6 (LLT)",
                "3.6 (LY7)",
                "3.6 (LFX)",
                "6.2 (LSA)"
            ],
            "3 поколение (2013-2019)": [
                "2.0 Turbo (LTG)"
            ]
        },
        "Escalade": {
            "2 поколение (GMT800) 2000-2006": [
                "5.3 (LM7)",
                "6.0 (LQ9)"
            ],
            "3 поколение (GMT900) 2006-2015": [
                "6.0 HYBRID (LZ1)",
                "6.2 (L9H/L92/L94)"
            ],
            "4 поколение (GMT K2) 2013-2021": [
                "6.2 (L86)"
            ]
        },
        "SRX": {
            "1 поколение (2003-2009)": [
                "3.6 (LY7)",
                "4.6 (LH2)"
            ],
            "2 поколение, вкл.рестайлинг (2009-2017)": [
                "2.8 (LAU)",
                "3.0 (LF1)",
                "3.6 (LFX)"
            ]
        }
    },
    "Chery": {
        "Amulet": {
            "1 поколение (2003 – 2010)": [
                "1.6 (SQR480)"
            ]
        },
        "Arrizo": {
            "1 поколение (Arrizo 7) 2014-2016": [
                "1.6 (SQRE4G16)"
            ]
        },
        "Bonus": {
            "1 поколение (A13) 2011-2016": [
                "1.5 (SQR477F)"
            ],
            "1 поколение (Bonus 3/A 19) 2014-2016": [
                "1.5 (SQRD4G15)"
            ]
        },
        "CrossEastar B14": {
            "1 поколение (2008-2013)": [
                "2.0 (SQR484F)"
            ]
        },
        "Fora": {
            "1 поколение (A21) 2006-2010": [
                "1.6 (SQR481F)"
            ]
        },
        "indiS S18D": {
            "1 поколение (2011-2016)": [
                "1.3 (SQR473)"
            ]
        },
        "Kimo A1": {
            "1 поколение (2008-2015)": [
                "1.3 (SQR473F)"
            ]
        },
        "M11 (A3)": {
            "1 поколение (2010-2016)": [
                "1.6 (SQR481F)",
                "1.6 (SQRE4G16)"
            ]
        },
        "QQ6 (S21)": {
            "1 поколение (S21) 2006-2011": [
                "1.3 (SQR473F)",
                "1.1 (SQR472)"
            ]
        },
        "Sweet QQ": {
            "1 поколение (S11) 2005-2013": [
                "1.1 (SQR472)",
                "0.8 (SQR372)"
            ]
        },
        "Tiggo 2": {
            "1 поколение (2017-2020)": [
                "1.8 (SQR481FC)",
                "2.0 (SQR484F)"
            ]
        },
        "Tiggo 3": {
            "1 поколение (2014-2020)": [
                "1.6 (SQRE4G16)"
            ]
        },
        "Tiggo 4": {
            "1 поколение, вкл.рестайлинг (2017 - Н.В.)": [
                "2.0 (SQRD4G20)",
                "1.5 (SQRE4T15B)",
                "1.5 (SQRE4G15B)"
            ]
        },
        "Tiggo 4 Pro": {
            "1 поколение (2021 - Н.В.)": [
                "1.5 (SQRE4T15C)",
                "1.5 (SQRE4G15C)"
            ]
        },
        "Tiggo 5": {
            "1 поколение, вкл.рестайлинг (T21) 2014-2020": [
                "2.0 (SQR484F)"
            ]
        },
        "Tiggo 7": {
            "1 поколение (T15) 2016-2020": [
                "1.5 (SQRE4T15)",
                "2.0 (SQRD4G20)"
            ]
        },
        "Tiggo 7 Pro": {
            "1 поколение (T1E) 2019 - Н.В.": [
                "1.5 (SQRE4T15C)"
            ]
        },
        "Tiggo 7 Pro Max": {
            "1 поколение (T1E) 2022 - Н.В.": [
                "1.5 (SQRE4T15C)"
            ]
        },
        "Tiggo 8": {
            "1 поколение, вкл.рестайлинг (T18) 2019 - Н.В.": [
                "1.5 (SQRE4T15C)",
                "2.0 (SQRD4T20)"
            ]
        },
        "Tiggo 8 Pro": {
            "1 поколение (2021 - Н.В.)": [
                "1.6 (SQRF4J16)",
                "2.0 (SQRD4T20)"
            ]
        },
        "Tiggo 8 Pro Max": {
            "1 поколение (2021 - Н.В.)": [
                "2.0 (SQRF4J20)"
            ]
        },
        "Tiggo FL": {
            "1 поколение (2011-2016)": [
                "1.6 (SQRE4G16)",
                "2.0 (SQR484F)"
            ]
        },
        "Tiggo T11": {
            "1 поколение, вкл.рестайлинг (2005-2013)": [
                "1.8 (SQR481FC)",
                "2.0 (SQR484F)",
                "2.0 (4G63S4M)",
                "2.4 (4G64S4M)"
            ]
        },
        "Very A13": {
            "1 поколение (2011-2016)": [
                "1.5 (SQR477F)"
            ]
        }
    },
    "Chevrolet": {
        "Aveo": {
            "1 поколение (T200) 2002–2008": [
                "1.2 (B12S1/F12S3/LY4)",
                "1.4 16V (F14D3)",
                "1.5 (F15S3)"
            ],
            "1 поколение, рестайлинг (T250) 2005–2011": [
                "1.2 (B12D1/LMU)",
                "1.2 (B12S1/F12S3/LY4)",
                "1.4 16V (F14D3)",
                "1.4 16V (F14D4)",
                "1.5 (F15S3)",
                "1.6 (A16DMS/LXV)"
            ],
            "2 поколение (T300) 2011–2015": [
                "1.2 16V (A12XER)",
                "1.4 (A14XER)",
                "1.6 (F16D4)"
            ]
        },
        "Captiva": {
            "1 поколение, вкл.рестайлинги (C100/140) 2006-2013": [
                "2.0 CDTI (Z20S)",
                "2.2 CDTi (A22DMH/Z22D1)",
                "2.2 CDTi (Z22D1)",
                "2.4 (Z24SED/LD9)",
                "2.4 (A24XE)",
                "3.0 (A30XH)",
                "3.2 V6 (Z32SE)"
            ]
        },
        "Cobalt": {
            "2 поколение (Т250) 2013 - Н.В.": [
                "1.5 (B15D2/LC2)"
            ]
        },
        "Cruze": {
            "1 поколение, вкл.рестайлинги (J300/305/308) 2008-2015": [
                "1.4 (A14NET/LUJ/LUV)",
                "1.6 (F16D4/LDE)",
                "1.6 (F16D3/LXT/LXV)",
                "1.8 (F18D4/Z18XER)",
                "2.0 CDTI (Z20DMH/Z20S1)"
            ]
        },
        "Epica": {
            "1 поколение, вкл.рестайлинг (V250) 2006-2013": [
                "2.0i 24V (X20D1)",
                "2.0 VDCI Diesel (Z20S)",
                "2.5i 24V (X25D1)"
            ]
        },
        "Evanda": {
            "1 поколение (2004-2006)": [
                "2.0i 16V (X20SED)"
            ]
        },
        "Lacetti": {
            "1 поколение (J200) 2004-2013": [
                "1.4 16V (F14D3)",
                "1.6 (F16D3/LXT/LXV)",
                "1.8 (F18D3/LDA)",
                "1.8 16V (T18SED)"
            ]
        },
        "Lanos": {
            "1 поколение (T100) 2005-2009": [
                "1.5 (A15SMS)",
                "1.6 (A16DMS/LXV)"
            ]
        },
        "Malibu": {
            "8 поколение (V300) 2012-2015": [
                "2.4 (LE9)"
            ]
        },
        "Orlando": {
            "1 поколение (J309) 2009-2015": [
                "1.8 (F18D4)",
                "2.0 D (Z20D1)",
                "1.4 (LUJ)"
            ]
        }
    },
    "Chrysler": {
        "PT Cruiser": {
            "1 поколение (2000 – 2010)": [
                "1.6 (EJD)",
                "2.0 16V (ECC)",
                "2.2 CRD (EDJ)",
                "2.4 16V (EDZ)",
                "2.4 GT Turbo (EDV)"
            ]
        },
        "Sebring": {
            "2 поколение, вкл. рестайлинг (JR) 2000-2006": [
                "2.4 16V (EDZ)",
                "2.7 V6 (EER)"
            ]
        },
        "Voyager": {
            "4 поколение (RG) 2000-2004": [
                "2.4 16V (EDZ)",
                "2.5 CRD Turbodiesel (ENC)",
                "2.8 CRD Turbodiesel (ENR)",
                "3.3 V6 (EGM)"
            ]
        }
    },
    "Citroen": {
        "C-Crosser": {
            "1 поколение (EP) 2007-2012": [
                "2.0 16V (4B11)",
                "2.2 HDi 155 (DW12MTED4)",
                "2.4 16V (4B12-MMC)"
            ]
        },
        "C-Elysee": {
            "1 поколение (2012 - 2017)": [
                "1.2 VTi 72 (EB2)",
                "1.6 VTi 115 (EC5)",
                "1.6 HDi 92 (DV6DTED)"
            ]
        },
        "C1": {
            "1 поколение, вкл.рестайлинг (2008-2015)": [
                "1.0 (1KR-FE)",
                "1.4 HDi (DV4TD)"
            ]
        },
        "C3": {
            "1 поколение, вкл.рестайлинг (HB/FC) 2001-2010": [
                "1.1 (TU1JP)",
                "1.4 16V (ET3J4)",
                "1.4 HDi 90 (DV4TED4)",
                "1.4 (TU3JP)",
                "1.6 16V (TU5JP4)",
                "1.6 HDi 110 (DV6TED4)",
                "1.6 HDI 90 (DV6ATED4)"
            ],
            "2 поколение (A51) 2009-2016": [
                "1.1 (TU1JP)",
                "1.4 (TU3A)",
                "1.4 (EP3)",
                "1.4 HDi 70 (DV4TD)",
                "1.6 VTi 120 (EP6C)",
                "1.6 HDi 110 FAP (DV6CTED)",
                "1.6 HDi 92 (DV6DTED)"
            ]
        },
        "C3 Picasso": {
            "1 поколение, вкл.рестайлинг (SH) 2009-2016": [
                "1.4 (EP3)",
                "1.6 VTi 120 (EP6C)",
                "1.6 HDi 90 FAP (DV6DTED)",
                "1.6 HDI 90 (DV6ATED4)",
                "1.6 HDi 110 FAP (DV6TED4)",
                "1.6 HDi 110 FAP (DV6CTED)"
            ]
        },
        "C4": {
            "1 поколение, вкл.рестайлинг (LC/LA) 2004-2011": [
                "1.4 16V (ET3J4)",
                "1.6 16V (TU5JP4)",
                "1.6 HDI 90 (DV6ATED4)",
                "1.6 HDi 110 (DV6TED4)",
                "1.6 16V THP 150 (EP6DT)",
                "1.6 16V VTi 120 (EP6)",
                "2.0 16V WT (EW10J4S)",
                "2.0 16V (EW10A)",
                "2.0 16V (EW10J4)",
                "2.0 HDI (DW10BTED4)"
            ]
        },
        "C4 Aircross": {
            "1 поколение (2012-2016)": [
                "1.6 HDi 110 (DV6CTED)",
                "2.0i (4B11)"
            ]
        },
        "C4 Picasso": {
            "1 поколение (2007-2014)": [
                "1.6 16V THP 150 (EP6DT)",
                "1.6 HDi 110 (DV6TED4)",
                "1.6 HDi 110 (DV6CTED)",
                "1.6 THP (EP6CDT)",
                "1.6 16V VTi 120 (EP6)",
                "1.8 16V (EW7A)",
                "2.0 HDi 150 (DW10CTED4)",
                "2.0 HDi 135 (DW10BTED4)",
                "2.0 16V (EW10A)"
            ]
        },
        "C5": {
            "1 поколение, вкл.рестайлинг (X40) 2001-2008": [
                "1.6 HDi 110 (DV6TED4)",
                "2.0 HDi 135 (DW10BTED4)",
                "1.8 16V (EW7A/EW7J4)",
                "2.0 16V (EW10A)",
                "2.2 HDi Biturbo FAP (DW12BTED4 PF)",
                "2.2 HDi (DW12TED4)"
            ],
            "2 поколение (RW/RD) 2008-2016": [
                "1.6 THP 155 (EP6DT/EP6CDT)",
                "1.6 HDi FAP (DV6TED4)",
                "1.6 VTi 120 (EP6C)",
                "1.8 16V (EW7A)",
                "2.0 16V (EW10A)",
                "2.0 HDi 150 (DW10CTED4)",
                "2.0 HDi 135 (DW10BTED4)",
                "2.2 HDi FAP (DW12BTED4)",
                "2.7 V6 HDi FAP (DT17ED4)",
                "3.0 V6 (ES9A)"
            ]
        },
        "C6": {
            "1 поколение (TD) 2005-2012": [
                "2.2 HDi Biturbo FAP (DW12BTED4)",
                "2.7 V6 HDi FAP (DT17BTED4)",
                "3.0 V6 HDI FAP (DT20C)",
                "3.0 V6 (ES9A)"
            ]
        },
        "C8": {
            "1 поколение (2002-2008)": [
                "2.0 HDi (DW10ATED4)",
                "2.2 (EW12J4)",
                "2.2 HDi (DW12TED4)"
            ]
        },
        "DS3": {
            "1 поколение, вкл.рестайлинг (2009 - Н.В.)": [
                "1.6 HDi 110 FAP (DV6CTED)"
            ]
        },
        "DS4": {
            "1 поколение, вкл.рестайлинг (2012 - Н.В.)": [
                "1.6 e-HDi/HDi 110(DV6CTED)",
                "1.6 THP 155 (EP6CDT)",
                "1.6 THP 200 (EP6DTX)",
                "1.6 VTi120 (EP6C)",
                "2.0 HDi 160 (DW10CTED4)"
            ]
        },
        "DS5": {
            "1 поколение (2012-2015)": [
                "1.6 e-HDi 110 (DV6C)",
                "1.6 THP 155 (EP6CDT)",
                "2.0 HDi 165 (DW10CTED4)"
            ]
        },
        "Xsara Picasso": {
            "1 поколение, вкл.рестайлинг (N68) 1999-2009": [
                "1.6i (TU5JP)",
                "1.6 16V (TU5JP4)",
                "1.6 HDI 110 (DV6TED4)",
                "1.8i 16V (XU7JP4/EW7J4)",
                "2.0 16V (EW10J4)",
                "2.0 HDI (DW10TD)"
            ]
        },
        "С2": {
            "1 поколение (2003-2009)": [
                "1.1 (TU1JP)",
                "1.4 (TU3JP/TU3A)",
                "1.6 16V (TU5JP4)",
                "1.4 HDi (DV4TD)",
                "1.4 16V (ET3J4)",
                "1.6 HDi (DV6TED4)",
                "1.6 16V (TU5JP4S)"
            ]
        }
    },
    "Daewoo": {
        "Gentra": {
            "2 поколение (KLAS) 2013-2016": [
                "1.5 (B15D2)"
            ]
        },
        "Lanos": {
            "1 поколение, вкл.рестайлинг (T100/150) 1997-2009": [
                "1.5 (A15SMS)"
            ]
        },
        "Leganza": {
            "1 поколение (V100) 1997-2002": [
                "2.0i 16V (C20SED/T20SED)"
            ]
        },
        "Matiz": {
            "1 поколение, вкл.рестайлинг (M150) 2000-2015": [
                "1.0 (B10S1)",
                "0.8 (F8CV)"
            ],
            "3 поколение (M300) 2009-2001": [
                "1.0 (B10D1)"
            ]
        },
        "Nexia": {
            "1 поколение + 1-й рестайлинг (N100) 1994-2008": [
                "1.5 16V DOHC (A15MF)",
                "1.5 (G15MF)",
                "1.6 (F16D3)"
            ],
            "1 поколение, 2-й рестайлинг (N150) 2008-2016": [
                "1.5 (Y15L/A15SMS)",
                "1.5 (F15D3)",
                "1.6 (F16D3)"
            ]
        },
        "Winstorm": {
            "1 поколение (KLAC) 2006-2010": [
                "2.0 D (Z20S)"
            ]
        }
    },
    "DAF": {
        "65CF": {
            "65CF (1998-2000)": [
                "FA 65CF.240 (NS177M E2)",
                "FA/FAV 65CF.180 (NS133M E2)",
                "FA/FAV 65CF.210(NS156M E2)"
            ]
        },
        "95XF": {
            "1 поколение (1997-2002)": [
                "12.6 - F95.380XF (ХE280C) Euro 3",
                "12.6 - F95.430XF (XE315C) Euro 3",
                "12.6 - F95.480XF (XE355C) Euro 3",
                "12.6 - F95.5300XF (XE390C) Euro 3",
                "12.6 - F95.380XF (XF280M) Euro 2",
                "12.6 - F95.430XF (XF315M ) Euro 2",
                "12.6 - F95.480XF (XF355M) Euro 2",
                "14 - F95.530XF Cummins (VF390M) Euro 2"
            ]
        },
        "CF-65": {
            "CF-65 (2001-2013)": [
                "FA65.180 (CE136C)",
                "FA65.220 (CE162C)",
                "FA65.220 (GR165 E4/5)",
                "FA65.250 (GR185 E4/5)",
                "FA65.250 (CE184C E3)",
                "FA65.290 (GR210 E4/5)"
            ]
        },
        "CF75": {
            "1 поколение (2001 --->)": [
                "9.2 - CF75.310 (PE228C) Euro 3",
                "9.2 - CF75.250 (PE183C) Euro 3",
                "9.2 - CF75.360 (PE265C) Euro 3",
                "9.2 - CF75.250 (PR183S) Euro 4/5",
                "9.2 - CF75.310 (PR228S) Euro 4/5",
                "9.2 - CF75.360 (PR265S) Euro 4/5"
            ]
        },
        "CF85": {
            "1 поколение (2001 --->)": [
                "12.6 - CF85.380 (XE280С/E) Euro 3",
                "12.6 - CF85.340 (XE250C/E) Euro 3",
                "12.6 - CF85.430 (XE315C/E) Euro 3",
                "12.6 - CF85.480 (XE355C/E) Euro 3",
                "12.9 - CF85.360 (MX265S) Euro 4/5",
                "12.9 - CF85.410 (MX300S) Euro 4/5",
                "12.9 - CF85.460 (MX340S) Euro 4/5",
                "12.9 - CF85.510 (MX375S) Euro 4/5",
                "12.6 - XF95.430 (XE280С) Euro 3"
            ]
        },
        "LF45": {
            "1 поколение (2001 --->)": [
                "3.9 - FA45.140 (BE99C) Euro 3",
                "3.9 - FA45.150 (BE110C) Euro 3",
                "3.9 - FA45.170 (BE123C) Euro 3",
                "5.9 - FA45.220 (CE162C) Euro 3",
                "5.9 - FA45.190 (CE136C) Euro 3",
                "4.5 - FA45.140 (FR103) Euro 4/5",
                "4.5 - FA45.160, (FR118) Euro 4/5",
                "4.5 - FA45.180, (FR136) Euro 4/5",
                "4.5 - FA45.210 (FR152) Euro 5",
                "6.7 - FA45.220 (FR165) Euro 4/5",
                "6.7 - FA45.250 (GR185) Euro 4/5",
                "6.7 - FA45.300 (GR225) Euro 4/5",
                "4.5 (PX-5) Euro 6"
            ]
        },
        "LF55": {
            "1 поколение (2001 --->)": [
                "3.9 - FA/FAN/FT 55.170 (BE123C) Euro 3",
                "5.9 - FA/FAN/FT 55.180 (CE136C) Euro 3",
                "5.9 - FA/FAN/FT 55.220 (CE162C) Euro 3",
                "5.9 - FA/FAN/FT 55.250 (CE184C) Euro 3",
                "4.5 - FA/FAN/FT 55.160 (FR118) Euro 4",
                "4.5 - FA/FAN/FT 55.180 (FR136) Euro 4/5",
                "4.5 - FA/FAN/FT 55.210 (FR152) Euro 4/5",
                "6.7 - FA/FAN/FT 55.220 (GR165) Euro 4/5",
                "6.7 - FA/FAN/FT 55.250 (GR185) Euro 4/5",
                "6.7 - FA/FAN/FT 55.290 (GR210) Euro 4/5",
                "6.7 - FA/FAN/FT 55.300 (GR225) Euro 5"
            ]
        },
        "LF56": {
            "1 поколение (2014 --->)": [
                "6.7 - FA220/230/250/260/280/290/310/320 (PX-7) Euro 6"
            ]
        },
        "XF105": {
            "1 поколение (2006 --->)": [
                "12.9 - 105.410 (MX300S) Euro 4/5",
                "12.9 - 105.460 (MX340S) Euro 4/5",
                "12.9 - 105.510 (MX375S) Euro 4/5",
                "12.9 - 105.560 (MX410S) Euro 4/5"
            ]
        },
        "XF106": {
            "1 поколение (2013 --->)": [
                "10.8 (MX-11) Euro 6",
                "12.9 (MX-13) Euro 6"
            ]
        },
        "XF95": {
            "1 поколение (2002 --->)": [
                "12.6 - XF95.380 (ХE280C) Euro 3",
                "12.6 - XF95.430 (XE315C) Euro 3",
                "12.6 - XF95.480 (XE355C) Euro 3",
                "12.6 - XF95.530 (XE390C) Euro 3"
            ]
        },
        "СF86": {
            "1 поколение (2013 --->)": [
                "6.7 (PX-7) Euro 6",
                "10.8 (MX-11) Euro 6",
                "12.9 (MX-13) Euro 6"
            ]
        }
    },
    "Datsun": {
        "mi-Do": {
            "1 поколение (2014 - 2021)": [
                "1.6 (VAZ-21127)",
                "1.6 (VAZ-11186)"
            ]
        },
        "on-DO": {
            "1 поколение, вкл.рестайлинг (2014 - 2021)": [
                "1.6 (VAZ-21127)",
                "1.6 (VAZ-11183)",
                "1.6 (VAZ-11186)"
            ]
        }
    },
    "Exeed": {
        "LX": {
            "1 поколение (2017 - Н.В.)": [
                "1.5 (SQRE4T15C)"
            ]
        },
        "TXL": {
            "1 поколение (2020-2021)": [
                "1.6 (F4J16)"
            ],
            "1 поколение, рестайлинг (2021 - Н.В.)": [
                "1.6 (F4J16)",
                "2.0 (F4J20C)"
            ]
        },
        "VX": {
            "1 поколение (2020 - Н.В.)": [
                "2.0 (F4J20C)"
            ]
        }
    },
    "FAW": {
        "Besturn B50": {
            "1 поколение, вкл.рестайлинг (2012-2017)": [
                "1.6 (BWH)"
            ]
        },
        "Oley": {
            "1 поколение (2014-2018)": [
                "1.5 (ET1)"
            ]
        },
        "V2": {
            "1 поколение (2012-2015)": [
                "1.3 (CA4GA1)"
            ]
        },
        "V5": {
            "1 поколение (2012-2015)": [
                "1.5 (CA4GA5)"
            ]
        },
        "Vita": {
            "1 поколение (2007-2010)": [
                "1.3 (8A)",
                "1.5 (5A)"
            ]
        },
        "X40": {
            "1 поколение (D181) 2016-2022": [
                "1.6 (CA4GB16)"
            ]
        },
        "X80": {
            "1 поколение, вкл.рестайлинг (2014-2021)": [
                "2.0 (CA4GD1)",
                "2.3 (CA4GD3)"
            ]
        }
    },
    "Fiat": {
        "Albea": {
            "1 поколение, вкл.рестайлинг (2005-2012)": [
                "1.4 (350 A1.000)"
            ]
        },
        "Doblo/Doblo Cargo": {
            "1 поколение, вкл.рестайлинг (119/223) 2001-2016": [
                "1.4 (350 A1.000)"
            ]
        },
        "Grande Punto": {
            "3 поколение (2005-2011)": [
                "1.4 (350 A1.000)"
            ]
        }
    },
    "Ford": {
        "B-Max": {
            "1 поколение, вкл.рестайлинг (JK) 2012-Н.В.": [
                "1.0 EcoBoost (SFJA/SFJB)",
                "1.5 TDCi (UGJC)"
            ]
        },
        "C-Max": {
            "1 поколение, вкл. рестайлинг (Mk1) 2003-2010": [
                "1.6 (SHDC/HWDA/HWDB/SHDA/SHDB)",
                "1.6 TDCi (GPDA/HHDA/HHDB)",
                "1.6 TDCi (G8DD/G8DA/G8DB)",
                "1.8 16V/1.8 flexifuel (QQDA/QQDB)",
                "1.8 TDCi (KKDA)",
                "2.0 Bi-fuel CNG (AODE/AODA/AODB/SYDA)",
                "2.0 TDCi (G6DG/G6DA/G6DB/G6DD)",
                "2.0 TDCi (IXDA)"
            ],
            "2 поколение (Mk2) 2010-2015": [
                "1.6 (PNDA)",
                "1.6 EcoBoost (JQDA/JQDB)",
                "2.0 TDCi (UFDB)"
            ]
        },
        "EcoSport": {
            "2 поколение, вкл.рестайлинг (2014 - 2019)": [
                "2.0 16V (Duratec-HE)",
                "1.6 16V Ti-VCT (HXJD/IQJB)"
            ]
        },
        "Edge": {
            "1 поколение, рейстайлинг (U387) 2013-2015": [
                "3.5 AWD (Duratec 35)"
            ]
        },
        "Escape": {
            "1 поколение (ZD) 2007-2011": [
                "2.3 4WD (Duratec 23)"
            ]
        },
        "Fiesta": {
            "5 поколение, вкл.рестайлинг (Mk VI) 2001-2008": [
                "1.4 16V (FXJA/FXJB)",
                "1.25 (FUJA/FUJB)",
                "1.25 (M7JA/M7JB)",
                "1.3 S (A9JA/A9JB)",
                "1.3 (BAJA)",
                "1.4 TDCi  (F6JA/F6JB)",
                "1.6 16V (FYJA/FYJB)",
                "1.6 TDCi  (HHJC)",
                "2.0 16V ST (N4JB)"
            ],
            "6 поколение, вкл.рестайлинги (Mk VII) 2008-2019": [
                "1.0 EcoBoost (SFJA/SFJB)",
                "1.25 (SNJA/SNJB/SNJC/SNJD)",
                "1.25 (STJB/STJA)",
                "1.4 (SPJC/SPJA)",
                "1.6 Ti-VCT (HXJB/HXJA)",
                "1.6 TDCi  (HHJC)",
                "1.6 Ti-VCT (IQJA)"
            ]
        },
        "Focus": {
            "1 поколение, вкл.рестайлинги (Focus I) 1998-2005": [
                "1.4 16V (FXDA/FXDB/FXDC/FXDD)",
                "1.6 16V (CDDA)",
                "1.8 16V (EYD Zetec)",
                "1.8 TDCi (F9DA/DB)",
                "1.8 TDCi (FFDA)",
                "1.8 TDDi (C9DA/B/C)",
                "2.0 16V (EDDB/EDDC/EDDD/EDDF)",
                "2.0 RS (HMDA)",
                "2.0 ST170 (ALDA)"
            ],
            "2 поколение, вкл.рестайлинги (Focus II) 2004-2011": [
                "1.4 16V (ASDA/ASDB)",
                "2.0 16V (AODA/AODB)",
                "1.6 (SHDC/HWDA/HWDB/SHDA/SHDB)",
                "1.6 TDCi (G8DD/G8DA/G8DB)",
                "1.6 TDCi (GPDA/HHDA/HHDB)",
                "1.6 16V Ti-VCT (HXDA/HXDB/SIDA)",
                "1.8 16V/1.8 flexifuel (QQDB)",
                "1.8 TDCi (KKDA)",
                "2.0 TDCi (G6DA/G6DB/G6DD)",
                "2.0 TDCi (IXDA)",
                "2.5 RS (JZDA)",
                "2.5 ST (HYDA)"
            ],
            "3 поколение, вкл. рестайлинги (Focus III) 2010-2019": [
                "1.6 Ti-VCT (IQDB)",
                "1.0 EcoBoost (M2DA)",
                "1.0 EcoBoost (M1DA)",
                "1.5 EcoBoost (M8DA/M8DB)",
                "1.6 (PNDA)",
                "1.6 EcoBoost SCTi (JQDA/JQDB)",
                "1.6 EcoBoost SCTi (JTDA/JTDB)",
                "1.6 Ti-VCT (XTDA)",
                "2.0 (XQDA)",
                "2.0 EcoBoost ST (R9DA)",
                "2.0 TDCi (UFDB)",
                "2.0 TDCi (TXDB)"
            ]
        },
        "Fusion": {
            "1 поколение, вкл.рестайлинг (хэтчбек, 2002 - 2012)": [
                "1.25 (FUJA/FUJB)",
                "1.4 16V (FXJA/FXJB)",
                "1.4 TDCi  (F6JA/F6JB)",
                "1.6 16V (FYJA/FYJB)",
                "1.6 TDCi (HHJA/HHJB)"
            ]
        },
        "Galaxy": {
            "1 поколение (WGR) 2000-2006": [
                "1.9 TDI (BTB)",
                "1.9 TDI (AUY)",
                "1.9 TDI (ASZ)",
                "1.9 TDI (1Z/AHU/ANU)",
                "2.0i (NSE/ZVSA)"
            ]
        },
        "Kuga": {
            "1 поколение (2008-2014)": [
                "2.0 TDCi (G6DG, UKDA) - 140/163 л.с.",
                "2.0 TDCi (G6DG, UKDA) - 136 л.с.",
                "2.5 Turbo (HYDB)"
            ],
            "2 поколение, вкл.рестайлинг (2011-2019)": [
                "1.6 EcoBoost SCTi (JTMA)",
                "1.6 EcoBoost SCTi (JQMA/JQMB)",
                "2.0 TDCi (UFMA)",
                "2.5 (Duratec 25)"
            ]
        }
    },
    "Foton": {
        "Auman": {
            "1 поколение (BJ)": [
                "4.0 - 1093/1099 (Phaser 135Ti)",
                "4.0 - 1138 (Phaser 185Ti)"
            ]
        },
        "Aumark": {
            "1 поколение": [
                "2.8 - BJ1039 (ISUZU BJ493ZLQ) Euro 2/3",
                "2.8 - BJ1039 (ISF2.8S)",
                "2.8 - BJ1049C (ISUZU BJ493ZLQ) Euro 2/3",
                "3.8 - BJ1051/1061/1089/1128/1129 (ISF3.8S) Euro 3/4",
                "2.8 - BJ1065 (ISF2.8S) Euro 5"
            ]
        },
        "Ollin": {
            "1 поколение": [
                "2.8 - 1039/1049C (ISUZU BJ493ZLQ) Euro 2/3",
                "4.0 - 1089/1069 (PHASER 135TI) Euro 2/3",
                "4.0 - 1041 (PHASER 110TI) Euro 3"
            ]
        }
    },
    "Geely": {
        "Atlas": {
            "1 поколение (NL-3) 2016-2022": [
                "1.8 (JLE-4G18TD)",
                "2.0 (JLD-4G20)",
                "2.4 (JLD-4G24)"
            ]
        },
        "Atlas Pro": {
            "1 поколение (NL-3) 2019 - Н.В.": [
                "1.5 (JLE-3G15TD)"
            ]
        },
        "Coolray": {
            "1 поколение (2019 - Н.В.)": [
                "1.5 (3G15TD)"
            ]
        },
        "Emgrand 7": {
            "1 поколение, вкл.рестайлинг (2015 - 2020)": [
                "1.5 (JLy-4G15)",
                "1.8 (JLy-4G18)"
            ]
        },
        "Emgrand EC7": {
            "1 поколение, вкл. рестайлинги (2009 - 2020)": [
                "1.5 (JLy-4G15)",
                "1.8 (JLy-4G18)"
            ]
        },
        "Emgrand X7": {
            "1 поколение, вкл. рестайлинги (2013-2021)": [
                "2.4 (JLD-4G24)",
                "2.0 (JLD-4G20)"
            ]
        },
        "GC6": {
            "1 поколение (2014-2017)": [
                "1.5 (MR479QN)"
            ]
        },
        "MK": {
            "1 поколение, вкл. рестайлинг (2009 - 2015)": [
                "1.5 (MR479QA)"
            ]
        },
        "MK Cross": {
            "1 поколение (2011 - 2016)": [
                "1.5 (5A-FE)"
            ]
        },
        "Otaka CK": {
            "1 поколение, вкл.рестайлинг (CK1/CK2) 2005-2012": [
                "1.5 (MR479QA)"
            ]
        },
        "Tugella": {
            "1 поколение (2019 - Н.В.)": [
                "2.0 (JLH-4G20TDB)"
            ]
        },
        "Vision": {
            "1 поколение (2006-2011)": [
                "1.5 (JLy-4G15)",
                "1.8 (JLy-4G18)"
            ]
        }
    },
    "Great Wall": {
        "C10": {
            "1 поколение (2010 - 2013)": [
                "1.5 VVT (GW4G15)",
                "1.3 VVT (GW4G13)"
            ]
        },
        "C20R": {
            "1 поколение": [
                "1.5 (GW4G15)"
            ]
        },
        "Coolbear MPV/CB150 MPV": {
            "1 поколение": [
                "1.5 (GW4G15B)"
            ]
        },
        "Cross/Florid/Florid Cross": {
            "1 поколение (2008-2013)": [
                "1.5 (GW4G15)"
            ]
        },
        "Deer": {
            "G3 (2005-2012)": [
                "2.2 (GA491QE)"
            ]
        },
        "H2": {
            "1 поколение (2014-2021)": [
                "2.4 (4G64)",
                "2.8 (GW2.8TC)"
            ]
        },
        "H3": {
            "1 поколение, вкл. рестайлинг (2010 - 2016)": [
                "2.0 (4G63S4M)"
            ]
        },
        "H5": {
            "1 поколение (2011-2016)": [
                "2.4 (4G69-S4N)"
            ]
        },
        "Hover H6": {
            "1 поколение (2012-2016)": [
                "1.5 (GW4G15B)",
                "2.0 (4G63S4M)",
                "2.0  TCI/TD (GW4D20)",
                "2.4 (4G69-S4M)"
            ]
        },
        "Hover M2": {
            "1 поколение (2013-2014)": [
                "1.5 (GW4G15)"
            ]
        },
        "Hover M4": {
            "1 поколение (2005 - Н.В.)": [
                "1.5 (GW4G15)"
            ]
        },
        "Peri": {
            "1 поколение (2008-2010)": [
                "1.3 (GW413EF)"
            ]
        },
        "Poer": {
            "1 поколение (2021 - Н.В.)": [
                "2.0 (GW4D20M)"
            ]
        },
        "Safe": {
            "1 поколение (2001-2010)": [
                "2.2 (GA491QE)"
            ]
        },
        "Sailor": {
            "1 поколение (2003-2010)": [
                "2.2 (GA491QE)"
            ]
        },
        "Voleex C30": {
            "1 поколение (2010 - 2014)": [
                "1.5 (GW4G15)"
            ]
        },
        "Wingle/Steed": {
            "1 поколение, Wingle 3 (2006-2011)": [
                "2.2 (GW491QE)"
            ],
            "2 поколение, Wingle 5 (2011-2016)": [
                "2.2 (Q491ME)"
            ]
        }
    },
    "HAVAL": {
        "Dargo": {
            "1 поколение": [
                "2.0T (GW4N20)"
            ]
        },
        "F7/F7x": {
            "1 поколение (2019 - Н.В.)": [
                "1.5 GDIT (GW4B15/GW4B15A)",
                "2.0 (GW4C20)"
            ]
        },
        "H2": {
            "1 поколение (2014-2021)": [
                "1.5 (GW4G15B)"
            ]
        },
        "H6": {
            "2 поколение (2014-2020)": [
                "1.5 (GW4G15B)",
                "2.0 TCI (GW4D20D)"
            ]
        },
        "H9": {
            "1 поколение (вкл.рестайлинг) 2014 - Н.В.": [
                "2.0 (GW4C20)",
                "2.0 (GW4D20T)"
            ]
        },
        "Jolion": {
            "1 поколение (2021 - Н.В.)": [
                "1.5T (GW4G15K)",
                "1.5T (GW4B15)"
            ]
        }
    },
    "HINO": {
        "HINO 300": {
            "1 поколение - Euro 3/4/5": [
                "4.0 (N04C) Euro 3",
                "4.0 (N04C) Euro 5",
                "4.0 (N04C) Euro 4"
            ]
        },
        "HINO 500": {
            "1 поколение (GD/GH/FM)": [
                "7.7 (J08E-UR) Euro 4"
            ]
        }
    },
    "Honda": {
        "Accord": {
            "7 поколение, вкл.рестайлинг (CL/CM/CN) 2002-2008": [
                "2.4 (K24A3)",
                "2.2 i-CTDi (N22A1)",
                "2.0 (K20A6)"
            ],
            "8 поколение, вкл.рестайлинг (CP/CU/CW) 2008-2013": [
                "2.0 (R20A3)",
                "2.4 (K24Z3)",
                "2.2 i-DTEC (N22B1)"
            ],
            "9 поколение (CR) 2012-2015": [
                "2.4 (K24W2)",
                "3.5 (J35Y1)"
            ]
        },
        "C-RV": {
            "2 поколение, вкл.рестайлинг (RD) 2001-2006": [
                "2.0 16V (K20A4)",
                "2.2 CTDi (N22A2)"
            ],
            "3 поколение, вкл.рестайлинг (RE) 2007-2012": [
                "2.0 VTEC (R20A2)",
                "2.2 CTDi (N22A2)",
                "2.4 (K24Z4)"
            ],
            "4 поколение, вкл.рестайлинг (RE/RM) 2012-2018": [
                "2.0 VTEC (R20A9)",
                "2.4 i-VTEC (K24Z7/K24Z9)"
            ]
        },
        "Civic": {
            "7 поколение, вкл.рестайлинг (EU/EP/EV/ES/EM2) 2000-2006": [
                "1.4i S (D14Z5/D14Z6)",
                "1.6i (D16V1)",
                "1.7 (4EE-2)",
                "2.0i Sport (K20A3)",
                "1.7i (D17A1)",
                "1.7i ES VTEC (D17A2)"
            ],
            "8 поколение, вкл.рестайлинг (FD/FA/FN/FK) 2005-2011": [
                "1.8i VTEC (R18A2)",
                "1.4i DSi (L13A7)",
                "2.0i VTEC Type R (K20Z4)",
                "2.2 CTDi (N22A2)",
                "1.3i DSi Hybrid (LDA2)"
            ],
            "9 поколение (FK/FB) 2012-2015": [
                "1.8 i-VTEC (R18Z4)"
            ]
        },
        "Crosstour": {
            "1 поколение, вкл.рестайлинг (TF) 2009-2016": [
                "2.4 (K24Y2/K24W2)",
                "3.5 (J35Z2)",
                "3.5 4WD (J35Y1)"
            ]
        },
        "Element": {
            "1 поколение, вкл.рестайлинги (YH) 2002-2011": [
                "2.4 (K24A8)",
                "2.4 (K24A4)"
            ]
        },
        "FR-V": {
            "1 поколение (BE) 2005-2009": [
                "1.7 (D17A2)",
                "1.8 16V (R18A1)",
                "2.0 (K20A9)",
                "2.2 i-CTDi (N22A1)"
            ]
        },
        "HR-V": {
            "1 поколение, вкл.рестайлинг (GH) 1998-2005": [
                "1.6 16V (D16W1)",
                "1.6 S 16V (D16W5)"
            ]
        },
        "Insight": {
            "2 поколение, вкл.рестайлинг (ZE2/3) 2009-2014": [
                "1.3 i DSI Hybrid (LDA3)"
            ]
        },
        "Jazz": {
            "2 поколение, вкл.рестайлинг (GD1/GD5/GE2/GE3) 2002-2008": [
                "1.2 i-DSi (L12A1)",
                "1.4 i-DSi (L13A1/6)"
            ],
            "3 поколение, вкл.рестайлинг (GE6/GG2/GG3/GG6/GP1) 2008-2013": [
                "1.2 (L12B1)",
                "1.4 VTEC (L13Z1)"
            ]
        },
        "Legend": {
            "4 поколение, вкл.рестайлинг (KB1/2) 2004-2011": [
                "3.5i V6 (J35A8)",
                "3.7i V6 (J37A)"
            ]
        },
        "Pilot": {
            "2 поколение, вкл.рестайлинг (YF3/4) 2008-2015": [
                "3.5 V6 (J35Z4)"
            ]
        },
        "Ridgeline": {
            "1 поколение, вкл.рестайлинги (YK1) 2005-2013": [
                "3.5 4WD (J35A9)"
            ]
        },
        "Stepwagon": {
            "4 поколение, вкл.рестайлинг (RK) 2009-2015": [
                "2.0 VTEC (R20A9)"
            ]
        },
        "Stream": {
            "1 поколение, вкл.рестайлинг (RN1-5) 2000 - 2006": [
                "1.7 16V (D17A2)",
                "2.0 ES 16V (K20A1)"
            ]
        }
    },
    "Hyundai": {
        "Accent": {
            "2 поколение, вкл. рестайлинг (LC) 1999-2012": [
                "1.3 (G4EA)",
                "1.5i (G4EB)",
                "1.5 Тагаз (G4EC-G)",
                "1.5 CRDi (D3-EA)",
                "1.6 16V (G4ED-G)"
            ],
            "3 поколение (MC) 2006-2011": [
                "1.4 GL (G4EE)",
                "1.5 CRDi (D4FA)",
                "1.6 (G4ED)"
            ]
        },
        "Coupe": {
            "2 поколение, вкл.рестайлинг (GK) 2002-2006": [
                "1.6 16V (G4ED-G)",
                "2.0i (G4GC-G)",
                "2.7 V6 (G6BA-G)"
            ]
        },
        "Creta": {
            "1 поколение, вкл.рестайлинг (GS) 2015-2021": [
                "1.6 MPI (G4FG)",
                "2.0 (G4NA)"
            ]
        },
        "Elantra": {
            "3 поколение, вкл.рестайлинг (XD) 2003-2009": [
                "1.6 (G4ED-G)",
                "2.0 (G4GC)",
                "2.0 CRDi (D4EA)",
                "1.6 Тагаз (G4ED-G)"
            ],
            "4 поколение (HD) 2006-2011": [
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)",
                "2.0 (G4GC)"
            ],
            "5 поколение, вкл.рестайлинг (MD) 2010-2016": [
                "1.6 Gamma MPi (G4FG)",
                "1.8 Gamma MPi (G4NB-B)"
            ]
        },
        "Equus": {
            "2 поколение, вкл.рестайлинг (2010-2017)": [
                "3.8 V6 (G6DA)",
                "4.6 V8 (G8BA)"
            ]
        },
        "Genesis": {
            "1 поколение, вкл.рестайлинг (BK/BH) 2008-2014": [
                "2.0 T (G4KF)",
                "3.8 V6 (G6DA)"
            ]
        },
        "Getz": {
            "1 поколение, вкл.рестайлинг (TB) 2002 - 2011": [
                "1.1 (G4HD/G4HG)",
                "1.3 (G4EA)",
                "1.4 (G4EE)",
                "1.5 CRDi (D3-EA)",
                "1.5 CRDi (D4FA)",
                "1.6 (G4ED-G)"
            ]
        },
        "Grand Santa Fe": {
            "1 поколение, вкл.рестайлинг (DM) 2013-2018": [
                "2.2 CRDi (D4HB)",
                "3.3 (G6DF)"
            ]
        },
        "Grandeur": {
            "4 поколение (TG) 2005-2009": [
                "2.2 CRDi (D4EB)",
                "2.7 (G6BA/G6EA)",
                "3.3 V6 (G6DB)"
            ],
            "5 поколение (HG) 2012-2015": [
                "2.4 (G4KE)",
                "3.0 V6 (G6DG Lamda II)"
            ]
        },
        "i10": {
            "1 поколение, вкл.рестайлинг (PA) 2007-2013": [
                "1.1 (G4HG)",
                "1.1 CRDi (D3FA)",
                "1.2 (G4LA)"
            ]
        },
        "i20": {
            "1 поколение (PB) 2008-2012": [
                "1.2 (G4LA)",
                "1.4 (G4FA)",
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)"
            ]
        },
        "i30": {
            "1 поколение, вкл.рестайлинг (FD) 2007-2011": [
                "1.4 (G4FA)",
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)",
                "2.0 16V (G4GC-G/G4GC)",
                "2.0 CRDi (D4EA)"
            ],
            "2 поколение, вкл.рестайлинг (GD) 2011-2017": [
                "1.4 (G4FA)",
                "1.6 CRDi (D4FB-5P)",
                "1.6 (G4FG)"
            ]
        },
        "i40": {
            "1 поколение, вкл.рестайлинг (VF) 2011-2017": [
                "1.6 GDI (G4FD)",
                "1.7 CRDi (D4FD)",
                "2.0 NU MPi (G4NA)",
                "2.0 GDI (G4NC)"
            ]
        },
        "ix35": {
            "1 поколение, вкл.рестайлинг (LM) 2009-2015": [
                "2.0 (G4NA)",
                "2.0 4WD (G4NA)",
                "2.0 CRDi (D4HA)",
                "2.4 (G4KE)"
            ]
        },
        "ix55": {
            "1 поколение (EN) 2006-2013": [
                "3.0 V6 CRDi (D6EA)",
                "3.8 LAMBDA MPI (G6DA)"
            ]
        },
        "Matrix": {
            "1 поколение, вкл.рестайлинги (FC) 2001-2010": [
                "1.5 CRDi (D3-EA)",
                "1.5 CRDi VGT (D4FA)",
                "1.6 (G4ED-G)",
                "1.8 (G4GB-G)"
            ]
        },
        "Santa Fe": {
            "1 поколение, вкл.рестайлинг (SM) 2000-2006 + Classic (Тагаз)": [
                "2.0 16V (G4BP/G4JP-G)",
                "2.0 CRDi (D4EA)",
                "2.4 16V (G4JS-G)",
                "2.7 V6 (G6BA-G)"
            ],
            "2 поколение, вкл.рестайлинг (CM) 2009-2012": [
                "2.2 CRDi (D4EB)",
                "2.2 CRDi (D4HB)",
                "2.4 (G4KE)",
                "2.7 V6 (G6EA)"
            ],
            "3 поколение, вкл.рестайлинг (DM) 2012-2019": [
                "2.0 CRDi (D4HA)",
                "2.2 CRDi (D4HB)",
                "2.4 (G4KE)"
            ]
        },
        "Solaris": {
            "1 поколение, вкл.рестайлинг (RB) 2010-2017": [
                "1.4 (G4FA)",
                "1.6 (G4FC)"
            ],
            "2 поколение (2017 - Н.В.)": [
                "1.4 (G4LC)",
                "1.6 (G4FC)"
            ]
        },
        "Sonata": {
            "4 поколение, вкл.рестайлинг (EF) 1998-2013": [
                "2.0 (G4GC)",
                "2.0 16V (G4JP-EG)",
                "2.7 V6 (G6BA-G)"
            ],
            "5 поколение (NF) 2008-2010": [
                "2.0 CRDi (D4EA)",
                "2.0i VVTi (G4KA)",
                "2.4i 16V (G4KC)",
                "3.3 V6 (G6DB)"
            ],
            "6 поколение (YF) 2010-2013": [
                "2.0 Theta ll MPi (G4KD)",
                "2.4 Theta ll MPi (G4KC)"
            ]
        },
        "Terracan": {
            "1 поколение, вкл.рестайлинг (HP) 2001-2007": [
                "2.5 TD (D4BH)",
                "2.9 CRDi (J3)",
                "3.5 i V6 (G6CU)"
            ]
        },
        "Trajet": {
            "1 поколение, вкл.рестайлинг (FO) 1999-2008": [
                "2.0 (G4GC)",
                "2.0 16V (G4JP-G)",
                "2.0 CRDi (D4EA)",
                "2.7 V6 (G6BA-G)"
            ]
        },
        "Tucson": {
            "1 поколение (JM) 2004-2009": [
                "2.0 LPG (G4GC)",
                "2.0 CRDi (D4EA-V)",
                "2.0 CRDi (D4EA)",
                "2.7 V6 (G6BA-G)"
            ],
            "3 поколение, вкл.рестайлинг (TL) 2015-2021": [
                "1.6 T-GDI (G4FJ)",
                "1.7 CRDi (D4FD)",
                "2.0 (G4NA)",
                "2.0 CRDi (D4HA)"
            ]
        },
        "Veloster": {
            "1 поколение (FS) 2012-2016": [
                "1.6 GDI (G4FD)",
                "1.6 T-GDI (G4FJ)"
            ]
        }
    },
    "Hyundai Truck": {
        "HD-120": {
            "1 поколение": [
                "5.9 TDI (D6GA) Euro 4",
                "6.6 D (D6DA19)",
                "6.6 D (D6DA22)",
                "7.5 D (D6BR)"
            ]
        },
        "HD-170": {
            "1 поколение": [
                "5.9 TDI (D6GA) Euro 4"
            ]
        },
        "HD-250": {
            "1 поколение": [
                "11.1D (D6AC)",
                "12.3D (D6CB38)"
            ]
        },
        "HD-65": {
            "1 поколение": [
                "3.3 TD (D4AL)",
                "3.6 D (D4AF)",
                "3.9 D (D4DC)",
                "3.9 D (D4DB)",
                "3.9 D (D4DD)",
                "3.9 TDI (D4GA)"
            ]
        },
        "HD-72": {
            "1 поколение": [
                "3.3 TD (D4AL)",
                "3.9 D (D4DB)",
                "3.9 D (D4DD)"
            ]
        },
        "HD-78": {
            "1 поколение": [
                "3.9 D (D4DA/D4DB/D4DC/D4DD)"
            ]
        },
        "Porter": {
            "1 поколение": [
                "2.5 CRDi Turbodiesel (D4BH/D4BF) - Porter 1 (Тагаз)",
                "2.5 TDI (D4CB) - Porter 2/Kia BONGO 3"
            ]
        }
    },
    "IVECO": {
        "Daily 3": {
            "3 поколение (1999-2006)": [
                "2.3 - 29/35-10 (F1AE0481A/B-HPI TURBO)",
                "2.3 - 29/35-12 (F1AE0481A/B-HPI TURBO)",
                "2.3 - 29/35/40-14 (F1AE0481M-HPT TURBO)",
                "2.8 - 29/35/40-9 (8140.43-TURBO)",
                "2.8 - 29/35/40/45/49/50-11 (8140.43-TURBO)",
                "2.8 - 29/35/40/45/49/50/59-13 (8140.43-TURBO)",
                "2.8 - 35/40/50/60/65-15 (8140.43-TURBO)",
                "3.0 - 35/40/50/65-14 (F1СE0481A/Е-HPI TURBO)",
                "3.0 - 35/40/50/65-17 (F1СE0481B-HPT TURBO)"
            ]
        },
        "Daily 4": {
            "4 поколение (2006-2014)": [
                "2.3 - 29L10 (F1AE0481FA-HPI TURBO)",
                "2.3 - 35S10 (F1AE0481FA-HPI TURBO)",
                "2.3 - 35/40C10 (F1AE0481FA-HPI TURBO)",
                "2.3 - 35S11 (F1AE0481GA-HPI TURBO)",
                "2.3 - 35/40С11 (F1AE0481GA-HPI TURBO)",
                "2.3 - 29L12 (F1AE0481UA-HPI TURBO)",
                "2.3 - 35S12 (F1AE0481UA-HPI TURBO)",
                "2.3 - 35/40C12 (F1AE0481UA-HPI TURBO)",
                "2.3 - 35S13 (F1AE0481VA-HPT TURBO)",
                "2.3 - 35/40C13 (F1AE0481VA-HPT TURBO)",
                "2.3 - 29L14 (F1AE0481HA-HPT TURBO)",
                "2.3 - 35S14 (F1AE0481HA-HPT TURBO)",
                "3.0 - 35S14 (F1CE3481LC-HPI TURBO)",
                "3.0 - 35/40/45/50/60/65/70C14 (F1CE3481LC-HPI TURBO)",
                "3.0 - 35/40/45/50/60/65/70C15 (F1CE0481FA-HPI TURBO)",
                "3.0 - 35/55S17 (F1CE3481CC-HPT TURBO)",
                "3.0 - 35/40/45/50/60/65/70C17 (F1CE3481CC-HPT TURBO)",
                "3.0 - 35S18 (F1CE0481HA-HPT TURBO)",
                "3.0 - 35/40/45/50/60/65/70C18 (F1CE0481HA-HPT TURBO)"
            ]
        },
        "EuroCargo 1": {
            "1 поколение (1991-2003)": [
                "3.9 - 60/65Е10 (8040.25)",
                "3.9 - 60/65/75Е12 (8040.25)",
                "3.9 - 60/65/75/80Е14 (8040.45)",
                "5.9 - 75/80/95/100/120/130/150Е15 (8060.25)",
                "5.9 - 80/95/100/120/130/135/150/170/180Е18 (8060.25)",
                "5.9 - 80/95/100/180Е21 (8060.45)",
                "5.9 - 120/130/150/170/180/260/280Е23/23Т (8060.45)",
                "5.9 - 135Е23 (8060.45)",
                "7.7 - 150/180/260/320Е27/27Т (8360.45/46)",
                "3.9 - 60/65/75Е13 (TECTOR 3.9)",
                "3.9 - 60/65/75/80Е15 (TECTOR 3.9)",
                "3.9 - 75/80/90/100/120Е17 (TECTOR 3.9)",
                "5.9 - 75/80/90/100/120/130/140/150Е18 (TECTOR 5.9)",
                "5.9 - 80/90/100/120/180Е21 (TECTOR 5.9)",
                "5.9 - 120/130/140/150/180Е24 (TECTOR 5.9)",
                "5.9 - 120/130/150/180/320Е28 (TECTOR 5.9)"
            ]
        },
        "EuroCargo 2": {
            "2 поколение (2003-2008)": [
                "3.9 - 60/65/75Е13 (TECTOR 4) Euro 2/3",
                "3.9 - 60/65/75/80Е15 (TECTOR 4) Euro 2/3",
                "3.9 - 75/80/90/100/110Е17 (TECTOR 4) Euro 2/3",
                "5.9 - 75/80/90/100/120/130/140Е18 (TECTOR 6) Euro 2/3",
                "5.9 - 80/90/100/110/120/130/140/150/160/180Е21 (TECTOR 6) Euro 2/3",
                "5.9 - 120/130/140/150/160/180Е24 (TECTOR 6) Euro 2/3",
                "5.9 - 120/130/150/180/260Е28 (TECTOR 6) Euro 2/3",
                "3.9 - 60/65/75Е14 (TECTOR 4) Euro 4/5",
                "3.9 - 60/65/75Е16 (TECTOR 4) Euro 4/5",
                "3.9 - 80/90Е18 (TECTOR 4) Euro 4/5",
                "3.9 - 100/110/140/150/160Е18 (TECTOR 4) Euro 4/5",
                "5.9 - 75/80/100/120Е19 (TECTOR 6) Euro 4/5",
                "5.9 - 80/90/100/110/120/130/140/150/160/180Е22 (TECTOR 6) Euro 4/5",
                "5.9 - 90/110/120/130/140/150/160/180/190Е25 (TECTOR 6) Euro 4/5",
                "5.9 - 130/140/180/190/260Е28 (TECTOR 6) Euro 4/5",
                "5.9 - 120/130/150/160/180/190Е30 (TECTOR 6) Euro 4/5"
            ]
        },
        "EuroCargo 3": {
            "3 поколение (2008-2015)": [
                "3.9 - ML60/65/75Е14 (TECTOR 4 - F4A)",
                "3.9 - ML60/65/75Е16 (TECTOR 4 - F4A)",
                "3.9 - ML75/80/90/100/120/140/160Е18  (TECTOR 4 - F4A)",
                "5.9 - ML80/90/100/120/140/150/160Е22 (TECTOR 6 - F4A)",
                "5.9 - ML120/140/150/160/180/190Е25 (TECTOR 6 - F4A)",
                "5.9 - ML120/140/150/160/180/190Е28  (TECTOR 6 - F4A)",
                "5.9 - ML150/160/180/190Е30 (TECTOR 6 - F4A)",
                "4.5 - ML75Е16 (TECTOR 5 - F4AFE411) Euro 6",
                "4.5 - ML75/80/90/100/110/120/140/150/160Е19 (TECTOR 5 - F4AFE411) Euro 6",
                "4.5 - ML75/80/90/100/110/120/140/150/160Е21 (TECTOR 5 - F4AFE411) Euro 6",
                "6.7 - ML80/90/100/110/120/140/150/160/180Е22 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - ML120/140/150/160/180Е25 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - ML120/140/150/160/180Е28 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - ML150/160/180Е32 (TECTOR 7 - F4AFE611) Euro 6"
            ]
        },
        "EuroCargo 4": {
            "4 поколение (2015 --->)": [
                "4.5 - 60/65/75/80-160 (TECTOR 5 - F4AFE411) Euro 6",
                "4.5 - 75/80/100/110/120/140-190 (TECTOR 5 - F4AFE411) Euro 6",
                "4.5 - 75/80/100/110/120/140/150/160-210(TECTOR 5 - F4AFE411) Euro 6",
                "6.7 - 80/100/110/120/140/150/160-220 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - 110/120/140/150/160/180-250 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - 120/140/150/160/180/190-280 (TECTOR 7 - F4AFE611) Euro 6",
                "6.7 - 150/160/180/190-320 (TECTOR 7 - F4AFE611) Euro 6"
            ]
        },
        "Eurotech MH/MP/MT": {
            "1 поколение (1992-2002)": [
                "7.7 - 175/179/180/190Е27 (8360.46)",
                "7.7 - 180/190Е24 (8360.46)",
                "7.8 - 180/190/260Е24 (Cursor 8)",
                "7.8 - 180/190/260Е27 (Cursor 8)",
                "7.8 - 190/260Е30 (Cursor 8)",
                "7.8 - 180/190/240/260/400/440Е31 (Cursor 8)",
                "7.8 - 190/240/260/400/440Е3 (Cursor 8)",
                "9.5 - 180/190/240/400Е30 (8460.41)",
                "9.5 - 180/190/240/400/420/440Е34 (8460.41)",
                "9.5 - 180/240/260/400Е38 (8460.41)",
                "10.3 - 180/190/240/260/400/440Е39 (Cursor 10)",
                "10.3 - 190/260/440Е40 (Cursor 10)",
                "10.3 - 180/190/240/260/400/440Е43 (Cursor 10)",
                "13.8 - 180/190/240/260/440Е42 (8210.42)",
                "17.2 - 180/260/400Е52 (8280.42)"
            ]
        },
        "EuroTrakker": {
            "1 поколение (1992-2004)": [
                "9.5 - 180E25/190E30/E34 (8460.41) Euro 2/3",
                "7.8 - 180/190E (Cursor 8-F2BE0681D/B/A) Euro 2/3",
                "13.8 - 190/260/340/400/410/720E (8210.42) Euro 2/3",
                "12.9 - 190/260/340/400/410/720E (Cursor 13) Euro 2/3"
            ]
        },
        "Stralis Hi-Street/Hi-Road/Hi-Way": {
            "Stralis Hi-Street/Hi-Road/Hi-Way": [
                "7.8 - 190/260/440S30 (Cursor 8-F2BE0681B/C/E) Euro 2/3/4/5",
                "7.8 - 190/260S27 (Cursor 8-F2BE0681C/F) Euro 2/3/4/5",
                "7.8 - 190/260/440S31 (Cursor 8-F2BE3681C) Euro 2/3/4/5",
                "7.8 - 190/260/440S35 (Cursor 8-F2BE0681A/F2BE3681A) Euro 2/3/4/5",
                "7.8 - 190/260/440S33 (Cursor 8-F2BE3681B) Euro 4/5",
                "7.8 - 190/260/440S36 (Cursor 8-F2BE3681B) Euro 4/5",
                "8.7 - 190/260/440S31 (Cursor 9-F2CFE611D) Euro 6",
                "8.7 - 190/260/440S33 (Cursor 9-F2CFE611C) Euro 6",
                "8.7 - 190/260/440S36 (Cursor 9-F2CFE611B) Euro 6",
                "8.7 - 190/260/440S40 (Cursor 9-F2CFE611A) Euro 6",
                "10.3 - 190/260/440S40 (Cursor 10-F3AE0681B/F3AE0681H) Euro 2/3",
                "10.3 - 190/260/440S43 (Cursor 10-F3AE0681D) Euro 2/3",
                "10.3 - 190/260/440S42 (Cursor 10-F3AE3681B) Euro 4/5",
                "10.3 - 190/260/440S45 (Cursor 10-F3AE3681A) Euro 4/5",
                "10.3 - 190/260/440S46 (Cursor 10-F3AE3681Y) Euro 4/5",
                "11.1 - 190/260/440S42 (Cursor 11-F3GFE611/F3HFE611) Euro 6",
                "12.9 - 190/260/440S41 (Cursor 13-F3В/13-F3H) Euro 6",
                "12.9 - 190/260/440S45 (Cursor 13-F3В/13-F3H) Euro 6",
                "12.9 - 190/260/440S48 (Cursor 13-F3BE0681E/F3BE3681H) Euro 2/3/4/5",
                "12.9 - 260/440S54 (Cursor 13-F3BE0681A) Euro 2/3/4/5",
                "12.9 - 190/260/440S50 (Cursor 13-F3В/F3H) Euro 4/5",
                "12.9 - 260/440S56 (Cursor 13-F3В/F3H) Euro 4/5"
            ]
        },
        "Trakker": {
            "1 поколение (2004 --->)": [
                "7.8 - 270/310/330/350/360 (Cursor 8) Euro 2/3/4/5",
                "8.7 - 310/330/360 (Cursor 9) Euro 6",
                "12.9 - 380/410/420/440/450/480/500 (Cursor 13) Euro 2/3/4/5"
            ]
        }
    },
    "JAC": {
        "J7": {
            "1 поколение (2020 - Н.В.)": [
                "1.5 (HFC4GB2.4E)"
            ]
        },
        "S3": {
            "1 поколение, 3-й рестайлинг (2016 - Н.В.)": [
                "1.5 (HFC4GB2.3D)",
                "1.6"
            ]
        },
        "S5": {
            "1 поколение": [
                "2.0 (HHFC4GA3.C/HFC4GA3.3D)",
                "2.0 (HFC4GA3.1D)"
            ]
        }
    },
    "Kamaz": {
        "С двигателями Cummins": {
            "KamAZ Cummins": [
                "6.7 - (ISBE) - 300 л.с.",
                "6.7 - (ISBE) Euro 3/4",
                "8.9 - (ISLE) Euro 3/4",
                "6.7 - (ISB) - модели 6540/5490 Euro 5"
            ]
        },
        "С двигателями Mercedes-Benz": {
            "КамАЗ 5490 + NEO/NEO-2": [
                "12.0 - (OM457LA)"
            ]
        },
        "С двигателями КамАЗ-740 (Euro 0-5)": {
            "Euro 0": [
                "10.8 - 740.10",
                "10.8 - 7403.10"
            ],
            "Euro 1": [
                "10.8 - 740.13",
                "10.8 - 740.11"
            ],
            "Euro 2": [
                "11.8 - 740.38",
                "10.8 - 740.30",
                "10.8 - 740.31",
                "11.8 - 740.35",
                "11.8 - 740.37",
                "11.8 - 740.50/51/52/53/55"
            ],
            "Euro 3": [
                "11.8 - 740.60/61/62/63/64/65"
            ],
            "Euro 4 (без систем обработки отработавших газов)": [
                "11.8 - 740.602/612/622/632/642/652/662"
            ],
            "Euro 4 (с системой обработки отработавших газов)": [
                "11.8 - 740.70/71/72/73/74/75"
            ],
            "Euro 5": [
                "11.8 - 740.705/715/725/735/745/755"
            ]
        }
    },
    "Kia": {
        "Carens": {
            "1 поколение (FC) 1999-2002": [
                "1.8 16V (T8)"
            ],
            "1 поколение рестайлинг (FJ) 2002-2006": [
                "1.6 16V (S6D)",
                "1.8 16V (TB)",
                "2.0 CRDi (D4EA)",
                "2.0 (G4GC)"
            ],
            "2 поколение (FG) 2006-2012": [
                "1.6 (G4FC)",
                "2.0 CRDi (D4EA)",
                "2.0 16V (G4KA)"
            ]
        },
        "Carnival": {
            "1 поколение, вкл.рестайлинг (GQ) 1998-2006": [
                "2.5 V6 (K5)",
                "2.9 CRDi (J3)"
            ],
            "2 поколение, вкл.рестайлинг (VQ) 2005-2014": [
                "2.2 CRDi (D4HB)",
                "2.7 V6 (G6EA)",
                "2.9 CRDi (J3)"
            ]
        },
        "Ceed": {
            "1 поколение, вкл.рестайлинг (ED) 2006-2012": [
                "1.4 16V (G4FA)",
                "1.6 16V (G4FC)",
                "1.6 CRDi (D4FB)",
                "2.0 16V (G4GC)",
                "2.0 CRDi (D4EA)"
            ],
            "2 поколение, вкл.рестайлинг (JD) 2012-2018": [
                "1.4 16V (G4FA)",
                "1.6 GDI (G4FD)",
                "1.6 GT (G4FJ)"
            ],
            "3 поколение (CD) 2018 - Н.В.": [
                "1.6 T-GDI (G4FJ)",
                "1.6 (G4FG)",
                "1.4 T-GDI (G4LD)"
            ]
        },
        "Cerato": {
            "1 поколение, вкл. рестайлинг (LD) 2004-2008": [
                "1.5 CRDi (D4FA)",
                "1.6 (G4ED)",
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)",
                "2.0 (G4GC)"
            ],
            "2 поколение (TD) 2008-2013": [
                "2.0 (G4KD)"
            ],
            "3 поколение, вкл.рестайлинг (YD) 2013-2020": [
                "1.6 (G4FC)",
                "2.0 MPi (G4KD)"
            ]
        },
        "Magentis": {
            "1 поколение, вкл.рестайлинг (EF) 2000-2006": [
                "2.0 16V (G4JP)",
                "2.5 V6 24V (G6BV)"
            ]
        },
        "Opirus": {
            "1 поколение, рестайлинг (GH) 2006-2011": [
                "3.5 V6 (G6CU)",
                "3.8 V6 (G6DA)"
            ]
        },
        "Optima": {
            "3 поколение, вкл.рестайлинг (TF) 2010-2016": [
                "2.0 (G4KD/G4ND)",
                "2.4 (G4KJ)"
            ],
            "4 поколение, вкл.рестайлинг (JF) 2016-2020": [
                "2.0 (G4KD/G4ND)",
                "2.0 T-GDI (G4KF)",
                "2.4 GDI (G4KJ)"
            ]
        },
        "Picanto": {
            "1 поколение, вкл.рестайлинг (SA/BA) 2003-2011": [
                "1.0 (G4HE)",
                "1.1 (G4HG)",
                "1.1 CRDi (D3FA)"
            ],
            "2 поколение, вкл.рестайлинг (TA) 2011-2017": [
                "1.0 (G3LA)",
                "1.2 (G4LA)"
            ]
        },
        "Quoris": {
            "1 поколение, вкл. рестайлинги (KH) 2012-2019": [
                "3.8 (G6DA)"
            ]
        },
        "Rio": {
            "1 поколение, вкл.рестайлинги (DC) 2000-2005": [
                "1.3i (B3)",
                "1.3i 16V (A3E)",
                "1.5 16V (A5D)"
            ],
            "2 поколение, вкл.рестайлинг (JB) 2005-2011": [
                "1.4 (G4EE)",
                "1.5 CRDi (D4FA)",
                "1.6 (G4ED)"
            ],
            "3 поколение, вкл.рестайлинг (QB/UB) 2012-2017": [
                "1.4 16V (G4FA)",
                "1.6 (G4FC)"
            ],
            "4 поколение, вкл.рестайлинг (FB) 2016 - н.в.": [
                "1.4 (G4LC)",
                "1.6 (G4FG)"
            ]
        },
        "Sephia": {
            "2 поколение, вкл.рестайлинг (1998-2004)": [
                "1.6i (B6)"
            ]
        },
        "Shuma": {
            "2 поколение (FB) 1997-2004": [
                "1.6 16V (S6D)",
                "1.8 16V (T8)"
            ]
        },
        "Sorento": {
            "1 поколение, вкл.рестайлинг (BL) 2002-2009": [
                "2.5 CRDi (D4CB)",
                "2.4 16V (G4JS)",
                "3.3 V6 (G6DB)",
                "3.5 V6 (G6CU)"
            ],
            "2 поколение, вкл.рестайлинг (XM) 2009-2020": [
                "2.0 CRDi (D4HA)",
                "2.2 CRDi (D4HB)",
                "2.4 MPi (G4KE)",
                "3.5 (G6DC)"
            ],
            "3 поколение, вкл.рестайлинг (UM) 2014-2020": [
                "2.2 CRDi (D4HB)",
                "2.4 GDI (G4KJ)",
                "3.3 (G6DF)"
            ]
        },
        "Soul": {
            "1 поколение, вкл.рестайлинг (AM) 2008-2014": [
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)"
            ],
            "2 поколение, вкл.рестайлинг (PS) 2014-2019": [
                "1.6 CRDi (D4FB)",
                "1.6 GDI (G4FD)",
                "1.6 (G4FG)"
            ]
        },
        "Spectra": {
            "1 поколение (SD) 2004-2011": [
                "1.6 16V (S6D)"
            ]
        },
        "Sportage": {
            "1 поколение (JA) 1993-2006": [
                "2.0 TD 4WD (RF)",
                "2.0i 16V (FE 16V)",
                "2.0i (FE)"
            ],
            "2 поколение, вкл.рестайлинг (KM) 2006-2010": [
                "2.0 (G4GC)",
                "2.0 CRDi (D4EA)",
                "2.7 V6 (G6BA-G)"
            ],
            "3 поколение, вкл.рестайлинг (SL) 2010-2016": [
                "1.6 GDI (G4FD)",
                "2.0 (G4KD)",
                "2.0 CRDi (D4HA)"
            ],
            "4 поколение, вкл.рестайлинг (QL) 2016 - Н.В.": [
                "1.6 T-GDI (G4FJ)",
                "2.0 (G4NA)",
                "2.0 CRDi (D4HA)"
            ]
        },
        "Venga": {
            "1 поколение, вкл.рестайлинг (YN) 2010-2017": [
                "1.4 16V (G4FA-L)",
                "1.4 CRDi (D4FC)",
                "1.6 (G4FC)",
                "1.6 CRDi (D4FB)"
            ]
        }
    },
    "Lexus": {
        "CT 200h": {
            "1 поколение, вкл.рестайлинги (A10) 2011 - Н.В.": [
                "1.8 (2ZR-FXE)",
                "1.8 F-Sport (2ZR-FXE)"
            ]
        },
        "ES": {
            "4 поколение, вкл.рестайлинги (AVV6/GSV6/ASV6) 2010 - Н.В.": [
                "250 (2AR-FE)",
                "250 (2AR-FXE)",
                "350 (2GR-FE)"
            ]
        },
        "GS": {
            "4 поколение (GRL1/GWL1) 2012 - Н.В.": [
                "250 2.5 (4GR-FSE)",
                "350 3.5 (2GR-FSE)",
                "350 3.5 (2GR-FXE)"
            ],
            "GS300 - 2 поколение  (S160) 1997-2005": [
                "300 3.0 (2JZ-GE)",
                "430 V8 4.3 (3UZ-FE)"
            ],
            "GS300 - 3 поколение (S191) 2005-2011": [
                "300 3.0 (3GR-FSE)",
                "430 V8 4.3 (3UZ-FE)",
                "450h Hybrid 3.5 (2GR-FSE)",
                "460 4.6 (1UR-FE)"
            ]
        },
        "GX": {
            "GX 460 - 2 поколение (J15) 2009 - Н.В.": [
                "460 4.6 (1UR-FE)"
            ],
            "GX 470 - 1 поколение (J12) 2002-2009": [
                "470 4.7 (2UZ-FE)"
            ]
        },
        "IS": {
            "IS200 - 1 поколение (E10) 1999-2005": [
                "200 2.0 (1G-FE)",
                "300 3.0 (2JZ-GE)"
            ],
            "IS250 - 2 поколение (E20/GSE2) 2005-2013": [
                "220d 2.2 (2AD-FHV)",
                "250 2.5 (4GR-FSE)",
                "F V8 (2UR-GSE)"
            ],
            "IS350 - 3 поколение (GSE3/AVE3) 2013 - Н.В.": [
                "250 2.5 (4GR-FSE)",
                "300h 2.5 (2AR-FSE)"
            ]
        },
        "LS": {
            "LS430 - 3 поколение (F30) 2000-2006": [
                "430 V8 4.3 (3UZ-FE)"
            ],
            "LS460 - 4 поколение (USF4/UVF4) 2006 - Н.В.": [
                "460 4.6 (1UR-FE)",
                "460 4.6 (1UR-FSE)",
                "600h 5.0 (2UR-FSE)"
            ]
        },
        "LX": {
            "LX470 - 2 поколение (UZJ100) 1998-2007": [
                "4.7i V8 (2UZ-FE)"
            ],
            "LX570 - 3 поколение (URJ200) 2007 - Н.В.": [
                "450d (1VD-FTV)",
                "5.7i V8 (3UR-FE)"
            ]
        },
        "NX": {
            "NX 300 - 1 поколение, вкл.рестайлинги (AYZ1) 2014 - Н.В.": [
                "200 AWD (3ZR-FAE)",
                "200t (8AR-FTS)",
                "300h (2AR-FXE)"
            ]
        },
        "RX": {
            "3 поколение (AGL10/GGL15/GYL1) 2008 - Н.В.": [
                "270 (1AR-FE)",
                "350 3.5 V6 (2GR-FE)",
                "350 3.5 (2GR-FXE)"
            ],
            "4 поколение (AGL2) 2015 - Н.В.": [
                "200t (8AR-FTS)",
                "350 (2GR-FKS)"
            ],
            "RX300 - 1 поколение (U15) 1997-2003": [
                "300 3.0 V6 (1MZ-FE VVT-i)",
                "300 (1MZ-FE)"
            ],
            "RX400h - 2 поколение (U38) 2003-2008": [
                "300 3.0 V6 (1MZ-FE)",
                "400h Hybrid (3MZ-FE)",
                "350 3.5 V6 (2GR-FE)"
            ]
        },
        "SC": {
            "SC 430 - 1 поколение (Z40) 2001-2010": [
                "430 V8 4.3 (3UZ-FE)"
            ]
        }
    },
    "Lifan": {
        "Breez": {
            "1 поколение (520) 2007-2012": [
                "1.3 (LF479Q3)",
                "1.6 (LF481Q3)",
                "1.6 (T16b3)"
            ]
        },
        "Cebrium": {
            "1 поколение (720) 2014-2017": [
                "1.8 (LFB479Q)"
            ]
        },
        "Celliya": {
            "1 поколение (530) 2014-2016": [
                "1.5 (LF479Q2)"
            ]
        },
        "Murman": {
            "1 поколение (2015 - Н.В.)": [
                "1.8 (LFB479Q)"
            ]
        },
        "Myway": {
            "1 поколение (X70) 2016-2022": [
                "1.8 (LFB479Q)"
            ]
        },
        "Smily": {
            "1 поколение (320) 2010 - 2016": [
                "1.3 (LF479Q3-B)"
            ],
            "1 поколение рестайлинг (330) 2014 - 2017": [
                "1.3 (LF479Q3-B)"
            ]
        },
        "Solano": {
            "1 поколение (620) 2010-2015": [
                "1.8 (LFB479Q)",
                "1.6 (LF481Q3)"
            ],
            "1 поколение рестайлинг (630) 2014 - 2016": [
                "1.5 (LF479Q2)",
                "1.8 (LFB479Q)"
            ],
            "2 поколение (650) 2016-2022": [
                "1.5 (LF479Q2-B)",
                "1.8 (LFB479Q)"
            ]
        },
        "X50": {
            "1 поколение (2015-2022)": [
                "1.5 (LF479Q2)"
            ]
        },
        "X60": {
            "1 поколение (2012 - 2015)": [
                "1.8 (LFB479Q)"
            ],
            "1 поколение 2-й рестайлинг (2016 - 2022)": [
                "1.8 (LFB479Q)"
            ],
            "1 поколение рестайлинг (2015 - 2016)": [
                "1.8 (LFB479Q)"
            ]
        },
        "X70": {
            "1 поколение (2017-2022)": [
                "2.0 (LF483Q)"
            ]
        }
    },
    "MAN": {
        "F2000": {
            "1 поколение (1994 --->)": [
                "9.9 - 19/26/27.273 (D2865)",
                "9.9 - 19/23/24/26/27/28/30/32.293 (D2865)",
                "9.9 - 19/24/26/27.323 (D2865)",
                "9.9 - 19/23/24/26/27/28/32/33/35/41.343 (D2865)",
                "12.0 - 19/23/24/26/27/28/30/32.314 (D2866)",
                "12.0 - 30.343 (D2866)",
                "12.0 - 19/24/26/27/33.373 (D2866)",
                "12.0 - 50.373 (D2866)",
                "12.0 - 32/35/41.403 (D2866)",
                "12.0 - 19/23/24/26/27/33.403 (D2866)",
                "12.0 - 19/23/24/26/27/29/30/32/33/35/40/41/50.414 (D2866)",
                "12.0 - 19/24/26/27/33.423 (D2866)",
                "12.8 - 19/23/24/26/27/32/33/35/50.463 (D2876)",
                "12.8 - 19/23/24/26/27/33.463 (D2876)",
                "12.8 - 32/33/35/40/41.463 (D2876)",
                "18.3 - 19/26/27/33/36/40/41/50.603 (D2840)",
                "18.3 - 19/26/27/33/36/40/41/50.604 (D2840)"
            ]
        },
        "L2000": {
            "1 поколение (1994 --->)": [
                "4.6 - 6/7/8/9.113 (D0824)",
                "4.6 - 6/7/8/9/10.150 (D0824)",
                "4.6 - 6/7/8/9/10.163 (D0824)",
                "4.6 - 6/8/9/10.145 (D0834)",
                "4.6 - 7/8/9/10.185 (D0834)",
                "6.8 - 8/9/10.224 (D0826)",
                "6.8 - 8.223 L (D0826)",
                "6.8 - 8.220 FOC (D0826)"
            ]
        },
        "LE": {
            "1 поколение (2000-2007)": [
                "4.6 - LE 110/160 C (D0824 LFL06/08)",
                "4.6 - LE 140/180 C (D0834)",
                "6.8 - LE 220 B/C (D0826)",
                "6.8 - LE220B M2000 (D0826)",
                "6.8 - LE220C L2000 (D0826)",
                "6.8 - LE250B M2000 (D0826)",
                "6.8 - LE280B M2000 (D0826)"
            ]
        },
        "TGA": {
            "1 поколение (2000 --->)": [
                "6.8 - 18.280 (D0836 LF41/44)",
                "6.8 - 26.280/26.283 (D0836 LF41/44)",
                "6.8 - TG280A (D0836 LF41/44)",
                "6.8 - 26.330/26.333 (D0836 LF41/44)",
                "6.8 - TG330A (D0836 LF41/44)",
                "10.5 - 18/25/26/28/32/35/37.310D20 (D2066) Euro 3/4",
                "10.5 - 18/26.313D20 (D2066) Euro 3/4",
                "10.5 - TG310AD20 (D2066) Euro 3/4",
                "10.5 - 18/26/28/32/33/35/37/41.350 (D2066) Euro 3/4",
                "10.5 - 18.350/18.353 (D2066) Euro 3/4",
                "10.5 - TG350A (D2066) Euro 3/4",
                "10.5 - 18/19/24/26/28/32/33/35/37/40/41.390 (D2066) Euro 3/4",
                "10.5 - 18/26.393 (D2066) Euro 3/4",
                "10.5 - TG390A (D2066) Euro 3/4",
                "10.5 - 18/26.433 (D2066) Euro 3/4",
                "10.5 - 18/26/28/32/33/35/37/40/41.430 (D2066) Euro 3/4",
                "10.5 - TG430A (D2066) Euro 3/4",
                "10.5 - 26/35/37.320D20 (D2066) Euro 5",
                "10.5 - 18/26/32/33/35/37/41.360D20 (D2066) Euro 5",
                "10.5 - 18/26/33/35/37/41.400 (D2066) Euro 5",
                "10.5 - 18/26/33.403 (D2066) Euro 5",
                "10.5 - 18/26/33.404 (D2066) Euro 5",
                "10.5 - TG400A (D2066) Euro 5",
                "10.5 - 18/26/28/32/35/37/41.440 (D2066) Euro 5",
                "10.5 - 18/26.443 (D2066) Euro 5",
                "10.5 - 18/26.444 (D2066) Euro 5",
                "10.5 - TG440A (D2066) Euro 5",
                "12.0 - 18/25/26/28/32/35.310 (D2866) Euro 2/3/4",
                "12.0 - 18/26/28/32.313 (D2866) Euro 2/3/4",
                "12.0 - TG310A (D2866) Euro 2/3/4",
                "12.0 - 18/19/24/26/28/32/33/35/41.360(D2866) Euro 2/3/4",
                "12.0 - 18/26/28/32.363 (D2866) Euro 2/3/4",
                "12.0 - TG360A (D2866) Euro 2/3/4",
                "12.0 - 18/19/24/26/28/32/33/35/37/40/41.410 (D2866) Euro 2/3/4",
                "12.0 - 18/19/26/28/32.413 (D2866) Euro 2/3/4",
                "12.0 - TG410A (D2866) Euro 2/3/4",
                "12.8 - 18/19/24/26/28/32/33/35/40/41.460 (D2876) Euro 2/3/4",
                "12.8 - 18/19/26/28/32.463 (D2876) Euro 2/3/4",
                "12.8 - TG460A (D2876) Euro 2/3/4",
                "12.8 - 18/19/24/26/28/32/33/35/40/41.480 (D2876) Euro 2/3/4",
                "12.8 - 18/19/26/28/32.483 (D2876) Euro 2/3/4",
                "12.8 - TG480A (D2876) Euro 2/3/4",
                "12.8 - 18/24/26/28/33/41.510 (D2876) Euro 2/3/4",
                "12.8 - 18/19/26/28/32.513 (D2876) Euro 2/3/4",
                "12.8 - TG510A (D2876) Euro 2/3/4",
                "12.8 - 18/24/26/28/33/35/37/41.530 (D2876) Euro 2/3/4",
                "12.8 - 18/26/28.533 (D2876) Euro 2/3/4",
                "12.8 - TG530A (D2876) Euro 2/3/4",
                "12.4 - 18/24/26/32/33/35/37/41.480D26 (D2676) Euro 4/5",
                "12.4 - 18/24/26.483D26 (D2676) Euro 4/5",
                "12.4 - TG480AD26 (D2676) Euro 4/5",
                "12.4 - 18/24/26.540 (D2676) Euro 4/5",
                "12.4 - 18/24/26.543 (D2676) Euro 4/5",
                "12.4 - 18.544 (D2676) Euro 4/5",
                "12.4 - TG540A (D2676) Euro 4/5",
                "18.3 - TG660A (D2840 LF25) Euro 3",
                "18.3 - 41.660 (D2840 LF25) Euro 3"
            ]
        },
        "TGL": {
            "1 поколение (2005 --->)": [
                "4.6 - 7/8.150 (D0834)",
                "4.6 - 7/8/10/12.180 (D0834)",
                "4.6 - 8/10/12.210 (D0834)",
                "4.6 - 7/8/10/12/14.220 (D0834)",
                "6.8 - 8/10/12.240 (D0836)",
                "6.8 - 7/8/10/12.250 (D0836)",
                "6.8 - 8/10/12.290 (D0836)"
            ]
        },
        "TGM": {
            "1 поколение (2005 --->)": [
                "6.8 - 12/13/15/18/22.240 (D0836)",
                "6.8 - 12/15/18.244 (D0836)",
                "6.8 - 12/13/15/18/22.250 (D0836)",
                "6.8 - 12/13/15/18/22/26.280 (D0836)",
                "6.8 - 12/15/18.284 (D0836)",
                "6.8 - 12/13/15/16/18/22/26.290 (D0836)",
                "6.8 - 15/18/26.330 (D0836)",
                "6.8 - 15/18.334 (D0836)",
                "6.8 - 15/18/26.340 (D0836)"
            ]
        },
        "TGS": {
            "1 поколение (2007 --->)": [
                "10.5 - 18/24/26/28/32/33/35/39/40/41.320 (D2066)",
                "10.5 - 18/19/26/28/32/33/35/41.350  (D2066)",
                "10.5 - 18/19/21/24/26/28/32/33/35/39/40/41.360 (D2066)",
                "10.5 - 18/19/26/28/32/33/35/40/41.390 (D2066)",
                "10.5 - 18/19/21/24/26/28/32/33/35/39/40/41.400 (D2066)",
                "10.5 - 18/19/26/28/33/35/40/41.430 (D2066)",
                "10.5 - 18/19/21/24/26/28/32/33/35/39/40/41.440 (D2066)",
                "10.5 - 41/50.480 (D2066)",
                "12.4 - 41.440 (D2676)",
                "12.4 - 18/19/24/26/28/32/33/35/39/41/50.480 (D2676)",
                "12.4 - 18/24/26/28/33/35/39/41.540 (D2676)",
                "12.4 - 18/19/21/24/26/28/32/33/35/37/39/40/41.460 (D2676)",
                "12.4 - 18/19/21/24/26/28/32/33/35/37/39/40/41.420 (D2676)",
                "12.4 - 18/19/21/24/26/28/32/33/35/37/39/40/41.500 (D2676)"
            ]
        },
        "TGX": {
            "1 поколение (2007 --->)": [
                "10.5 - 18/24/26/28/33/35.360 (D2066)",
                "10.5 - 18/24/26/28/33/35.400 (D2066)",
                "10.5 - 18/24/26/28/33/35.440 (D2066)",
                "12.4 - 18/24/26/28/33/35/41.480 (D2676)",
                "12.4 - 18/24/26/28/33/35/41.540 (D2676)",
                "12.4 - 18/24/26/28/33/35/41.420 (D2676)",
                "12.4 - 18/24/26/28/33/35/41.460 (D2676)",
                "12.4 - 18/24/26/28/33/35/41.500 (D2676)",
                "15.2 - 18/24/26/28/33/35/41.520D38 (D3876)",
                "15.2 - 18/24/26/28/33/35/41.540D38 (D3876)",
                "15.2 - 18/24/26/28/33/35/41.560D38 (D3876)",
                "15.2 - 18/24/26/28/33/35/41.580D38 (D3876)",
                "15.2 - 18/24/26/28/33/35/41.640D38 (D3876)",
                "16.2 - 18/24/28/33/35/41.680 (D2868)"
            ]
        }
    },
    "Mazda": {
        "Mazda 2": {
            "1 поколение, вкл.рестайлинг (DY) 2002-2007": [
                "1.25 (FUJA)",
                "1.4 (FXJA)",
                "1.4 CD (F6JA)",
                "1.6 (FYJA)"
            ],
            "2 поколение, вкл.рестайлинг (DE) 2007-2015": [
                "1.3 (ZJ-VE)",
                "1.4 CD (Y4)",
                "1.5 (ZY-VE)"
            ]
        },
        "Mazda 5": {
            "2 поколение, вкл.рестайлинг (CR) 2004-2011": [
                "1.8 (L823)",
                "1.8 (LFF7)",
                "2.0 CD (RF7J)"
            ],
            "3 поколение (CW) 2010-2015": [
                "1.6 CD (Y655)",
                "2.0 MZR (LF-VE)"
            ]
        },
        "Mazda 6": {
            "1 поколение, вкл.рестайлинг (GG) 2002 - 2008": [
                "1.8  (L813)",
                "2.0 (LF17/LF18)",
                "2.0 (LFF7)",
                "2.0 CD (RF5C)",
                "2.3  (L3C1)"
            ],
            "2 поколение, вкл.рестайлинг (GH) 2007 - 2012": [
                "1.8  (L813)",
                "2.0 (LF17)",
                "2.0 CD (RF7J)",
                "2.5 (L5-VE)"
            ],
            "3 поколение, вкл.рестайлинги (GJ) 2015 - 2018": [
                "2.0 Skyactiv-G (PEXB/PEXL/PEY5/PEY7)"
            ]
        },
        "323": {
            "6 поколение, вкл.рестайлинг (BJ) 1998-2004": [
                "1.4 16V (B3-ME)",
                "1.5 16V (Z5-DE)",
                "1.6 (ZM)",
                "1.8 16V (FP)",
                "2.0 16V (FS)",
                "2.0 D (RF1G)",
                "2.0 TD (RF4F)",
                "2.0 TD (RF3F)"
            ]
        },
        "CX-5": {
            "1 поколение, вкл. рестайлинг (KE) 2011-2017": [
                "2.2 Skyactiv-D (SHY1)",
                "2.0 Skyactiv-G (PEY4/PEY5)",
                "2.5 Skyactiv-G (PY-VPS)"
            ]
        },
        "CX-7": {
            "1 поколение, вкл. рестайлинг (ER) 2006 - 2012": [
                "2.3 (L3N9/L3-VDT)",
                "2.3 DISI Turbo (L3-VDT)",
                "2.5 MZR  (L5-VE)"
            ]
        },
        "CX-9": {
            "1 поколение, вкл.рестайлинг (TB) 2007-2015": [
                "3.7 (CAY1/CAY5/CAY6)"
            ]
        },
        "Mazda 3": {
            "1 поколение, вкл.рестайлинг (BK) 2003-2009": [
                "2.0 (LF17)",
                "1.6 (Z6)",
                "1.3 (ZJ-VE)",
                "1.6 DI Turbo (Y601)",
                "2.0 CD (RF7J)",
                "2.3 DISI Turbo MPS (L3N9/L3-VDT)"
            ],
            "2 поколение, вкл.рестайлинг (BL) 2008-2013": [
                "1.6 (Z6)",
                "1.6 CD (Y601)",
                "2.0 (LF17)"
            ],
            "3 поколение, вкл.рестайлинг (BM) 2013-2019": [
                "1.5 Skyactiv-G120 (P5-VPS)",
                "1.6 Skyactiv-G 105 (ZM-DE)",
                "2.0 Skyactiv-G 150 (PE-VPS)"
            ]
        },
        "MPV": {
            "2 поколение, вкл.рестайлинг (LW) 1999 - 2006": [
                "2.5 V6 (GY-DE)",
                "3.0 V6 (AJ-DE)"
            ]
        },
        "Tribute": {
            "1 поколение, вкл. рестайлинг (EP) 2000-2006": [
                "2.0 16V (YF)"
            ]
        }
    },
    "Mercedes-Benz": {
        "A-Class": {
            "2 поколение, вкл.рестайлинг (W/C169) 2004-2012": [
                "A150/A160 (M266.920)",
                "2.0 A160 CDI (OM 640.942)",
                "A170/A180 1.7 (M266.940)",
                "A180 2.0 CDI (OM 640.940)",
                "A200 2.0 (M266.960)",
                "A200 2.0 CDI (OM 640.941)",
                "A200 2.0 (M266.980)"
            ],
            "3 поколение, вкл.рестайлинг (W176) 2012-2018": [
                "A180 BlueEFFICIENCY 1.6 (M 270.910)",
                "A200 BlueEFFICIENCY 1.6 (M 270.910)",
                "2.0 A45 AMG 4-matic (M 133.980)"
            ]
        },
        "B-Class": {
            "1 поколение, вкл.рестайлинг (W245) 2005-2012": [
                "B150/B160 1.5 (M266.920)",
                "B170/B180 1.7 (M266.940)",
                "B180 2.0 CDI (OM 640.940)",
                "B180 NGT 2.0 (M266.960)",
                "B200 2.0 (M266.960)",
                "B200 2.0 CDI (OM 640.941)",
                "B200 Turbo 2.0 (M266.980)"
            ],
            "2 поколение, вкл.рестайлинг (W246) 2011-2018": [
                "B180 BlueEFFICIENCY 1.6 (M 270.910)",
                "B180 CDI 1.8 BlueEFFICIENCY (OM 651.901)",
                "B200 CDI 1.8 BlueEFFICIENCY (OM 651.901)",
                "B200 BlueEFFICIENCY 1.6 (M 270.910)"
            ]
        },
        "C-Class": {
            "2 поколение, вкл.рестайлинг (W/S/C203) 2000-2011": [
                "C200 W/S203 CDI 2.1 (OM 611.962)",
                "C180 W/C/S203 2.0 (M 111.951)",
                "C180 Kompressor W/C/S203 2.0 (M 271.946)",
                "C200 Kompressor W/C/S203 2.0 (M 111.955)",
                "C200 Kompressor W/C/S203 1.8 (M 271.940)",
                "C 220 W/S CDI 2.1 (OM 646.963)",
                "C220 W/S/C203 CDI 2.1 (OM 611.962)",
                "C230 Kompressor W/C/S203 1.8 (M 271.948)",
                "C240 W/S203 2.6 (M 112.912/916)"
            ],
            "3 поколение, вкл.рестайлинг (C/W/S204) 2007-2015": [
                "C180 1.6 BlueEFFICIENCY (M 274.910)",
                "C180 1.8 CGI BlueEFFICIENCY (M 271.820)",
                "C180 Kompressor 1.6 (M 271.910)",
                "C180 Kompressor 1.8 (M 271.952)",
                "C200 1.8 CGI BlueEFFICIENCY (M 271.820)",
                "C200 1.8 Kompressor (M 271.950)",
                "C230 2.5 (M 272.921)",
                "C250 CGI Blue EFFICIENCY 1.8 (M 271.860)",
                "C280/300 3.0 (M 272.947)",
                "C350 CGI BlueEFFICIENCY 3.5 (M 276.957)"
            ],
            "4 поколение, вкл.рестайлинг (W/C/A/S205) 2013 - Н.В.": [
                "C180 1.6 (M 274.910)",
                "C250 2.0 (M 274.920)"
            ]
        },
        "CL-Class": {
            "2 поколение, вкл.рестайлинг (C215) 1999-2006": [
                "CL500 5.0 (M 113.960)",
                "CL600 5.8 (M 137.970)"
            ],
            "3 поколение, вкл.рестайлинг (C216) 2006-2014": [
                "CL500 5.5 (M 273.961)",
                "CL 63 AMG 6.2 (M 156.984)"
            ]
        },
        "CLA-Class": {
            "1 поколение, вкл.рестайлинг (X/C117) 2013-2019": [
                "CLA 200 1.6 (M 270.910)"
            ]
        },
        "CLC-Class": {
            "1 поколение (CLC203) 2008-2011": [
                "CLC 180 Kompressor 2.0 (M 271.946)",
                "CLC 200 1.8 Kompressor (M 271.955/957)",
                "CLC230 2.5 (M 272.920)"
            ]
        },
        "CLK-Class": {
            "1 поколение, вкл.рестайлинг (A/C208) 1997-2002": [
                "CLK200 Kompressor 2.0 (M 111.944)",
                "CLK200 2.0 (M 111.945)",
                "CLK200 Kompressor  2.0 (M 111.956)",
                "CLK230 Kompressor 2.3 (M 111.973/M 111.975)",
                "CLK230 Kompressor 2.3 (M 111.982)",
                "CLK320 Kompressor 3.2 (M 112.940)"
            ],
            "2 поколение, вкл.рестайлинг (A/C209) 2002-2009": [
                "CLK 200 Kompressor 1.8 (M 271.940)",
                "CLK 220 CDI 2.1 (OM 646.966)",
                "CLK 320 3.2 (M 112.955)",
                "CLK 240 2.6 (M 112.912)"
            ]
        },
        "CLS-Class": {
            "1 поколение, вкл.рестайлинг (C219) 2004-2010": [
                "CLS 350 CDI 3.0 (OM 642.920)",
                "CLS 280/300 3.0 (M 272.943)",
                "CLS 350 CGI 3.5 (M 272.985)",
                "CLS 350 3.5 (M 272.964)",
                "CLS500 5.0 (M 113.967)",
                "CLS500 5.5 (M 273.960)",
                "CLS 55 AMG 5.4 (M 113.990)",
                "CLS 63 AMG 6.2 (M 156.983)"
            ],
            "2 поколение, вкл.рестайлинг (X/C218) 2010-2017": [
                "CLS 250 CDI BlueTEC 2.1 (OM 651.924)",
                "CLS 350 3.5 (M 276.952)",
                "CLS 350 CDI BlueTEC 3.0 (OM 642.853)",
                "CLS 500 4.7 (M 278.922)",
                "CLS 63 AMG 5.5 (M157.980/981)"
            ]
        },
        "E-Class": {
            "2 поколение, вкл.рестайлинг (W/S210) 1995-2002": [
                "E200 2.0 (M 111.942)",
                "E200 CDI 2.1 (OM 611.961)",
                "E220 CDI 2.1 (OM 611.961)",
                "E220 D 2.2 (OM 604.912)",
                "E230 2.3 (M 111.970)",
                "E240 2.4 (M 112.911)",
                "E280 2.8 (M104.945)",
                "E280 2.8 (M112.921)",
                "E320 3.2 (M112.941)",
                "E320 3.2 (M104.995)"
            ],
            "3 поколение, вкл.рестайлинг (W/S211) 2002-2009": [
                "E200 Kompressor 1.8 (M271.941)",
                "E200 CDI 2.1 (OM646.820)",
                "E200 CDI 2.1 (OM646.951)",
                "E200 Kompressor 1.8 (M271.956)",
                "E220 CDI 2.1 (OM 646.821)",
                "E220 CDI 2.1 (OM 646.961)",
                "E230 2.5 (M272.922)",
                "E240 2.6 (M112.913/M112.917)",
                "E270 CDI 2.7 (OM647.961)",
                "E280 3.0 (M272.943)",
                "E320 3.2 (M112.949)"
            ],
            "4 поколение, вкл. рестайлинг (S/W212) 2009- 2010": [
                "E200 2.0 (M 274.920)",
                "E200 CGI 1.8 (M 271.820)",
                "E220 CDI BlueTEC 2.1 (OM 651.924)",
                "E200 CDI BE/BlueTEC 2.1 (OM 651.925)",
                "E250 CDI BlueTEC 2.1 (OM 651.924)",
                "E250 CGI Blue EFFICIENCY 1.8 (M 271.860)",
                "E300 3.0 (M272.952)",
                "E300 BlueEFFICIENCY 3.5 (M 276.952)",
                "E 300 CDI BE/BlueTEC 3.0 (OM642.850/OM642.852)",
                "E350 3.5 (M272.977/980)",
                "E350 CDI BE/BlueTEC 3.0 (OM642.850)",
                "E350 CDI BlueTEC 3.0 (OM642.850)",
                "E350 CDI BlueEFFICIENCY 3.0 (OM642.852)",
                "E350 CGI BlueEFFICIENCY 3.5 (M272.982/983)",
                "E500 5.5 (M 273.970/971)"
            ],
            "C207": [
                "E200 2.0 (M 274.920)",
                "E200 CGI BlueEFFICIENCY 1.8 (M 271.820)",
                "E 220 CDI BE/BlueTEC 2.1 (OM 651.911)",
                "E 250 CDI BE/BlueTEC 2.1 (OM 651.911)",
                "E250 CGI BlueEFFICIENCY 1.8 (M 271.860)",
                "E350 3.5 (M272.988)",
                "E350 CDI BlueEFFICIENCY 3.0 (OM 642.836)",
                "E350 CGI BlueEFFICIENCY 3.5 (M272.983)",
                "E500 5.5 (M273.971)"
            ]
        },
        "G-Class": {
            "W463 (1989 - Н.В.)": [
                "350 GD TD 3.5 (OM603.972)",
                "G300 TD 3.0 (OM 606.964)",
                "G320 3.2 (M104.995/996)",
                "G320 CDI 3.0 (OM642.970)",
                "G400 CDI 4.0 (OM628.962)",
                "G320 5.5 (M273.963)",
                "G500 5.0 (M113.962)"
            ]
        },
        "GL-Class": {
            "1 поколение, вкл. рестайлинг (X164) 2006-2015": [
                "GL320 CDI 3.0 (OM 642.940)",
                "GL350 CDI 3.0 (OM 642.820)",
                "GL350 CDI BlueTEC 3.0 (OM 642.820)",
                "GL420 CDI 4.0 (OM 629.912)",
                "GL450 CDI 4.0 (OM 629.912)",
                "GL450 4.7 (M273.923)",
                "GL500 5.5 (M 273.963)"
            ],
            "2 поколение (X166) 2012-2015": [
                "350 CDI BlueTEC 4-matic 3.0 (OM642.826)",
                "400 4-matic 3.0 (M276.821)",
                "500 4-matic 4.7 (M278.928)",
                "63 AMG 5.5 (M157.982)"
            ]
        },
        "GLA-Class": {
            "1 поколение, вкл. рестайлинг (X156) 2013-2020": [
                "GLA200 1.6 (M 270.910)",
                "GLA250 4-matic 2.0 (M 270.920)",
                "GLA 45 AMG  2.0 (M133.980)",
                "GLA 200 CDI 2.1 (OM 651.930)"
            ]
        },
        "GLC-Class": {
            "1 поколение, вкл. рестайлинг (X253) 2015 - Н.В.": [
                "GLC250 2.0 (M 274.920)",
                "GLC200 2.0 (M 274.920)",
                "GLC300 2.0 (M 274.920)",
                "GLC 220 D 4MATIC  2.1 (OM 651.921)",
                "GLC 250 D 4MATIC  2.1 (OM 651.921)"
            ]
        },
        "GLE-Class": {
            "1 поколение (W166) 2015-2018": [
                "GLE300 3.0 (M 276.955)",
                "GLE400 3.0 (M 276.821)",
                "GLE250 d 2.1 (OM651.960)",
                "GLE 350 d  3.0 (OM 642.826)"
            ]
        },
        "GLK-Class": {
            "1 поколение, вкл. рестайлинг (X204) 2008-2015": [
                "GLK220 CDI BE/BlueTEC (OM651.916/OM651.912)",
                "GLK250 CDI BE/BlueTEC 2.1 (OM651.912)",
                "GLK320 CDI 3.0 (OM642.961)",
                "GLK350 CDI 3.0 (OM642.832)",
                "GLK350 CDI 3.0 (OM642.961)",
                "GLK250 2.0 (M 274.920)",
                "GLK280 2.0 (M272.948)",
                "GLK300 4-matic 3.0 (M 276.957)",
                "GLK300 2.0 (M272.948)",
                "GLK350 CGI BlueEFFICIENCY 3.5 (M 276.957)",
                "GLK350  3.5 (M272.961)"
            ]
        },
        "S-Class": {
            "5 поколение, вкл. рестайлинг (W211) 2005-2013": [
                "S350 3.5 (M272.965)",
                "S450 4.7 (M273.924)",
                "S500 5.5 (M273.924)",
                "S600 5.5 (M275.953)",
                "S250 CDI BlueEFFICIENCY 2.1 (OM651.961)",
                "S320 CDI 3.0 (OM642.930)",
                "S350 CDI BlueTEC 3.0 (OM642.862)",
                "S420 CDI 4.0 (OM629.911)"
            ],
            "6 поколение, вкл. рестайлинг (W222) 2013-2020": [
                "S350 d BlueTEC 3.0 (OM 642.861)",
                "S350 d BlueTEC 3.0 (OM 642.867)",
                "S63 AMG (M157.985)",
                "S430 4-matiс 4.3 (M113.823)",
                "S500 4-matiс 4.7 (M278.929)"
            ]
        }
    },
    "Mercedes-Benz Truck": {
        "Actros 1 (950.003-954.532)": {
            "1 поколение (1996-2003)": [
                "12.0 - 1831/2031/2531/2631/2831/3231/3331 (OM501LA)",
                "12.0 - 1835/2035/2535/2635/3235/3335 (OM501LA)",
                "12.0 - 1840/2040/2540/2640/3240/3340/4140 (OM501LA)",
                "12.0 - 1843/1943/2043/2543/2643/3243/3343/4143 (OM501LA)",
                "12.0 - 1846/2046/2546/2646/3246/3346/4146 (OM501LA)",
                "16.0 - 1848/2048/2648/3348/4148 (OM542LA)",
                "16.0 - 1853/2053/2553/2653/3353 (OM542LA)",
                "16.0 - 1857/2557/2657/3357 (OM542LA)"
            ]
        },
        "Actros 1 MP2/MP3": {
            "1 поколение (2003 --->)": [
                "12.0 - 3331 (OM501LA)",
                "12.0 - 1832/2032/2532/2632/3232/3332 (OM501LA)",
                "12.0 - 1836/2036/2536/2636/3236/3336 (OM501LA)",
                "12.0 - 2038 (OM501LA)",
                "12.0 - 1841/2041/2541/2641/3241/3341/4141(OM501LA)",
                "12.0 - 1844/2044/2544/2644/3244/3344/4144 (OM501LA)",
                "12.0 - 1846/2046/2546/2646/3246/3346/4146 (OM501LA)",
                "12.0 - 1848/2048/2548/2648/3248/3348/4148 (OM501LA)",
                "12.0 - 1832/2032/2432/2532/2632/3232/3332 (OM541LA) BLUETEC 4/5",
                "12.0 - 1836/2036/2436/2536/2636/3236/3336 (OM541LA) BLUETEC 4/5",
                "12.0 - 1841/2041/2441/2541/2641/3241/3341/4141/5041 (OM541LA) BLUETEC 4/5",
                "12.0 - 1844/2044/2444/2544/2644/3244/3344/4144/5044 (OM541LA) BLUETEC 4/5",
                "12.0 - 1846/2046/2446/2546/2646/3246/3346/4146/5046 (OM541LA) BLUETEC 4/5",
                "12.0 - 1848/2048/2448/2548/2648/3248/3348/4148/5048 (OM541LA) BLUETEC 4/5",
                "16.0 - 1850/2050/2550/2650/3250/4150 (OM542LA)",
                "16.0 - 2051/335 (OM542LA)",
                "16.0 - 1854/2054/2554/2654/3354/4154 (OM542LA)",
                "16.0 - 1858/2058/2558/2658/3358 (OM542LA)",
                "16.0 - 1861 Black Edition (OM542LA)",
                "16.0 - 1851/2051/2451/2551/2651/3351/4151 (OM542LA) BLUETEC 4/5",
                "16.0 - 4154 (OM542LA) BLUETEC 4/5",
                "16.0 - 1855/2055/2455/2555/2655/3355/4155 (OM542LA) BLUETEC 4/5",
                "16.0 - 1860/2460/2560/2660/3360/4160 (OM542LA) BLUETEC 4/5",
                "16.0 - 4160 (OM542LA) BLUETEC 4/5",
                "16.0 - 2665/3365/4165(OM542LA) BLUETEC 4/5"
            ]
        },
        "Actros 2": {
            "1 поколение (2011 --->)": [
                "7.7 - 1824/2024 (OM936LA) BLUETEC 5/6/EEV",
                "7.7 - 1827/2027/2427/2527/2627 (OM936LA) BLUETEC 5/6/EEV",
                "7.7 - 1830/2030/2430/2530/2630 (OM936LA) BLUETEC 5/6/EEV",
                "7.7 - 1832/2032/2432/2532/2632 (OM936LA) BLUETEC 5/6/EEV",
                "7.7 - 1835/2035/2435/2535/2635 (OM936LA) BLUETEC 5/6/EEV",
                "10.7 - 1833/2033/2433/2533/2633/3333 (OM470LA) BLUETEC 5/6/EEV",
                "10.7 - 1836/2036/2436/2536/2636/3336 (OM470LA) BLUETEC 5/6/EEV",
                "10.7 - 1840/2040/2440/2540/2640/3340 (OM470LA) BLUETEC 5/6/EEV",
                "10.7 - 1843/2043/2443/2543/2643/3343 (OM470LA) BLUETEC 5/6/EEV",
                "10.7 - 1846/2046/2446/2546/2646/3346 (OM470LA) BLUETEC 5/6/EEV",
                "12.8 - 1842/2042/2442/2542/2642/3342 (OM471LA) BLUETEC 5/6/EEV",
                "12.8 - 1845/2045/2445/2545/2645/3345 (OM471LA) BLUETEC 5/6/EEV",
                "12.8 - 1848/2048/2448/2548/2648/3348 (OM471LA) BLUETEC 5/6/EEV",
                "12.8 - 1851/2051/2451/2551/2651/3351 (OM471LA) BLUETEC 5/6/EEV",
                "12.8 - 1853/2053/2453/2553/2653/3353 (OM471LA) BLUETEC 5/6/EEV",
                "15.6 - 1852/2552/4152 (OM473LA) BLUETEC 5/6/EEV",
                "15.6 - 1858/2558/4158 (OM473LA) BLUETEC 5/6/EEV",
                "15.6 - 1863/2563/4163 (OM473LA) BLUETEC 5/6/EEV"
            ]
        },
        "Atego 1": {
            "1 поколение (1998-2004)": [
                "4.2 - 712/812 (OM904LA)",
                "4.2 - 714/814/914 (OM904LA)",
                "4.2 - 715/815/1215 (OM904LA)",
                "4.2 - 717/817/917/1017/1217/1317/1517  (OM904LA)",
                "4.2 - 818/918/1018/1218/1318/1518 (OM904LA)",
                "6.3 - 823/923/1023/1223/1323/1523/1823/1923/2223/2523 (OM906LA)",
                "6.3 - 925/1225/1325/1525 (OM906LA)",
                "6.3 - 828/928/1228/1328/1528/1828/1928/2228/2528/2628 (OM906LA)",
                "7.2 - 1333/1533/1833/2533/263 (OM926LA)"
            ]
        },
        "Atego 2": {
            "1 поколение (2004 --->)": [
                "4.2 - 712/812 (OM904LA)",
                "4.2 - 715/815/915/1015/1215 (OM904LA)",
                "4.2 - 818/918/1018/1218/1318/1518 (OM904LA)",
                "4.2 - 713/813 (OM904LA) BLUETEC 4/5/EEV",
                "4.2 - 716/816/916/1016/1216 (OM904LA) BLUETEC 4/5/EEV",
                "4.2 - 818/918/1018/1218/1318/1518/1618 (OM904LA) BLUETEC 4/5/EEV",
                "4.8 - 822/922/1022/1222/1322/1522 (OM924LA) BLUETEC 4/5/EEV",
                "4.8 - 822/922/1022/1222/1322/1522 (OM924LA)",
                "6.3 - 823/923/1023/1223/1323/1523 (OM906LA)",
                "6.3 - 1228/1328/1528 (OM906LA)",
                "6.3 - 824/924/1024/1224/1324/1524/1624 (OM906LA) BLUETEC 4/5/EEV",
                "6.3 - 826/926/1026/1226/1326/1526 (OM906LA) BLUETEC 4/5/EEV",
                "6.3 - 829/929/1029/1229/1329/1529/1629 (OM906LA) BLUETEC 4/5/EEV"
            ]
        },
        "Atego 3": {
            "1 поколение (2013 --->)": [
                "5.1 - 716/816/916/1016/1216 (OM934LA)",
                "5.1 - 718/818/918/1018/1218/1318/1518 (OM934LA)",
                "5.1 - 721/821/921/1021/1221/1321/1521 (OM934LA)",
                "5.1 - 723/823/923/1023/1223/1323/1523 (OM934LA)",
                "7.7 - 824/924/1024/1224/1324/1524 (OM936LA)",
                "7.7 - 927/1227/1327/1527 (OM936LA)",
                "7.7 - 1230/1330/1530 (OM936LA)"
            ]
        },
        "Axor 1": {
            "1 поколение (2001-2004)": [
                "12.0 - 1835/2535 (OM457LA)",
                "12.0 - 1840/2540 (OM457LA)",
                "12.0 - 1843/2543 (OM457LA)"
            ]
        },
        "Axor 2": {
            "1 поколение (2004 --->)": [
                "6.3 - 1823/2523 (OM906LA)",
                "6.3 - 1828/2528/2628/3228 (OM906LA)",
                "6.3 - 1824 (OM906LA) BLUETEC 5/6/EEV",
                "6.3 - 1826 (OM906LA) BLUETEC 5/6/EEV",
                "6.3 - 1829/2529/2629(OM906LA) BLUETEC 5/6/EEV",
                "7.2 - 1833/2533/2633 (OM926LA)",
                "7.2 - 1833/2633 (OM926LA) BLUETEC 5/6/EEV",
                "12.0 - 1835/2535/3235/3335/4135 (OM457LA)",
                "12.0 - 1840/2540/2640/3240/3340/4140 (OM457LA)",
                "12.0 - 1843/2543/2643/3243/3343/4143 (OM457LA)",
                "12.0 - 1836/2536/2636/3236 (OM457LA) BLUETEC 5/6/EEV",
                "12.0 - 1843/2643/3243 (OM457LA) BLUETEC 5/6/EEV",
                "12.0 - 2640/3240 (OM457LA) BLUETEC 5/6/EEV",
                "12.0 - 4144 (OM457.937)"
            ]
        },
        "Sprinter 616": {
            "1 поколение (2001-2006)": [
                "2.6 (616CDI)"
            ]
        }
    },
    "Mitsubishi": {
        "ASX": {
            "1 поколение, вкл.рестайлинги (2010 - Н.В.)": [
                "1.6 MIVEC (4A92)",
                "1.8 MIVEC (4B10)",
                "2.0 MIVEC (4B11)",
                "1.8 DI-D (4N13)"
            ]
        },
        "Carisma": {
            "1 поколение (1999 - 2005)": [
                "1.3 (4G13)",
                "1.6 (4G92)",
                "1.8 (4G93)",
                "1.9 DI-D (F9Q1)"
            ]
        },
        "Colt": {
            "6 поколение, вкл.рестайлинги (Z30) 2002-2011": [
                "1.1 (3A91)",
                "1.3 (4A90)",
                "1.5 (4A91)"
            ]
        },
        "Galant": {
            "8 поколение, вкл.рестайлинг (EAA/EAW) 1998-2003": [
                "2.0 (4G63)",
                "2.5 V6 24V (6A13)",
                "2.0 TDI (4D68)",
                "2.4 GDI (4G64)",
                "2.5 V6 Twin-Turbo VR-4 (6A13)"
            ],
            "9 поколение, рестайлинги (DJ1A) 2006-2012": [
                "2.4 (4G69)"
            ]
        },
        "Grandis": {
            "1 поколение (NA4W) 2004-2009": [
                "2.0 DI-D (BSY)",
                "2.4 (4G69)"
            ]
        },
        "L200": {
            "3 поколение, вкл.рестайлинг (K7T/K6T) 1996-2007": [
                "2.4 4WD (4G64)",
                "2.5 TD 4WD (4D56 TD)"
            ],
            "4 поколение, вкл.рестайлинг (K4T) 2007-2016": [
                "2.5 TD 4WD (4D56 TD)",
                "2.5 (4D56 16V)"
            ],
            "5 поколение, вкл.рестайлинг (KK/KL) 2015 - Н.В.": [
                "2400 DI-D (4N15)"
            ]
        },
        "Lancer": {
            "10 поколение, вкл.рестайлинг (CY) 2007-2016": [
                "1.5 (4A91)",
                "1.6 (4A92)",
                "1.8 (4B10)",
                "2.0 MIVEC (4B11)"
            ],
            "9 поколение, вкл. рестайлинги (CS) 2003 - 2019": [
                "1.6 (4G18)",
                "1.3 (4G13)",
                "2.0 (4G63)"
            ]
        },
        "Lancer Evolution": {
            "10 поколение (CZ4A) 2008-2017": [
                "2.0 16V (4B11)"
            ],
            "9 поколение (CT9A) 2006-2008": [
                "2.0 16V Turbo (4G63)"
            ]
        },
        "Montero": {
            "2 поколение (V75/77W) 1991-2005": [
                "3.5 4WD (6G74)",
                "3.8 4WD (6G75)"
            ]
        },
        "Outlander": {
            "1 поколение (CUW) 2002-2009": [
                "2.0 16V (4G63)",
                "2.0 16V Turbo (4G63)",
                "2.4 (4G69)"
            ],
            "2 поколение, вкл. рестайлинг (CW0W) 2005-2012": [
                "2.4 MIVEC (4B12)",
                "3.0 AWD (6B31)",
                "2.0 16V (4B11)",
                "2.0 DI-D (BSY)",
                "2.2 DI-D 4WD (4HK/4HN)"
            ],
            "3 поколение, вкл. рестайлинги (GFW/GGW) 2012 - Н.В.": [
                "2.0 BiFuel (4B11)",
                "2.4 (4B12)",
                "3.0 GT (6B31)"
            ]
        },
        "Pajero": {
            "3 поколение, вкл. рестайлинг (V60/V70) 1999-2006": [
                "3.2 DI-D (4M41)",
                "2.5 TD (4D56 T)",
                "3.5 V6 GDI (6G74)"
            ],
            "4 поколение, вкл.рестайлинги (V90) 2006-2020": [
                "3.0 V6 (6G72)",
                "3.2 DI-D (4M41)",
                "3.8 4WD (6G75)",
                "3.5 V6 (6G74 DOHC)"
            ]
        },
        "Pajero Pinin": {
            "1 поколение (H67W/H77W) 1999-2005": [
                "1.8 (4G93)",
                "1.8 GDI (4G93)",
                "2.0 GDI (4G94)"
            ]
        },
        "Pajero Sport": {
            "1 поколение, вкл.рестайлинг (K90) 1996-2009": [
                "2.5 TD (4D56 T)",
                "3.0 V6 (6G72)"
            ],
            "2 поколение, вкл.рестайлинг (KH) 2008-2017": [
                "2.5 DI-D (4D56)",
                "3.0 (6B31)",
                "3.2 DI-D (4M41)"
            ],
            "3 поколение, вкл.рестайлинг (KS) 2016 - Н.В.": [
                "2.4 DI-D (4N15)"
            ]
        },
        "Space Star": {
            "1 поколение, вкл.рестайлинг (DG) 1998-2005": [
                "1.3 16V (4G13)",
                "1.6 16V (4G18)",
                "1.8 GDI (4G93)"
            ]
        }
    },
    "Nissan": {
        "Almera": {
            "2 поколение (N16E) 2000-2006": [
                "1.5 (QG15DE)",
                "1.5 dCi (K9K 722)",
                "1.8 (QG18DE)",
                "2.2 Di (YD22)"
            ],
            "3 поколение (G15) 2012-2019": [
                "1.6 (K4M)"
            ]
        },
        "Juke": {
            "1 поколение, вкл.рестайлинг (F15/F15E) 2011-2020": [
                "1.6 LPG (HR16DE)",
                "1.5 dCi (K9K 410/636)",
                "1.6 (HR16DE)",
                "1.6 DIG-T (MR16DDT)"
            ]
        },
        "Maxima": {
            "5 поколение (A33) 2000-2006": [
                "2.0 V6 24V (VQ20DE)",
                "3.0 V6 24V (VQ30DE)"
            ]
        },
        "Micra": {
            "3 поколение, вкл.рестайлинг (K12) 2002-2010": [
                "1.0 16V (CR10DE)",
                "1.2 16V (CR12DE)",
                "1.4i 16V (CR14DE)",
                "1.5 dCi (K9K700)",
                "1.6i 16V 160 SR (HR16DE)"
            ]
        },
        "Murano": {
            "1 поколение (Z50) 2002-2007": [
                "3.5 V6 (VQ35DE)"
            ],
            "2 поколение, вкл.рестайлинг (Z51) 2007-2016": [
                "2.5 dCi (YD25DDTi)",
                "3.5 V6 Russia (VQ35DE)",
                "3.5 V6 (VQ35DE)"
            ]
        },
        "Navara": {
            "1 поколение (D22) 2000-2005": [
                "2.5 dCi+4WD (YD25DDTi)"
            ],
            "2 поколение (D40) 2004-2015": [
                "2.5 dCi (YD25DDTi)",
                "3.0 dCi (V9X)"
            ]
        },
        "Note": {
            "1 поколение, вкл. рестайлинг (E11) 2005-2013": [
                "1.4 (CR14DE)",
                "1.6 (HR16DE)",
                "1.5 dCi (K9K700)"
            ]
        },
        "Pathfinder": {
            "3 поколение, вкл.рестайлинг (R51) 2004-2014": [
                "2.5 dCi (YD25DDTi)",
                "3.0 dCi (V9X)",
                "4.0 4WD (VQ40DE)"
            ],
            "4 поколение (R52R) 2014-2017": [
                "2.5 (QR25DER)",
                "3.5 V6 (VQ35DE)"
            ]
        },
        "Patrol": {
            "5 поколение, вкл.рестайлинги (Y61) 1997-2010": [
                "2.8 TD (RD28Ti)",
                "3.0 DTi (ZD30DDTi)",
                "4.5 TDi (TB45E)",
                "4.8i (TB48DE)"
            ],
            "6 поколение, вкл.рестайлинг (Y62) 2010-2017": [
                "5.6 (VK56VD)"
            ]
        },
        "Primera": {
            "3 поколение (P12) 2001-2008": [
                "1.6 (QG16DE)",
                "1.8 (QG18DE)",
                "1.9 dCi (F9QT)",
                "2.0 (QR20DE)",
                "2.2 DI (YD22DTi)"
            ]
        },
        "Qashqai": {
            "1 поколение, вкл.рестайлинг (J10) 2006-2013": [
                "1.5 dCi (K9K 732/764)",
                "1.6 (HR16DE)",
                "2.0 (MR20DE)",
                "2.0 dCi (M1D/M9R)"
            ],
            "2 поколение, вкл. рестайлинг (J11) 2013-Н.В.": [
                "1.2 (H5FT/HRA2DDT)",
                "1.6 dCi (R9M)",
                "2.0 (MR20DD)"
            ]
        },
        "Sentra": {
            "7 поколение (B17) 2014-2017": [
                "1.6 (HR16DE)"
            ]
        },
        "Teana": {
            "1 поколение, вкл.рестайлинг (J31) 2003-2008": [
                "2.3 V6 (VQ23DE)",
                "2.0 (QR20DE)",
                "3.5 V6 (VQ35DE)"
            ],
            "2 поколение, вкл.рестайлинг (J32) 2008-2014": [
                "2.5 V6 (VQ25DE)",
                "2.5 4WD (QR25DE)",
                "3.5 V6 (VQ35DE)"
            ],
            "3 поколение (L33) 2014-2016": [
                "2.5 (QR25DE)",
                "3.5 V6 (VQ35DE)"
            ]
        },
        "Terrano": {
            "3 поколение (D10) 2014 - Н.В.": [
                "1.6 (H4M)",
                "2.0 (F4R)"
            ]
        },
        "Tiida": {
            "1 поколение (C11/SC11) 2007-2014": [
                "1.6 (HR16DE)",
                "1.8 16V (MR18DE)",
                "1.5 dCi (K9K)"
            ],
            "2 поколение (C13R) 2015-2016": [
                "1.6 (HR16DE)"
            ]
        },
        "X-Trail": {
            "1 поколение, вкл.рестайлинг (T30) 2001-2007": [
                "2.0i (QR20DE)",
                "2.2 dCi (YD22ETi)",
                "2.2 DI TD (YD22DDTi/ETi)",
                "2.5 (QR25DE)"
            ],
            "2 поколение, вкл.рестайлинг (T31) 2007-2015": [
                "2.0 dCi (M9R)",
                "2.0 (MR20DE)",
                "2.0 dCi (M9R 760)",
                "2.5 16V (QR25DE)"
            ],
            "3 поколение, вкл.рестайлинг (T32) 2013 - Н.В.": [
                "1.6 dCi (R9M)",
                "2.0 (MR20DD)",
                "2.5 16V (QR25DE)"
            ]
        }
    },
    "Opel": {
        "Agila": {
            "1 поколение, вкл.рестайлинг (A) 2000-2007": [
                "1.0i 12V (Z10XE/XEP)",
                "1.0i 12V (Z10XE)",
                "1.2i 16V (Z12XE)",
                "1.2i 16V (Z12XEP)"
            ],
            "2 поколение (B) 2007-2014": [
                "1.2 (K12B)",
                "1.0 (K10B)",
                "1.3 CDTI (D13A/Z13DTJ)"
            ]
        },
        "Antara": {
            "1 поколение, вкл.рестайлинг (C105/145) 2006-2015": [
                "2.0 CDTI (Z20DMH)",
                "2.2 CDTi (A22DM)",
                "2.4 (A24XE)",
                "2.2 CDTi (A22DMH)",
                "2.4 (Z24XE)",
                "3.0 (A30XF/A30XH)",
                "3.2 V6 (Z32SE)"
            ]
        },
        "Astra": {
            "2 поколение, вкл.рестайлинги (Astra G) 1998-2009": [
                "1.2 16V (Z12XE)",
                "1.2 16V (X12XE)",
                "1.4 16V (X14XE/Z14XE)",
                "1.6 16V (Z16XEP)",
                "1.6 (Z16SE)",
                "1.6 (X16SZR)",
                "1.6 (X16XEL/Z16XE/Z16XEP)",
                "1.7 CDTI (Z17DTL)",
                "1.7 DTI (Y17DT)",
                "1.7 TD (X17DTL)",
                "1.8 16V (X18XE1)",
                "1.8 16V (X18XE)",
                "2.0 16V (X20XEV)",
                "2.0 DI/TD (X20DTL/Y20DTL)",
                "2.0 DTI 16V (X20DTH/Y20DTH)",
                "2.2 16V (Z22SE)",
                "2.2 DTI 16V (Y22DTR)",
                "1.7 TD (X17DT)"
            ],
            "3 поколение, включая рестайлинги (Astra H) 2004-2010": [
                "1.2 16V (Z12XEP)",
                "1.3 CDTI (Z13DTH)",
                "1.4 16V (Z14XEP)",
                "1.6 16V (Z16XER/A16XER)",
                "1.6 16V (Z16XEP)",
                "1.6 16V Turbo (Z16LET)",
                "1.7 CDTI (A17DTJ/Z17DTJ)",
                "1.7 CDTI (Z17DTH)",
                "1.7 CDTI (A17DTR/Z17DTR)",
                "1.8 16V (Z18XE)",
                "1.8 16V (A18XER/Z18XER)",
                "1.9 CDTI (Z19DT/Z19DTL)",
                "2.0 16V Turbo (Z20LEL)",
                "2.0 16V Turbo (Z20LER)",
                "2.0 16V Turbo OPC (Z20LEH)"
            ],
            "4 поколение, вкл.рестайлинги (Astra J) 2009-2015": [
                "1.3 CDTi (A13DTE)",
                "1.4 16V Turbo (A14NET)",
                "1.4 16V (A14XEL)",
                "1.4 16V (A14XE /B14XER)",
                "1.6 16V (A16XER)",
                "1.6 16V SIDI Turbo (A16XHT)",
                "1.6 16V Turbo (A16LET)",
                "1.7 CDTi (A17DTR)",
                "1.7 CDTi (A17DTJ/Z17DTJ/A17DTC/A17DTE)",
                "2.0 CDTi (A20DTH)"
            ]
        },
        "Combo": {
            "3 поколение, вкл.рестайлинг (F06) 2001-2010": [
                "1.3 CDTI (Z13DTJ)",
                "1.4 16V (Z14XEP)"
            ]
        },
        "Corsa": {
            "3 поколение, вкл. рестайлинги (С) 2000-2006": [
                "1.0 12V (Z10XE)",
                "1.0 12V (Z10XEP)",
                "1.2 16V (Z12XE)",
                "1.2 16V (Z12XEP)",
                "1.3 CDTI (Z13DTJ)",
                "1.4 16V (Z14XE)",
                "1.4 16V (Z14XEP)",
                "1.7 CDTI (Z17DTH)",
                "1.7 DI (Y17DTL)",
                "1.7 DTI (Y17DT)",
                "1.8 GSI (Z18XE)"
            ],
            "4 поколение, вкл.рестайлинг (D) 2006-2014": [
                "1.2 16V (A12XER)",
                "1.2 16V (Z12XEP)",
                "1.0 12V (Z10XEP/A10XEP)",
                "1.3 CDTI (A13DTC/Z13DTJ)",
                "1.3 CDTI (Z13DTH)",
                "1.3 CDTi (A13DTE/A13DTR/Z13DTE)",
                "1.4 16V Turbo (A14NEL)",
                "1.4 16V (A14XER)",
                "1.4 16V (Z14XEP)",
                "1.6 16V Turbo (Z16LER)",
                "1.6 16V Turbo (Z16LEL)",
                "1.7 CDTI (A17DTR/Z17DTR)"
            ]
        },
        "Frontera": {
            "2 поколение, вкл.рестайлинг (B) 1998-2004": [
                "2.2 DTI (Y22DTH)",
                "2.2 DTI (X22DTH)",
                "2.2i (X22SE/Y22SE)",
                "3.2i (6VD1/Y32NE)"
            ]
        },
        "Insignia": {
            "1 поколение, вкл.рестайлинг (G09) 2008-2015": [
                "1.6 (A16XER)",
                "1.6 16V SIDI Turbo (A16XHT)",
                "1.6 Turbo (A16LET)",
                "1.8 (A18XER)",
                "2.0 CDTI (A20DTR)",
                "2.0 CDTi (A20DTH)",
                "2.0 CDTi (A20DT/DTJ)",
                "2.0 CDTi (A20DTC/DTL)",
                "2.0 Turbo (A20NHT)",
                "2.8 V6 Turbo (A28NET)",
                "2.8 V6 Turbo (A28NER)"
            ]
        },
        "Meriva": {
            "1 поколение, вкл.рестайлинг (A) 2002-2010": [
                "1.3 CDTI (Z13DTJ)",
                "1.3 CDTI (Y13DT/Z13DT)",
                "1.4 16V (Z14XEP)",
                "1.6 16V (Z16XEP)",
                "1.6 (Z16SE)",
                "1.6 16V (Z16XE)",
                "1.6 16V Turbo (Z16LET)",
                "1.7 CDTI (Z17DTH)",
                "1.7 CDTI (A17DTR/Z17DTR)",
                "1.7 DTI (Y17DT)",
                "1.8 16V (Z18XE)"
            ],
            "2 поколение, вкл.рестайлинг (B) 2009-2015": [
                "1.4 (A14XER/B14XER)",
                "1.4 (A14NEL/B14NEL)",
                "1.4 (A14NET)",
                "1.7 CDTi (A17DTC/A17DTI)",
                "1.7 CDTi (A17DT)"
            ]
        },
        "Mokka": {
            "1 поколение (2012-2015)": [
                "1.4 Turbo (A14NET)",
                "1.6 (A16XER/B16XER/D16XER)",
                "1.7 CDTI (A17DTS)",
                "1.8 (A18XER)"
            ]
        },
        "Omega": {
            "2 поколение, вкл.рестайлинг (Omega-B) 1994-2003": [
                "2.0i (X20SE)",
                "2.0 16V (X20XEV)",
                "2.0 TDI 16V (X20DTH/Y20DTH)",
                "2.2 16V (Y22XE/Z22XE)",
                "2.2 DTI 16V (Y22DTH)",
                "2.5 TD (X25TD)",
                "2.5i (X25XE)",
                "2.6 V6 (Y26SE)",
                "3.0i MV6 (X30XE)",
                "3.2 V6 (Y32SE)"
            ]
        },
        "Tigra": {
            "2 поколение (B) 2004-2009": [
                "1.3 CDTI (Z13DT)",
                "1.4 16V (Z14XEP)",
                "1.8 16V (Z18XE)"
            ]
        },
        "Vectra": {
            "2 поколение, вкл.рестайлинг (B) 1995-2003": [
                "1.6i (X16SZR)",
                "1.6 16V (Z16XE)",
                "1.8 FlexFuel (X18XE)",
                "1.8 16V (Z18XE)",
                "2.0 D 16V (X20DTL)",
                "2.0 TDI 16V (X20DTH/Y20DTH)",
                "2.0i (20NEJ)",
                "2.0 16V (X20XEV)",
                "2.2 16V (Z22SE)",
                "2.2 DTI 16V (Y22DTR)",
                "2.5i V6 (X25XE)",
                "2.6 V6 (Y26SE)"
            ],
            "3 поколение, вкл.рестайлинг (C) 2002-2009": [
                "1.6 16V (Z16XEP)",
                "1.6 16V (Z16XE)",
                "1.8 16V (A18XER/Z18XER)",
                "1.8 16V (Z18XEL)",
                "1.8 16V (Z18XE)",
                "1.9 CDTI (Z19DT)",
                "1.9 CDTI (Z19DTH)",
                "2.0 Turbo (Z20NET)",
                "2.0 TDI 16V (X20DTH/Y20DTH)",
                "2.2 16V (Z22SE)",
                "2.2 DTI 16V (Y22DTR)",
                "2.2 16V direct (Z22YH)",
                "2.8 V6 Turbo (Z28NEL)",
                "2.8 V6 Turbo (Z28NET)",
                "3.0 V6 CDTI (Y30DT)",
                "3.0 V6 CDTI (Z30DT)",
                "3.2 V6 GTS (Z32SE)"
            ]
        },
        "Zafira": {
            "1 поколение, вкл.рестайлинг (A) 1999-2006": [
                "1.6 16V (X16XEL/Z16XE)",
                "1.8 16V (X18XE1)",
                "1.8 16V (Z18XE)",
                "2.0 DTI 16V (X20DTL)",
                "2.0 DTI 16V (Y20DTH)",
                "2.0 OPC Turbo (Z20LET/Z20LER)",
                "2.0 OPC Turbo (Z20LET)",
                "2.2 16V (Z22SE)",
                "2.2 DTI 16V (Y22DTR)"
            ],
            "2 поколение, вкл.рестайлинг (B) 2005-2015": [
                "1.6 (Z16XEP/Z16XE1)",
                "1.6 (Z16XER/A16XER)",
                "1.7 CDTi (Z17DTJ/A17DTJ)",
                "1.7 CDTI (A17DTR/Z17DTR)",
                "1.8 (A18XER/Z18XER)",
                "1.9 CDTI (Z19DT/DTJ)",
                "1.9 CDTI (Z19DTH)",
                "2.0 Turbo OPC (Z20LEH)",
                "2.0 Turbo (Z20LER)",
                "2.2 Direct (Z22YH)"
            ],
            "3 поколение (C) 2011-2015": [
                "1.4 Turbo (A14NET)",
                "1.4 16V Turbo (A14NEL)",
                "1.6 16V SIDI Turbo (A16XHT)",
                "1.8 (A18XER)",
                "1.8 (A18XEL)",
                "2.0 CDTi (A20DTH)",
                "2.0 CDTi (A20DT/B20DTJ)"
            ]
        }
    },
    "Peugeot": {
        "1007": {
            "1 поколение (KM) 2005-2009": [
                "1.4 (TU3JP)",
                "1.4 16V (ET3J4)",
                "1.4 HDi 70 (DV4TD)",
                "1.6 16V (TU5JP4)",
                "1.6 HDi 110 (DV6TED4)"
            ]
        },
        "107": {
            "1 поколение, вкл.рестайлинги (PM/PN) 2005-2014": [
                "1.0 (1KR-FE)",
                "1.4 HDi (DV4TD)"
            ]
        },
        "2008": {
            "1 поколение, вкл.рестайлинг (2014-2019)": [
                "1.6 VTi 120 (EP6C)"
            ]
        },
        "206": {
            "1 поколение, вкл.рестайлинги (1998-2009)": [
                "1.1i (TU1JP)",
                "1.4 (TU3JP/TU3A)",
                "1.6 16V (TU5JP4)"
            ]
        },
        "207": {
            "1 поколение, вкл.рестайлинги (2006 - 2015)": [
                "1.4 BiFuel (TU3A)",
                "1.4 VTi (EP3)",
                "1.4 16V (ET3J4)",
                "1.4 HDi 70 (DV4TD/TED/TED4, DV4C)",
                "1.6 16V (TU5JP4)",
                "1.6 16V Turbo RC (EP6DTS)",
                "1.6 16V Turbo (EP6DT)",
                "1.6 16V Turbo (EP6DT-5FX)",
                "1.6 VTi (EP6C)",
                "1.6 HDi 90 (DV6ATED4)",
                "1.6 HDi 110 FAP (DV6TED4)",
                "1.6 HDi 110 FAP (DV6CTED)"
            ]
        },
        "208": {
            "1 поколение (2012-2016)": [
                "1.0 VTi (EB0)",
                "1.2 VTi (EB2)",
                "1.4 HDi 70 FAP (DV4C)",
                "1.4 VTi 95 (EP3C)",
                "1.6 HDi 90 FAP (DV6DTED)",
                "1.6 THP 156 (EP6CDT)",
                "1.6 VTi (EP6C)"
            ]
        },
        "3008": {
            "1 поколение, вкл.рестайлинг (2010-2017)": [
                "1.6 HDi (DV6TED4)",
                "1.6 THP (EP6DT/EP6CDTM)",
                "1.6 THP (EP6CDT)",
                "1.6 VTI (EP6)",
                "2.0 HDi/BlueHDi 150(DW10CTED4/DW10FD)",
                "2.0 HDi (DW10CTED4)"
            ]
        },
        "301": {
            "1 поколение (2013-2016)": [
                "1.2 VTi (EB2)",
                "1.6 HDi 92 (DV6DTED)",
                "1.6 VTi 115 (EC5)"
            ]
        },
        "307": {
            "1 поколение, вкл.рестайлинг (2001-2007)": [
                "1.6 16V (TU5JP4)",
                "1.6 HDI 110 (DV6TED4)",
                "2.0 16V (EW10J4)",
                "2.0 16V (EW10A)",
                "2.0 HDI FAP (DW10ATED)",
                "2.0 HDI 90 (DW10TD)"
            ]
        },
        "308": {
            "1 поколение, вкл.рестайлинг (T7) 2007-2015": [
                "1.4 (EP3)",
                "1.6 16V Turbo (EP6DT)",
                "1.6 16V (EP6)",
                "1.6 16V Turbo (EP6DTS)",
                "1.6 16V Turbo (EP6CDT)",
                "1.6 GTI (EP6CDTX)",
                "1.6 HDi (DV6TED4)",
                "1.6 HDi 90 FAP (DV6DTED)",
                "1.6 HDi (DV6ATED4)",
                "1.6 HDi 110 FAP (DV6CTED)",
                "2.0 HDi (DW10BTED4)"
            ]
        },
        "4007": {
            "1 поколение (GP) 2007-2014": [
                "2.0 16V (4B11)",
                "2.2 HDi 155 (DW12MTED4)",
                "2.4 16V (4B12)"
            ]
        },
        "4008": {
            "1 поколение (2012-2015)": [
                "2.0i (4B11)"
            ]
        },
        "407": {
            "1 поколение, вкл.рестайлинг (2004-2010)": [
                "1.6 HDi 16V (DV6TED4)",
                "1.8 16V (EW7J4)",
                "1.8 16V (EW7A/EW7J4)",
                "2.0 16V (EW10J4)",
                "2.0 16V (EW10A)",
                "2.0 HDi 135 FAP (DW10BTED4)",
                "2.2 16V (EW12J4)",
                "3.0 24V (ES9A)"
            ]
        },
        "408": {
            "1 поколение, вкл.рестайлинг (2012 - Н.В.)": [
                "1.6 (TU5JP4)",
                "1.6 HDi (DV6CTED)",
                "1.6 THB 150 (EP6CDTMD)",
                "1.6 (EP6)"
            ]
        },
        "5008": {
            "1 поколение, вкл.рестайлинг (T8) 2009-2017": [
                "1.6 16V (EP6CDT)",
                "1.6 HDi (DV6CTED)",
                "1.6 HDi (DV6TED4)",
                "2.0 HDi,BlueHDi (DW10CTED4/DW10FD)"
            ]
        },
        "508": {
            "1 поколение, вкл.рестайлинг (2011-2018)": [
                "1.6 THP (EP6CDT)",
                "1.6 VTi (EP6C)",
                "2.0 HDI (DW10BTED4)",
                "2.2 HDI (DW12C)"
            ]
        },
        "607": {
            "1 поколение, вкл.рестайлинг (9D) 1999-2008": [
                "2.2 16V (EW12J4)",
                "2.2 HDI (DW12TED4)",
                "3.0 V6 24V (ES9A)",
                "3.0 V6 24V (ES9J4S)"
            ]
        },
        "807": {
            "1 поколение, вкл.рестайлинг (2002-2014)": [
                "2.2 HDi FAP (DW12TED4)"
            ]
        }
    },
    "Renault": {
        "Clio": {
            "2 поколение (SB0/1/2, BB0/1/2, CB0/1/2) 1998-2005": [
                "1.5 dCi (K9K 704/K9K 700)",
                "1.2 16V (D4F706/712/714/722/728)",
                "1.4 16V (K4J712/713/714/750)",
                "1.6 16V (K4M748)",
                "2.0 16V Sport (F4R 730/732/736)",
                "2.0 16V Sport (F4R 738)"
            ],
            "3 поколение (BR0/1, CR0/1, KR0/1) 2005-2012": [
                "1.2 16V (D4F 740)",
                "1.4 16V (K4J 780)",
                "1.5 dCi (K9K 764)",
                "1.5 dCi (K9K766/K9K770/K9K772/750)",
                "1.6 16V (K4M 804)",
                "1.6 16V (K4M 800/801)",
                "1.6 16V GT (K4M 862)",
                "2.0 16V (M4R 700/701)",
                "2.0 16V Sport (F4R 830)"
            ]
        },
        "Duster": {
            "1 поколение, вкл. рестайлинг (HSA/HSM) 2010-2018": [
                "1.5 dCi 4WD (K9K 884)",
                "1.5 dCi 4WD (K9K 858)",
                "1.6 (H4M 438)",
                "1.6 4WD (H4M 438)",
                "1.6 16V (K4M 690)",
                "1.6 16V 4WD (K4M 606)",
                "2.0 (F4R 400/402/403)",
                "2.0+4WD (F4R 410)"
            ]
        },
        "Fluence": {
            "1 поколение, вкл. рестайлинг (2009 - 2017)": [
                "1.5 dCi (K9K 836/837)",
                "1.5 dCi (K9K 830)",
                "1.6 16V (H4M 729)",
                "1.6 16V (K4M 838/839)",
                "2.0 16V (M4R 714/751)"
            ]
        },
        "Grand Scenic": {
            "1 поколение (JM0/1) 2004-2009": [
                "1.5 dCi (K9K 732/734/P732)",
                "1.5 dCi (K9K 728)",
                "1.6 (K4M 788)",
                "1.6 16V (K4M 760/762/812)",
                "1.9 dCi (F9Q 816/818/J 803)",
                "1.9 dCi (F9Q 812)",
                "1.9 dCi (F9Q E 804)",
                "2.0 (F4R 770/771)",
                "2.0 (F4R 776)",
                "2.0 dCi (M9R 700/740)"
            ],
            "2 поколение, вкл. рестайлинг (JZ0/1) 2009-2016": [
                "1.4 16V (H4J 700)",
                "1.5 dCi (K9K 832)",
                "1.5 dCi (K9K 636/837/836)",
                "1.5 dCi (K9K 846)",
                "1.5 dCi (K9K 830)",
                "1.6 16V Bifuel (K4M 866)",
                "1.6 dCi 130 (R9M 402/404)",
                "1.9 dCi (F9Q 870/872)",
                "2.0 16V (M4R 711/713)",
                "2.0 dCi (M9R 615)"
            ]
        },
        "Kangoo": {
            "1 поколение (FC0/1, KC0/1) 1997-2009": [
                "1.2 (D7F 726/744/746)",
                "1.4 (E7J 634/635/780, K7J 700/701)",
                "1.5 dCi (K9K 702)",
                "1.5 dCi (K9K 710)",
                "1.5 dCi (K9K 718)",
                "1.5 dCi (K9K 714)",
                "1.9 D (F8Q 662)",
                "1.9 D (F8Q 630/632)"
            ],
            "2 поколение, вкл. рестайлинг (KW0/1) 2008-2016": [
                "1.5 dCi (K9K 800/802)",
                "1.5 dCi (K9K 804/806)",
                "1.6 16V (K4M 830)",
                "1.6 16V LPG (K4M 834)",
                "1.6 8V (K7M 750)"
            ]
        },
        "Koleos": {
            "1 поколение, вкл.рестайлинг (2007 - 2016)": [
                "2.0 dCi (M9R 833/855/856/862/865/866/832/836)",
                "2.0 dCi (M9R 864/865/866/830)",
                "2.0 dCi 4WD (M9R 864/865/866/830)",
                "2.5 (2TRB700)"
            ]
        },
        "Laguna": {
            "1 поколение (B56/556) 1993-2001": [
                "2.0 (F3R 728/729)",
                "2.0 (F3R-768/769)"
            ],
            "2 поколение (BG0/1, KG0/1) 2001-2007": [
                "1.6 16V (K4M 716)",
                "1.6 16V (K4M 710/711/714)",
                "1.8 16V (F4P 770/773/772)",
                "1.9 dCi (F9Q 754)",
                "1.9 dCi (F9Q 664)",
                "1.9 dCi (F9Q 752)",
                "2.0 16V (F4R 712/713/714/715)",
                "2.0 16V Turbo (F4R 764)",
                "3.0 V6 24V (L7X 731)"
            ],
            "3 поколение (BT0/1, KT0/1, DT0/1) 2007-2015": [
                "1.5 dCi (K9K 780)",
                "1.6 16V (K4M 824)",
                "2.0 16V Turbo (F4R 811)",
                "2.0 16V GT Turbo (F4R 800)",
                "2.0 16V (M4R 704)",
                "2.0 dCi (M9R 742/802/805)",
                "2.0 dCi (M9R 742/744/802)",
                "2.0 dCi (M9R 800)",
                "2.0 dCi (M9R 816)",
                "3.0 dCi (V9X 791/891)"
            ]
        },
        "Latitude": {
            "1 поколение, вкл.рестайлинг (L70) 2010-2015": [
                "2.0 16V (M4R 746/730/735)",
                "2.0 dCi (M9R 804/817/844)",
                "2.0 dCi (M9R 824/846)",
                "3.0 dCi (V9X 891)"
            ]
        },
        "Logan": {
            "1 поколение, вкл. рестайлинг (LS) 2004-2016": [
                "1.4 (K7J 710)",
                "1.6 (K7M 710)",
                "1.5 dCi (K9K 796)",
                "1.5 dCi (K9K 790/792)",
                "1.6 (K7M 800/718)",
                "1.6 (K4M 690/697)"
            ],
            "2 поколение (L8) 2014 - Н.В.": [
                "1.6 (K7M 812)",
                "1.6 16V (H4M 438)",
                "1.6 16V (K4M 842/845)"
            ]
        },
        "Megane": {
            "1 поколение (JA0/1) 1996-2001": [
                "1.6 16V (K4M 708/700/701/704)",
                "1.6 e (K7M 702/703)"
            ],
            "2 поколение, вкл. рестайлинг (KA0/1, BM0/1, CM0/1, KM0/1, LM0/1, EM0/1) 1999-2009": [
                "1.4 16V (K4J 730/740)",
                "1.4 16V (K4J 732)",
                "1.5 dCi (K9K 728/729)",
                "1.5 dCi (K9K 732)",
                "1.5 dCi (K9K 724)",
                "1.5 dCi (K9K 734)",
                "1.5 dCi (K9K 722)",
                "1.6 16V (K4M 760/761/812/813)",
                "1.6 16V (K4M 762)",
                "1.9 dCi (F9Q 808)",
                "1.9 dCi (F9Q 800)",
                "1.9 dCi (F9Q 803)",
                "2.0 (F4R 770M)",
                "2.0 dCi (M9R 700/740)"
            ],
            "3 поколение (BZ0, DZ0, KZ0/1, EZ0/1) 2008-2016": [
                "1.4 16V (H4J 700)",
                "1.5 dCi FAP (K9K 636/832/836/837/846)",
                "1.5 dCi FAP (K9K H 834)",
                "1.5 dCi FAP (K9K F 830)",
                "1.6 16V (K4M 858)",
                "1.6 16V (K4M 848)",
                "1.9 dCi FAP (F9Q 870/872)",
                "2.0 16V TCe (F4R 870/872)",
                "2.0 16V (M4R 711)",
                "2.0 dCi FAP (M9R 615)",
                "2.0 dCi FAP (M9R 610)"
            ]
        },
        "Sandero": {
            "1 поколение (BS0) 2009-2014": [
                "1.4 (K7J 710)",
                "1.6 MPI (K7M 800/718)",
                "1.6 (K4M 690/697)",
                "1.6 MPI (K7M 710)"
            ],
            "2 поколение (5S) 2012-2018": [
                "1.2 16V (D4F 732)",
                "1.6 16V (K7M 812)",
                "1.6 16V (K4M 690)"
            ]
        },
        "Symbol": {
            "1 поколение (LB0/1/2) 1998-2009": [
                "1.4 (K7J 700)",
                "1.4 16V (K4J 712/713)",
                "1.5 dCi (K9K 740)",
                "1.5 dCi (K9K 718)",
                "1.5 dCi (K9K 700)"
            ],
            "2 поколение (LU3) 2008-2012": [
                "1.4 16V (K4J 712/713)",
                "1.5 dCi (K9K 740)",
                "1.5 dCi (K9K 718)",
                "1.5 dCi (K9K 700)",
                "1.6 16V (K4M 743)"
            ]
        }
    },
    "Renault Truck": {
        "Kerax": {
            "1 поколение": [
                "9.8 - 260/300/340 (MIDR 06.20.45)",
                "11.1 - 350/385/400 (MIDR 06.23.56)",
                "270/320/370/420 (DCI 11)",
                "10.8 - 370/410/440/450 DXi (DXI 11) Euro 4/5",
                "10.8 - 380/430/460 DXi (DXI 11) Euro 4/5"
            ]
        },
        "Magnum": {
            "1 поколение": [
                "12.0 - AE380/385/420 (MIDR 06.35.40 + H)",
                "12.1 - AE440/480 (DXi 12)",
                "12.8 - AE440/460/480/500/520 (DXi 13) Euro 4/5"
            ]
        },
        "Mascott": {
            "1 поколение (2001-2010)": [
                "2.8 - 110/130/150 (DCi 2.8)",
                "3.0 - 120/130/150/160 (DXI 3)"
            ]
        },
        "Midlum": {
            "1 поколение": [
                "220/270 (DCI 6-220/270) - 1 series",
                "4.8 160/180/190/220 (DXI 5) - 2 series",
                "7.2 240/270/280/300 (DXI 7) - 2 series"
            ]
        },
        "Premium": {
            "1 поколение": [
                "HD 220/270 dCi (DCI 6)",
                "HD 320/370/420 dCi (DCI 11)",
                "HR 370/420 dCi (DCI 11)",
                "7.2 - HD 240/270/310/340 (DXI 7)",
                "10.8 - HD 370/380/410/430/450/460 (DXI 11) Euro 4/5",
                "10.8 - HR 330/370/380/410/430-460 (DXI 11) Euro 2/3/4/5"
            ]
        }
    },
    "SCANIA": {
        "4-Series (94-164)": {
            "1 поколение (1995-2004)": [
                "9.0 - P/R/T94 (DSC9) Euro 2",
                "9.0 - P/R/T94 (DC9) Euro 3",
                "10.6 - P/R114 (DSC11) Euro 2",
                "10.6 - P/R/T114 (DC11) Euro 3",
                "11.7 - P/R/T124 (DSC12) Euro 2",
                "11.7 - P/R/T124 (DC12) Euro 3",
                "11.7 - P/R/T124 (DT12.02) Euro 3",
                "14.2 - R/T144 (DSC14) Euro 2",
                "14.2 - R/T144 (DSC14.13) Euro 2",
                "14.2 - R/T144 (DSC14.15) Euro 2",
                "15.6 - R/T164 (DC16.01) Euro 3",
                "15.6 - R/T164 (DC16.02) Euro 3"
            ]
        },
        "G-Series (G230-G490)": {
            "1 поколение (2007 --->)": [
                "8.8 - G230/270/310 (DC9 16/17/18) Euro 4",
                "11.7 - G420/470/480 (DT12) Euro 3/4",
                "9.3 - G250/280/320/360 (DC09) Euro 6",
                "11.7 - G340/380/420 (DC12) Euro 4/5",
                "12.7 - G370/410/450/490 (DC13) Euro 6",
                "12.7 - G440/480 (DC13) Euro 4/5"
            ]
        },
        "P-Series (P230-P490)": {
            "1 поколение (2004 --->)": [
                "8.8 - P230/280/320/325 (DC9) Euro 5/EEV",
                "8.8 - P230/270/310 (DC9) Euro 4",
                "8.8 - P230/270/310 (DC9) Euro 3",
                "10.6 - P340/380 (DC11) Euro 3",
                "9.3 - G250/280/320/360 (DC09) Euro 5/6",
                "11.7 - G420/470/480 (DT12) Euro 3/4",
                "11.7 - G340/380/420 (DC12) Euro 3/4/5",
                "12.7 - G370/410/450/490 (DC13) Euro 6",
                "12.7 - G360/400/480 (DC13) Euro 5"
            ]
        },
        "R-Series (R230-R730)": {
            "1 поколение (2004 --->)": [
                "8.8 - R230/270/310 (DC9) Euro 3",
                "8.8 - R230/270/310 (DC9) Euro 4",
                "10.6 - R340/380 (DC11) Euro 3",
                "9.3 - R250/280/320/360 (DC09) Euro 6",
                "11.7 - R470 (DT12) Euro 4",
                "11.7 - R420/470/480 (DT12) Euro 3/4",
                "11.7 - R340/380/420 (DC12) Euro 3/4/5",
                "11.7 - R420 (DC12) Euro 3",
                "12.7 - R370/410/450/480/490 (DC13) Euro 6",
                "12.7 - R360/400/440/480 (DC13) Euro 5",
                "12.7 - R440 (DC13) Euro 6",
                "15.6 - R520/580/730 (DC16) Euro 5/EEV или Euro 6",
                "15.6 - R500/580 (DC16) Euro 3",
                "15.6 - R500/560/620 (DC16) Euro 4",
                "15.6 - R500/560/620 (DC16) Euro 5"
            ]
        }
    },
    "Seat": {
        "Alhambra": {
            "1 поколение (7V8/7V9) 1996-2010": [
                "1.8 T 20V (AJH/AWC)",
                "1.9 TDI (AJM/AUY/BVK)",
                "1.9 TDI (AFN/AVG)",
                "1.9 TDI (ASZ)",
                "1.9 TDI (1Z/AHU/ANU)",
                "1.9 TDI (BTB)",
                "1.9 TDI 4WD (AJM/AUY/BVK)",
                "2.0 TDI (BRT)",
                "2.0 (ADY/ATM)",
                "2.8 V6 (AYL)"
            ],
            "2 поколение (710) 2010-2020": [
                "1.4 TSI (CAVA/CNWB/CTHA/CZDA/DJKA)",
                "2.0 TDI (CFGC)",
                "2.0 TDI (CFFA)",
                "2.0 TDI (CFFB)",
                "2.0 TDI (CFFE/CUVA)",
                "2.0 TDI (CFGB)",
                "2.0 TSI (CCZA)"
            ]
        },
        "Altea": {
            "1 поколение, вкл. XL, Freetrack (5P1/5P5/5P8) 2004-2015": [
                "1.2 TSI (CBZB)",
                "1.4 16V (CGGB/BXW)",
                "1.4 TSI (CAXC)",
                "1.6 (BGU/BSE/BSF/CCSA/CHGA/CMXA)",
                "1.6 Multifuel (CMXA)",
                "1.6 TDI (CAYC)",
                "1.6 TDI (CAYB)",
                "1.8 TFSI (BYT/BZB/CDAA)",
                "1.9 TDI (BJB/BKC/BXE/BLS)",
                "1.9 TDI (BXF)",
                "2.0 FSI (BHD/BLR/BLY/BVY/BVZ)",
                "2.0 TDI (BKD/BMM/CFHC)",
                "2.0 TDI FR (BMN/CEGA/CFJA)",
                "2.0 TFSI (CCZB)",
                "2.0 Turbo FSI (BWA)"
            ]
        },
        "Arosa": {
            "1 поколение (6H1) 1997-2004": [
                "1.0 (AER/ALD/ALL/ANV/AUC)",
                "1.4 (AEX/AKK/AKV/ANW/APQ/AUD)",
                "1.4 16V (AFK/ANM/AQQ)",
                "1.4 TDI (AMF)",
                "1.7 SDI (AKU)"
            ]
        },
        "Cordoba": {
            "3 поколение (6L2) 2002-2009": [
                "1.2 (AZQ/BME)",
                "1.2 12V (BXV)",
                "1.4 16V (BXW)",
                "1.4 16V (BBY/BKY)",
                "1.4 16V (AUB/BBZ)",
                "1.4 TDI (BMS/BNV)",
                "1.4 TDI (BNM)",
                "1.4 TDI (AMF)",
                "1.6 16V (BTS)",
                "1.9 SDI (ASY)",
                "1.9 TDI (ASZ/BLT)",
                "1.9 TDI (ATD/AXR/BMT)",
                "2.0 (AZL/BBX)"
            ]
        },
        "Ibiza": {
            "4 поколение (6L1) 2002-2009": [
                "1.2 (BBM)",
                "1.2 (AZQ/BME)",
                "1.2 12V (BXV)",
                "1.4 16V (BBY/BKY)",
                "1.4 16V (AUB/BBZ)",
                "1.4 16V (BXW)",
                "1.4 TDI (AMF)",
                "1.4 TDI (BMS/BNV)",
                "1.4 TDI (BNM)",
                "1.6 (BAH)",
                "1.6 16V (BTS)",
                "1.9 SDI (ASY)",
                "1.9 TDI (ATD/AXR/BMT)",
                "1.9 TDI (ASZ/BLT)",
                "2.0 (AZL/BBX)"
            ],
            "5 поколение (6J5/6P5) 2008-2015": [
                "1.2 TDI (CFWA)",
                "1.2 (BZG/CGPA)",
                "1.2 TSI (CBZB)",
                "1.4 (CGGB/BXW)",
                "1.4 TDI (BMS)",
                "1.4 TSI (CNUB/CTHF/CTJB/CAVF)",
                "1.6 16V (BTS)",
                "1.6 TDI (CLNA/CAYC)",
                "1.6 TDI (CAYB)",
                "1.9 TDI (BXJ)",
                "1.9 TDI (BLS)",
                "2.0 TDI (CFHD)"
            ]
        },
        "Leon": {
            "1 поколение (1M1) 1999-2006": [
                "1.4 16V (AHW/APE)",
                "1.6 (AEH/AKL/APF)",
                "1.6 (BFQ)",
                "1.6 16V (ATN/AUS/AZD/BCB)",
                "1.8 20V (AGN/APG)",
                "1.8 20V T (APP/AUQ)",
                "1.8 T Cupra R (BAM)",
                "1.9 SDI (AQM)",
                "1.9 TDI (ARL)",
                "1.9 TDI (AGR/ALH)",
                "1.9 TDI (AXR)",
                "1.9 TDI (ASZ)",
                "1.9 TDI (AHF/ASV)",
                "2.8 Cupra 4 (AUE/BDE)"
            ],
            "2 поколение (1P1) 2005-2012": [
                "1.2 TSI (CBZB)",
                "1.4 16V (CGGB/BXW)",
                "1.4 TSI (CAXC)",
                "1.6 (BGU/BSE/BSF/CCSA/CHGA/CMXA)",
                "1.8 TFSI (BYT/BZB/CDAA)",
                "1.9 TDI (BKC/BLS/BXE)",
                "2.0 FSI (BLR/BLY/BVY/BVZ)",
                "2.0 TDI (BKD/BMM/CFHC/CLCB)",
                "2.0 TDI (AZV)",
                "2.0 TDI (BMN/CEGA/CFJA)",
                "2.0 TFSI (BWJ/CDLD)",
                "2.0 TFSI (BWA)",
                "2.0 TFSI (CDLA)",
                "2.0 TFSI (CCZB)"
            ],
            "3 поколение (5F1/5F5/5F8) 2012-2015": [
                "1.2 TSI (CJZB/CYVA)",
                "1.2 TSI (CJZA)",
                "1.4 TSI (CHPA/CPTA)",
                "1.4 TSI (CMBA/CPVA/CUKA/CXSA)",
                "1.6 TDI (CLHA)",
                "1.6 TDI (CLHB)",
                "1.8 TSI (CJSA/CJSB)"
            ]
        }
    },
    "Skoda": {
        "Fabia": {
            "1 поколение (6Y2/6Y3/6Y5) 1999-2008": [
                "1.2 (AZQ/BME)",
                "1.2 (AWY/BMD)",
                "1.4 (AZE/AZF)",
                "1.4 (AME/AQW/ATZ)",
                "1.4 (AUA/BBY/BKY)",
                "1.4 (BUD)",
                "1.4 16V (AUB/BBZ)",
                "1.4 TDI (BNV/BMS)",
                "1.4 TDI (AMF/BAY)",
                "1.4 TDI (BNM)",
                "1.9 SDI (ASY)",
                "1.9 TDI (ATD/AXR)",
                "2.0 (AQY/AZL)"
            ],
            "2 поколение (5J2/5J5) 2006-2014": [
                "1.2 (BBM/CHFA/CGPB)",
                "1.2 (CHTA/BZG/CEVA/CGPA)",
                "1.2 TSI (CBZB)",
                "1.2 TSI (CBZA)",
                "1.4 (CGGB/BXW)",
                "1.4 TDI (BNV/BMS)",
                "1.4 TDI (BNM)",
                "1.4 TSI (CTHE/CAVE)",
                "1.6 (CFNA/BTS)",
                "1.6 TDI (CAYB)",
                "1.6 TDI (CAYC)",
                "1.6 TDI (CAYA)",
                "1.9 TDI (BLS/BSW)"
            ]
        },
        "Kodiaq": {
            "1 поколение (2017 - Н.В.)": [
                "1.4 TSI (NS) CZDA/CZEA",
                "1.4 TDI (NS) DBGC/DFGA",
                "2.0 TFSI (NS) CZPA"
            ]
        },
        "Octavia": {
            "1 поколение (1U2/1U5) 1996-2010": [
                "1.4 16V (AXP/BCA)",
                "1.6 (AVU/BFQ)",
                "1.6 (AEE)",
                "1.6 (AEH/AKL/AFT)",
                "1.8 20V (AGN)",
                "1.8 T (AGU/ARX/ARZ/AUM)",
                "1.9 SDI (AGP/AQM)",
                "1.9 TDI (ASZ)",
                "1.9 TDI (AXR/ATD)",
                "1.9 TDI (AHF/ASV)",
                "1.9 TDI (AGR/ALH)",
                "2.0 (AEG/APK/AQY/AZH/AZJ)",
                "1.8 T RS (AUQ)"
            ],
            "2 поколение (1Z3/1Z5) 2004-2013": [
                "1.2 TSI (CBZB)",
                "1.4 (CGGA/BUD)",
                "1.4 TSI (CAXA)",
                "1.6 (BGU/BSE/BSF/CCSA/CHGA/CMXA)",
                "1.6 FSI (BLF)",
                "1.6 TDI (CAYC)",
                "1.8 TSI (CDAB)",
                "1.8 TSI (BYT/BZB/CDAA/CDAB)",
                "1.9 TDI (BJB/BKC/BLS/BXE)",
                "2.0 FSI (BLR/BLY/BVY/BVZ/BLX/BVX)",
                "2.0 RS (BWA/CCZA)",
                "2.0 TDI (BMM)",
                "2.0 TDI 16V (CLCB/BKD/CFHC)"
            ],
            "3 поколение (5E3/NL3/5E5)": [
                "1.2 TSI (CJZB/CYVA)",
                "1.2 TSI (CJZA)",
                "1.4 TSI (CHPA)",
                "1.6 (CWVA)",
                "1.8 TSI (CJSA/CJSB)",
                "2.0 TSI RS (CHHB)"
            ]
        },
        "Rapid": {
            "1 поколение (NH1/NH3/NK3, вкл.рестайлинг) 2012 - 2020": [
                "1.2 (CGPC)",
                "1.4 TSI (CAXA)",
                "1.4 TSI (CZCA)",
                "1.6 (CWVA)",
                "1.2 TSI (CBZB)",
                "1.2 TSI (CBZA)",
                "1.6 (CWVB)",
                "1.6 (CFNA)"
            ]
        },
        "Roomster": {
            "1 поколение (5J, вкл.рестайлинг) 2006-2015": [
                "1.2 (BZG/CGPA)",
                "1.2 (BME)",
                "1.2 TDI (CFWA)",
                "1.2 TSI (CBZB)",
                "1.2 TSI (CBZA)",
                "1.4 (CGGB/BXW)",
                "1.4 TDI (BMS/BNV)",
                "1.4 TDI (BNM)",
                "1.6 (CFNA/BTS)",
                "1.6 TDI (CAYC)",
                "1.6 TDI (CAYB)",
                "1.9 TDI (AXR)",
                "1.9 TDI (BLS/BSW)"
            ]
        },
        "Superb": {
            "1 поколение (3U4) 2001-2008": [
                "1.8 T (AWT)",
                "1.9 TDI (BSV)",
                "1.9 TDI (AVF/AWX)",
                "1.9 TDI (BPZ)",
                "1.9 TDI (AVB)",
                "2.0 (AZM)",
                "2.0 TDI (BSS)",
                "2.5 TDI (AYM)",
                "2.5 TDI (BDG)",
                "2.8 V6 (AMX/BBG)"
            ],
            "2 поколение (3T4/3T5) 2008-2015": [
                "1.4 TSI (CAXC)",
                "1.6 TDI (CAYC)",
                "1.8 TSI (BZB/CDAA/CDAB)",
                "1.9 TDI (BLS/BXE)",
                "2.0 TDI (CBBB/CFGB)",
                "2.0 TDI (BMP)",
                "2.0 TDI 16V (BKD/CFFB/CLJA)",
                "2.0 TSI (CCZA)",
                "3.6 V6 4WD (CDVA)"
            ],
            "3 поколение (3V3/3V5) 2015 - Н.В.": [
                "1.4 TSI (CZCA)",
                "1.4 TSI (CZDA/CZEA)",
                "1.6 TDI (DCXA/DCZA)",
                "1.8 TSI (CJSA/CJSC)",
                "2.0 TDI (CRLB/DFEA)",
                "2.0 TSI (CHHB)",
                "2.0 TSI 4WD (CJXA)"
            ]
        },
        "Yeti": {
            "1 поколение, вкл.рестайлинг (5L) 2009 - 2018": [
                "1.2 TSI (CBZB)",
                "1.4 TSI (CZDA)",
                "1.4 TSI (CZCA)",
                "1.4 TSI (CAXA)",
                "1.6 (CWVA)",
                "1.6 TDI (CAYC)",
                "1.8 TSI 4WD (CDAB)",
                "1.8 TSI 4WD (CDAA)",
                "2.0 TDI 4WD (CEGA/CFJA)",
                "2.0 TDI 4WD (CFHF)",
                "2.0 TDI 4WD (CLCB/CBDB/CFHC)"
            ]
        }
    },
    "Subaru": {
        "BRZ": {
            "1 поколение (ZC/Z10) 2012-2016": [
                "2.0 16V (FA20D)"
            ]
        },
        "Forester": {
            "1 поколение, вкл. рестайлинг (SF/S10) 1997-2002": [
                "2.0 (EJ20)",
                "2.0 S-Turbo (EJ205)"
            ],
            "2 поколение, вкл.рестайлинг (SG/S11) 2002-2008": [
                "2.0 (EJ204)",
                "2.5 XT-Turbo (EJ255)",
                "2.0 (EJ201)",
                "2.0 S/XT-Turbo (EJ205)",
                "2.5 (EJ251)",
                "2.5 Prodrive Performance (EJ255)",
                "2.5 RX (EJ25)"
            ],
            "3 поколение, вкл.рестайлинг (SH/S12) 2007-2013": [
                "2.0 16V (EJ20/FB20)",
                "2.5 X (FB25B)",
                "2.0 Diesel (EE20Z)",
                "2.5 XT-Turbo (EJ255)"
            ],
            "4 поколение, вкл.рестайлинг (SJ/S13) 2012-2019": [
                "2.0 (FB20B)",
                "2.0XT (FA20F)",
                "2.5 (FB25B)"
            ]
        },
        "Impreza": {
            "2 поколение, вкл.рестайлинг (GD/GG/G11) 2000-2007": [
                "1.5 R (EL154)",
                "2.0 R (EJ204)",
                "1.6 (EJ161)",
                "2.0 WRX (EJ205)",
                "2.0 WRX STI (EJ207)",
                "2.5 WRX (EJ255)",
                "2.5 WRX STI (EJ257)"
            ],
            "3 поколение, вкл.рестайлинг (GH,GR/G12/G22) 2007-2012": [
                "1.5 16V (EL154)",
                "2.0 R (EJ204)",
                "2.5 (EJ255)",
                "2.5 WRX STI (EJ257)"
            ],
            "4 поколение (GJ/G13) 2011-2014": [
                "1.6 (FB16B)",
                "2.0 (FB20B)"
            ]
        },
        "Impreza WRX": {
            "4 поколение, вкл.рестайлинг (VA/V10) 2014 - Н.В.": [
                "2.0 AWD (FA20F)",
                "2.5 WRX STI (EJ257)"
            ]
        },
        "Legacy": {
            "3 поколение (BE/BH/B12) 1998-2003": [
                "2.0 (EJ201)",
                "2.5 16V (EJ25)",
                "3.0 24V (EZ30)"
            ],
            "4 поколение, вкл.рестайлинг (BL/BP/13) 2003-2009": [
                "3.0 24V (EZ30D)",
                "2.0 16V (EJ202)",
                "2.0 Diesel (EE20Z)",
                "2.0 R (EJ204)",
                "2.5 16V (EJ25)"
            ],
            "5 поколение, вкл.рестайлинг (BM/B14) 2009-2015": [
                "2.0 Diesel (EE20Z)",
                "2.0i (EJ204/FB20)",
                "2.5i (EJ253)"
            ]
        },
        "Outback": {
            "3 поколение, вкл.рестайлинг (BP) 2003-2009": [
                "2.0 Diesel (EE20Z)",
                "2.5 16V (EJ25)",
                "3.0 24V (EZ30D)"
            ],
            "4 поколение, вкл.рестайлинг (BR/B14) 2009-2015": [
                "2.0 Diesel (EE20Z)",
                "2.5i (EJ253)",
                "3.6R (EZ36D)"
            ],
            "5 поколение, вкл.рестайлинг (BS/B15) 2014-2021": [
                "2.5 (FB25B)"
            ]
        },
        "Tribeca": {
            "2 поколение (WX/W10) 2007-2014": [
                "3.0 24V (EZ30D)",
                "3.6R (EZ36D)"
            ]
        },
        "XV": {
            "1 поколение, вкл.рестайлинг (GP/G33) 2011-2017": [
                "1.6 (FB16B)",
                "2.0i (FB20B)"
            ]
        }
    },
    "Suzuki": {
        "Grand Vitara": {
            "1 поколение (FT/GT) 1997-2005": [
                "1.6 (G16B)",
                "2.0 (J20A)"
            ],
            "2 поколение, вкл. рестайлинги (JT) 2005-2016": [
                "2.4 (J24B)",
                "1.6 (M16A)",
                "2.0 (J20A)",
                "2.7 V6 24V (H27A)",
                "3.2 (N32A)"
            ]
        },
        "Ignis": {
            "1 поколение, вкл.рестайлинг (2000-2007)": [
                "1.3 VVT (M13A)",
                "1.3 DDiS (Z13DT)",
                "1.5 (M15A)"
            ]
        },
        "Jimny": {
            "1 поколение, вкл.рестайлинг (JB) 1998-2019": [
                "1.3 16V (G13BB)",
                "1.3 16V (M13A)",
                "1.5 DDis (K9K)"
            ]
        },
        "Kizashi": {
            "1 поколение (RE/RF) 2010-2014": [
                "2.4 (J24B)"
            ]
        },
        "Liana": {
            "1 поколение, вкл.рестайлинг (ER)  2001-2007": [
                "1.3 16V (M13A)",
                "1.4 DDiS (8HY)",
                "1.6 (M16A)"
            ]
        },
        "Splash": {
            "1 поколение, вкл.рестайлинг (XB) 2008-2015": [
                "1.2 VVT (K12B)",
                "1.2 (K12B)"
            ]
        },
        "Swift": {
            "3 поколение, вкл.рестайлинг (ZC/ZD) 2003-2010": [
                "1.3 16V (M13A)",
                "1.5 (M15A)",
                "1.6 (M16A)"
            ],
            "4 поколение (ZC72S/ZC82S/ZC32S) 2010-2015": [
                "1.2 (K12B)",
                "1.2 DualJet (K12B)",
                "1.6 (M16A)"
            ]
        },
        "SX4": {
            "1 поколение, вкл.рестайлинг (SX4 Classic) 2006-2016": [
                "1.6 (M16A)"
            ]
        },
        "Vitara": {
            "4 поколение, вкл. рестайлинг (LY) 2014 - Н.В.": [
                "1.4 S (K14C)",
                "1.6 (M16A)"
            ]
        },
        "Wagon R+": {
            "2 поколение, вкл. рестайлинг (MM) 2000-2007": [
                "1.3 16V (G13BB)",
                "1.3 VVT (M13A)"
            ]
        },
        "XL-7": {
            "1 поколение (2001-2006)": [
                "2.7 V6 US (H27A)",
                "2.7 2/4 WD (H27A)"
            ],
            "2 поколение (JC) 2006-2009": [
                "3.6 (H36A)"
            ]
        }
    },
    "Toyota": {
        "4Runner": {
            "3 поколение, вкл.рестайлинг (N180) 1995-2002": [
                "2.7i (3RZ-FE)",
                "3.4i (5VZ-FE)"
            ]
        },
        "Alphard/Vellfire": {
            "2 поколение, вкл.рестайлинг (H20) 2008-2015": [
                "3.5 (2GR-FE)"
            ],
            "3 поколение, вкл.рестайлинг (H30) 2015 - Н.В.": [
                "3.5 (2GR-FE)"
            ]
        },
        "Auris": {
            "1 поколение, вкл.рестайлинг (E150) 2006-2012": [
                "1.3 (1NR-FE)",
                "1.6 VVT-i (1ZR-FE)",
                "1.6 (1ZR-FAE)",
                "1.4 D-4D (1ND-TV)",
                "1.4 16V (4ZZ-FE)",
                "1.8 16V (2ZR-FAE)",
                "2.0 D-4D (1AD-FTV)"
            ],
            "2 поколение, вкл.рестайлинг (E180) 2012-2018": [
                "1.33 VVT (1NR-FE)",
                "1.6 (1ZR-FAE)"
            ]
        },
        "Avensis": {
            "2 поколение, вкл.рестайлинг (T250) 2003-2009": [
                "1.8 16V (1ZZ-FE)",
                "2.0 16V (1AZ-FSE)",
                "2.4 16V (2AZ-FSE)",
                "1.6 16V (3ZZ-FE)",
                "2.0 D-4D (1AD-FTV)",
                "2.0 D-4D/D-CAT (1CD-FTV)",
                "2.2 D-4D (2AD-FTV)",
                "2.2 D-CAT (2AD-FHV)"
            ],
            "3 поколение. вкл.рестайлинг (T270) 2008-2012": [
                "1.6 16V (1ZR-FAE)",
                "1.8 16V (2ZR-FAE)",
                "2.0 16V (3ZR-FAE)",
                "2.0 D-4D (1AD-FTV)",
                "2.2 D-4D (2AD-FTV)",
                "2.2 D-CAT (2AD-FHV)"
            ]
        },
        "Camry": {
            "6 поколение, вкл.рестайлинг (XV30) 2001-2006": [
                "2.4 16V (2AZ-FE)",
                "3.0 V6 (1MZ-FE)"
            ],
            "7 поколение, вкл.рестайлинг (XV40) 2006-2011": [
                "2.0 (1AZ-FE)",
                "2.4 16V (2AZ-FE)",
                "2.4i 16V DOHC VVT (2AZ-FXE)",
                "3.5 V6 (2GR-FE)"
            ],
            "8 поколение, вкл.рестайлинги (XV50/55) 2011-2018": [
                "2.0 (6AR-FSE)",
                "2.5 (2AR-FE)",
                "2.0 (1AZ-FE)",
                "3.5 V6 (2GR-FE)"
            ]
        },
        "Corolla": {
            "10 поколение, вкл.рестайлинг (E140/150) 2006-2013": [
                "1.33 VVT (1NR-FE)",
                "1.4 (4ZZ-FE)",
                "1.6 VVT-i (1ZR-FE)",
                "2.0 D-4D (1AD-FTV)"
            ],
            "11 поколение, вкл.рестайлинг (E180) 2012-2019": [
                "1.8 VVT-i (2ZR-FE)",
                "1.33 VVT-i (1NR-FE)",
                "1.6 VVT-i (1ZR-FE)"
            ],
            "9 поколение, вкл.рестайлинги  (E120/E130) 2000-2007": [
                "1.4 (4ZZ-FE)",
                "1.4 D-4D (1ND-TV)",
                "1.6 16V (3ZZ-FE)",
                "1.8 (2ZZ-GE)",
                "2.0 D-4D (1CD-FTV)"
            ]
        },
        "Corolla Verso": {
            "1 поколение (E120) 2001-2004": [
                "1.6 (3ZZ-FE)",
                "1.8 16V (1ZZ-FE)",
                "2.0 D-4D (1CD-FTV)"
            ],
            "2 поколение, вкл.рестайлинг (R10) 2004-2009": [
                "1.6 (3ZZ-FE)",
                "1.8 16V (1ZZ-FE)",
                "2.0 D-4D (1CD-FTV)",
                "2.2 D-CAT (2AD-FHV)",
                "2.2 D-4D (2AD-FTV)"
            ]
        },
        "Highlander": {
            "2 поколение, вкл.рестайлинг (XU40) 2007-2013": [
                "2.7 (1AR-FE)",
                "3.5 V6 (2GR-FE)"
            ],
            "3 поколение, вкл.рестайлинг (XU50) 2013-2020": [
                "2.7 (1AR-FE)",
                "3.5 V6 (2GR-FE)"
            ]
        },
        "Hilux": {
            "7 поколение, вкл.рестайлинги (AN10/20/30) 2004-2015": [
                "2.5 D 4WD (2KD-FTV)",
                "3.0 D 4WD (1KD-FTV)"
            ],
            "8 поколение, вкл.рестайлинг (AN120) 2015 - Н.В.": [
                "2.4 D (2GD-FTV)",
                "2.8 D (1GD-FTV)"
            ]
        },
        "iQ": {
            "1 поколение (GJ10) 2008-2016": [
                "1.0 (1KR-FE)",
                "1.33 VVT (1NR-FE)",
                "1.4 D-4D (1ND-TV)"
            ]
        },
        "Land Cruiser": {
            "10 поколение, вкл.рестайлинги (100) 1997-2007": [
                "4.2 D 12V SOHC (1HZ)",
                "4.2 TD (1HD-FTE)",
                "4.7 V8 32V (2UZ-FE)"
            ],
            "11 поколение, вкл.рестайлинги (200) 2007 - Н.В.": [
                "4.5 D-4D (1VD-FTV)",
                "4.6 32V DOHC VVT (1UR-FSE)",
                "4.7 V8 (2UZ-FE)"
            ]
        },
        "Land Cruiser Prado": {
            "3 поколение (J120) 2002-2009": [
                "4.0 V6 (1GR-FE)",
                "2.7i 16V DOHC VVT (2TR-FE)",
                "3.0 D-4D (1KD-FTV)"
            ],
            "4 поколение, вкл.рестайлинги (J150) 2009 - Н.В.": [
                "2.7 (2TR-FE)",
                "2.8 D (1GD-FTV)",
                "3.0 D-4D (1KD-FTV)",
                "4.0 V6 VVTi (1GR-FE)"
            ]
        },
        "Previa": {
            "2 поколение, вкл. рестайлинг (XR30) 2000-2006": [
                "2.0 D-4D (1CD-FTV)"
            ]
        },
        "Prius": {
            "2 поколение, вкл.рестайлинги (XW20) 2003-2009": [
                "1.5 (1NZ-FXE)"
            ],
            "3 поколение, вкл.рестайлинг (XW30) 2009-2016": [
                "1.8 (2ZR-FXE)"
            ]
        },
        "RAV 4": {
            "2 поколение, вкл.рестайлинг (CA20) 2000-2005": [
                "1.8 16V (1ZZ-FE)",
                "2.0 D-4D Turbodiesel (1CD-FTV)",
                "2.0 (1AZ-FE)",
                "2.4 4WD (2AZ-FE)"
            ],
            "3 поколение, вкл.рестайлинги (XA30) 2005-2016": [
                "2.0 VVT-i (3ZR-FAE)",
                "2.0 VVT-i (1AZ-FE)",
                "2.2 D-4D (2AD-FTV)",
                "2.2 D-CAT (2AD-FHV)",
                "2.4 VVT-i (2AZ-FE)"
            ],
            "4 поколение, вкл.рестайлинг (XA40) 2015-2019": [
                "2.0 VVT-i (3ZR-FE)",
                "2.0 VVT-i (3ZR-FAE)",
                "2.2 D-4D (2AD-FTV/2AD-FHV)",
                "2.5 VVT-i (2AR-FE)"
            ]
        },
        "Urban Cruiser": {
            "1 поколение (XP110) 2009-2016": [
                "1.33 VVT (1NR-FE)",
                "1.4 D-4D (1ND-TV)"
            ]
        },
        "Venza": {
            "1 поколение, вкл.рестайлинг (GV10) 2008-2016": [
                "2.7 (1AR-FE)",
                "3.5 (2GR-FE)"
            ]
        },
        "Verso": {
            "1 поколение, вкл.рестайлинг (R20) 2009-2016": [
                "1.6 (1ZR-FAE)",
                "1.8 (2ZR-FAE)",
                "2.0 D-4D (1AD-FTV)"
            ]
        },
        "Yaris": {
            "1 поколение. вкл.рестайлинг (XP10) 1999-2005": [
                "1.0 16V (1SZ-FE)",
                "1.3 (2NZ-FE)",
                "1.4 D-4D (1ND-TV)",
                "1.5 TS (1NZ-FE)",
                "1.33 VVT (1NR-FE)"
            ],
            "2 поколение, вкл.рестайлинги (XP90) 2005-2011": [
                "1.0 (1KR-FE)",
                "1.3 16V (2NZ-FE/2SZ-FE)",
                "1.8 16V (2ZR-FE)"
            ]
        }
    },
    "Volkswagen": {
        "Bora": {
            "1 поколение (1J2/1J6) 1998-2005": [
                "1.4 16V (AHW/AKQ/APE/AXP/BCA)",
                "1.6 (BJH/AVU/BFQ/BFG)",
                "1.6 (AEH/AKL/APF)",
                "1.6 16V (ATN/AUS/AZD/BCB)",
                "1.6 FSI (BAD)",
                "1.8 (AGN/BAF)",
                "1.8 T (AGU/ARX/AUM/BAE)",
                "1.8 T (AUQ)",
                "1.9 SDI (AGP/AQM)",
                "1.9 TDI (AJM/AUY)",
                "1.9 TDI (AHF/ASV)",
                "1.9 TDI (AGR/ALH)",
                "1.9 TDI (ATD/AXR)",
                "1.9 TDI (ASZ)",
                "2.0 (AQY/AZG/AZH/AZJ/APK)",
                "2.3 V5 (AQN)",
                "2.3 V5 (AGZ)",
                "2.8 V6 4motion (AQP/AUE/BDE)"
            ]
        },
        "Golf": {
            "4 поколение (1J1/1J5/9B1) 1997 - 2006": [
                "1.4 16V (AHW/AKQ/APE/AXP/BCA)",
                "1.6 (AEH/AKL/APF)",
                "1.6 (AVU/BFQ)",
                "1.6 16V (ATN/AUS/AZD/BCB)",
                "1.6 FSI (BAD)",
                "1.8 T (AGU/AQA/ARZ/AUM/AWD)",
                "1.9 SDI (AGP/AQM)",
                "1.9 TDI (AGR/ALH)",
                "1.9 TDI (ATD/AXR)",
                "1.9 TDI (AHF/ASV)",
                "1.9 TDI (AJM/AUY)",
                "1.9 TDI (ASZ)",
                "2.0 (APK/AQY/AZG/AZJ/BEH)",
                "2.3 V5 (AQN)",
                "2.3 V5 (AGZ)",
                "2.8 V6 4motion (AQP/AUE/BDE)"
            ],
            "5 поколение (1K1/1K5)  2003 - 2009": [
                "1.4 16V (BCA)",
                "1.4 16V (BUD/CGGA)",
                "1.4 FSI (BKG/BLN)",
                "1.4 TSI (CAXA)",
                "1.4 TSI (BMY)",
                "1.4 TSI (BLG)",
                "1.6 (BGU/BSE/BSF/CCSA)",
                "1.6 FSI (BAG/BLF/BLP)",
                "1.9 TDI (BJB/BKC/BXE/BLS)",
                "1.9 TDI (BRU/BXF/BXJ)",
                "2.0 FSI (AXW/BLR/BLX/BLY/BVX/BVY/BVZ)",
                "2.0 GTD (BMN)",
                "2.0 GTI (AXX/BPY/BWA/CAWB/CBFA/CCTA)",
                "2.0 SDI (BDK)",
                "2.0 TDI (AZV/BKD/BMM/CBDA/CBDB/CFHC)",
                "1.6 (BGU/BSE/BSF/CCSA/CMXA)"
            ],
            "6 поколение (AJ5/5K1) 2008 - 2013": [
                "1.2 TSI (CBZB)",
                "1.2 TSI (CBZA)",
                "1.4 (CGGA)",
                "1.4 TSI (CAXA)",
                "1.4 TSI (CNWA/CTHD/CTKA/CAVD)",
                "1.6 (CMXA/BSE/BSF/CCSA/CHGA)",
                "1.6 TDI (CAYC)",
                "1.6 TDI (CAYB)",
                "2.0 R 4motion (CDLA/CDLF)",
                "2.0 TDI (CBBB/CFGB)",
                "2.0 TDI (CLCA/CBDC)",
                "2.0 TDI (CBAB/CFFB/CJAA)",
                "2.0 TSI (CCZB)"
            ],
            "7 поколение (5G1/AU1) 2012 - 2019": [
                "1.2 TSI (CJZB/CYVA)",
                "1.2 TSI (CJZA)",
                "1.4 TSI (CMBA/CPVA/CUKA/CXSA)",
                "1.4 TSI (CZEA/CZDA/CHPB/CUKB)",
                "1.4 TSI (CHPA/CPTA)",
                "1.6 MPI (CWVA)",
                "2.0 R 4motion (CJXC)",
                "2.0 TFSI GTI (CHHB)",
                "2.0 TFSI GTI (CHHA)",
                "1.6 (CWVA)"
            ]
        },
        "Jetta": {
            "5 поколение (1K2) 2005-2010": [
                "1.4 TSI (BLG)",
                "1.4 TSI (CAXA)",
                "1.4 TSI (CAVD)",
                "1.4 TSI (BMY)",
                "1.6 FSI (BLF)",
                "1.6 TDI (CAYC)",
                "1.9 TDI (BKC/BXE/BLS)",
                "2.0 FSI (BLR/BLX/BLY/BVY/BVZ)",
                "2.0 TDI (BMN/CEGA)",
                "2.0 TDI (BKD/BMM/CBDB)",
                "2.0 TDI (AZV/CBDA)",
                "2.0 TFSI (AXX/BPY/BWA/CAWB/CBFA/CCTA)",
                "2.5 FSI (CBTA/CBUA/CCCA)"
            ],
            "6 поколение (162/163/AV2/AV3) 2010-2019": [
                "1.2 TSI (CBZB/CYVD)",
                "1.4 TSI (CTHD/CAVD)",
                "1.4 TSI (CZCA)",
                "1.4 TSI (CAVA/CTHA/CZTA)",
                "1.4 TSI (CMSB/CAXA)",
                "1.6 (CFNB)",
                "1.6 (CWVB)",
                "1.6 (CFNA/CLRA)",
                "1.6 TDI (CAYC)",
                "2.0 TDI (CFHC/CLCB/CFFB/CJAA)",
                "2.0 TDI (CLCA/CUUA)",
                "2.0 TSI (CBFA/CCTA/CCZA)",
                "2.5 FSI (CBTA/CBUA/CCCA)"
            ]
        },
        "Lupo": {
            "1 поколение (6X1/6E1) 1998 - 2005": [
                "1.0 (AER/ALD/ALL/ANV/AUC/AHT)",
                "1.2 TDI (ANY/AYZ)",
                "1.4 (AUD)",
                "1.4 16V (AFK/ANM/AQQ/AUB)",
                "1.4 16V (AHW/AKQ/APE/AUA/BBY)",
                "1.4 FSI (ARR)",
                "1.4 TDI (AMF)",
                "1.6 GTI (AVY)",
                "1.7 SDI (AKU)"
            ]
        },
        "Passat": {
            "8 поколение (3G2/3G5/A33) 2014- Н.В.": [
                "1.6 TDI (DCXA)",
                "1.8 TSI (CJSA/CJSC)",
                "1.4 TSI (CZDA/CZEA)",
                "1.4 TSI (CZCA)"
            ],
            "5 поколение (3B2/3B5) 1996-2001": [
                "1.6 (ADP/AHL/ANA/ARM)",
                "1.8 (ADR/APT/APW/ARG)",
                "1.8 T (AEB/ANB/APU/ATW/AUG)",
                "1.9 TDI (AJM/ATJ)",
                "1.9 TDI (AHH/AHU)",
                "1.9 TDI (AFN/AVG)",
                "2.3 VR5 (AGZ)",
                "2.5 TDI (AFB/AKN)",
                "2.8 V6 Syncro/4motion (ACK/AHA/ALG/APR/AQD/ATQ)"
            ],
            "5 поколение рестайлинг (3B3/3B6/9F8) 2000-2005": [
                "1.6 (ALZ)",
                "1.8 T (AWM)",
                "1.8 T 20V (BGC/AWL/AWT)",
                "1.8 T 4motion (AWM)",
                "1.9 TDI (AVF/AWX)",
                "1.9 TDI (AVB)",
                "2.0 (ALT)",
                "2.0 (BFF/AZM)",
                "2.0 TDI (BGW/BHW)",
                "2.3 V5 (AZX)",
                "2.5 TDI (BDG)",
                "2.5 TDI (AFB/AKN)",
                "2.5 TDI (BAU/BDH)",
                "2.8 (BBG/AMX/ATQ)",
                "4.0 W8 4motion (BDN/BDP)"
            ],
            "6 поколение (3C2/3C5) 2005-2010": [
                "1.4 TSI (CAXA)",
                "1.4 TSI EcoFuel (CDGA)",
                "1.6 (BSE/BSF)",
                "1.6 FSI (BLF)",
                "1.6 TDI (CAYC)",
                "1.8 TSI (BZB/CDAA/CDAB/CGYA)",
                "1.9 TDI (BKC/BLS/BXE)",
                "2.0 BlueTDI (CBAC)",
                "2.0 FSI (BLR/BLY/BVY/BVZ)",
                "2.0 TDI (BMA/CBAA)",
                "2.0 TDI (BKP/BMP/CBAB)",
                "2.0 TDI (BMR/CBBB/CFGB/CLLA)",
                "2.0 TDI (CBDC)",
                "2.0 TDI 16V (BKP/BMP/CBAB)",
                "2.0 TFSI (AXX/BWA/CAWB/CBFA/CCTA/CCZA)",
                "3.2 FSI 4motion (AXZ)",
                "3.6 R36 4motion (BWS)"
            ],
            "7 поколение (362/A32/365) 2010-2014": [
                "1.4 TSI (CAXA)",
                "1.4 TSI EcoFuel (CDGA)",
                "1.6 TDI (CAYC)",
                "1.8 TSI (CDAA)",
                "1.8 TSI (CDAB)",
                "2.0 TDI (CFFB/CKRA)",
                "2.0 TDI (CLLA/CFGB)",
                "2.0 TSI (CCZB)",
                "2.5 (CBTA/CBUA/CCCA)",
                "3.6 FSI 4motion (BWS)"
            ],
            "CC 1 поколение (357) 2008-2012": [
                "1.4 TSI MultiFuel (CKMA)",
                "1.8 TSI (CDAB/CGYA)",
                "1.8 TSI (BZB/CDAA)",
                "2.0 BlueTDI (CBAC)",
                "2.0 TDI (CLLA/CBBB/CFGB)",
                "2.0 TDI (CBAB/CFFB)",
                "2.0 TDI (CBAA/CFFA)",
                "2.0 TSI (AXX/BWA/CAWB/CBFA/CCTA/CCZA)",
                "2.0 TSI (CCZB)",
                "3.6 4motion (BWS)",
                "3.6 FSI (CNNA/BLV)"
            ]
        },
        "Phaeton": {
            "1 поколение, вкл.рестайлинги (3D2,3D3,3D9) 2002-2016": [
                "3.0 V6 TDI 4motion (BMK)",
                "3.0 V6 TDI (CARB/CEXA)",
                "3.0 V6 TDI (CARA)",
                "3.2 V6 (AYT/BKL/BRK)",
                "3.6 V6 4motion (CMVA/CHNA)",
                "4.2 V8 4motion (BGH/BGJ)",
                "6.0 W12 4motion (BRN/BTT)"
            ]
        },
        "Polo": {
            "4 поколение (9N1/9N3) 2001-2009": [
                "1.2 (BBM)",
                "1.2 (AWY/BMD)",
                "1.2 (AZQ/BME)",
                "1.2 12V (BZG)"
            ],
            "5 поколение (601/602/6R1/6С1/612/614) 2008 - 2020": [
                "1.4 TSI (CZCA)",
                "1.6 (CFNB)",
                "1.6 (CWVB)",
                "1.6 (CFNA)",
                "1.6 (CWVA)",
                "1.2 (CGPA)",
                "1.2 (CHFA/CGPB)",
                "1.2 TSI (CBZB)",
                "1.4 (CGGB)",
                "1.4 GTI (CAVE)",
                "1.6 TDI (CLNA/CAYC)",
                "1.6 TDI (CAYA)",
                "1.6 TDI (CAYB)"
            ]
        },
        "Scirocco": {
            "3 поколение (137/138) 2009-2015": [
                "1.4 TSI (CMSB/CAXA)",
                "1.4 TSI (CNWA/CTHD/CTKA/CAVD)",
                "2.0 R (CDLA)",
                "2.0 TDI (CBBB/CFGB)",
                "2.0 TDI (CFHC/CBDB)",
                "2.0 TSI (CCZB)",
                "2.0 TSI (CAWB)"
            ]
        },
        "Sharan": {
            "1 поколение (7M8/7M9/7M6) 1995-2010": [
                "1.8 T 20V (AJH/AWC)",
                "1.9 TDI (1Z/AHU/ANU)",
                "1.9 TDI (AJM/AUY/BVK)",
                "1.9 TDI (AFN/AVG)",
                "1.9 TDI (BTB)",
                "1.9 TDI (ASZ)",
                "2.0 (ADY/ATM)",
                "2.0 TDI (BRT/BVH)",
                "2.8 V6 (AYL)",
                "2.8 VR6 (AAA/AMY)"
            ]
        },
        "Tiguan": {
            "1 поколение (5N1/5N2) 2007-2016": [
                "1.4 TSI (CAXA)",
                "1.4 TSI (CTHA/BWK/CAVA)",
                "2.0 TDI (CBAB/CFFB/CLJA)",
                "2.0 TDI (CFFD/CLCA/CUVE)",
                "2.0 TDI 4motion (CBBB/CFGB)",
                "2.0 TDI (CBAA/CFFA)",
                "2.0 TFSI (CAWB/CCTA/CCZA)",
                "2.0 TFSI (CAWA/CCTB/CCZC)",
                "2.0 TSI 4motion (CCZB)",
                "2.0 TSI 4motion (CCZD)"
            ]
        },
        "Touareg": {
            "1 поколение, вкл. рестайлинг (7LA/7L6/7L7) 2002 - 2010": [
                "2.5 R5 TDI (BAC/BPE)",
                "3.0 V6 TDI (CARA/CASA/CASC)",
                "3.0 V6 TDI (BKS/CATA)",
                "3.2 V6 (BMV/BMX/BKJ/BRJ)",
                "3.2 V6 (AZZ/BAA)",
                "3.6 V6 FSI (BHK/BHL)",
                "4.2 V8 (AXQ/BHX)",
                "4.2 V8 FSI (BAR)",
                "5.0 R50 TDI (CBWA)",
                "5.0 V10 TDI (AYH/BLE)",
                "6.0 W12 (BJN/CFRA)"
            ],
            "2 поколение, вкл. рестайлинг (7P5) 2010 - 2018": [
                "3.0 V6 TDI (CNRB/CASA)",
                "3.0 V6 TDI (CASD/CJMA/CVWA)",
                "3.0 V6 TDI (CJGD/CRCA)",
                "3.0 V6 TSI Hybrid (CGEA/CGFA)",
                "3.6 V6 FSI (CGRA)",
                "3.6 V6 FSI (CMTA)",
                "4.2 V8 FSI (CGNA)",
                "4.2 V8 TDI (CKDA)"
            ]
        },
        "Touran": {
            "1 поколение (1T1/1T2) 2003-2010": [
                "1.4 TSI (BLG/CAVB)",
                "1.4 TSI (BMY/CAVC/CTHC)",
                "1.4 TSI EcoFuel (CDGA)",
                "1.6 (BGU/BSE/BSF)",
                "1.6 FSI (BAG/BLF/BLP)",
                "1.9 TDI (AVQ)",
                "1.9 TDI (BRU/BXJ/BXF/BXJ)",
                "1.9 TDI (BKC/BLS/BXE)",
                "2.0 EcoFuel (BSX)",
                "2.0 FSI (AXW/BLR/BLX/BLY/BVY/BVZ)",
                "2.0 TDI (AZV)",
                "2.0 TDI (BMN/CFJA)",
                "2.0 TDI (BMM/BKD)"
            ],
            "2 поколение (1T3) 2010-2015": [
                "1.2 TSI (CBZB)",
                "1.4 TSI (BMY/CAVC/CTHC)",
                "1.4 TSI (CAVB/CTHB)",
                "1.4 TSI EcoFuel (CDGA)",
                "1.6 TDI (CAYB)",
                "2.0 TDI (CFHF/CLCA)"
            ]
        }
    },
    "Volvo": {
        "S80": {
            "1 поколение, вкл. рестайлинг (TS/TH/KV) 1998-2006": [
                "2.0 20V Turbo (B5204T5)",
                "2.0 20V Turbo (B5204T4/5)",
                "2.0 20V Turbo (B5204T3)",
                "2.4 (B5244S)",
                "2.4 D (D5244T)",
                "2.4 D (D5244T2)",
                "2.4 T (B5244T3)",
                "2.5 D (D5252T)",
                "2.8 24V Turbo (B6284T)",
                "3.0 24V (B6294S2)",
                "3.0 24V (B6294S)",
                "3.0 T6 (B6294T)",
                "2.9 24V (B6304S3)"
            ],
            "2 поколение, вкл.рестайлинг (AS/AR) 2006-2013": [
                "2.5 T (B5254T10/B5254T11)",
                "2.0 T5 (B4204T11)",
                "2.4 D (D5244T5)",
                "2.4 D5 (D5244T4)",
                "2.5 T (B5254T6/B5254T8)",
                "2.5 T5 (B5254T12)",
                "2.5 T5 (B5254T14)",
                "3.0 T6 (B6304T2)",
                "3.0 T5 (B6304T4)",
                "3.2 (B6324S)",
                "3.2 AWD (B6324S5)",
                "4.4 V8 (B8444S)"
            ]
        },
        "C30": {
            "1 поколение, вкл.рестайлинг (2006-2012)": [
                "1.6 (B4164S3)",
                "1.8/1.8 Flexifuel (B4184S11)",
                "2.0/2.0 FlexFuel (B4204S3/4)",
                "2.0 Diesel (D4204T)",
                "2.4 (B5244S4)",
                "2.5 T5 (B5254T7)"
            ]
        },
        "S40": {
            "1 поколение, вкл.рестайлинг (VS) 1995-2004": [
                "1.6 16V (B4164S2)",
                "1.6 16V (B4164S)",
                "1.8 (B4184SM/SJ)",
                "1.8 (B4184S3)",
                "1.8 (B4184SJ)",
                "1.8 16V (B4184S2)",
                "1.8 (B4184S)",
                "1.9 T4 (B4194T)",
                "1.9 DI (D4192T4)",
                "1.9 DI (D4192T2)",
                "1.9 DI (D4192T3)",
                "1.9 TD (D4192T)",
                "2.0 16V (B4204S)",
                "2.0 16V (B4204S2)",
                "2.0 T (B4204T3)",
                "2.0 T (B4204T)",
                "1.9 T4 (B4194T5)"
            ],
            "2 поколение, вкл.рестайлинг (MS) 2004-2012": [
                "1.6 (B4164S3)",
                "1.8/1.8 Flexifuel (B4184S11)",
                "2.0 (B4204S3)",
                "2.4 (B5244S4)",
                "2.4 (B5244S5)"
            ]
        },
        "S60": {
            "1 поколение, вкл.рестайлинг (RS/RH) 2000 - 2010": [
                "2.3 T5 (B5234T3)",
                "2.4 (B5244S2)",
                "2.0 T (B5204T5)",
                "2.5 T (B5254T2)",
                "2.4 D (D5244T2)",
                "2.4 T (B5244T3)",
                "2.5 R AWD (B5254T4)"
            ],
            "2 поколение, вкл. рестайлинг (FS) 2010-2018": [
                "1.6 T3 (B4164T3)",
                "2.0 T5 (B4204T11)",
                "2.5 T5 (B5254T5)",
                "3.0 T5 (B6304T4)",
                "1.6 T4 (B4164T)",
                "2.0 T (B4204T6)",
                "2.0 (B5204T8)",
                "2.0 T5 (B4204T7)",
                "2.5 T5 (B5254T12/B5254T14)",
                "2.4 D5 (D5244T10)"
            ]
        },
        "V40": {
            "2 поколение, вкл.рестайлинг (MV/MZ) 2012 - 2019": [
                "1.6 D2 (D4162T)",
                "2.0 (B5204T8)",
                "2.0 T5 (B5204T9)",
                "2.5 T5 (B5254T14)"
            ]
        },
        "V50": {
            "1 поколение, вкл.рестайлинг (MW) 2003-2012": [
                "1.6 (B4164S3)",
                "1.6 (D4164T)",
                "1.8/1.8 Flexifuel (B4184S11)",
                "2.0 (B4204S3)",
                "2.0 Diesel (D4204T)",
                "2.4 (B5244S5)",
                "2.4 (B5244S4)"
            ]
        },
        "V60": {
            "1 поколение, вкл.рестайлинг (FW) 2010-2019": [
                "1.6 T3 (B4164T3)",
                "2.0 T5 (B4204T7)",
                "3.0 T5 (B6304T4)"
            ]
        },
        "V70": {
            "2 поколение, вкл.рестайлинг (SW/SJ) 2000-2007": [
                "2.0 20V Turbo (B5204T5)",
                "2.3 T5 (B5234T3)",
                "2.4 (B5244S2)",
                "2.4 (B5244S)",
                "2.4D (D5244T7)",
                "2.4 D (D5244T2)",
                "2.4 D (D5244T5)",
                "2.4 D5 (D5244T4)",
                "2.4 T (B5244T3)",
                "2.5 TDI (D5252T)",
                "2.5 T (B5254T2)",
                "2.5 R AWD (B5254T4)"
            ],
            "3 поколение, вкл.рестайлинг (2007-2016)": [
                "1.6 (D4164T)",
                "2.0 Diesel (D4204T)",
                "2.4 D5 (D5244T4)",
                "2.5 T (B5254T6/B5254T8)"
            ]
        },
        "XC60": {
            "1 поколение, вкл. рестайлинг (DZ) 2008-2017": [
                "2.0 D3 (D5204T7)",
                "2.0 D4 (D5244T12)",
                "2.4 D4 (D5244T21)",
                "2.4 D (D5244T14)",
                "2.0 D4 (D5204T2/T3)",
                "2.4 D (D5244T5/t16/t17)",
                "3.2 AWD (B6324S5)",
                "3.2 (B6324S)",
                "2.4 D5 (D5244T11)",
                "2.4 D5 (D5244T4)",
                "2.4 D5 (D5244T10)",
                "2.0 T (B4204T6)",
                "2.0 T5 (B4204T7)",
                "2.0 T5 (B4204T11)",
                "3.0 T6 (B6304T2)",
                "3.0 T5 (B6304T4)"
            ]
        },
        "XC70": {
            "2 поколение, вкл.рестайлинг (SZ/LZ) 2000-2007": [
                "2.4 D5 (D5244T4/T3)",
                "2.4 D (D5244T)",
                "2.4 T (B5244T3)",
                "2.5 T (B5254T2)"
            ],
            "3 поколение, вкл.рестайлинг (BZ) 2007-2016": [
                "2.0 D3 (D5204T2/T3)",
                "2.4 D (D5244T14)",
                "2.4 D (D5244T5/T16/T17)",
                "2.0 D4 (D5244T12)",
                "2.4 D5 (D5244T4)",
                "2.4 D5 (D5244T10)",
                "2.4 D5 (D5244T11/T15)",
                "3.0 T6 (B6304T4)",
                "3.0 T6 (B6304T2)"
            ]
        },
        "XC90": {
            "1 поколение, вкл.рестайлинг (C) 2002-2014": [
                "2.5 T (B5254T9)",
                "2.5 T (B5254T2)",
                "3.2 (B6324S5)",
                "3.2 (B6324S)",
                "2.4 D4/D5 (D5244T5)",
                "2.4 D5 (D5244T18)",
                "2.4 D5 (D5244T4)",
                "3.0 T6 (B6294T)",
                "4.4 V8 (B8444S)"
            ],
            "2 поколение, вкл.рестайлинг (L) 2014 - Н.В.": [
                "2.0 D5 (D4204T11)",
                "2.0 T5 (B4204T27/T28/T29)"
            ]
        }
    },
    "Volvo Trucks": {
        "FE-II": {
            "1 поколение (2006 --->)": [
                "7.2 - 260/300/340 (D7F) Euro 4",
                "7.2 - 280 (D7E) Euro 4",
                "7.2 - 240 (D7E/F) Euro 4",
                "7.2 - 320 (D7E) Euro 4"
            ]
        },
        "FH-12": {
            "1 поколение (1993-2005)": [
                "12.1 - 500 (D12D) Euro 3",
                "12.1 - 340/380/420/460 (D12A/B/C) Euro 2",
                "12.1 - 380/420/460 (D12D) Euro 3"
            ]
        },
        "FH-13 Classic": {
            "1 поколение (2005 --->)": [
                "12.8 - 420/460/500/540 (D13C) Euro 5",
                "12.8 - 400/440/480/500/520 (D13A/B) Euro 4/5"
            ]
        },
        "FH-16 Classic": {
            "1 поколение (1993 --->)": [
                "16.1 - 550/610 (D16C) Euro 3",
                "16.1 - 470/520 (D16A/B) Euro 2",
                "16.1 - 540/580/600/660/700/750 (D16G) Euro 5",
                "16.1 - 540/580/660 (D16E) Euro 4/5"
            ]
        },
        "FH-II New": {
            "1 поколение (2013 --->)": [
                "12.8 - 420/460/500/540 (D13K) Euro 6",
                "12.8 - 420/460/500/540 (D13C) Euro 6",
                "16.1 - 540/600/700/750 (D16G) Euro 6",
                "16.1 - 550/650/750 (D16K) Euro 6"
            ]
        },
        "FL-10/FL-12": {
            "1 поколение (1995-1998)": [
                "9.6 - 310/320/350/360 (D10A) Euro 2",
                "12.1 - 380 (D12A) Euro 2"
            ]
        },
        "FL-I": {
            "1 поколение (2000-2006)": [
                "5.5 - FL180/220/250 (D6B) Euro 3",
                "5.5 - FL180 (D6A) Euro 3"
            ]
        },
        "FL-II": {
            "1 поколение (2006 --->)": [
                "7.1 - FL260/290/300/340 (D7F) Euro 5",
                "7.2 - FL240/280 (D7E) Euro 4"
            ]
        },
        "FL-III": {
            "1 поколение (2013 --->)": [
                "7.7 - 250/280 (D8K) Euro 6",
                "5.1 - 210/240 (D5K) Euro 6"
            ]
        },
        "FM-10": {
            "1 поколение (1998 --->)": [
                "9.6 - 320/360 (D10B/C) Euro 2"
            ]
        },
        "FM-12": {
            "1 поколение (1998-2005)": [
                "12.1 - 340/380/420/460 (D12C/D) Euro 2/3"
            ]
        },
        "FM-13": {
            "1 поколение (2005 --->)": [
                "12.8 - 360/400/440/480 (D13A) Euro 4/5"
            ]
        },
        "FM-7": {
            "1 поколение (1998-2002)": [
                "6.7 - 250/290 (D7C) Euro 2",
                "6.7 - 230/260 (D7A) Euro 2"
            ]
        },
        "FM-9": {
            "1 поколение (2001-2005)": [
                "9.3 - 260/300/340/380 (D9A/B) Euro 3"
            ]
        },
        "FM-II/FMX-II": {
            "1 поколение (2013 --->)": [
                "12.8 - 420/460/500/540 (D13K) Euro 6",
                "10.8 - 330/370410/450 (D11K) Euro 6"
            ]
        },
        "FM/FMX/FMX Classic": {
            "1 поколение (2005 --->)": [
                "10.8 - FM 390/430 (D11B) Euro 4/5",
                "9.3 - FM 300/340/380/381 (D9B) Euro 4",
                "10.8 - FM 330/370410/450 (D11C) Euro 5/EEV",
                "10.8 - FMX 330/370410/450 (D11C) Euro 5/EEV",
                "12.8 - FMX 380/420/460/500 (D13С) Euro 5/EEV",
                "12.8 - 360/400/440/480/500 (D13A/B) Euro 4/5",
                "12.8 - FM 380/420/460/500 (D13С) Euro 5/EEV"
            ]
        }
    },
    "Vortex": {
        "Corda": {
            "1 поколение (2010-2012)": [
                "1.5 (SQR477F)"
            ]
        },
        "Estina": {
            "1 поколение (2008-2012)": [
                "1.6 (SQR481F)",
                "2.0 (SQR484F)"
            ]
        },
        "Tingo": {
            "1 поколение, вкл. рестайлинг (2010-2014)": [
                "1.8 (SQR 481FC)"
            ]
        }
    },
    "ZOTYE": {
        "Coupe": {
            "1 поколение (2018-2021)": [
                "1.5 (TNN4G15TA)"
            ]
        },
        "T600": {
            "1 поколение (2014-2021)": [
                "1.5 (15S4G)",
                "2.0 (4G63S4T)"
            ]
        }
    },
    "ВАЗ": {
        "2104": {
            "1 поколение (1984-2012)": [
                "1.5 (2103)",
                "1.5 (2104)",
                "1.3 (2105)",
                "1.6 (21067)"
            ]
        },
        "2105": {
            "1 поколение (1979-2012)": [
                "1.5 (2103)",
                "1.5 (2104)",
                "1.3 (2105)",
                "1.6 (2106)",
                "1.3 (21011)",
                "1.2 (2101)"
            ]
        },
        "2106": {
            "1 поколение  (1975-2006)": [
                "1.5 (2103)",
                "1.6 (2106)",
                "1.3 (21011)"
            ]
        },
        "2107": {
            "1 поколение (1982 – 2012)": [
                "1.5 (2103)",
                "1.3 (2105)",
                "1.5 (2104)",
                "1.6 (2106)",
                "1.6 (21067)",
                "1.7 (21213)"
            ]
        },
        "2108": {
            "1 поколение (вкл. рестайлинг, 1984-2004)": [
                "1.3 (ВАЗ-2108)",
                "1.1 (ВАЗ-21081)",
                "1.5 (ВАЗ-21083)",
                "1.3 (415)",
                "1.5 (2111)",
                "1.5 (2112)",
                "1.6 (21084)"
            ]
        },
        "2109": {
            "1 поколение, вкл. рестайлинг (1987-2006)": [
                "1.3 (ВАЗ-2108)",
                "1.1 (ВАЗ-21081)",
                "1.5 (ВАЗ-21083)",
                "1.3 (415)",
                "1.5 (ВАЗ-2111-75)",
                "1.5 (ВАЗ-2111-80)"
            ]
        },
        "2110": {
            "1 поколение (1995-2009)": [
                "1.3 (1415)",
                "1.6 (21124)",
                "1.5 (21120)",
                "1.6 (21114)",
                "1.5 (2111)",
                "1.5 (2110)",
                "2.0 (X20XEV)"
            ]
        },
        "2111": {
            "1 поколение (1997-2009)": [
                "1.7 (21214)",
                "1.6 (21124)",
                "1.5 (2112)",
                "1.6 (21114)",
                "1.5 (2111)",
                "1.5 (2110)"
            ]
        },
        "2112": {
            "1 поколение (1999 – 2009)": [
                "1.5 (21120)",
                "1.6 (21124)",
                "1.6 (11183)",
                "1.8 (21128)"
            ]
        },
        "2113 Самара": {
            "1 поколение (2004-2013)": [
                "1.5 (2111)",
                "1.6 (21114)",
                "1.6 (11183)",
                "1.6 (21126)",
                "1.6 (21124)"
            ]
        },
        "2114 Самара": {
            "1 поколение (2001 – 2013)": [
                "1.5 (2111)",
                "1.6 (11183)",
                "1.6 (21114)",
                "1.6 (21126)",
                "1.6 (21124)"
            ]
        },
        "2115 Самара": {
            "1 поколение (1997-2012)": [
                "1.5 (2111)",
                "1.6 (21114)",
                "1.6 (11183)",
                "1.5 (21083)",
                "1.5 (2103)"
            ]
        },
        "Largus": {
            "1 поколение (2012 - Н.В.)": [
                "1.6 (K4M)",
                "1.6 (K7M)",
                "1.6 (11189)",
                "1.6 (21129)"
            ],
            "1 поколение рестайлинг (2021 - Н.В.)": [
                "1.6 (21129)",
                "1.6 (11182)"
            ]
        },
        "Vesta": {
            "1 поколение (2015 - Н.В.)": [
                "1.6 (21129)",
                "1.8 (21179)",
                "1.6 (H4Mk)"
            ],
            "Vesta Cross (2017 - Н.В.)": [
                "H4Mk",
                "21179",
                "21129"
            ],
            "Vesta Sport (2018 - Н.В.)": [
                "1.6 (21126)",
                "1.6 (21127)"
            ]
        },
        "X-Ray": {
            "X-RAY (2015- Н.В.)": [
                "1.6 HR16DE (H4M)",
                "1.8 (21179)",
                "1.6 (21129)"
            ],
            "X-RAY Cross (2018 - Н.В.)": [
                "1.6 (21129 )",
                "1.8 (21179)",
                "1.6 (H4Mk)"
            ]
        },
        "Гранта": {
            "1 поколение (2011-2018)": [
                "1/6 (21126)",
                "1.6 (21127)",
                "1.6 (11186)",
                "1,6 (21116)",
                "1.6 (11183)"
            ],
            "1 поколение рестайлинг (2018 - Н.В.)": [
                "1.6 (11186)",
                "1.6 (21126)",
                "1.6 (21127)"
            ],
            "Granta Cross (2018 - Н.В.)": [
                "1.6 (11186)",
                "1.6 (21127)"
            ],
            "Granta Sport (2013-2018)": [
                "1.6 (21126)",
                "1.6 (21127)"
            ]
        },
        "Калина": {
            "1 поколение (2004-2013)": [
                "1.4 (11194)",
                "1.6 (21114)",
                "1.6 (21126)"
            ],
            "2 поколение (2013-2018)": [
                "1.6 (11186)",
                "1.6 (21126)",
                "1.6 (21127)",
                "1.6 (11183-50)"
            ],
            "Калина Cross (2014-2018)": [
                "1.6 (11186)",
                "1.6 (21127)"
            ]
        },
        "Нива 4х4": {
            "ВАЗ 2121 (1977 - 2019)": [
                "1.6 (2121)",
                "1.7 (21213)",
                "1.6 (21214)",
                "1.6 (2106)"
            ],
            "ВАЗ 2121, рестайлинг (2019 - 2021)": [
                "1.7 (21214)"
            ],
            "ВАЗ 2131 (вкл. рестайлинг, 1993-2021)": [
                "1.7 (21214)"
            ]
        },
        "Приора": {
            "1 поколение (2007-2014)": [
                "1.6 (21116)",
                "1.6 (21114)",
                "1.6 (21126)"
            ],
            "1 поколение (рестайлинг 2013-2018)": [
                "1.6 (21126)",
                "1.6 (21127)"
            ]
        }
    },
    "ГАЗ": {
        "Валдай": {
            "1 поколение (2004-2016)": [
                "3.8D (Cummins ISF3)"
            ]
        },
        "Волга": {
            "Siber": [
                "2.0 (ECC)",
                "2.4 (ECC)"
            ],
            "ГАЗ-3110": [
                "2.4 (ЗМЗ-402.10)",
                "2.3 (ЗМЗ-4062.10)"
            ]
        },
        "ГАЗон Next": {
            "1 поколение (2014 - Н.В.)": [
                "4.4D (ЯМЗ 5344-20)",
                "4.4D (ЯМЗ 5344)",
                "3.8D (Cummins ISF3)"
            ]
        }
    }
};

const brandSelect = document.getElementById('brand');
const modelSelect = document.getElementById('model');
const generationSelect = document.getElementById('generation');
const modificationSelect = document.getElementById('modification');
const submitButton = document.getElementById('submit');

// Инициализация выбора
function initializeSelects() {
    modelSelect.disabled = true;
    generationSelect.disabled = true;
    modificationSelect.disabled = true;
    submitButton.style.display = 'none'; // Скрываем кнопку
}

// Заполняем марки
function populateBrands() {
    brandSelect.innerHTML = '<option value="">Выберите марку</option>';
    Object.keys(carData).forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}

// Заполняем модели
function populateModels() {
    const brand = brandSelect.value;
    if (!brand) return;

    modelSelect.innerHTML = '<option value="">Выберите модель</option>';
    generationSelect.innerHTML = '<option value="">Выберите поколение</option>';
    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';
    modelSelect.disabled = false;
    generationSelect.disabled = true;
    modificationSelect.disabled = true;
    submitButton.style.display = 'none'; // Скрываем кнопку

    const models = Object.keys(carData[brand]);
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

// Заполняем поколения
function populateGenerations() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    if (!model) return;

    generationSelect.innerHTML = '<option value="">Выберите поколение</option>';
    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';
    generationSelect.disabled = false;
    modificationSelect.disabled = true;
    submitButton.style.display = 'none'; // Скрываем кнопку

    const generations = Object.keys(carData[brand][model]);
    generations.forEach(gen => {
        const option = document.createElement('option');
        option.value = gen;
        option.textContent = gen;
        generationSelect.appendChild(option);
    });
}

// Заполняем модификации
function populateModifications() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const generation = generationSelect.value;
    if (!generation) return;

    modificationSelect.innerHTML = '<option value="">Выберите модификацию</option>';
    modificationSelect.disabled = false;
    submitButton.style.display = 'none'; // Скрываем кнопку

    const modifications = carData[brand][model][generation];
    modifications.forEach(mod => {
        const option = document.createElement('option');
        option.value = mod;
        option.textContent = mod;
        modificationSelect.appendChild(option);
    });
}

// Проверяем выбор всех полей
function checkAllFieldsSelected() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const generation = generationSelect.value;
    const modification = modificationSelect.value;

    // Если все поля выбраны, показываем кнопку
    if (brand && model && generation && modification) {
        submitButton.style.display = 'block';
    } else {
        submitButton.style.display = 'none';
    }
}

// Отправляем данные в Telegram
function sendDataToBot() {
    const brand = brandSelect.value;
    const model = modelSelect.value;
    const generation = generationSelect.value;
    const modification = modificationSelect.value;

    if (!brand || !model || !generation || !modification) {
        alert("выберите все поля");
        return;
    }

    const selectedData = {
        brand,
        model,
        generation,
        modification,
    };

    // Отправляем данные боту
    Telegram.WebApp.sendData(JSON.stringify(selectedData));
}

// Обработчики событий
brandSelect.addEventListener('change', () => {
    populateModels();
    checkAllFieldsSelected();
});
modelSelect.addEventListener('change', () => {
    populateGenerations();
    checkAllFieldsSelected();
});
generationSelect.addEventListener('change', () => {
    populateModifications();
    checkAllFieldsSelected();
});
modificationSelect.addEventListener('change', checkAllFieldsSelected);
submitButton.addEventListener('click', sendDataToBot);

// Инициализация
Telegram.WebApp.ready();
initializeSelects();
populateBrands();
