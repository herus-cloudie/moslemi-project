import "./PriceRange.css";

const PriceRange = ({minPoint, maxPoint, minValue, maxValue, steps, setMin, setMax}) => {
  
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input input");
  const range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach(input => {
    input.addEventListener("input", e => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });
  
  rangeInput.forEach(input => {
    input.addEventListener("input", e => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.right = (minVal / rangeInput[0].max) * 100  + "%";
        range.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        console.log( rangeInput[0])
        console.log('this =>',minVal , rangeInput[0].max)
      }
    });
  });

  return (
    <div className="w-full sm:w-[50%] lg:w-[90%] font-[shabnamMedium]">
      <div className="price-input" dir="rtl">
        <div className="field">
          <span>از</span>
          <input
            type="number"
            className="input-min font-[shabnamBold]"
            value={minValue}
            min={minPoint}
            onChange={event => setMin(event.target.value)}
          />
          <span>تومان</span>
        </div>
        <div className="field">
          <span className="pr-2">تا</span>
          <input
            type="number"
            className="input-max font-[shabnamBold]"
            value={maxValue}
            max={maxPoint}
            onChange={event => setMax(event.target.value)}
          />
          <span>تومان</span>
        </div>
      </div>
      <div className="slider">
        <div className="lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="progress"></div>
      </div>
      <div className="range-input">
        <input
          onChange={event => setMin(event.target.value)}
          type="range"
          className="range-min"
          min={minPoint}
          max={maxPoint}
          value={minValue}
          step={steps}
        />
        <input
          onChange={event => setMax(event.target.value)}
          type="range"
          className="range-max"
          min={minPoint}
          max={maxPoint}
          value={maxValue}
          step={steps}
        />
      </div>
    </div>
  );
}

export default PriceRange;