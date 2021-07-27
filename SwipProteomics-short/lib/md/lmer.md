### `tidyProt::lmerTestContrast`
```R
library(tidyProt)

# load the data
data(washc, package="SwipProteomics") 
data(swip_tmt, package="SwipProteomics")

# fit a model
fx <- log2(rel_Intensity) ~ 0 + Condition + (1|Protein)
fm <- lmerTest::lmer(fx, data=subset(swip_tmt, Protein %in% washc))

# create a contrast and assess comparison
LT <- getContrast(fm, "Mutant", "Control")
lmerTestContrast(fm, LT)
```
