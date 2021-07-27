### `tidyProt::lmTestContrast`
```R
library(tidyProt)

# load the data
data(washc, package="SwipProteomics") 
data(wash_bioid, package="SwipProteomics") 

# fit a model
fx <- log2(Intensity) ~ 0 + Condition
fm <- lm(fx, data=subset(wash_bioid, Accession==washc[1]))

# create a contrast and assess comparison
LT <- getContrast(fm, "WASH","Control")
lmTestContrast(fm, LT)
```
