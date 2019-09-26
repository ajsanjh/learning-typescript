namespace MyMath2 {
    const PI = 3.14;
    export function calculateCircumfrence2(diameter: number) {
        return diameter*PI;
    }
    export function calculateArea2(radius: number) {   // export will make it available ouside the namespace.
        return PI*radius*radius;
    }
}