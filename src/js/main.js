const loadComponents = async (id, file) => {
  const response = await fetch(`src/components/${file}`);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
};

loadComponents("header", "header.html");
loadComponents("hero", "hero.html");
loadComponents("benefit", "benefit.html");
loadComponents("value-1", "value-1.html");
loadComponents("value-2", "value-2.html");
loadComponents("feature", "feature.html");
loadComponents("functions", "functions.html");
loadComponents("plans", "plans.html");
loadComponents("tutorial", "tutorial.html");
loadComponents("contact", "contact.html");
loadComponents("footer", "footer.html");
