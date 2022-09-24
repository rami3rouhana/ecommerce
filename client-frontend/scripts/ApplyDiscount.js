export const ApplyDiscount = () => {
    document.getElementById("apply-discount").addEventListener("click", () => {
        console.log(document.getElementById("discount-code").value);
    })
}