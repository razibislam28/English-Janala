const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //   promise of response
    .then((res) => res.json()) // promise of json data
    .then((json) => displayLessons(json.data));
};
const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    wordContainer.innerHTML = ` <div class="text-center bg-sky-100 col-span-full rouended-xl py-10 space-y-6 font-bangla">
    <img class="mx-auto" src="../assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h class="font-bold text-4xl">রুন।নেক্সট Lesson এ যান</h 2>
      </div>`;
    return;
  }
  words.forEach((word) => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `      <div
        class="bg-whit rounded-xl shadow-sm text-center py-20 px-5 space-y-4"
      >
        <h2 class="text-2xl font-bold">${
          word.word ? word.word : "শব্দটি খুঁজে পাওয়া যাচ্ছে না।"
        }</h2>
        <p class="font-semibold">Meanig /Pronounciation</p>
        <div class="font-medium text-2xl font-bangla">"${
          word.meaning ? word.meaning : "অর্থ খুঁজে পাওয়া যাচ্ছে না "
        } / ${
      word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যাচ্ছে না"
    }"</div>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>`;
    wordContainer.append(card);
  });
};

const displayLessons = (lessons) => {
  //   1.get the container & empty
  const leveConatiner = document.getElementById("level-container");
  leveConatiner.innerHTML = "";
  //   2.get into every lesson
  lessons.forEach((lesson) => {
    //   3.create element
    console.log(lesson);
    const btnDiv = document.createElement("div");

    btnDiv.innerHTML = `<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary "
                ><i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}</button>`;
    //   4.append into the container
    leveConatiner.appendChild(btnDiv);
  });
};
loadLessons();
