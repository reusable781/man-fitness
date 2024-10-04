// Sample workout data
const workouts = [
    "Day 1: Chest & Triceps - Bench Press, Push-ups, Dips",
    "Day 2: Back & Biceps - Pull-ups, Deadlifts, Rows",
    "Day 3: Legs - Squats, Lunges, Leg Press",
    "Day 4: Shoulders & Abs - Shoulder Press, Planks, Side Raises",
    "Day 5: Rest Day or Light Cardio",
];

// Sample 4,000 calorie meal plan
const mealPlan = [
    {
        meal: "Breakfast",
        items: [
            "6 scrambled eggs",
            "2 slices whole wheat toast",
            "1 cup oatmeal",
            "1 banana",
            "1 protein shake",
        ],
    },
    {
        meal: "Lunch",
        items: [
            "Grilled chicken breast",
            "2 cups brown rice",
            "1 cup steamed vegetables",
            "1 avocado",
        ],
    },
    {
        meal: "Snack",
        items: [
            "Peanut butter sandwich",
            "Greek yogurt",
            "Mixed nuts",
        ],
    },
    {
        meal: "Dinner",
        items: [
            "Salmon fillet",
            "1 sweet potato",
            "Steamed broccoli",
            "1 glass of milk",
        ],
    },
    {
        meal: "Post-Workout",
        items: [
            "Protein shake",
            "1 cup of mixed berries",
        ],
    },
];

// Sample health tips
const healthTips = [
    "Stay hydrated: Drink at least 3-4 liters of water daily.",
    "Get enough sleep: Aim for 7-8 hours of sleep every night.",
    "Warm up before workouts: Prevent injury by stretching.",
    "Focus on progressive overload: Gradually increase weight.",
    "Balance diet: Incorporate protein, carbs, and fats."
];

// Function to dynamically populate workout plans
function loadWorkouts() {
    const workoutList = document.getElementById('workouts');
    workouts.forEach(workout => {
        const li = document.createElement('li');
        li.textContent = workout;
        workoutList.appendChild(li);
    });
}

// Function to dynamically populate meal plans
function loadMealPlan() {
    const mealPlanContainer = document.getElementById('meal-plan');
    mealPlan.forEach(meal => {
        const div = document.createElement('div');
        const mealTitle = document.createElement('h3');
        mealTitle.textContent = meal.meal;
        div.appendChild(mealTitle);

        const mealItems = document.createElement('ul');
        meal.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            mealItems.appendChild(li);
        });
        div.appendChild(mealItems);
        mealPlanContainer.appendChild(div);
    });
}

// Function to dynamically populate health tips
function loadHealthTips() {
    const tipsList = document.getElementById('tips');
    healthTips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

// Load all content when the page loads
window.onload = function() {
    loadWorkouts();
    loadMealPlan();
    loadHealthTips();
};
