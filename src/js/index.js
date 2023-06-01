import listeners from "./listeners/index";
import { GetAllListings } from "./api/listings/allListings";

import ui from "./ui/index.js";

ui();
listeners();

GetAllListings();
