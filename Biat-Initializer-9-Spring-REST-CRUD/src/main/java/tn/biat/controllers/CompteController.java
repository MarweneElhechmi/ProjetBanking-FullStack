package tn.biat.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.biat.entities.Compte;
import tn.biat.repository.ICompteRepository;

@RestController
@RequestMapping("/biat")
@CrossOrigin("*")
public class CompteController {

    //	@Autowired
    private ICompteRepository repoCompte;

    //@Autowired n'est plus nécessaire depuis la v4.3
    public CompteController(ICompteRepository repoCompte) {
        this.repoCompte = repoCompte;
    }

    //	 @RequestMapping(path="/comptes",method=RequestMethod.GET)
//	 @GetMapping(path="/comptes",produces=MediaType.APPLICATION_XML_VALUE)
    @GetMapping(path = "/comptes")
    public List<Compte> getAllComptes() {
        return repoCompte.findAll();
    }

    @GetMapping(path = "/comptes/{id}")
    public ResponseEntity<Compte> getCompteById(@PathVariable(value = "id") String myId) {
        Optional<Compte> compte = repoCompte.findById(myId);
        if (!compte.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().body(compte.get());
    }

    @PostMapping(path = "/saveCompte")
    public ResponseEntity<Compte> addCompte(@RequestBody Compte c) {
        repoCompte.save(c);
        return new ResponseEntity<Compte>(c, HttpStatus.CREATED);
    }

    @PutMapping(path = "/updateCompte")
    public ResponseEntity<Compte> updateCompte(@RequestBody Compte c) {
        repoCompte.saveAndFlush(c);
        return new ResponseEntity<Compte>(c, HttpStatus.ACCEPTED);
    }

    @DeleteMapping(path = "/deleteCompte/{id}")
    public ResponseEntity<Compte> deleteCompteById(@PathVariable(value = "id") String myId) {
        Optional<Compte> compte = repoCompte.findById(myId);
        if (!compte.isPresent()) {
            return ResponseEntity.notFound().build();
        } else {
            repoCompte.deleteById(myId);
            return new ResponseEntity<Compte>(HttpStatus.ACCEPTED);
        }

    }

}
