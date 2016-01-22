---
layout: index
---

### Supported API Versions

**1.0.0**, 0.95

### Getting Started

The best way to use TinCanJava at the moment is to clone the GitHub repository and then build an artifact via Maven. We hope to make it available via a central Maven repository soon.

### Basic Usage

The following sample shows the most basic usage of TinCanJava, sending a simple statement.

```java
import com.rusticisoftware.tincan;

RemoteLRS lrs = new RemoteLRS();

lrs.setEndpoint("https://cloud.scorm.com/tc/public/");
lrs.setVersion(TCAPIVersion.V100);
lrs.setUsername("<Test User>");
lrs.setPassword("<Test User's Password>");

Agent agent = new Agent();
agent.setMbox("mailto:info@tincanapi.com");

Verb verb = new Verb("http://adlnet.gov/expapi/verbs/attempted");

Activity activity = new Activity("http://rusticisoftware.github.com/TinCanJava");

Statement st = new Statement();
st.setActor(agent);
st.setVerb(verb);
st.setObject(activity);

lrs.saveStatement(st);

```

### Query to Get Latest Statements

(Given a configured `lrs` object like above.)

```java
import org.joda.time.DateTime;
import com.rusticisoftware.tincan.v10x.StatementsQuery;

StatementsQuery query = new StatementsQuery();
query.setSince(new DateTime("2013-09-30T13:15:00.000Z"));

StatementsResult result = obj.queryStatements(query);
```
