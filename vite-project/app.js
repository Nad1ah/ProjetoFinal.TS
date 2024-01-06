//1. peguei os dados da pagina HTML, com o querySelector e fiz uma const para cada.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var searchBr = document.querySelector("#searchId");
var postsBody = document.querySelector("#postsContainer");
var dateTime = document.querySelector("#date-time");
var newPost = document.querySelector("#postForm");
var titulo = document.querySelector("#titulo");
var conteudo = document.querySelector("#conteudo");
var postElement = document.createElement("div");
//2. criei as const para fazer fetch dos dados.
var usersPage = "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/users.json";
var postsPage = "https://jmrfrosa.github.io/edit-jsts-dec2023.github.io/data/posts.json";
//4. criei a função para receber usuarios e posts.
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, users, posts, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Promise.all([getUsers(), getPosts()])];
                case 1:
                    _a = _b.sent(), users = _a[0], posts = _a[1];
                    console.log("Users:", users);
                    console.log("Posts:", posts);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.log("error", error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
getData();
function getUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(usersPage)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(postsPage)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//5. começei a criar a função para pesquisa, mas ao chegar no return me perdi.
var elements = Array.from(document.querySelectorAll("#searchId"));
var filteredElements = elements.filter(function (element) {
    return element.classList.contains("string");
});
//6. criei a função para novo post.
function createPost(title, body, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, newPost;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(postsPage, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            userId: userId,
                            title: title,
                            body: body,
                        }),
                    })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Failed to create post");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    newPost = _a.sent();
                    return [2 /*return*/, newPost];
            }
        });
    });
}
function criarPost() {
    return __awaiter(this, void 0, void 0, function () {
        var tituloInput, conteudoInput, usuarioId, newPost, form;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tituloInput = document.querySelector("#titulo");
                    conteudoInput = document.querySelector("#conteudo");
                    usuarioId = usersPage;
                    return [4 /*yield*/, createPost(tituloInput.value, conteudoInput.value, usuarioId)];
                case 1:
                    newPost = _a.sent();
                    form = document.querySelector("#postForm");
                    form.addEventListener("submit", function (event) {
                        event.preventDefault();
                        criarPost();
                        form.reset();
                    });
                    return [2 /*return*/];
            }
        });
    });
}
