function bblSort(arr, choice) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (choice === "up" && arr[j] > arr[j + 1]) {
                // Сортування за зростанням
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else if (choice === "down" && arr[j] < arr[j + 1]) {
                // Сортування за спаданням
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

// Запит типу сортування
let choice = prompt("Введіть 'up' для сортування за зростанням або 'down' для сортування за спаданням:").toLowerCase();

let arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Виконання сортування
bblSort(arr, choice);
