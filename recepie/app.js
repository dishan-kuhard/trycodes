// IIFE: Module pattern to encapsulate and manage recipe application state
const RecipeApp = (() => {
    // Private variables - not accessible outside IIFE
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            ingredients: [
                "400g spaghetti",
                "200g pancetta, diced",
                "4 large eggs",
                "100g Pecorino Romano cheese",
                "Black pepper to taste"
            ],
            steps: [
                "Bring a large pot of salted water to boil and cook spaghetti until al dente",
                "While pasta cooks, fry pancetta until crispy",
                "Whisk together eggs, grated cheese, and black pepper",
                "Drain pasta, reserving 1 cup pasta water",
                "Toss hot pasta with pancetta and fat",
                "Remove from heat and quickly stir in egg mixture",
                "Add pasta water as needed to create creamy sauce",
                "Serve immediately with extra cheese and pepper"
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: [
                "800g chicken breast, cubed",
                "1 cup yogurt",
                "2 tbsp tikka masala paste",
                "400ml coconut milk",
                "400g canned tomatoes",
                "1 onion, diced",
                "3 garlic cloves, minced",
                "Fresh cilantro"
            ],
            steps: [
                {
                    step: "Prepare the chicken marinade",
                    substeps: [
                        "Mix yogurt with tikka masala paste",
                        "Add chicken cubes and marinate for 15 minutes",
                        "Heat oil in a pan and cook chicken until golden",
                        "Set chicken aside"
                    ]
                },
                {
                    step: "Make the sauce",
                    substeps: [
                        "In the same pan, sauté onion and garlic until fragrant",
                        "Add remaining tikka paste and cook for 1 minute",
                        "Stir in canned tomatoes and coconut milk",
                        "Simmer for 10 minutes to blend flavors",
                        "Return chicken to pan and simmer for 10 more minutes"
                    ]
                },
                "Garnish with fresh cilantro and serve with rice or naan"
            ]
        },
        {
            id: 3,
            title: "Homemade Croissants",
            time: 180,
            difficulty: "hard",
            description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
            category: "baking",
            ingredients: [
                "500g strong bread flour",
                "300ml milk",
                "10g salt",
                "50g sugar",
                "10g instant yeast",
                "250g unsalted butter, cold",
                "Egg wash"
            ],
            steps: [
                {
                    step: "Prepare dough",
                    substeps: [
                        "Mix flour, milk, salt, sugar, and yeast",
                        "Knead until smooth (about 5 minutes)",
                        "Rest for 20 minutes"
                    ]
                },
                {
                    step: "Laminate with butter",
                    substeps: [
                        "Roll dough into a rectangle",
                        "Place cold butter between two sheets of dough",
                        "Fold and turn dough 6 times with 20-minute rests between each turn"
                    ]
                },
                "Shape into croissants and proof for 2 hours",
                "Brush with egg wash and bake at 200°C for 20 minutes until golden"
            ]
        },
        {
            id: 4,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
            category: "salad",
            ingredients: [
                "4 large tomatoes, chopped",
                "1 cucumber, diced",
                "1 red onion, thinly sliced",
                "200g feta cheese, cubed",
                "150g Kalamata olives",
                "4 tbsp extra virgin olive oil",
                "2 tbsp red wine vinegar",
                "1 tsp oregano"
            ],
            steps: [
                "Combine tomatoes, cucumber, and red onion in a large bowl",
                "Add feta cheese and olives",
                "Whisk together olive oil, vinegar, and oregano",
                "Pour dressing over salad and toss gently",
                "Let sit for 5 minutes before serving"
            ]
        },
        {
            id: 5,
            title: "Beef Wellington",
            time: 120,
            difficulty: "hard",
            description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
            category: "meat",
            ingredients: [
                "1kg beef tenderloin",
                "500g mushrooms, finely chopped",
                "2 shallots, minced",
                "320g puff pastry",
                "200g prosciutto slices",
                "2 tbsp Dijon mustard",
                "Egg wash"
            ],
            steps: [
                {
                    step: "Prepare the beef",
                    substeps: [
                        "Season beef with salt and pepper",
                        "Sear on all sides in a hot pan until brown",
                        "Cool completely"
                    ]
                },
                {
                    step: "Make duxelles and assemble",
                    substeps: [
                        "Sauté mushrooms and shallots until dry",
                        "Coat beef with mustard",
                        "Wrap beef with prosciutto",
                        "Spread mushroom mixture over prosciutto",
                        "Wrap in puff pastry and seal edges"
                    ]
                },
                "Brush with egg wash and bake at 180°C for 30-40 minutes"
            ]
        },
        {
            id: 6,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
            category: "vegetarian",
            ingredients: [
                "2 cups broccoli florets",
                "1 red bell pepper, sliced",
                "1 yellow bell pepper, sliced",
                "200g snap peas",
                "2 carrots, julienned",
                "3 garlic cloves, minced",
                "3 tbsp soy sauce",
                "1 tbsp sesame oil",
                "Ginger, minced"
            ],
            steps: [
                "Heat sesame oil in a wok or large pan over high heat",
                "Add garlic and ginger, stir-fry for 30 seconds",
                "Add harder vegetables first (carrots, broccoli), stir-fry for 2 minutes",
                "Add softer vegetables (peppers, snap peas), stir-fry for 2 minutes",
                "Add soy sauce and toss until coated",
                "Serve immediately over rice or noodles"
            ]
        },
        {
            id: 7,
            title: "Pad Thai",
            time: 30,
            difficulty: "medium",
            description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
            category: "noodles",
            ingredients: [
                "300g rice noodles",
                "300g large shrimp",
                "2 eggs",
                "100g bean sprouts",
                "3 green onions, chopped",
                "3 tbsp tamarind paste",
                "2 tbsp fish sauce",
                "2 tbsp palm sugar",
                "Crushed peanuts",
                "Lime wedges"
            ],
            steps: [
                "Soak rice noodles in warm water until pliable",
                "Stir-fry shrimp in a wok until pink, remove and set aside",
                "Push noodles to side, scramble eggs in the wok",
                "Return shrimp, add noodles and toss",
                "Mix tamarind paste, fish sauce, and palm sugar",
                "Pour sauce over noodles and toss until combined",
                "Top with peanuts, bean sprouts, and green onions",
                "Serve with lime wedges"
            ]
        },
        {
            id: 8,
            title: "Margherita Pizza",
            time: 60,
            difficulty: "medium",
            description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
            category: "pizza",
            ingredients: [
                "500g pizza dough",
                "200ml tomato sauce",
                "300g fresh mozzarella",
                "200g fresh tomatoes, sliced",
                "Fresh basil leaves",
                "Extra virgin olive oil",
                "Salt and pepper"
            ],
            steps: [
                "Preheat oven to 250°C (as hot as possible)",
                "Stretch pizza dough into a thin circle",
                "Spread tomato sauce evenly, leaving 1cm border",
                "Tear mozzarella and distribute over sauce",
                "Bake for 8-10 minutes until crust is crispy and cheese bubbles",
                "Top with fresh basil, drizzle with olive oil",
                "Season with salt and pepper to taste",
                "Cool for 1 minute before slicing and serving"
            ]
        }
    ];

    let currentFilter = 'all';
    let currentSort = null;
    let expandedCards = new Set(); // Track which recipe cards are expanded

    // DOM Selection
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filters button');
    const sortButtons = document.querySelectorAll('.sorters button');

    // Pure function: filter recipes based on mode
    const applyFilter = (recipesList, filterMode) => {
        if (filterMode === 'all') return recipesList;
        if (filterMode === 'quick') return recipesList.filter((recipe) => recipe.time < 30);
        return recipesList.filter((recipe) => recipe.difficulty === filterMode);
    };

    // Pure function: sort recipes based on mode
    const applySort = (recipesList, sortMode) => {
        if (!sortMode) return recipesList;
        const copy = [...recipesList];
        if (sortMode === 'name') {
            return copy.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortMode === 'time') {
            return copy.sort((a, b) => a.time - b.time);
        }
        return copy;
    };

    // Recursive function to render steps with support for nested substeps
    const renderSteps = (steps, level = 0) => {
        return steps.map((step, index) => {
            if (typeof step === 'string') {
                // Simple string step
                return `<li class="step-item" style="margin-left: ${level * 20}px">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-text">${step}</span>
                </li>`;
            } else if (typeof step === 'object' && step.substeps) {
                // Step with substeps - recursively render substeps
                return `<li class="step-item step-with-substeps" style="margin-left: ${level * 20}px">
                    <span class="step-number">${index + 1}</span>
                    <span class="step-text">${step.step}</span>
                    <ul class="substeps">
                        ${renderSteps(step.substeps, level + 1).join('')}
                    </ul>
                </li>`;
            }
        }).join('');
    };

    // Pure function: create recipe card HTML with expandable sections
    const createRecipeCard = (recipe) => {
        const isExpanded = expandedCards.has(recipe.id);
        const ingredientsHTML = recipe.ingredients ? `
            <div class="ingredients-section ${isExpanded ? 'expanded' : ''}">
                <h4>Ingredients</h4>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
        ` : '';

        const stepsHTML = recipe.steps ? `
            <div class="steps-section ${isExpanded ? 'expanded' : ''}">
                <h4>Cooking Steps</h4>
                <ol class="steps-list">
                    ${renderSteps(recipe.steps)}
                </ol>
            </div>
        ` : '';

        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <div class="card-header">
                    <h3>${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span>⏱️ ${recipe.time} min</span>
                        <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                    </div>
                </div>
                <p class="description">${recipe.description}</p>
                <div class="card-controls">
                    <button class="btn-expand" data-id="${recipe.id}" data-type="ingredients">
                        ${isExpanded ? '▼' : '▶'} Show Ingredients
                    </button>
                    <button class="btn-expand" data-id="${recipe.id}" data-type="steps">
                        ${isExpanded ? '▼' : '▶'} Show Steps
                    </button>
                </div>
                ${ingredientsHTML}
                ${stepsHTML}
            </div>
        `;
    };

    // Function to render recipes to the DOM
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
        recipeContainer.innerHTML = recipeCardsHTML;
        attachEventListeners();
    };

    // Attach event listeners to expand/collapse buttons
    const attachEventListeners = () => {
        const expandButtons = document.querySelectorAll('.btn-expand');
        expandButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const recipeId = parseInt(e.target.getAttribute('data-id'));
                if (expandedCards.has(recipeId)) {
                    expandedCards.delete(recipeId);
                } else {
                    expandedCards.add(recipeId);
                }
                updateDisplay();
            });
        });
    };

    // Central function: combines filter + sort then renders
    const updateDisplay = () => {
        const filtered = applyFilter(recipes, currentFilter);
        const sorted = applySort(filtered, currentSort);
        renderRecipes(sorted);
    };

    // Helper: update active button styles
    const setActiveButton = (buttons, activeAttr, value) => {
        buttons.forEach((btn) => {
            if (btn.getAttribute(activeAttr) === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // Attach filter event listeners
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.getAttribute('data-filter');
            currentFilter = selectedFilter;
            setActiveButton(filterButtons, 'data-filter', selectedFilter);
            updateDisplay();
        });
    });

    // Attach sort event listeners
    sortButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedSort = button.getAttribute('data-sort');
            currentSort = currentSort === selectedSort ? null : selectedSort;
            setActiveButton(sortButtons, 'data-sort', currentSort);
            updateDisplay();
        });
    });

    // Public API - expose only init method
    return {
        init: () => {
            updateDisplay();
        }
    };
})();

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', RecipeApp.init);