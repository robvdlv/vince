package keys

var (
	DataPrefix         = []byte{0x00}
	OpsPrefix          = []byte{0x01}
	Cookie             = []byte{0x01, 0x00}
	SitePrefix         = []byte{0x01, 0x01}
	AcmePrefix         = []byte{0x01, 0x02}
	APIKeyNamePrefix   = []byte{0x01, 0x03}
	APIKeyHashPrefix   = []byte{0x01, 0x04}
	TranslateKeyPrefix = []byte{0x02, 0x00}
	TranslateIDPrefix  = []byte{0x02, 0x01}
	TranslateSeqPrefix = []byte{0x02, 0x02}
)
