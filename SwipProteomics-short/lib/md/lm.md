### `tidyProt::lmTestContrast`
```R
library(tidyProt)

# load the data
data("swip", package="SwipProteomics") 
data("swip_tmt", package="SwipProteomics") 

# fit a model
fx <- log2(Intensity) ~ 0 + Condition
fm <- lm(fx, data=subset(swip_tmt, Protein==swip))

# create a contrast and assess comparison
LT <- getContrast(fm, "Mutant","Control")
lmTestContrast(fm, LT)
```
