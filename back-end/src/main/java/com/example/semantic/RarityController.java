package com.example.semantic;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.*;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.query.QuerySolution;
import com.hp.hpl.jena.rdf.model.RDFNode;
import java.nio.charset.Charset;
import java.util.ArrayList;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;
import org.springframework.http.ResponseEntity;
import org.springframework.http.*;

@RestController
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
@RequestMapping("/hearthstone")
public class RarityController {
    public ArrayList<String> ListNames = new ArrayList<String>(); //

    @GetMapping("/rarity")
    public ResponseEntity<Map<String, Object>> getStrat() {
        HashSet<String> ListComponent = new HashSet<String>(); // for name list
        ArrayList<String> heroList = new ArrayList<String>(); // for name list
        try {
            // OntModel model = OpenOWL.OpenConnectOWL();

            System.out.println("Get Rarity");
            String queryString;
            queryString = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"
                +"PREFIX owl: <http://www.w3.org/2002/07/owl#>"
                +"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"
                +"PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>"
                +"PREFIX hs: <http://www.semanticweb.org/asus/ontologies/2019/1/untitled-ontology-18#>"
                +"SELECT DISTINCT (str(?rarity) as ?Rarity)"
                +"WHERE {?x rdf:type hs:Rarity."
                +" ?x rdfs:label ?rarity."
                +"}";
                System.out.println(queryString);

            com.hp.hpl.jena.query.ResultSet results = OpenOWL.ExecSparQl(queryString);
            
            
            while (results.hasNext()) {
                
                QuerySolution soln = results.nextSolution();
                String Card = soln.getLiteral("Rarity").getString();
                // test --
                System.out.println("Rarity " + Card.toString());
                ListComponent.add(Card.toString());

                RDFNode x = soln.get("Propertyval");

                String xx = String.valueOf(x);

                java.nio.ByteBuffer xxx = Charset.forName("UTF-8").encode(xx);

                String xs = xxx.toString();
                System.out.println(xs);

            }
            Map<String, Object> json = new HashMap<String, Object>();
            json.put("message", "found data");
            json.put("data", ListComponent);
            // json.put("data", ListNames);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json; charset=UTF-8");
            return (new ResponseEntity<Map<String, Object>>(json, headers, HttpStatus.OK));
            // ComponentList.removeAllItems(); // combobox nameList
            // for (int i = 0; i < ListComponent.size(); i++) {
            // // System.out.println(ListComponent.get(i));
            // }
        } catch (Exception ex) {
            Map<String, Object> json = new HashMap<String, Object>();
            json.put("message", "error");
            json.put("error", ex);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json; charset=UTF-8");
            return (new ResponseEntity<Map<String, Object>>(json, headers, HttpStatus.NOT_FOUND));
            // ex.printStackTrace();
        }
        // return "test1";
    }

    @GetMapping("/rarity/new/{name}")
    public ResponseEntity<Map<String, Object>> postRare(@PathVariable String name) {
        HashSet<String> ListComponent = new HashSet<String>(); // for name list
        ArrayList<String> heroList = new ArrayList<String>(); // for name list
        try {
            // OntModel model = OpenOWL.OpenConnectOWL();

            System.out.println("Get Card");
            String queryString;
            queryString = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"
                +"PREFIX owl: <http://www.w3.org/2002/07/owl#>"
                +"PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"
                +"PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>"
                +"PREFIX hs: <http://www.semanticweb.org/asus/ontologies/2019/1/untitled-ontology-18#>"
                +"SELECT (str(?card) as ?Card) (str(?hero) as ?Hero)"
                +"WHERE {{?x hs:hasRarity ?y."
                +"?x rdfs:seeAlso ?card."
                +"?y rdfs:label ?hero.}"
                +"FILTER regex(?hero, \""+name+"\")"
                +"}";
                System.out.println(queryString);

            com.hp.hpl.jena.query.ResultSet results = OpenOWL.ExecSparQl(queryString);
            
            
            while (results.hasNext()) {
                
                QuerySolution soln = results.nextSolution();
                String Card = soln.getLiteral("Card").getString();
                String Hero = soln.getLiteral("Hero").getString();
                // test --
                System.out.println("Hero " + Card.toString());
                ListComponent.add(Card.toString()); //duplicate add ListComponent
                heroList.add(Hero.toString());
                RDFNode x = soln.get("Propertyval");

                String xx = String.valueOf(x);

                java.nio.ByteBuffer xxx = Charset.forName("UTF-8").encode(xx);

                String xs = xxx.toString();
                System.out.println(xs);

            }
            Map<String, Object> json = new HashMap<String, Object>();
            // ComponentList.removeAllItems(); // combobox nameList
            // for (int i = 0; i < ListComponent.size(); i++) {
            //   System.out.println(ListComponent.get(i));
            // }
            json.put("message", "found data");
            json.put("Card", ListComponent);
            json.put("Hero", heroList);
            // json.put("data", ListNames);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json; charset=UTF-8");
            return (new ResponseEntity<Map<String, Object>>(json, headers, HttpStatus.OK));
            
        } catch (Exception ex) {
            Map<String, Object> json = new HashMap<String, Object>();
            json.put("message", "error");
            json.put("error", ex);
            HttpHeaders headers = new HttpHeaders();
            headers.add("Content-Type", "application/json; charset=UTF-8");
            return (new ResponseEntity<Map<String, Object>>(json, headers, HttpStatus.NOT_FOUND));
            // ex.printStackTrace();
        }
        // return "test1";
    }
}