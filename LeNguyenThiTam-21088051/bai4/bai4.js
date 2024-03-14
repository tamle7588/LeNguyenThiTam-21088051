function check() {
    var weight = parseFloat(document.getElementById("cannang").value);
    var height = parseFloat(document.getElementById("chieucao").value);
    var ageType = document.getElementById("loaituoi").value;

    // Tính chỉ số BMI
    var bmi = weight / (height * height);

    // Phân loại BMI và khuyến nghị
    var category;
    var recommendation;

    if (bmi < 18.5) {
        category = "Dưới chuẩn";
        recommendation = "Khuyến nghị tăng cân nếu cần thiết.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Bình thường";
        recommendation = "Tiếp tục duy trì chế độ dinh dưỡng và tập luyện hợp lý.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Thừa cân";
        recommendation = "Khuyến nghị thực hiện các biện pháp giảm cân, bao gồm chế độ dinh dưỡng và tập luyện.";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "Béo phì cấp độ I";
        recommendation = ageType === "truongthanh" ? "Khuyến nghị khám định kì." : "Khuyến nghị tập thể dục thường xuyên.";
    } else if (bmi >= 35 && bmi <= 39.9) {
        category = "Béo phì cấp độ II";
        recommendation = ageType !== "gia-lontuoi" ? "Khuyến nghị tập thể dục thường xuyên." : "Khuyến nghị hạn chế ăn mỡ động vật.";
    } else {
        category = "Béo phì cấp độ III";
        recommendation = "Khuyến nghị hạn chế ăn mỡ động vật.";
    }

    // Hiển thị kết quả
    document.getElementById("bmi-value").innerText = "Chỉ số BMI của bạn là: " + bmi.toFixed(1);
    document.getElementById("bmi-category").innerText = category + ". " + recommendation;
}
