var foodItems = {
    "coffee": { wft: 140, unit: "liters per CUP" },
    "tea": { wft: 35, unit: "liters per CUP" },
    "rice": { wft: 3250, unit: "liters per KG" },
    "wheat": { wft: 1500, unit: "liters per KG" },
    "milk": { wft: 1000, unit: "liters per Liter" },
    "eggs": { wft: 135, unit: "liters per EGG" },
    "chicken": { wft: 4100, unit: "liters per KG" },
    "tomatoes": { wft: 300, unit: "liters per KG" },
    "potatoes": { wft: 350, unit: "liters per KG" },
    "onions": { wft: 250, unit: "liters per KG" },
    "lentils": { wft: 4250, unit: "liters per KG" },
    "razor": { wft: 20, unit: "liters" },
    "corn": { wft: 170, unit: "liters per 300gms" },
    "sunglasses": { wft: 40, unit: "liters" },
    "pen": { wft: 2, unit: "liters" },
    "ruler": { wft: 5, unit: "liters" },
    "pizza": { wft: 85, unit: "liters" },
    "bubble gum": { wft: 15, unit: "liters" },
    "biscuit": { wft: 15, unit: "liters per pc" },
    "shampoo": { wft: 150, unit: "liters per 250ml" },
    "jar": { wft: 20, unit: "liters" },
    "lighter": { wft: 15, unit: "liters" },
    "chocolate": { wft: 1100, unit: "liters per BAR" },
    "paper": { wft: 1.5, unit: "liters per pc   " },
    "mirror": { wft: 10, unit: "liters" },
    "straws": { wft: 10, unit: "liters per 10pcs" },
    "shoes": { wft: 8000, unit: "liters" },
    "leather shoes": { wft: 10000, unit: "liters" },
    "laptop": { wft: 40000, unit: "liters" },
    "comb": { wft: 5, unit: "liters" },
    "car": { wft: 800000, unit: "liters" },
    "belt": { wft: 1000, unit: "liters" },
    "wallet": { wft: 800, unit: "liters" },
    "spoon": { wft: 2, unit: "liters" },
    "jacket": { wft: 12000, unit: "liters" },
    "fork": { wft: 2, unit: "liters" },
    "handbag": { wft: 7000, unit: "liters" },
    "knife": { wft: 2, unit: "liters" },
    "fuel": { wft: 47, unit: "liters per gallon" },
    "gasoline": { wft: 50, unit: "liters per gallon" },
    "noodles": { wft: 300, unit: "liters" },
    "apple": { wft: 70, unit: "liters" },
    "banana": { wft: 79, unit: "liters" },
    "egg": { wft: 196, unit: "liters" },
    "potato": { wft: 25, unit: "liters" },
    "tomato": { wft: 13, unit: "liters" },
    "shirt": { wft: 2700, unit: "liters" },
    "jeans": { wft: 7600, unit: "liters" },
    "mobile": { wft: 12000, unit: "liters" },
    "toothbrush": { wft: 5, unit: "liters" },
    "bottle": { wft: 5, unit: "liters" },
    "mobile phone": { wft: 12000, unit: "liters" },
    "pork": { wft: 5988, unit: "liters per KG" },
    "butter": { wft: 5553, unit: "liters per KG" },
    "chicken meat": { wft: 4325, unit: "liters per KG" },
    "olive oil": { wft: 2486, unit: "liters per KG" },
    "soybeans": { wft: 2145, unit: "liters per KG" },
    "sesame seeds": { wft: 1804, unit: "liters per KG" },
    "cheese": { wft: 3178, unit: "liters per KG" },
    "dark chocolate": { wft: 17196, unit: "liters per KG" },
    "bread (from wheat)": { wft: 1608, unit: "liters per KG" },
    "beer (from barley)": { wft: 298, unit: "liters per Liter" },
    "lettuce": { wft: 238, unit: "liters per KG" },
    "asparagus": { wft: 2580, unit: "liters per KG" },
    "broccoli": { wft: 34, unit: "liters per KG" },
    "cauliflower": { wft: 237, unit: "liters per KG" },
    "cucumber": { wft: 353, unit: "liters per KG" },
    "grapefruit": { wft: 112, unit: "liters per KG" },
    "lemon": { wft: 112, unit: "liters per KG" },
    "mango": { wft: 1600, unit: "liters per KG" },
    "orange": { wft: 560, unit: "liters per KG" },
    "peach": { wft: 910, unit: "liters per KG" },
    "sugar": { wft: 1782, unit: "liters per KG" },
    "maize": { wft: 1222, unit: "liters per KG" },
    "barley": { wft: 1308, unit: "liters per KG" },
    "soy milk": { wft: 297, unit: "liters per Liter" },
    "tofu": { wft: 2145, unit: "liters per KG" },
    "cotton lint": { wft: 10117, unit: "liters per KG" },
    "cotton seed": { wft: 2786, unit: "liters per KG" },
    "sunflower seed": { wft: 1804, unit: "liters per KG" },
    "peanuts": { wft: 2786, unit: "liters per KG" },
    "grape wine": { wft: 872, unit: "liters per Liter" },
    "corn": { wft: 486, unit: "liters per KG" },
    "cucumber": { wft: 127, unit: "liters per KG" },
    "cabbage": { wft: 109, unit: "liters per KG" },
    "lettuce": { wft: 68, unit: "liters per KG" },
    "groundnut": { wft: 3100, unit: "liters per KG" },
    "plastic bag": { wft: 3, unit: "liters" },
    "paper bag": { wft: 10, unit: "liters" },
    "glass bottle": { wft: 15, unit: "liters" },
    "aluminium can": { wft: 70, unit: "liters" },
    "cotton bag": { wft: 2720, unit: "liters" },
    "leather bag": { wft: 6000, unit: "liters" },
    "gold ring": { wft: 2400, unit: "liters" },
    "silver ring": { wft: 14, unit: "liters" },
    "platinum ring": { wft: 16000, unit: "liters" },
    "diamond ring": { wft: 48000, unit: "liters" },
    "t-shirt": { wft: 2700, unit: "liters" },
    "pair of jeans": { wft: 7600, unit: "liters" },
    "smartphone": { wft: 12000, unit: "liters" },
    "laptop": { wft: 20000, unit: "liters" },
    "car": { wft: 400000, unit: "liters" },
    "book": { wft: 10, unit: "liters per page" },
    "newspaper": { wft: 7, unit: "liters per page" },
    "cell phone": { wft: 12000, unit: "liters" },
}; 