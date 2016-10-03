public interface IPm {
    void dertdinle(String dert);
    void isiste(String yenis);
}

public class PmKalem {
    private IPm pm;
    public PmKalem()
    {
        pm=new VekilPM();
    }
    
    public IPm BenirealileGorustur()
    {
    System.out.print("tabi");
    return pm;
    }
}
public class RealPM implements IPm {

    @Override
    public void dertdinle(String dert) {
System.out.print("real pm dinledi");
    }

    @Override
    public void isiste(String yenis) {
System.out.print("is miş yok");
    }

  
    
}
public class User {
    
    private IPm pm;
    
    public User(PmKalem kalempm)
    { pm=kalempm.BenirealileGorustur();
    }
    public String derdim()
    {
        pm.dertdinle("benim dersim user");
    return " soyledim ";
    }
    public String isolsa()
    {
        pm.isiste("bir is bize o");
        return  " anlattım mı isi";
    }
    
    
    
}
public class VekilPM implements IPm {

    private IPm pm=new RealPM();
            
    @Override
    public void dertdinle(String dert) {
        
        pm.dertdinle("derimi anlattım mı"+dert);

    }

    @Override
    public void isiste(String yenis) {
        System.out.print("VEKİL DİNLEDİ"+yenis);
     }
    
}

