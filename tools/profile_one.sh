go test -benchmem -run=^$ -bench ^BenchmarkAddOne$ -memprofile memprofile.out -cpuprofile profile.out -count 6 github.com/vinceanalytics/vince/internal/store