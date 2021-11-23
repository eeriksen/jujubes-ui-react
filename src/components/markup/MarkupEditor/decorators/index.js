import { CompositeDecorator } from "draft-js";
import { createTypeStrategy } from "../utils";

import { Link } from "./Link";

const decorators = new CompositeDecorator([
    {
        strategy: createTypeStrategy("LINK"),
        component: Link
    }
]);

export default decorators;
