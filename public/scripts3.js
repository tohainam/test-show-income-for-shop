let data = [];
let filteredData = [];

const showDataDOM = document.getElementById("show-data");
const loaderDOM = document.getElementById("loader");
const searchInputDOM = document.getElementById("search-input");

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
};

const render = () => {
  if (showDataDOM) {
    showDataDOM.innerHTML = `
              <div class="row">
                  ${filteredData
                    .map(
                      (item, index) => `
                      <div class="col-12 col-md-6 col-lg-6 col-xl-3">
                          <table class="table table-striped table-bordered">
                              <thead>
                                  <tr>
                                      <th class="bg-primary text-white text-center" style="width: 100px">Số đoàn</th>
                                      <th class="bg-primary text-white text-center" style="width: 150px">Biển số</th>
                                      <th class="bg-primary text-white text-end">Doanh thu</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  ${item
                                    .map(
                                      (dataItem) => `
                                      <tr>
                                          <td class="text-center">${
                                            dataItem.number
                                          }</td>
                                          <td class="text-center">${
                                            dataItem.licensePlate
                                          }</td>
                                          <td class="fw-bold text-success text-end">${formatVND_CommaSeparator_Parts(
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
  } else {
    console.error("showDataDOM not found");
  }
};

const loadData = () => {
  if (loaderDOM) {
    loaderDOM.classList.remove("d-none");
    loaderDOM.classList.add("d-flex");
  } else {
    console.error("loaderDOM not found");
  }

  setTimeout(() => {
    data = [
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
      ],
    ];

    if (searchInputDOM.value) {
      filteredData = data.map((item) => {
        return item.filter((i) => {
          if (
            i.licensePlate.toLowerCase().includes(searchInputDOM.value.toLowerCase()) ||
            i.number.toString().toLowerCase().includes(searchInputDOM.value.toLowerCase())
          ) {
            return true;
          }
        });
      });
    } else {
      filteredData = data;
    }

    render();

    if (loaderDOM) {
      loaderDOM.classList.remove("d-flex");
      loaderDOM.classList.add("d-none");
    } else {
      console.error("loaderDOM not found");
    }
  }, 1000);
};

const main = () => {
  loadData();

  setInterval(() => {
    loadData();
  }, 60000);
};

main();

searchInputDOM.addEventListener("input", (e) => {
  const value = e.target.value;

  if (value) {
    filteredData = data.map((item) => {
      return item.filter((i) => {
        if (
          i.licensePlate.toLowerCase().includes(value.toLowerCase()) ||
          i.number.toString().toLowerCase().includes(value.toLowerCase())
        ) {
          return true;
        }
      });
    });

    console.log(filteredData);
  } else {
    filteredData = data;
  }

  render();
});
