// DO NOT EDIT Code generated by country/gen/main.go
package country

type Code uint8

const (
	AF Code = 1 + iota
	AX
	AL
	DZ
	AS
	AD
	AO
	AI
	AQ
	AG
	AR
	AM
	AW
	AU
	AT
	AZ
	BS
	BH
	BD
	BB
	BY
	BE
	BZ
	BJ
	BM
	BT
	BO
	BQ
	BA
	BW
	BV
	BR
	IO
	BN
	BG
	BF
	BI
	CV
	KH
	CM
	CA
	KY
	CF
	TD
	CL
	CN
	CX
	CC
	CO
	KM
	CG
	CD
	CK
	CR
	CI
	HR
	CU
	CW
	CY
	CZ
	DK
	DJ
	DM
	DO
	EC
	EG
	SV
	GQ
	ER
	EE
	SZ
	ET
	FK
	FO
	FJ
	FI
	FR
	GF
	PF
	TF
	GA
	GM
	GE
	DE
	GH
	GI
	GR
	GL
	GD
	GP
	GU
	GT
	GG
	GN
	GW
	GY
	HT
	HM
	VA
	HN
	HK
	HU
	IS
	IN
	ID
	IR
	IQ
	IE
	IM
	IL
	IT
	JM
	JP
	JE
	JO
	KZ
	KE
	KI
	KP
	KR
	KW
	KG
	LA
	LV
	LB
	LS
	LR
	LY
	LI
	LT
	LU
	MO
	MG
	MW
	MY
	MV
	ML
	MT
	MH
	MQ
	MR
	MU
	YT
	MX
	FM
	MD
	MC
	MN
	ME
	MS
	MA
	MZ
	MM
	NA
	NR
	NP
	NL
	NC
	NZ
	NI
	NE
	NG
	NU
	NF
	MK
	MP
	NO
	OM
	PK
	PW
	PS
	PA
	PG
	PY
	PE
	PH
	PN
	PL
	PT
	PR
	QA
	RE
	RO
	RU
	RW
	BL
	SH
	KN
	LC
	MF
	PM
	VC
	WS
	SM
	ST
	SA
	SN
	RS
	SC
	SL
	SG
	SX
	SK
	SI
	SB
	SO
	ZA
	GS
	SS
	ES
	LK
	SD
	SR
	SJ
	SE
	CH
	SY
	TW
	TJ
	TZ
	TH
	TL
	TG
	TK
	TO
	TT
	TN
	TR
	TM
	TC
	TV
	UG
	UA
	AE
	GB
	US
	UM
	UY
	UZ
	VU
	VE
	VN
	VG
	VI
	WF
	EH
	YE
	ZM
	ZW
)

func Lookup(code string) Code {
	return _lookup[code]
}

func From(code Code) string {
	return _reverse[code]
}

var _reverse map[Code]string

func init() {
	_reverse = make(map[Code]string)
	for k, v := range _lookup {
		_reverse[v] = k
	}
}

var _lookup = map[string]Code{
	"AF":  AF,
	"AFG": AF,
	"AX":  AX,
	"ALA": AX,
	"AL":  AL,
	"ALB": AL,
	"DZ":  DZ,
	"DZA": DZ,
	"AS":  AS,
	"ASM": AS,
	"AD":  AD,
	"AND": AD,
	"AO":  AO,
	"AGO": AO,
	"AI":  AI,
	"AIA": AI,
	"AQ":  AQ,
	"ATA": AQ,
	"AG":  AG,
	"ATG": AG,
	"AR":  AR,
	"ARG": AR,
	"AM":  AM,
	"ARM": AM,
	"AW":  AW,
	"ABW": AW,
	"AU":  AU,
	"AUS": AU,
	"AT":  AT,
	"AUT": AT,
	"AZ":  AZ,
	"AZE": AZ,
	"BS":  BS,
	"BHS": BS,
	"BH":  BH,
	"BHR": BH,
	"BD":  BD,
	"BGD": BD,
	"BB":  BB,
	"BRB": BB,
	"BY":  BY,
	"BLR": BY,
	"BE":  BE,
	"BEL": BE,
	"BZ":  BZ,
	"BLZ": BZ,
	"BJ":  BJ,
	"BEN": BJ,
	"BM":  BM,
	"BMU": BM,
	"BT":  BT,
	"BTN": BT,
	"BO":  BO,
	"BOL": BO,
	"BQ":  BQ,
	"BES": BQ,
	"BA":  BA,
	"BIH": BA,
	"BW":  BW,
	"BWA": BW,
	"BV":  BV,
	"BVT": BV,
	"BR":  BR,
	"BRA": BR,
	"IO":  IO,
	"IOT": IO,
	"BN":  BN,
	"BRN": BN,
	"BG":  BG,
	"BGR": BG,
	"BF":  BF,
	"BFA": BF,
	"BI":  BI,
	"BDI": BI,
	"CV":  CV,
	"CPV": CV,
	"KH":  KH,
	"KHM": KH,
	"CM":  CM,
	"CMR": CM,
	"CA":  CA,
	"CAN": CA,
	"KY":  KY,
	"CYM": KY,
	"CF":  CF,
	"CAF": CF,
	"TD":  TD,
	"TCD": TD,
	"CL":  CL,
	"CHL": CL,
	"CN":  CN,
	"CHN": CN,
	"CX":  CX,
	"CXR": CX,
	"CC":  CC,
	"CCK": CC,
	"CO":  CO,
	"COL": CO,
	"KM":  KM,
	"COM": KM,
	"CG":  CG,
	"COG": CG,
	"CD":  CD,
	"COD": CD,
	"CK":  CK,
	"COK": CK,
	"CR":  CR,
	"CRI": CR,
	"CI":  CI,
	"CIV": CI,
	"HR":  HR,
	"HRV": HR,
	"CU":  CU,
	"CUB": CU,
	"CW":  CW,
	"CUW": CW,
	"CY":  CY,
	"CYP": CY,
	"CZ":  CZ,
	"CZE": CZ,
	"DK":  DK,
	"DNK": DK,
	"DJ":  DJ,
	"DJI": DJ,
	"DM":  DM,
	"DMA": DM,
	"DO":  DO,
	"DOM": DO,
	"EC":  EC,
	"ECU": EC,
	"EG":  EG,
	"EGY": EG,
	"SV":  SV,
	"SLV": SV,
	"GQ":  GQ,
	"GNQ": GQ,
	"ER":  ER,
	"ERI": ER,
	"EE":  EE,
	"EST": EE,
	"SZ":  SZ,
	"SWZ": SZ,
	"ET":  ET,
	"ETH": ET,
	"FK":  FK,
	"FLK": FK,
	"FO":  FO,
	"FRO": FO,
	"FJ":  FJ,
	"FJI": FJ,
	"FI":  FI,
	"FIN": FI,
	"FR":  FR,
	"FRA": FR,
	"GF":  GF,
	"GUF": GF,
	"PF":  PF,
	"PYF": PF,
	"TF":  TF,
	"ATF": TF,
	"GA":  GA,
	"GAB": GA,
	"GM":  GM,
	"GMB": GM,
	"GE":  GE,
	"GEO": GE,
	"DE":  DE,
	"DEU": DE,
	"GH":  GH,
	"GHA": GH,
	"GI":  GI,
	"GIB": GI,
	"GR":  GR,
	"GRC": GR,
	"GL":  GL,
	"GRL": GL,
	"GD":  GD,
	"GRD": GD,
	"GP":  GP,
	"GLP": GP,
	"GU":  GU,
	"GUM": GU,
	"GT":  GT,
	"GTM": GT,
	"GG":  GG,
	"GGY": GG,
	"GN":  GN,
	"GIN": GN,
	"GW":  GW,
	"GNB": GW,
	"GY":  GY,
	"GUY": GY,
	"HT":  HT,
	"HTI": HT,
	"HM":  HM,
	"HMD": HM,
	"VA":  VA,
	"VAT": VA,
	"HN":  HN,
	"HND": HN,
	"HK":  HK,
	"HKG": HK,
	"HU":  HU,
	"HUN": HU,
	"IS":  IS,
	"ISL": IS,
	"IN":  IN,
	"IND": IN,
	"ID":  ID,
	"IDN": ID,
	"IR":  IR,
	"IRN": IR,
	"IQ":  IQ,
	"IRQ": IQ,
	"IE":  IE,
	"IRL": IE,
	"IM":  IM,
	"IMN": IM,
	"IL":  IL,
	"ISR": IL,
	"IT":  IT,
	"ITA": IT,
	"JM":  JM,
	"JAM": JM,
	"JP":  JP,
	"JPN": JP,
	"JE":  JE,
	"JEY": JE,
	"JO":  JO,
	"JOR": JO,
	"KZ":  KZ,
	"KAZ": KZ,
	"KE":  KE,
	"KEN": KE,
	"KI":  KI,
	"KIR": KI,
	"KP":  KP,
	"PRK": KP,
	"KR":  KR,
	"KOR": KR,
	"KW":  KW,
	"KWT": KW,
	"KG":  KG,
	"KGZ": KG,
	"LA":  LA,
	"LAO": LA,
	"LV":  LV,
	"LVA": LV,
	"LB":  LB,
	"LBN": LB,
	"LS":  LS,
	"LSO": LS,
	"LR":  LR,
	"LBR": LR,
	"LY":  LY,
	"LBY": LY,
	"LI":  LI,
	"LIE": LI,
	"LT":  LT,
	"LTU": LT,
	"LU":  LU,
	"LUX": LU,
	"MO":  MO,
	"MAC": MO,
	"MG":  MG,
	"MDG": MG,
	"MW":  MW,
	"MWI": MW,
	"MY":  MY,
	"MYS": MY,
	"MV":  MV,
	"MDV": MV,
	"ML":  ML,
	"MLI": ML,
	"MT":  MT,
	"MLT": MT,
	"MH":  MH,
	"MHL": MH,
	"MQ":  MQ,
	"MTQ": MQ,
	"MR":  MR,
	"MRT": MR,
	"MU":  MU,
	"MUS": MU,
	"YT":  YT,
	"MYT": YT,
	"MX":  MX,
	"MEX": MX,
	"FM":  FM,
	"FSM": FM,
	"MD":  MD,
	"MDA": MD,
	"MC":  MC,
	"MCO": MC,
	"MN":  MN,
	"MNG": MN,
	"ME":  ME,
	"MNE": ME,
	"MS":  MS,
	"MSR": MS,
	"MA":  MA,
	"MAR": MA,
	"MZ":  MZ,
	"MOZ": MZ,
	"MM":  MM,
	"MMR": MM,
	"NA":  NA,
	"NAM": NA,
	"NR":  NR,
	"NRU": NR,
	"NP":  NP,
	"NPL": NP,
	"NL":  NL,
	"NLD": NL,
	"NC":  NC,
	"NCL": NC,
	"NZ":  NZ,
	"NZL": NZ,
	"NI":  NI,
	"NIC": NI,
	"NE":  NE,
	"NER": NE,
	"NG":  NG,
	"NGA": NG,
	"NU":  NU,
	"NIU": NU,
	"NF":  NF,
	"NFK": NF,
	"MK":  MK,
	"MKD": MK,
	"MP":  MP,
	"MNP": MP,
	"NO":  NO,
	"NOR": NO,
	"OM":  OM,
	"OMN": OM,
	"PK":  PK,
	"PAK": PK,
	"PW":  PW,
	"PLW": PW,
	"PS":  PS,
	"PSE": PS,
	"PA":  PA,
	"PAN": PA,
	"PG":  PG,
	"PNG": PG,
	"PY":  PY,
	"PRY": PY,
	"PE":  PE,
	"PER": PE,
	"PH":  PH,
	"PHL": PH,
	"PN":  PN,
	"PCN": PN,
	"PL":  PL,
	"POL": PL,
	"PT":  PT,
	"PRT": PT,
	"PR":  PR,
	"PRI": PR,
	"QA":  QA,
	"QAT": QA,
	"RE":  RE,
	"REU": RE,
	"RO":  RO,
	"ROU": RO,
	"RU":  RU,
	"RUS": RU,
	"RW":  RW,
	"RWA": RW,
	"BL":  BL,
	"BLM": BL,
	"SH":  SH,
	"SHN": SH,
	"KN":  KN,
	"KNA": KN,
	"LC":  LC,
	"LCA": LC,
	"MF":  MF,
	"MAF": MF,
	"PM":  PM,
	"SPM": PM,
	"VC":  VC,
	"VCT": VC,
	"WS":  WS,
	"WSM": WS,
	"SM":  SM,
	"SMR": SM,
	"ST":  ST,
	"STP": ST,
	"SA":  SA,
	"SAU": SA,
	"SN":  SN,
	"SEN": SN,
	"RS":  RS,
	"SRB": RS,
	"SC":  SC,
	"SYC": SC,
	"SL":  SL,
	"SLE": SL,
	"SG":  SG,
	"SGP": SG,
	"SX":  SX,
	"SXM": SX,
	"SK":  SK,
	"SVK": SK,
	"SI":  SI,
	"SVN": SI,
	"SB":  SB,
	"SLB": SB,
	"SO":  SO,
	"SOM": SO,
	"ZA":  ZA,
	"ZAF": ZA,
	"GS":  GS,
	"SGS": GS,
	"SS":  SS,
	"SSD": SS,
	"ES":  ES,
	"ESP": ES,
	"LK":  LK,
	"LKA": LK,
	"SD":  SD,
	"SDN": SD,
	"SR":  SR,
	"SUR": SR,
	"SJ":  SJ,
	"SJM": SJ,
	"SE":  SE,
	"SWE": SE,
	"CH":  CH,
	"CHE": CH,
	"SY":  SY,
	"SYR": SY,
	"TW":  TW,
	"TWN": TW,
	"TJ":  TJ,
	"TJK": TJ,
	"TZ":  TZ,
	"TZA": TZ,
	"TH":  TH,
	"THA": TH,
	"TL":  TL,
	"TLS": TL,
	"TG":  TG,
	"TGO": TG,
	"TK":  TK,
	"TKL": TK,
	"TO":  TO,
	"TON": TO,
	"TT":  TT,
	"TTO": TT,
	"TN":  TN,
	"TUN": TN,
	"TR":  TR,
	"TUR": TR,
	"TM":  TM,
	"TKM": TM,
	"TC":  TC,
	"TCA": TC,
	"TV":  TV,
	"TUV": TV,
	"UG":  UG,
	"UGA": UG,
	"UA":  UA,
	"UKR": UA,
	"AE":  AE,
	"ARE": AE,
	"GB":  GB,
	"GBR": GB,
	"US":  US,
	"USA": US,
	"UM":  UM,
	"UMI": UM,
	"UY":  UY,
	"URY": UY,
	"UZ":  UZ,
	"UZB": UZ,
	"VU":  VU,
	"VUT": VU,
	"VE":  VE,
	"VEN": VE,
	"VN":  VN,
	"VNM": VN,
	"VG":  VG,
	"VGB": VG,
	"VI":  VI,
	"VIR": VI,
	"WF":  WF,
	"WLF": WF,
	"EH":  EH,
	"ESH": EH,
	"YE":  YE,
	"YEM": YE,
	"ZM":  ZM,
	"ZMB": ZM,
	"ZW":  ZW,
	"ZWE": ZW,
}
