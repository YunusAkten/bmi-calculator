interface Diets {
    [key: string]: {
        Risk: string;
        Diet: string;
    };
}
export const diets:Diets={
    "Underweight": {
        "Risk": "Malnutrition risk",
        "Diet":"Consume a balanced mix of proteins, including  lean meats, fish, eggs, and plant-based sources like beans and legumes. Incorporate healthy fats from sources such as avocados, nuts, seeds, and olive oil.Choose nutrient-dense carbohydrates like whole grains, fruits, and vegetables.Include dairy or dairy alternatives for calcium and vitamin D.Eat smaller, more frequent meals throughout the day to boost calorie intake."

    },
    "Normal Weight": {
        "Risk": "Low risk",
        "Diet":"Prioritize a varied diet with a colorful array of fruits and vegetables for vitamins and minerals.Opt for whole grains such as brown rice, quinoa, and whole wheat bread for fiber.Include lean proteins like poultry, fish, beans, and tofu.Moderate healthy fats from sources like nuts, seeds, and olive oil.Stay hydrated with water and limit sugary beverages.Engage in regular physical activity, combining both aerobic exercises and strength training."
    },
    "Overweight": {
        "Risk": "Enhanced risk",
        "Diet":"Control portion sizes and be mindful of calorie intake.Choose lean proteins and opt for cooking methods like grilling, baking, or steaming.Increase fiber intake through whole grains, fruits, vegetables, and legumes.Limit added sugars and processed foods.Include healthy snacks like fresh fruits, vegetables, or yogurt.Engage in regular aerobic exercises such as brisk walking or cycling."
    },
    "Moderately Obese": {
        "Risk": "Medium risk",
        "Diet":"Seek guidance from a registered dietitian for a personalized nutrition plan.Monitor portion sizes and focus on nutrient-dense foods.Increase physical activity with a combination of aerobic exercises and strength training.Emphasize whole foods and minimize intake of processed or high-calorie foods.Stay hydrated with water throughout the day."
    },
    "Severely Obese": {
        "Risk": "High risk",
        "Diet":"Consult with healthcare professionals for comprehensive weight management.Address emotional factors related to eating habits through counseling or support groups.Follow a structured meal plan developed by a registered dietitian.Incorporate regular physical activity suitable for your fitness level.Consider a multidisciplinary approach involving medical, nutritional, and psychological support."
        
    }
   
}