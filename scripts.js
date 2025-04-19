const data = [
  [
    { number: 1, licensePlate: "17B-25255", revenue: 543436323 },
    { number: 2, licensePlate: "17B-25256", revenue: 543436324 },
    { number: 3, licensePlate: "17B-25257", revenue: 543436325 },
    { number: 4, licensePlate: "17B-25258", revenue: 543436326 },
    { number: 5, licensePlate: "17B-25259", revenue: 543436327 },
    { number: 6, licensePlate: "17B-25260", revenue: 543436328 },
    { number: 7, licensePlate: "17B-25261", revenue: 543436329 },
    { number: 8, licensePlate: "17B-25262", revenue: 543436330 },
    { number: 9, licensePlate: "17B-25263", revenue: 543436331 },
    { number: 10, licensePlate: "17B-25264", revenue: 543436332 },
    { number: 11, licensePlate: "17B-25265", revenue: 543436333 },
    { number: 12, licensePlate: "17B-25266", revenue: 543436334 },
    { number: 13, licensePlate: "17B-25267", revenue: 543436335 },
    { number: 14, licensePlate: "17B-25268", revenue: 543436336 },
    { number: 15, licensePlate: "17B-25269", revenue: 543436337 },
    { number: 16, licensePlate: "17B-25270", revenue: 543436338 },
    { number: 17, licensePlate: "17B-25271", revenue: 543436339 },
    { number: 18, licensePlate: "17B-25272", revenue: 543436340 },
    { number: 19, licensePlate: "17B-25273", revenue: 543436341 },
    { number: 20, licensePlate: "17B-25274", revenue: 543436342 },
    { number: 21, licensePlate: "17B-25275", revenue: 543436343 },
    { number: 22, licensePlate: "17B-25276", revenue: 543436344 },
    { number: 23, licensePlate: "17B-25277", revenue: 543436345 },
    { number: 24, licensePlate: "17B-25278", revenue: 543436346 },
    { number: 25, licensePlate: "17B-25279", revenue: 543436347 },
    { number: 26, licensePlate: "17B-25280", revenue: 543436348 },
    { number: 27, licensePlate: "17B-25281", revenue: 543436349 },
    { number: 28, licensePlate: "17B-25282", revenue: 543436350 },
    { number: 29, licensePlate: "17B-25283", revenue: 543436351 },
    { number: 30, licensePlate: "17B-25284", revenue: 543436352 },
    { number: 31, licensePlate: "17B-25285", revenue: 543436353 },
    { number: 32, licensePlate: "17B-25286", revenue: 543436354 },
    { number: 33, licensePlate: "17B-25287", revenue: 543436355 },
    { number: 34, licensePlate: "17B-25288", revenue: 543436356 },
    { number: 35, licensePlate: "17B-25289", revenue: 543436357 },
    { number: 36, licensePlate: "17B-25290", revenue: 543436358 },
    { number: 37, licensePlate: "17B-25291", revenue: 543436359 },
    { number: 38, licensePlate: "17B-25292", revenue: 543436360 },
    { number: 39, licensePlate: "17B-25293", revenue: 543436361 },
    { number: 40, licensePlate: "17B-25294", revenue: 543436362 },
    { number: 41, licensePlate: "17B-25295", revenue: 543436363 },
    { number: 42, licensePlate: "17B-25296", revenue: 543436364 },
    { number: 43, licensePlate: "17B-25297", revenue: 543436365 },
    { number: 44, licensePlate: "17B-25298", revenue: 543436366 },
    { number: 45, licensePlate: "17B-25299", revenue: 543436367 },
    { number: 46, licensePlate: "17B-25300", revenue: 543436368 },
    { number: 47, licensePlate: "17B-25301", revenue: 543436369 },
    { number: 48, licensePlate: "17B-25302", revenue: 543436370 },
    { number: 49, licensePlate: "17B-25303", revenue: 543436371 },
    { number: 50, licensePlate: "17B-25304", revenue: 543436372 },
  ],
  [
    { number: 1, licensePlate: "17B-25255", revenue: 543436323 },
    { number: 2, licensePlate: "17B-25256", revenue: 543436324 },
    { number: 3, licensePlate: "17B-25257", revenue: 543436325 },
    { number: 4, licensePlate: "17B-25258", revenue: 543436326 },
    { number: 5, licensePlate: "17B-25259", revenue: 543436327 },
    { number: 6, licensePlate: "17B-25260", revenue: 543436328 },
    { number: 7, licensePlate: "17B-25261", revenue: 543436329 },
    { number: 8, licensePlate: "17B-25262", revenue: 543436330 },
    { number: 9, licensePlate: "17B-25263", revenue: 543436331 },
    { number: 10, licensePlate: "17B-25264", revenue: 543436332 },
    { number: 11, licensePlate: "17B-25265", revenue: 543436333 },
    { number: 12, licensePlate: "17B-25266", revenue: 543436334 },
    { number: 13, licensePlate: "17B-25267", revenue: 543436335 },
    { number: 14, licensePlate: "17B-25268", revenue: 543436336 },
    { number: 15, licensePlate: "17B-25269", revenue: 543436337 },
    { number: 16, licensePlate: "17B-25270", revenue: 543436338 },
    { number: 17, licensePlate: "17B-25271", revenue: 543436339 },
    { number: 18, licensePlate: "17B-25272", revenue: 543436340 },
    { number: 19, licensePlate: "17B-25273", revenue: 543436341 },
    { number: 20, licensePlate: "17B-25274", revenue: 543436342 },
    { number: 21, licensePlate: "17B-25275", revenue: 543436343 },
    { number: 22, licensePlate: "17B-25276", revenue: 543436344 },
    { number: 23, licensePlate: "17B-25277", revenue: 543436345 },
    { number: 24, licensePlate: "17B-25278", revenue: 543436346 },
    { number: 25, licensePlate: "17B-25279", revenue: 543436347 },
    { number: 26, licensePlate: "17B-25280", revenue: 543436348 },
    { number: 27, licensePlate: "17B-25281", revenue: 543436349 },
    { number: 28, licensePlate: "17B-25282", revenue: 543436350 },
    { number: 29, licensePlate: "17B-25283", revenue: 543436351 },
    { number: 30, licensePlate: "17B-25284", revenue: 543436352 },
    { number: 31, licensePlate: "17B-25285", revenue: 543436353 },
    { number: 32, licensePlate: "17B-25286", revenue: 543436354 },
    { number: 33, licensePlate: "17B-25287", revenue: 543436355 },
    { number: 34, licensePlate: "17B-25288", revenue: 543436356 },
    { number: 35, licensePlate: "17B-25289", revenue: 543436357 },
    { number: 36, licensePlate: "17B-25290", revenue: 543436358 },
    { number: 37, licensePlate: "17B-25291", revenue: 543436359 },
    { number: 38, licensePlate: "17B-25292", revenue: 543436360 },
    { number: 39, licensePlate: "17B-25293", revenue: 543436361 },
    { number: 40, licensePlate: "17B-25294", revenue: 543436362 },
    { number: 41, licensePlate: "17B-25295", revenue: 543436363 },
    { number: 42, licensePlate: "17B-25296", revenue: 543436364 },
    { number: 43, licensePlate: "17B-25297", revenue: 543436365 },
    { number: 44, licensePlate: "17B-25298", revenue: 543436366 },
    { number: 45, licensePlate: "17B-25299", revenue: 543436367 },
    { number: 46, licensePlate: "17B-25300", revenue: 543436368 },
    { number: 47, licensePlate: "17B-25301", revenue: 543436369 },
    { number: 48, licensePlate: "17B-25302", revenue: 543436370 },
    { number: 49, licensePlate: "17B-25303", revenue: 543436371 },
    { number: 50, licensePlate: "17B-25304", revenue: 543436372 },
  ],
  [
    { number: 1, licensePlate: "17B-25255", revenue: 543436323 },
    { number: 2, licensePlate: "17B-25256", revenue: 543436324 },
    { number: 3, licensePlate: "17B-25257", revenue: 543436325 },
    { number: 4, licensePlate: "17B-25258", revenue: 543436326 },
    { number: 5, licensePlate: "17B-25259", revenue: 543436327 },
    { number: 6, licensePlate: "17B-25260", revenue: 543436328 },
    { number: 7, licensePlate: "17B-25261", revenue: 543436329 },
    { number: 8, licensePlate: "17B-25262", revenue: 543436330 },
    { number: 9, licensePlate: "17B-25263", revenue: 543436331 },
    { number: 10, licensePlate: "17B-25264", revenue: 543436332 },
    { number: 11, licensePlate: "17B-25265", revenue: 543436333 },
    { number: 12, licensePlate: "17B-25266", revenue: 543436334 },
    { number: 13, licensePlate: "17B-25267", revenue: 543436335 },
    { number: 14, licensePlate: "17B-25268", revenue: 543436336 },
    { number: 15, licensePlate: "17B-25269", revenue: 543436337 },
    { number: 16, licensePlate: "17B-25270", revenue: 543436338 },
    { number: 17, licensePlate: "17B-25271", revenue: 543436339 },
    { number: 18, licensePlate: "17B-25272", revenue: 543436340 },
    { number: 19, licensePlate: "17B-25273", revenue: 543436341 },
    { number: 20, licensePlate: "17B-25274", revenue: 543436342 },
    { number: 21, licensePlate: "17B-25275", revenue: 543436343 },
    { number: 22, licensePlate: "17B-25276", revenue: 543436344 },
    { number: 23, licensePlate: "17B-25277", revenue: 543436345 },
    { number: 24, licensePlate: "17B-25278", revenue: 543436346 },
    { number: 25, licensePlate: "17B-25279", revenue: 543436347 },
    { number: 26, licensePlate: "17B-25280", revenue: 543436348 },
    { number: 27, licensePlate: "17B-25281", revenue: 543436349 },
    { number: 28, licensePlate: "17B-25282", revenue: 543436350 },
    { number: 29, licensePlate: "17B-25283", revenue: 543436351 },
    { number: 30, licensePlate: "17B-25284", revenue: 543436352 },
    { number: 31, licensePlate: "17B-25285", revenue: 543436353 },
    { number: 32, licensePlate: "17B-25286", revenue: 543436354 },
    { number: 33, licensePlate: "17B-25287", revenue: 543436355 },
    { number: 34, licensePlate: "17B-25288", revenue: 543436356 },
    { number: 35, licensePlate: "17B-25289", revenue: 543436357 },
    { number: 36, licensePlate: "17B-25290", revenue: 543436358 },
    { number: 37, licensePlate: "17B-25291", revenue: 543436359 },
    { number: 38, licensePlate: "17B-25292", revenue: 543436360 },
    { number: 39, licensePlate: "17B-25293", revenue: 543436361 },
    { number: 40, licensePlate: "17B-25294", revenue: 543436362 },
    { number: 41, licensePlate: "17B-25295", revenue: 543436363 },
    { number: 42, licensePlate: "17B-25296", revenue: 543436364 },
    { number: 43, licensePlate: "17B-25297", revenue: 543436365 },
    { number: 44, licensePlate: "17B-25298", revenue: 543436366 },
    { number: 45, licensePlate: "17B-25299", revenue: 543436367 },
    { number: 46, licensePlate: "17B-25300", revenue: 543436368 },
    { number: 47, licensePlate: "17B-25301", revenue: 543436369 },
    { number: 48, licensePlate: "17B-25302", revenue: 543436370 },
    { number: 49, licensePlate: "17B-25303", revenue: 543436371 },
    { number: 50, licensePlate: "17B-25304", revenue: 543436372 },
  ],
];

const showDataDOM = document.getElementById("show-data");

const tableTemplate = `
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Số đoàn</th>
                <th>Biển số</th>
                <th>Doanh thu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>17B-3245</td>
                <td>1,204,324</td>
            </tr>
        </tbody>
    </table>
`;

const dataTemplate = `
    <div class="col">
        Column
    </div>
`;

const vndFormatterParts = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatVND_CommaSeparator_Parts = (amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return "Giá trị không hợp lệ";
  }

  const parts = vndFormatterParts.formatToParts(amount);
  let result = "";

  for (const part of parts) {
    // Xác định loại của thành phần
    switch (part.type) {
      case "currency": // Ký hiệu tiền tệ (₫)
      case "literal": // Khoảng trắng giữa số và ký hiệu
      case "integer": // Phần số nguyên
        result += part.value;
        break;
      case "group": // Dấu phân cách hàng nghìn (chuẩn là '.')
        result += ","; // Thay thế bằng dấu phẩy
        break;
      case "decimal": // Dấu thập phân (chuẩn vi-VN là ',') - sẽ không xuất hiện vì fractionDigits = 0
      case "fraction": // Phần thập phân - sẽ không xuất hiện vì fractionDigits = 0
        // Thêm logic xử lý nếu bạn cho phép số lẻ và muốn thay đổi cả dấu thập phân
        result += part.value;
        break;
      default:
        result += part.value;
    }
  }
  return result;
}

if (showDataDOM) {
  showDataDOM.innerHTML = `
        <div class="row">
            ${data
              .map(
                (item, index) => `
                <div class="col">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Số đoàn</th>
                                <th>Biển số</th>
                                <th>Doanh thu</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${item
                              .map(
                                (dataItem) => `
                                <tr>
                                    <td>${dataItem.number}</td>
                                    <td>${dataItem.licensePlate}</td>
                                    <td>${formatVND_CommaSeparator_Parts(
                                      dataItem.revenue
                                    )}</td>
                                </tr>
                            `
                              )
                              .join("")}
                        </tbody>
                    </table>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}
