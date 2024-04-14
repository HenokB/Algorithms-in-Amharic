import{_ as t,c as o,o as e,a3 as a}from"./chunks/framework.Dh2eLG0n.js";const g=JSON.parse('{"title":"የመደርደር አልጎሪዝም/Sorting algorithms","description":"","frontmatter":{},"headers":[],"relativePath":"docs/3-Sorting/index.md","filePath":"docs/3-Sorting/index.md"}'),r={name:"docs/3-Sorting/index.md"},n=a('<h1 id="የመደርደር-አልጎሪዝም-sorting-algorithms" tabindex="-1">የመደርደር አልጎሪዝም/Sorting algorithms <a class="header-anchor" href="#የመደርደር-አልጎሪዝም-sorting-algorithms" aria-label="Permalink to &quot;የመደርደር አልጎሪዝም/Sorting algorithms&quot;">​</a></h1><p>የመደርደር አልጎሪዝም በarray ላይ ባለው የንፅፅር ኦፕሬተር መሠረት የተሰጠውን ድርድር ወይም የarray ዝርዝር ለማስተካከል ይጠቅማሉ። የንፅፅር ኦፕሬተር(comparison operator) በመረጃ አወቃቀሩ ውስጥ ያለውን አዲሱን የelements ቅደም ተከተል ለመወሰን ይጠቅማል።</p><h2 id="አንዳንድ-በጣም-ታዋቂ-የመደርደር-ስልተ-ቀመሮች-እነኚሁና።" tabindex="-1">አንዳንድ በጣም ታዋቂ የመደርደር ስልተ ቀመሮች እነኚሁና። <a class="header-anchor" href="#አንዳንድ-በጣም-ታዋቂ-የመደርደር-ስልተ-ቀመሮች-እነኚሁና።" aria-label="Permalink to &quot;አንዳንድ በጣም ታዋቂ የመደርደር ስልተ ቀመሮች እነኚሁና።&quot;">​</a></h2><p>selection/ምርጫ ደርድር፡- ይህ አልጎሪዝም ዝቅተኛውን ክፍል ካልተደረደረው ክፍል ደጋግሞ በማግኘት እና መጀመሪያ ላይ በማስቀመጥ ድርድርን ይመድባል። የO(n^2) የጊዜ ውስብስብነት/time complexity አለው።</p><p>Bubble sort- ይህ አልጎሪዝም በተሳሳቱ ቅደም ተከተሎች ውስጥ ከሆኑ ተጓዳኝ አባሎችን ደጋግሞ ይቀያይራል። የO(n^2) የጊዜ ውስብስብነት አለው።</p><p>የማስገባት ደርድር፡- ይህ አልጎሪዝም የመጨረሻውን የተደረደሩትን አንድ ንጥል በአንድ ጊዜ ይገነባል። የO(n^2) የጊዜ ውስብስብነት አለው።</p><p>Merge sort/ውህደት ደርድር፡- ይህ አልጎሪዝም የግቤት ድርድርን በሁለት ሃላፍ ይከፍላል፣ እራሱን ለሁለት ግማሾችን ይጠራል እና ሁለቱን የተደረደሩትን ግማሾችን ያዋህዳል። የ O(n log n) የጊዜ ውስብስብነት አለው።</p><p>quick/ፈጣን ደርድር፡- ይህ አልጎሪዝም አንድን አካል እንደ ምሶሶ ይመርጣል እና የተሰጠውን ድርድር በተመረጠው ምሰሶ ዙሪያ ይከፍላል። የ O(n log n) የጊዜ ውስብስብነት አለው።</p><p>Heap sort- ይህ አልጎሪዝም በሁለትዮሽ ሂፕ ዳታ መዋቅር ላይ የተመሰረተ ነው። የ O(n log n) የጊዜ ውስብስብነት አለው።</p><p>Counting sort- ይህ አልጎሪዝም የሚሠራው የተለየ ቁልፍ እሴቶች ያላቸውን ነገሮች በመቁጠር ነው (የሃሽ ዓይነት)። k የግቤት ክልል የሆነበት O(n+k) የጊዜ ውስብስብነት አለው።</p><p>ራዲክስ ደርድር፡- ይህ አልጎሪዝም ተመሳሳይ ጉልህ ቦታ እና እሴት በሚጋሩ ግለሰባዊ አሃዞች ቁልፎችን በመቧደን መረጃን በኢንቲጀር ቁልፎች ይለያል። የ O(d*(n+k)) የጊዜ ውስብስብነት ያለው ሲሆን d በግቤት ኢንቲጀር ውስጥ ያሉት አሃዞች ብዛት ነው።</p>',11),i=[n];function s(p,c,l,d,_,h){return e(),o("div",null,i)}const u=t(r,[["render",s]]);export{g as __pageData,u as default};