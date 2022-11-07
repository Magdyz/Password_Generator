// words to use

const verbs = ["abide", "accelerate", "accept", "accomplish", "achieve", "acquire", "acted", "activate", "adapt", "add", "address", "administer", "admire", "admit", "adopt", "advise", "afford", "agree", "alert", "alight", "allow", "altered", "amuse", "analyze", "announce", "annoy", "answer", "anticipate", "apologize", "appear", "applaud", "applied", "appoint", "appraise", "appreciate", "approve", "arbitrate", "argue", "arise", "arrange", "arrest", "arrive", "ascertain", "ask", "assemble", "assess", "assist", "assure", "attach", "attack", "attain", "attempt", "attend", "attract", "audited", "avoid", "awake", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "be", "beam", "bear", "beat", "become", "beg", "begin", "behave", "behold", "belong", "bend", "beset", "bet", "bid", "bind", "bite", "bleach", "bleed", "bless", "blind", "blink", "blot", "blow", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "break", "breathe", "breed", "brief", "bring", "broadcast", "bruise", "brush", "bubble", "budget", "build", "bump", "burn", "burst", "bury", "bust", "buy", "buze", "calculate", "call", "camp", "care", "carry", "carve", "cast", "catalog", "catch", "cause", "challenge", "change", "charge", "chart", "chase", "cheat", "check", "cheer", "chew", "choke", "choose", "chop", "claim", "clap", "clarify", "classify", "clean", "clear", "cling", "clip", "close", "clothe", "coach", "coil", "collect", "color", "comb", "come", "command", "communicate", "compare", "compete", "compile", "complain", "complete", "compose", "compute", "conceive", "concentrate", "conceptualize", "concern", "conclude", "conduct", "confess", "confront", "confuse", "connect", "conserve", "consider", "consist", "consolidate", "construct", "consult", "contain", "continue", "contract", "control", "convert", "coordinate", "copy", "correct", "correlate", "cost", "cough", "counsel", "count", "cover", "crack", "crash", "crawl", "create", "creep", "critique", "cross", "crush", "cry", "cure", "curl", "curve", "cut", "cycle", "dam", "damage", "dance", "dare", "deal", "decay", "deceive", "decide", "decorate", "define", "delay", "delegate", "delight", "deliver", "demonstrate", "depend", "describe", "desert", "deserve", "design", "destroy", "detail", "detect", "determine", "develop", "devise", "diagnose", "dig", "direct", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "dispense", "display", "disprove", "dissect", "distribute", "dive", "divert", "divide", "do", "double", "doubt", "draft", "drag", "drain", "dramatize", "draw", "dream", "dress", "drink", "drip", "drive", "drop", "drown", "drum", "dry", "dust", "dwell", "earn", "eat", "edited", "educate", "eliminate", "embarrass", "employ", "empty", "enacted", "encourage", "end", "endure", "enforce", "engineer", "enhance", "enjoy", "enlist", "ensure", "enter", "entertain", "escape", "establish", "estimate", "evaluate", "examine", "exceed", "excite", "excuse", "execute", "exercise", "exhibit", "exist", "expand", "expect", "expedite", "experiment", "explain", "explode", "express", "extend", "extract", "face", "facilitate", "fade", "fail", "fancy", "fasten", "fax", "fear", "feed", "feel", "fence", "fetch", "fight", "file", "fill", "film", "finalize", "finance", "find", "fire", "fit", "fix", "flap", "flash", "flee", "fling", "float", "flood", "flow", "flower", "fly", "fold", "follow", "fool", "forbid", "force", "forecast", "forego", "foresee", "foretell", "forget", "forgive", "form", "formulate", "forsake", "frame", "freeze", "frighten", "fry", "gather", "gaze", "generate", "get", "give", "glow", "glue", "go", "govern", "grab", "graduate", "grate", "grease", "greet", "grin", "grind", "grip", "groan", "grow", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "handwrite", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "hear", "heat", "help", "hide", "hit", "hold", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "hurt", "hypothesize", "identify", "ignore", "illustrate", "imagine", "implement", "impress", "improve", "improvise", "include", "increase", "induce", "influence", "inform", "initiate", "inject", "injure", "inlay", "innovate", "input", "inspect", "inspire", "install", "institute", "instruct", "insure", "integrate", "intend", "intensify", "interest", "interfere", "interlay", "interpret", "interrupt", "interview", "introduce", "invent", "inventory", "investigate", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "justify", "keep", "kept", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "know", "label", "land", "last", "laugh", "launch", "lay", "lead", "lean", "leap", "learn", "leave", "lecture", "led", "lend", "let", "level", "license", "lick", "lie", "lifted", "light", "lighten", "like", "list", "listen", "live", "load", "locate", "lock", "log", "long", "look", "lose", "love", "maintain", "make", "man", "manage", "manipulate", "manufacture", "map", "march", "mark", "market", "marry", "match", "mate", "matter", "mean", "measure", "meddle", "mediate", "meet", "melt", "melt", "memorize", "mend", "mentor", "milk", "mine", "mislead", "miss", "misspell", "mistake", "misunderstand", "mix", "moan", "model", "modify", "monitor", "moor", "motivate", "mourn", "move", "mow", "muddle", "mug", "multiply", "murder", "nail", "name", "navigate", "need", "negotiate", "nest", "nod", "nominate", "normalize", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "officiate", "open", "operate", "order", "organize", "oriented", "originate", "overcome", "overdo", "overdraw", "overflow", "overhear", "overtake", "overthrow", "owe", "own", "pack", "paddle", "paint", "park", "part", "participate", "pass", "paste", "pat", "pause", "pay", "peck", "pedal", "peel", "peep", "perceive", "perfect", "perform", "permit", "persuade", "phone", "photograph", "pick", "pilot", "pinch", "pine", "pinpoint", "pioneer", "place", "plan", "plant", "play", "plead", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practice", "praised", "pray", "preach", "precede", "predict", "prefer", "prepare", "prescribe", "present", "preserve", "preset", "preside", "press", "pretend", "prevent", "prick", "print", "process", "procure", "produce", "profess", "program", "progress", "project", "promise", "promote", "proofread", "propose", "protect", "prove", "provide", "publicize", "pull", "pump", "punch", "puncture", "punish", "purchase", "push", "put", "qualify", "question", "queue", "quit", "race", "radiate", "rain", "raise", "rank", "rate", "reach", "read", "realign", "realize", "reason", "receive", "recognize", "recommend", "reconcile", "record", "recruit", "reduce", "refer", "reflect", "refuse", "regret", "regulate", "rehabilitate", "reign", "reinforce", "reject", "rejoice", "relate", "relax", "release", "rely", "remain", "remember", "remind", "remove", "render", "reorganize", "repair", "repeat", "replace", "reply", "report", "represent", "reproduce", "request", "rescue", "research", "resolve", "respond", "restored", "restructure", "retire", "retrieve", "return", "review", "revise", "rhyme", "rid", "ride", "ring", "rinse", "rise", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "run", "rush", "sack", "sail", "satisfy", "save", "saw", "say", "scare", "scatter", "schedule", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "secure", "see", "seek", "select", "sell", "send", "sense", "separate", "serve", "service", "set", "settle", "sew", "shade", "shake", "shape", "share", "shave", "shear", "shed", "shelter", "shine", "shiver", "shock", "shoe", "shoot", "shop", "show", "shrink", "shrug", "shut", "sigh", "sign", "signal", "simplify", "sin", "sing", "sink", "sip", "sit", "sketch", "ski", "skip", "slap", "slay", "sleep", "slide", "sling", "slink", "slip", "slit", "slow", "smash", "smell", "smile", "smite", "smoke", "snatch", "sneak", "sneeze", "sniff", "snore", "snow", "soak", "solve", "soothe", "soothsay", "sort", "sound", "sow", "spare", "spark", "sparkle", "speak", "specify", "speed", "spell", "spend", "spill", "spin", "spit", "split", "spoil", "spot", "spray", "spread", "spring", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stand", "stare", "start", "stay", "steal", "steer", "step", "stick", "stimulate", "sting", "stink", "stir", "stitch", "stop", "store", "strap", "streamline", "strengthen", "stretch", "stride", "strike", "string", "strip", "strive", "stroke", "structure", "study", "stuff", "sublet", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "summarize", "supervise", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "swear", "sweat", "sweep", "swell", "swim", "swing", "switch", "symbolize", "synthesize", "systemize", "tabulate", "take", "talk", "tame", "tap", "target", "taste", "teach", "tear", "tease", "telephone", "tell", "tempt", "terrify", "test", "thank", "thaw", "think", "thrive", "throw", "thrust", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transcribe", "transfer", "transform", "translate", "transport", "trap", "travel", "tread", "treat", "tremble", "trick", "trip", "trot", "trouble", "troubleshoot", "trust", "try", "tug", "tumble", "turn", "tutor", "twist", "type", "undergo", "understand", "undertake", "undress", "unfasten", "unify", "unite", "unlock", "unpack", "untidy", "update", "upgrade", "uphold", "upset", "use", "utilize", "vanish", "verbalize", "verify", "vex", "visit", "wail", "wait", "wake", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "wear", "weave", "wed", "weep", "weigh", "welcome", "wend", "wet", "whine", "whip", "whirl", "whisper", "whistle", "win", "wind", "wink", "wipe", "wish", "withdraw", "withhold", "withstand", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "wring", "write", "x-ray", "yawn", "yell", "zip", "zoom"];

const colors = ["alizarin", "amaranth", "amber", "amethyst", "apricot", "aqua", "aquamarine", "asparagus", "auburn", "azure", "beige", "bistre", "black", "blue", "blue-green", "blue-violet", "bondi-blue", "brass", "bronze", "brown", "buff", "burgundy", "camouflage-green", "caput-mortuum", "cardinal", "carmine", "carrot-orange", "celadon", "cerise", "cerulean", "champagne", "charcoal", "chartreuse", "cherry-blossom-pink", "chestnut", "chocolate", "cinnabar", "cinnamon", "cobalt", "copper", "coral", "corn", "cornflower", "cream", "crimson", "cyan", "dandelion", "denim", "ecru", "emerald", "eggplant", "falu-red", "fern-green", "firebrick", "flax", "forest-green", "french-rose", "fuchsia", "gamboge", "gold", "goldenrod", "green", "grey", "han-purple", "harlequin", "heliotrope", "hollywood-cerise", "indigo", "ivory", "jade", "kelly-green", "khaki", "lavender", "lawn-green", "lemon", "lemon-chiffon", "lilac", "lime", "lime-green", "linen", "magenta", "magnolia", "malachite", "maroon", "mauve", "midnight-blue", "mint-green", "misty-rose", "moss-green", "mustard", "myrtle", "navajo-white", "navy-blue", "ochre", "office-green", "olive", "olivine", "orange", "orchid", "papaya-whip", "peach", "pear", "periwinkle", "persimmon", "pine-green", "pink", "platinum", "plum", "powder-blue", "puce", "prussian-blue", "psychedelic-purple", "pumpkin", "purple", "quartz-grey", "raw-umber", "razzmatazz", "red", "robin-egg-blue", "rose", "royal-blue", "royal-purple", "ruby", "russet", "rust", "safety-orange", "saffron", "salmon", "sandy-brown", "sangria", "sapphire", "scarlet", "school-bus-yellow", "sea-green", "seashell", "sepia", "shamrock-green", "shocking-pink", "silver", "sky-blue", "slate-grey", "smalt", "spring-bud", "spring-green", "steel-blue", "tan", "tangerine", "taupe", "teal", "terra-cotta", "thistle", "titanium-white", "tomato", "turquoise", "tyrian-purple", "ultramarine", "van-dyke-brown", "vermilion", "violet", "viridian", "wheat", "white", "wisteria", "yellow", "zucchini"]

const nouns = ["people", "history", "way", "art", "world", "information", "map", "two", "family", "government", "health", "system", "computer", "meat", "year", "thanks", "music", "person", "reading", "method", "data", "food", "understanding", "theory", "law", "bird", "literature", "problem", "software", "control", "knowledge", "power", "ability", "economics", "love", "internet", "television", "science", "library", "nature", "fact", "product", "idea", "temperature", "investment", "area", "society", "activity", "story", "industry", "media", "thing", "oven", "community", "definition", "safety", "quality", "development", "language", "management", "player", "variety", "video", "week", "security", "country", "exam", "movie", "organization", "equipment", "physics", "analysis", "policy", "series", "thought", "basis", "boyfriend", "direction", "strategy", "technology", "army", "camera", "freedom", "paper", "environment", "child", "instance", "month", "truth", "marketing", "university", "writing", "article", "department", "difference", "goal", "news", "audience", "fishing", "growth", "income", "marriage", "user", "combination", "failure", "meaning", "medicine", "philosophy", "teacher", "communication", "night", "chemistry", "disease", "disk", "energy", "nation", "road", "role", "soup", "advertising", "location", "success", "addition", "apartment", "education", "math", "moment", "painting", "politics", "attention", "decision", "event", "property", "shopping", "student", "wood", "competition", "distribution", "entertainment", "office", "population", "president", "unit", "category", "cigarette", "context", "introduction", "opportunity", "performance", "driver", "flight", "length", "magazine", "newspaper", "relationship", "teaching", "cell", "dealer", "finding", "lake", "member", "message", "phone", "scene", "appearance", "association", "concept", "customer", "death", "discussion", "housing", "inflation", "insurance", "mood", "woman", "advice", "blood", "effort", "expression", "importance", "opinion", "payment", "reality", "responsibility", "situation", "skill", "statement", "wealth", "application", "city", "county", "depth", "estate", "foundation", "grandmother", "heart", "perspective", "photo", "recipe", "studio", "topic", "collection", "depression", "imagination", "passion", "percentage", "resource", "setting", "ad", "agency", "college", "connection", "criticism", "debt", "description", "memory", "patience", "secretary", "solution", "administration", "aspect", "attitude", "director", "personality", "psychology", "recommendation", "response", "selection", "storage", "version", "alcohol", "argument", "complaint", "contract", "emphasis", "highway", "loss", "membership", "possession", "preparation", "steak", "union", "agreement", "cancer", "currency", "employment", "engineering", "entry", "interaction", "mixture", "preference", "region", "republic", "tradition", "virus", "actor", "classroom", "delivery", "device", "difficulty", "drama", "election", "engine", "football", "guidance", "hotel", "owner", "priority", "protection", "suggestion", "tension", "variation", "anxiety", "atmosphere", "awareness", "bath", "bread", "candidate", "climate", "comparison", "confusion", "construction", "elevator", "emotion", "employee", "employer", "guest", "height", "leadership", "mall", "manager", "operation", "recording", "sample", "transportation", "charity", "cousin", "disaster", "editor", "efficiency", "excitement", "extent", "feedback", "guitar", "homework", "leader", "mom", "outcome", "permission", "presentation", "promotion", "reflection", "refrigerator", "resolution", "revenue", "session", "singer", "tennis", "basket", "bonus", "cabinet", "childhood", "church", "clothes", "coffee", "dinner", "drawing", "hair", "hearing", "initiative", "judgment", "lab", "measurement", "mode", "mud", "orange", "poetry", "police", "possibility", "procedure", "queen", "ratio", "relation", "restaurant", "satisfaction", "sector", "signature", "significance", "song", "tooth", "town", "vehicle", "volume", "wife", "accident", "airport", "appointment", "arrival", "assumption", "baseball", "chapter", "committee", "conversation", "database", "enthusiasm", "error", "explanation", "farmer", "gate", "girl", "hall", "historian", "hospital", "injury", "instruction", "maintenance", "manufacturer", "meal", "perception", "pie", "poem", "presence", "proposal", "reception", "replacement", "revolution", "river", "son", "speech", "tea", "village", "warning", "winner", "worker", "writer", "assistance", "breath", "buyer", "chest", "chocolate", "conclusion", "contribution", "cookie", "courage", "dad", "desk", "drawer", "establishment", "examination", "garbage", "grocery", "honey", "impression", "improvement", "independence", "insect", "inspection", "inspector", "king", "ladder", "menu", "penalty", "piano", "potato", "profession", "professor", "quantity", "reaction", "requirement", "salad", "sister", "supermarket", "tongue", "weakness", "wedding", "affair", "ambition", "analyst", "apple", "assignment", "assistant", "bathroom", "bedroom", "beer", "birthday", "celebration", "championship", "cheek", "client", "consequence", "departure", "diamond", "dirt", "ear", "fortune", "friendship", "funeral", "gene", "girlfriend", "hat", "indication", "intention", "lady", "midnight", "negotiation", "obligation", "passenger", "pizza", "platform", "poet", "pollution", "recognition", "reputation", "shirt", "sir", "speaker", "stranger", "surgery", "sympathy", "tale", "throat", "trainer", "uncle", "youth", "time", "work", "film", "water", "money", "example", "while", "business", "study", "game", "life", "form", "air", "day", "place", "number", "part", "field", "fish", "back", "process", "heat", "hand", "experience", "job", "book", "end", "point", "type", "home", "economy", "value", "body", "market", "guide", "interest", "state", "radio", "course", "company", "price", "size", "card", "list", "mind", "trade", "line", "care", "group", "risk", "word", "fat", "force", "key", "light", "training", "name", "school", "top", "amount", "level", "order", "practice", "research", "sense", "service", "piece", "web", "boss", "sport", "fun", "house", "page", "term", "test", "answer", "sound", "focus", "matter", "kind", "soil", "board", "oil", "picture", "access", "garden", "range", "rate", "reason", "future", "site", "demand", "exercise", "image", "case", "cause", "coast", "action", "age", "bad", "boat", "record", "result", "section", "building", "mouse", "cash", "class", "nothing", "period", "plan", "store", "tax", "side", "subject", "space", "rule", "stock", "weather", "chance", "figure", "man", "model", "source", "beginning", "earth", "program", "chicken", "design", "feature", "head", "material", "purpose", "question", "rock", "salt", "act", "birth", "car", "dog", "object", "scale", "sun", "note", "profit", "rent", "speed", "style", "war", "bank", "craft", "half", "inside", "outside", "standard", "bus", "exchange", "eye", "fire", "position", "pressure", "stress", "advantage", "benefit", "box", "frame", "issue", "step", "cycle", "face", "item", "metal", "paint", "review", "room", "screen", "structure", "view", "account", "ball", "discipline", "medium", "share", "balance", "bit", "black", "bottom", "choice", "gift", "impact", "machine", "shape", "tool", "wind", "address", "average", "career", "culture", "morning", "pot", "sign", "table", "task", "condition", "contact", "credit", "egg", "hope", "ice", "network", "north", "square", "attempt", "date", "effect", "link", "post", "star", "voice", "capital", "challenge", "friend", "self", "shot", "brush", "couple", "debate", "exit", "front", "function", "lack", "living", "plant", "plastic", "spot", "summer", "taste", "theme", "track", "wing", "brain", "button", "click", "desire", "foot", "gas", "influence", "notice", "rain", "wall", "base", "damage", "distance", "feeling", "pair", "savings", "staff", "sugar", "target", "text", "animal", "author", "budget", "discount", "file", "ground", "lesson", "minute", "officer", "phase", "reference", "register", "sky", "stage", "stick", "title", "trouble", "bowl", "bridge", "campaign", "character", "club", "edge", "evidence", "fan", "letter", "lock", "maximum", "novel", "option", "pack", "park", "plenty", "quarter", "skin", "sort", "weight", "baby", "background", "carry", "dish", "factor", "fruit", "glass", "joint", "master", "muscle", "red", "strength", "traffic", "trip", "vegetable", "appeal", "chart", "gear", "ideal", "kitchen", "land", "log", "mother", "net", "party", "principle", "relative", "sale", "season", "signal", "spirit", "street", "tree", "wave", "belt", "bench", "commission", "copy", "drop", "minimum", "path", "progress", "project", "sea", "south", "status", "stuff", "ticket", "tour", "angle", "blue", "breakfast", "confidence", "daughter", "degree", "doctor", "dot", "dream", "duty", "essay", "father", "fee", "finance", "hour", "juice", "limit", "luck", "milk", "mouth", "peace", "pipe", "seat", "stable", "storm", "substance", "team", "trick", "afternoon", "bat", "beach", "blank", "catch", "chain", "consideration", "cream", "crew", "detail", "gold", "interview", "kid", "mark", "match", "mission", "pain", "pleasure", "score", "screw", "sex", "shop", "shower", "suit", "tone", "window", "agent", "band", "block", "bone", "calendar", "cap", "coat", "contest", "corner", "court", "cup", "district", "door", "east", "finger", "garage", "guarantee", "hole", "hook", "implement", "layer", "lecture", "lie", "manner", "meeting", "nose", "parking", "partner", "profile", "respect", "rice", "routine", "schedule", "swimming", "telephone", "tip", "winter", "airline", "bag", "battle", "bed", "bill", "bother", "cake", "code", "curve", "designer", "dimension", "dress", "ease", "emergency", "evening", "extension", "farm", "fight", "gap", "grade", "holiday", "horror", "horse", "host", "husband", "loan", "mistake", "mountain", "nail", "noise", "occasion", "package", "patient", "pause", "phrase", "proof", "race", "relief", "sand", "sentence", "shoulder", "smoke", "stomach", "string", "tourist", "towel", "vacation", "west", "wheel", "wine", "arm", "aside", "associate", "bet", "blow", "border", "branch", "breast", "brother", "buddy", "bunch", "chip", "coach", "cross", "document", "draft", "dust", "expert", "floor", "god", "golf", "habit", "iron", "judge", "knife", "landscape", "league", "mail", "mess", "native", "opening", "parent", "pattern", "pin", "pool", "pound", "request", "salary", "shame", "shelter", "shoe", "silver", "tackle", "tank", "trust", "assist", "bake", "bar", "bell", "bike", "blame", "boy", "brick", "chair", "closet", "clue", "collar", "comment", "conference", "devil", "diet", "fear", "fuel", "glove", "jacket", "lunch", "monitor", "mortgage", "nurse", "pace", "panic", "peak", "plane", "reward", "row", "sandwich", "shock", "spite", "spray", "surprise", "till", "transition", "weekend", "welcome", "yard", "alarm", "bend", "bicycle", "bite", "blind", "bottle", "cable", "candle", "clerk", "cloud", "concert", "counter", "flower", "grandfather", "harm", "knee", "lawyer", "leather", "load", "mirror", "neck", "pension", "plate", "purple", "ruin", "ship", "skirt", "slice", "snow", "specialist", "stroke", "switch", "trash", "tune", "zone", "anger", "award", "bid", "bitter", "boot", "bug", "camp", "candy", "carpet", "cat", "champion", "channel", "clock", "comfort", "cow", "crack", "engineer", "entrance", "fault", "grass", "guy", "hell", "highlight", "incident", "island", "joke", "jury", "leg", "lip", "mate", "motor", "nerve", "passage", "pen", "pride", "priest", "prize", "promise", "resident", "resort", "ring", "roof", "rope", "sail", "scheme", "script", "sock", "station", "toe", "tower", "truck", "witness", "a", "you", "it", "can", "will", "if", "one", "many", "most", "other", "use", "make", "good", "look", "help", "go", "great", "being", "few", "might", "still", "public", "read", "keep", "start", "give", "human", "local", "general", "she", "specific", "long", "play", "feel", "high", "tonight", "put", "common", "set", "change", "simple", "past", "big", "possible", "particular", "today", "major", "personal", "current", "national", "cut", "natural", "physical", "show", "try", "check", "second", "call", "move", "pay", "let", "increase", "single", "individual", "turn", "ask", "buy", "guard", "hold", "main", "offer", "potential", "professional", "international", "travel", "cook", "alternative", "following", "special", "working", "whole", "dance", "excuse", "cold", "commercial", "low", "purchase", "deal", "primary", "worth", "fall", "necessary", "positive", "produce", "search", "present", "spend", "talk", "creative", "tell", "cost", "drive", "green", "support", "glad", "remove", "return", "run", "complex", "due", "effective", "middle", "regular", "reserve", "independent", "leave", "original", "reach", "rest", "serve", "watch", "beautiful", "charge", "active", "break", "negative", "safe", "stay", "visit", "visual", "affect", "cover", "report", "rise", "walk", "white", "beyond", "junior", "pick", "unique", "anything", "classic", "final", "lift", "mix", "private", "stop", "teach", "western", "concern", "familiar", "fly", "official", "broad", "comfortable", "gain", "maybe", "rich", "save", "stand", "young", "fail", "heavy", "hello", "lead", "listen", "valuable", "worry", "handle", "leading", "meet", "release", "sell", "finish", "normal", "press", "ride", "secret", "spread", "spring", "tough", "wait", "brown", "deep", "display", "flow", "hit", "objective", "shoot", "touch", "cancel", "chemical", "cry", "dump", "extreme", "push", "conflict", "eat", "fill", "formal", "jump", "kick", "opposite", "pass", "pitch", "remote", "total", "treat", "vast", "abuse", "beat", "burn", "deposit", "print", "raise", "sleep", "somewhere", "advance", "anywhere", "consist", "dark", "double", "draw", "equal", "fix", "hire", "internal", "join", "kill", "sensitive", "tap", "win", "attack", "claim", "constant", "drag", "drink", "guess", "minor", "pull", "raw", "soft", "solid", "wear", "weird", "wonder", "annual", "count", "dead", "doubt", "feed", "forever", "impress", "nobody", "repeat", "round", "sing", "slide", "strip", "whereas", "wish", "combine", "command", "dig", "divide", "equivalent", "hang", "hunt", "initial", "march", "mention", "smell", "spiritual", "survey", "tie", "adult", "brief", "crazy", "escape", "gather", "hate", "prior", "repair", "rough", "sad", "scratch", "sick", "strike", "employ", "external", "hurt", "illegal", "laugh", "lay", "mobile", "nasty", "ordinary", "respond", "royal", "senior", "split", "strain", "struggle", "swim", "train", "upper", "wash", "yellow", "convert", "crash", "dependent", "fold", "funny", "grab", "hide", "miss", "permit", "quote", "recover", "resolve", "roll", "sink", "slip", "spare", "suspect", "sweet", "swing", "twist", "upstairs", "usual", "abroad", "brave", "calm", "concentrate", "estimate", "grand", "male", "mine", "prompt", "quiet", "refuse", "regret", "reveal", "rush", "shake", "shift", "shine", "steal", "suck", "surround", "anybody", "bear", "brilliant", "dare", "dear", "delay", "drunk", "female", "hurry", "inevitable", "invite", "kiss", "neat", "pop", "punch", "quit", "reply", "representative", "resist", "rip", "rub", "silly", "smile", "spell", "stretch", "stupid", "tear", "temporary", "tomorrow", "wake", "wrap", "yesterday"]

// generate password using list of letters (could possibly add accepted signs to the list later)

const listOfLetters = "AaBbCcDdEeFfGgEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtWwXxYyZz";
const symbols = "!@#$%^&*()_-+={[}]:;.?"
const numbers = "0123456789"
const allCharactersSymbols = listOfLetters + symbols
const allCharactersNumbers = listOfLetters + numbers
const allCharactersAndNumbers = listOfLetters + symbols + numbers
const checkboxSymbols = document.querySelector( "#symbolsIncluded" );
const checkboxnumbers = document.querySelector( "#numbersCheckbox" );
const sliderValue = document.querySelector( "#sliderRange" );
let sliderValueOutput = document.querySelector( "#demo" );
const textInputed = document.querySelector( "#inputText" );
const infoTextBox = document.querySelector( "#infoText" );

// default starter slider value

sliderValueOutput.innerHTML = "12";

// create a random number using Math.random() then Math.floor() to transfer from float to integer

function createRandomNum( n ) {
    let random = Math.random();
    random = Math.floor( random * n ) + 1;
    return random
}

// create a random range using Math.random() then Math.floor() to transfer from float to integer

function createRandomRange( min, max ) {
    let random = Math.random();
    random = Math.floor( random * ( max - min ) + min );
    return random
}

// the main function that uses the above function to choose a random index from list
// the function checks if any of the boxes is clicked, both or none before processing

function generatePassword( numberOfCharacters ) {
    let newPass = [];     // new password list to be converted to string
        
    // checks if checkbox is checked before generating password with symbols or numbers

    if ( checkboxSymbols.checked === false && checkboxnumbers.checked === false ) {

        for ( let i = 0; i < numberOfCharacters; i++ ) {
            newPass.push( listOfLetters[ createRandomNum( listOfLetters.length - 1 ) ] );
        }
        return newPass.join( "" ) // transform a list into string, final password

    } else if ( checkboxSymbols.checked === true && checkboxnumbers.checked === false ) {

        for ( let i = 0; i < numberOfCharacters; i++ ) {
            let symbolToPush = allCharactersSymbols[ createRandomNum( allCharactersSymbols.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )

    } else if ( checkboxSymbols.checked === false && checkboxnumbers.checked === true ) {
        for (let i = 0; i < numberOfCharacters; i++) {
            let symbolToPush = allCharactersNumbers[ createRandomNum( allCharactersNumbers.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )

    } else {
        for ( let i = 0; i < numberOfCharacters; i++ ) {
            let symbolToPush = allCharactersAndNumbers[ createRandomNum ( allCharactersAndNumbers.length - 1 ) ].toString()
            newPass.push( symbolToPush );
        }
        return newPass.join( "" )
    }
}

// get the value from slider, then use function generatepassword to generate a password

function clicked() {
    const textValue = textInputed.value;
    const numberInputed = sliderValueOutput.innerHTML;

    if ( textValue.length < 1 ) {

        // update info text with a message
        infoTextBox.innerHTML = "Say hello to a brand new strong password! For an even stronger password, mark both symbols and numbers";
        
        // generate random password using the value inputed 
        let randomPassword = generatePassword( numberInputed );
       
        // update result text with a password        
        document.getElementById( "resultText" ).innerHTML = randomPassword;
    }
    else if ( textValue.length >= 1 ) {

        // check the length of the text entered compared to the digits needed
        if ( textValue.length == numberInputed ) {

            // update info text with a message
            infoTextBox.innerHTML = "This password is weak. Try increasing the number of characters. Here is a better " + numberInputed + " digit password";
            
            // generate random password using the value inputed 
            let randomPassword = generatePassword( numberInputed );
            
            // update result text with a password
            document.getElementById( "resultText" ).innerHTML = randomPassword;

        } else if ( textValue.length > numberInputed ) {

            infoTextBox.innerHTML = "The word is more than the number of characters needed. Try using a smaller word or here is a better " + numberInputed + " digit password";
            let randomPassword = generatePassword(numberInputed);
            document.getElementById( "resultText" ).innerHTML = randomPassword;

        } else if ( textValue.length < numberInputed ) {
            
            // if text is less than number of digits needed calculate the difference and
            // generate a random rest of password for the word added
            let remainingRandomDigits = numberInputed - textValue.length;

            infoTextBox.innerHTML = "We have pimped your word and created a strong password";
            let randomPassword = generatePassword( remainingRandomDigits );
            document.getElementById( "resultText" ).innerHTML = textValue + randomPassword;

        } else {

            infoTextBox.innerHTML = "Something is wrong. Please make sure you choose a number of digits and a word if needed and try again!";
        }
    }
}

// pressing Enter runs the code

document.addEventListener( "keydown", function ( e ) {
    if ( e.key === 'Enter' ) {
        clicked()
    }
} )

// stop space Keydown in input to prevent spaces

document.addEventListener( "keydown", function ( e ) {
    if ( e.keyCode == 32 ) { 
        e.preventDefault();
        return false };
} )

// using a instance of ClipboardJS library

const clipboard = new ClipboardJS( '.btn' );

// slider value to show next to number

sliderValue.oninput = function () {
    sliderValueOutput.innerHTML = sliderValue.value;
}

function generateRandomWordPass(){
    
    // Change background color 
    
    const element = document.querySelector('body');
    element.setAttribute('style', 'background: linear-gradient(45deg, #FFFB7D 0%, #85FFBD 100%)');

    let resultBox = document.getElementById( "resultText" ); 

    // create a random verb, color and noun from the list of strings

    let randomVerb = verbs [ createRandomNum ( verbs.length - 1 ) ]
    let randomColor = colors [ createRandomNum (colors.length - 1 ) ]
    let randomNoun = nouns [ createRandomNum ( nouns.length - 1 ) ]

    // capitalize the first letter then add the rest of the work using substring
    // for each of verb, color and noun

    let CapRandomVerb = randomVerb[0].toUpperCase()+randomVerb.substring(1)
    let CapRandomColor = randomColor[0].toUpperCase()+randomColor.substring(1)
    let CapRandomNoun = randomNoun[0].toUpperCase() + randomNoun.substring(1)

    // create a random number of letters and numbers for extra security
    checkboxSymbols.checked = true;
    checkboxnumbers.checked = true;
    let randomPassword = generatePassword( createRandomRange ( 2, 6 ) );

    // change text message
    infoTextBox.innerHTML = "We have created a strong memorable password for you";

    resultBox.innerHTML = CapRandomVerb + CapRandomColor + CapRandomNoun + randomPassword
    
    // update slider value with the new length of pass

    sliderValueOutput.innerHTML = resultBox.innerHTML.length;

}
