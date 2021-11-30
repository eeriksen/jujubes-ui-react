export const calculatePosition = ({$base, $pop, offset, position, container}) => {
    const baseVal = $base.getBoundingClientRect();
    const popVal = $pop.getBoundingClientRect();

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let containerOffsetX = 0;
    let containerOffsetY = 0;

    if(container){
        const containerBounds = container.getBoundingClientRect();
        containerOffsetX = containerBounds.x;
        containerOffsetY = containerBounds.y;
    }


    const arrowSize = 20;
    const edgeSpacing = 10;

    // ###### FIXED POSITIOINGS
    let offsetLeft = baseVal.left + baseVal.width / 2;
    let offsetTop = baseVal.top - (popVal.height + arrowSize + offset);
    let arrowStyle = {
        left: "50%",
        bottom: 0,
        transform: "translate(-50%, -55%) rotate(180deg)"
    };

    // HORIZONTAL ALIGNMENT

    // Find available space to the left of selection
    const leftSpace = offsetLeft - edgeSpacing;
    const leftOverflow = popVal.width / 2 - leftSpace;

    // Find available space to the right of selection
    const rightSpace = windowWidth - offsetLeft - edgeSpacing;
    const rightOverflow = popVal.width / 2 - rightSpace;

    // Make sure pop is not disappearing outside screen
    if (leftOverflow > 0) {
        offsetLeft = offsetLeft + leftOverflow;
        arrowStyle.left = `${Math.max(popVal.width / 2 - leftOverflow, arrowSize)}px`;
    } else if (rightOverflow > 0) {
        offsetLeft = offsetLeft - rightOverflow;
        arrowStyle.left = `${popVal.width / 2 + rightOverflow}px`;
    }

    // VERTICAL ALIGNMENT
    const popHeight = popVal.height + arrowSize + edgeSpacing;
    const topSpace = baseVal.top;
    const topOverflow = popHeight - topSpace;

    const bottomSpace = windowHeight - baseVal.bottom;
    const bottomOverflow = popHeight - bottomSpace;

    // Place bottom
    if (topOverflow > 0 || (position === "bottom" && bottomOverflow < 0)) {
        position = "bottom";
        offsetTop = baseVal.bottom + arrowSize + offset;
        arrowStyle = {
            ...arrowStyle,
            bottom: "auto",
            transform: "translate(-50%, -45%) rotate(0)"
        };
    }else {
        position = "top"
    }

    // VISIBILITY
    const hidden = baseVal.left < 0 || baseVal.right < 0 || baseVal.top < 0 || baseVal.top > windowHeight;

    return {
        popStyle: {
            transform: `translateY(${position === "top" ? "10px" : "-10px"})`,
            left: offsetLeft - containerOffsetX,
            top: offsetTop - containerOffsetY,
            width: popVal.width,
            ...(hidden && { opacity: 0 })
        },
        arrowStyle
    };
};

export const findParentWithCSS = (element, property, value) => {
    while (element !== null) {
        const style = window.getComputedStyle(element);
        const propValue = style.getPropertyValue(property);
        if (propValue === value || (!value && propValue !== "none")) {
            return {
                element, propValue
            };
        }
        element = element.parentElement;
    }
    return null;
};
