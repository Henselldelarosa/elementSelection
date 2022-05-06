const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements

    let seed = document.getElementsByClassName("seed")
    console.log(seed)

    // 2. Get all seedless fruit elements

    let seedless = document.getElementsByClassName("seedless")
    console.log(seedless)
    // 3. Get first seedless fruit element

    let firstSeed = document.getElementsByClassName("seedless")[0]

    console.log(firstSeed)
    /* Section 2 */
    // 4. Get inner span with text "you"

    let innerSpan = document.getElementsByTagName("span")
    console.log(innerSpan)
    // 5. Get all children of element "wrapper"
    let wrapperChild = document.querySelector("#wrapper")
    console.log(wrapperChild)
    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.getElementsByClassName("odd")
    console.log(odd)

    // 7. Get all even number list items in the list
    // Your code here
    const even = document.querySelector("ol" !== ".odd")
    console.log(even)
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here

    // 9. Get "Amazon" list element
    // Your code here

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
}

window.onload = select;
